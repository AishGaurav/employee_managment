import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment.development';
import { FetchDataService } from './service/fetchData.service';
import * as lodash from 'lodash';
import { APP_CONSTANTS } from './constants/app-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly fetchDataService: FetchDataService,
  ) { }

  masterEmployeeData: any = [];
  masterEmployeeByLocation: any = [];
  masterEmployeeByTeam: any = [];
  masterEmployeeByDepartment: any = [];
  employeeData: any = [];
  totalCount = 0;

  title = 'employee-portal';
  isBangaloreEmployee = true;
  defaultLocation = 'Bangalore';
  IMAGE_PATH = environment['IMAGES_PATH'];
  APP_CONSTANTS = APP_CONSTANTS;

  selectedTeam = null;
  selectedDepartment = null;
  selectedLocation: null | string = null;
  selectedYear = null;

  isSearchMenu = false;
  ICONS = APP_CONSTANTS['ICONS_LIST'];

  ngOnInit() {
    const today = new Date();
    let currentYear = today.getFullYear();
    APP_CONSTANTS['YEARS'] = this.generateYearsBetween(2016, currentYear);
    this.getEmployees();
  }

  onNavMenuClick(menu: any) {
    if (menu && menu['navItem'] == "search") {
      this.isSearchMenu = !this.isSearchMenu;
    }
  }

  collapseSearchMenu(){
    this.isSearchMenu = false;
  }


  generateYearsBetween(startYear = 2016, endYear: number) {
    const endDate = endYear || new Date().getFullYear();
    let years = [];

    while (startYear <= endDate) {
      years.push({
        name: startYear,
        value: startYear
      });
      startYear++;
    }
    return years;
  }


  getEmployees() {
    this.fetchDataService.fetchData().subscribe(
      data => {
        this.masterEmployeeData = structuredClone(data);
        this.employeeData = structuredClone(this.masterEmployeeData);
        //this.getLocationEmployee(this.defaultLocation);
        this.getBangaloreEmployee();

        APP_CONSTANTS['LOCATIONS'] = structuredClone(this.masterEmployeeData).map(
          (element: any) => {
            element['name'] = element['currentLocation'];
            element['value'] = element['currentLocation'];
            return element;
          }
        );

        APP_CONSTANTS['LOCATIONS'] = lodash.uniqBy(APP_CONSTANTS['LOCATIONS'], 'value');
      }
    );
  }

  getBangaloreEmployee() {
    if (this.isBangaloreEmployee == true) {
      this.selectedLocation = 'Bangalore';
      let filteredData = lodash.filter(this.employeeData, { 'currentLocation': this.defaultLocation });
      this.employeeData = structuredClone(filteredData);
    }
    else if (this.isBangaloreEmployee == false) {
      this.selectedLocation = null;
      this.employeeData = structuredClone(this.masterEmployeeData);
    }
    this.totalCount = this.employeeData.length;
  }

  onTeamChange() {
    if (this.selectedTeam) {
      let filteredData = lodash.filter(this.employeeData, { 'currentTeam': this.selectedTeam });
      this.employeeData = structuredClone(filteredData);
    }
    this.totalCount = this.employeeData.length;
  }


  applyFilters() {
    if (this.selectedLocation) {
      if (this.employeeData.length == 0) {
        this.employeeData = lodash.filter(this.masterEmployeeData, { 'currentLocation': this.selectedLocation });
      }
      else {
        this.employeeData = lodash.filter(this.employeeData, { 'currentLocation': this.selectedLocation });
      }

      if (this.selectedLocation == 'Bangalore') {
        this.isBangaloreEmployee = true;
      }
      else {
        this.isBangaloreEmployee = false;
      }
    }

    if (this.selectedDepartment) {
      let filteredData = lodash.filter(this.employeeData, { 'department': this.selectedDepartment });
      this.employeeData = structuredClone(filteredData);
    }

    if (this.selectedTeam) {
      let filteredData = lodash.filter(this.employeeData, { 'currentTeam': this.selectedTeam });
      this.employeeData = structuredClone(filteredData);
    }

    if (this.selectedYear) {
      let filteredData = lodash.filter(this.employeeData, { 'yoj': Number(this.selectedYear) });
      this.employeeData = structuredClone(filteredData);
    }

    this.totalCount = this.employeeData.length;
  }


  resetFilters() {
    this.selectedTeam = null;
    this.selectedDepartment = null;
    this.selectedLocation = null;
    this.selectedYear = null;
    this.isBangaloreEmployee = true;
    this.getEmployees();
  }
}

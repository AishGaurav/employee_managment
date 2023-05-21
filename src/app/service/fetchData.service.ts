import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FetchDataService {

    DATA_PATH = 'assets/data/';

    constructor(private http: HttpClient,){}

    fetchData(){
        const filename = 'employee-list.json'
        const url = this.DATA_PATH + filename;
        return this.http.get(url);
    }

}
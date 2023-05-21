import { faClipboardList, faBell, faChevronDown, faMessage, faUser, faHistory, faFilter, faSearch, faHandsHelping, faSignOut } from '@fortawesome/free-solid-svg-icons';

export const APP_CONSTANTS = {
    NAVIGATION_LIST: [
        {
            navItem: 'overview',
            displayName: 'Overview',
            icon: faClipboardList
        },
        {
            navItem: 'messages',
            displayName: 'Messages',
            icon: faMessage
        },
        {
            navItem: 'search',
            displayName: 'Search',
            icon: faSearch
        },
        {
            navItem: 'filter',
            displayName: 'Filter',
            icon: faFilter
        },
        {
            navItem: 'history',
            displayName: 'History',
            icon: faHistory
        },
        {
            navItem: 'account',
            displayName: 'My Account',
            icon: faUser
        },
    ],

    TEAMS_LIST: [
        {
            name: 'Product Team',
            value: 'productTeam',
        },
        {
            name: 'IDC',
            value: 'IDC',
        },
        {
            name: 'OCBC',
            value: 'OCBC',
        },
        {
            name: 'Radian',
            value: 'radian',
        },
        {
            name: 'Rustify',
            value: 'rustify',
        },
    ],

    ICONS_LIST: {
        faBell: faBell,
        faChevronDown: faChevronDown,
        faHandsHelping: faHandsHelping,
        faSignOut: faSignOut
    },

    DEPARTMENTS: [
        {
            name: 'Front End Development',
            value: 'frontEnd',
        },
        {
            name: 'ML Engineering',
            value: 'mlEngg',
        },
        {
            name: 'Quality Analyst',
            value: 'qa',
        },
        {
            name: 'Human Resource Management',
            value: 'hr',
        },
        {
            name: 'Research & Developement',
            value: 'rd',
        },
    ],

    LOCATIONS: [
        {
            name: '',
            value: '',
        },
    ],

    EXPERIENCE: [
        {
            name: '5 Years above',
            value: '6',
        },
        {
            name: '5 Years',
            value: '5',
        },
        {
            name: 'Below 5 Years',
            value: '4',
        },
    ],

    YEARS: [
        {
            name: 2000,
            value: 2000,
        },
    ]
};
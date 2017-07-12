import { Injectable } from '@angular/core';

@Injectable()
export class ScheduleService {

    buttonType: any = {
        TYPE_EDIT_EXISTING: 0,
        TYPE_GENERATE_NEW: 1,
        TYPE_GENERATE_SPECIAL: 2
    };

    w_hType: any = {
        TYPE_HOLIDAY: 0,
        TYPE_WEEKLY: 1,
        TYPE_WEEKLY_NEW: 2,
    };

    scheduleDisabilty: any = {
        TYPE_ENABLED: 1,
        TYPE_DISABLED: 0,
    };

    areaType: any = {
        TYPE_NEWYORK: 1,
        TYPE_BA: 2,
    };

    stopDropOffType: any = {
        TYPE_DROPOFF: 1,
        TYPE_NONDROPOFF: 0,
    }

    groupMaxCapacity: number = 57;

    constructor() { }

    public convertMonthFormat(m) {
        let month = new Array();
        month[0] = "JANUARY";
        month[1] = "FEBRUARY";
        month[2] = "MARCH";
        month[3] = "APRIL";
        month[4] = "MAY";
        month[5] = "JUNE";
        month[6] = "JULY";
        month[7] = "AGUEST";
        month[8] = "SEPTEMBER";
        month[9] = "OCTOBER";
        month[10] = "NOVEMBER";
        month[11] = "DECEMBER";
        return month[m];
    }

    public convertDayOfWeekFormat(w) {
        let dow = new Array();
        dow[0] = "Sunday";
        dow[1] = "Monday";
        dow[2] = "Tuesday";
        dow[3] = "Wednesday";
        dow[4] = "Thursday";
        dow[5] = "Friday";
        dow[6] = "Saturday";
        return dow[w];
    }

    public convertWeekToNumber(w) {
        let dow = new Array();
        dow["Sunday"] = 0;
        dow["Monday"] = 1;
        dow["Tuesday"] = 2;
        dow["Wednesday"] = 3;
        dow["Thursday"] = 4;
        dow["Friday"] = 5;
        dow["Saturday"] = 6;
        return dow[w];
    }

    public getLatestWeeklyDate(param_dateArray) {
        let max = param_dateArray[0];

        for (let i = 0; i < Object.keys(param_dateArray).length; i++) {
            let item = param_dateArray[i];

            let ts = new Date(item).getTime();
            let ts_max = new Date(max).getTime();

            if (ts_max < ts) {
                max = item;
            }
        }

        return max;
    }

    public getCityName(w) {
        let city = new Array();
        city[1] = "New York";
        city[2] = "BETHESDA/ARLINGTON";
        return city[w];
    }

    public collectGroupIDs(infoArray) {
        let group_ids = [];

        for (let i = 0; i < Object.keys(infoArray).length; i++) {
            let item = infoArray[i];
            if (group_ids.indexOf(item['group_id']) == -1) {
                group_ids.push(item['group_id']);
            }
        }

        return group_ids;
    }

    public convertDateToUTC(param_localDate) {
        var d = new Date(param_localDate);

        var utc_month;
        let temp = d.getUTCMonth() + 1;
        if (temp < 10) {
            utc_month = "0" + temp.toString();
        } else {
            utc_month = temp.toString();
        }

        var utc_day;
        temp = d.getUTCDate();
        if (temp < 10) {
            utc_day = "0" + temp.toString();
        } else {
            utc_day = temp.toString();
        }

        var result = d.getUTCFullYear() + "-" + utc_month + "-" + d.getUTCDate();
        return result;
    }

    public getUTCDowFromLocalDate(param_localDate) {
        var d = new Date(param_localDate);
        return d.getUTCDay();
    }

    public getInfo_From_YMD_String(param_date_str) {
        var split = param_date_str.split('-');

        return {
            year: +split[0],
            month: +split[1],
            day: +split[2]
        };
    }

    // Get date as wednesday march 29 2017 format from YYYY-MM-DD format.
    public getDateAsLongFormat(param_date_str) {
        let me = this;

        if (param_date_str == undefined || param_date_str == "") return "";

        // Get Day of Week.
        let dateInfo = me.getInfo_From_YMD_String(param_date_str);

        let result = "";
        result += me.convertDayOfWeekFormat(me.getDOW(param_date_str)) + " " + me.convertMonthFormat(dateInfo['month'] - 1) + " " + dateInfo['day'] + " " + dateInfo['year'];

        return result;
    }

    // Get day of week from YYYY-MM-DD format.
    public getDOW(param_date_str) {
        let me = this;

        let dateInfo = me.getInfo_From_YMD_String(param_date_str);
        let d = new Date(dateInfo['year'], dateInfo['month'] - 1, dateInfo['day']);

        return d.getDay();
    }

    // Get default destination stop id from current area_id;

}

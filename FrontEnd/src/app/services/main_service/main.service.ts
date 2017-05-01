import { Injectable } from '@angular/core';
import { BACKEND_SERVER_URL } from '../../config/config';

@Injectable()
export class MainService {

    pageMode: any = {
        REGULAR_MODE: 0,
        BUS_EDIT_MODE: 1,
        MOVE_PEOPLE_MODE: 2
    };

    URLS: any = {
        retrieve_schedules_by_date_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_date",
        retrieve_reservations_by_date_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_reservations_by_date",
        retrieve_group_additional_info_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_group_additional_info",
        retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        get_price_for_bus_url: BACKEND_SERVER_URL + "api/admin/main/get_price_for_bus",
    };

    schedule_default_price: number = 25;

    constructor() { }

}

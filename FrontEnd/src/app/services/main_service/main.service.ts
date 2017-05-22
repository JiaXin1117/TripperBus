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
        add_reservation: BACKEND_SERVER_URL + "api/admin/main/add_reservation",
        retrieve_group_additional_info_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_group_additional_info",
        retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        get_price_for_bus_url: BACKEND_SERVER_URL + "api/admin/main/get_price_for_bus",
        get_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/get_bus_times",
        update_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/update_buses",
        move_reservations: BACKEND_SERVER_URL + "api/admin/main/move_reservations",
        get_buses_for_move_people: BACKEND_SERVER_URL + "api/admin/main/get_bus_for_move",
    };

    schedule_default_price: number = 25;
    reservation_fee: number = 0;

    constructor() { }

}

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
        update_reservation: BACKEND_SERVER_URL + "api/admin/main/update_reservation",
        delete_reservation: BACKEND_SERVER_URL + "api/admin/main/delete_reservation",
        delete_soft_reservation: BACKEND_SERVER_URL + "api/admin/main/delete_soft_reservation",
        move_reservations: BACKEND_SERVER_URL + "api/admin/main/move_reservations",

        get_Settings: BACKEND_SERVER_URL + "api/admin/main/get_Settings",
        set_Settings: BACKEND_SERVER_URL + "api/admin/main/set_Settings",

        retrieve_group_additional_info_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_group_additional_info",
        retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        get_price_for_bus_url: BACKEND_SERVER_URL + "api/admin/main/get_price_for_bus",
        get_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/get_bus_times",
        update_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/update_buses",
        get_buses_for_move_people: BACKEND_SERVER_URL + "api/admin/main/get_bus_for_move",
    };

    settings: any[] = Array();

    addReservationErrorMessage = "All the following are necessary for a new reservation: First Name, Last Name, Phone Number & Email.";
    deleteReservationErrorMessage = "Deleting failed.";

    constructor() { }

}

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
        // retrieve_schedules_by_date_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_by_date",
        retrieve_reservations_by_date_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_reservations_by_date",

        add_reservation: BACKEND_SERVER_URL + "api/admin/main/add_reservation",
        add_reservation_seats: BACKEND_SERVER_URL + "api/admin/main/add_reservation_seats",
        update_reservation: BACKEND_SERVER_URL + "api/admin/main/update_reservation",
        update_reservations: BACKEND_SERVER_URL + "api/admin/main/update_reservations",
        hold_reservation: BACKEND_SERVER_URL + "api/admin/main/hold_reservation",
        hold_reservations: BACKEND_SERVER_URL + "api/admin/main/hold_reservations",
        delete_reservation: BACKEND_SERVER_URL + "api/admin/main/delete_reservation",
        delete_soft_reservation: BACKEND_SERVER_URL + "api/admin/main/delete_soft_reservation",
        delete_soft_reservations: BACKEND_SERVER_URL + "api/admin/main/delete_soft_reservations",
        move_reservations: BACKEND_SERVER_URL + "api/admin/main/move_reservations",
        search_reservation: BACKEND_SERVER_URL + "api/admin/main/search_reservation",
        note_reservations: BACKEND_SERVER_URL + "api/admin/main/note_reservations",
        re_email_reservations: BACKEND_SERVER_URL + "api/admin/main/re_email_reservations",
        email_custom_reservations: BACKEND_SERVER_URL + "api/admin/main/email_custom_reservations",
        sendtext_reservations: BACKEND_SERVER_URL + "api/admin/main/sendtext_reservations",
        email_custom_text_reservations: BACKEND_SERVER_URL + "api/admin/main/email_custom_text_reservations",
        complimentary_all_reservations: BACKEND_SERVER_URL + "api/admin/main/complimentary_all_reservations",

        get_Settings: BACKEND_SERVER_URL + "api/admin/main/get_Settings",
        set_Settings: BACKEND_SERVER_URL + "api/admin/main/set_Settings",

        // retrieve_group_additional_info_url: BACKEND_SERVER_URL + "api/admin/main/retrieve_group_additional_info",
        // retrieve_all_stops_url: BACKEND_SERVER_URL + "api/admin/schedule/retrieve_stops",
        // get_price_for_bus_url: BACKEND_SERVER_URL + "api/admin/main/get_price_for_bus",
        get_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/get_bus_times",
        update_buses_for_edit: BACKEND_SERVER_URL + "api/admin/main/update_buses",
        get_buses_for_move_people: BACKEND_SERVER_URL + "api/admin/main/get_bus_for_move",
    };

    settings: any[] = Array();

    addReservationErrorMessage = "Adding Failed.";
    updateReservationErrorMessage = "Updating Failed.";
    deleteReservationErrorMessage = "Deleting failed.";
    holdReservationErrorMessage = "Holding failed.";
    noteReservationErrorMessage = "Noting failed.";
    emailReservationErrorMessage = "Emailing failed.";
    customEmailErrorMessage = "Custom emailing failed.";
    textSentErrorMessage = "Text sending failed.";
    customEmailTextErrorMessage = "Custom emailing & text sending failed.";
    complimentaryErrorMessage = "Complimentary setting failed.";
    defaultErrorMessage = "Failed.";

    constructor() { }

}

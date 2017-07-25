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
        complimentary_one_reservations: BACKEND_SERVER_URL + "api/admin/main/complimentary_one_reservations",

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

    reservation_emailsubject_maxlength = 60;
    reservation_text_maxlength = 160;
    reservation_emailsubject_placeholder_hold = 'Reservation Placed On Hold';
    reservation_emailsubject_placeholder_reemail = 'Re-Emailing Reservation Information';
    reservation_emailsubject_placeholder_customemail = 'Re: Reservation # XYZ123456';
    reservation_emailsubject_placeholder_complimentary = 'Complimentary Ticket(s) Toward Future Travel';
    reservation_emailsubject_desc = 'By default you do not need to enter any subject and the default subject will be automatically filled out as shown: \nHowever, if you do want a custom subject line instead of the default one, type it in the subject box provided.\n(Note: 60 chars. max)';

    reservation_emailbody_desc = `Emails are always automatically preceded with "Dear First Last Name", and after the email body they are always automatically signed with your default email footers, so there's no need to finish off with Sincerely etc.`;
    reservation_emailbody_desc_hold = 'You may enter (optional) the reason you are doing the hold (if any) into that box. Bear in mind that the customer sees it all in their email and that the words "Reason for this action:" is also in there prefilled, followed by the reason you entered.\n' + this.reservation_emailbody_desc;
    reservation_emailbody_desc_note = 'You have to enter the body of the text you want to email in that box.';
    reservation_emailbody_desc_customemail = 'You have to enter the body of the text you want to note in that box.\n' + this.reservation_emailbody_desc;
    reservation_emailbody_desc_complimentary = 'You have to enter the reason you are issuing the complimentary tickets into the following box, and in the email they will see "Reason for this action: whatever reason."\n' + this.reservation_emailbody_desc;
    reservation_text_desc = 'The maximum characters for a text message is 160.';

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

<?php

return [
    'TYPE_SCHEDULE_HOLIDAY'                 => 0,
    'TYPE_SCHEDULE_WEEKLY'                  => 1,

    'TYPE_SCHEDULE_REMOVED'                 => 0,
    'TYPE_SCHEDULE_UNREMOVED'               => 1,

    'TYPE_RESERVATION_INVALID'              => 0,
    'TYPE_RESERVATION_VALID'                => 1,
    'TYPE_RESERVATION_HOLD'                 => 2,
    'TYPE_RESERVATION_COMPLIMENTARY'        => 3,
    
    'TYPE_SCHEDULE_DISABLED'                => 0,
    'TYPE_SCHEDULE_ENABLED'                 => 1,
    
    'MAX_CAP_BUS'                           => 57,

    'TYPE_MAIL_RESERVATION_ADD'             => 0,
    'TYPE_MAIL_RESERVATION_MOVE'            => 1,
    'TYPE_MAIL_RESERVATION_SOFTDELETE'      => 2,
    'TYPE_MAIL_RESERVATION_UPDATE'          => 3,
    'TYPE_MAIL_RESERVATION_HOLD'            => 4,
    'TYPE_MAIL_RESERVATION_REEMAIL'         => 5,
    'TYPE_MAIL_RESERVATION_CUSTOMEMAIL'     => 6,
    'TYPE_MAIL_RESERVATION_COMPLIMENTARY'   => 7,
    'TYPE_MAIL_BUS_FULL'                    => 8,
    'TYPE_MAIL_BUS_5_REMAIN'                => 9,

    'DEFAULT_USER_PERMISSION'               => [1],

    'FROM_PHONE_NUMBER'                     => [2027604405, 2027604435, 2027604799],

    'DEFAULT_MAIL_SUBJECT_CUSTOM_EMAIL'     => 'Re: Reservation # ',
    'DEFAULT_MAIL_SUBJECT_REEMAIL'          => 'Re-Emailing Reservation Information',
    'DEFAULT_MAIL_SUBJECT_HOLD'             => 'Reservation Placed On Hold',
    'DEFAULT_MAIL_SUBJECT_COMPLIMENTARY'    => 'Complimentary Ticket(s) Toward Future Travel',
];

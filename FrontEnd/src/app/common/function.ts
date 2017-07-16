import { Reservation } from '../model';
import * as moment from 'moment';

export function getDateString(date: Date) {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
}

export function changeReservationsTimezone(reservations: Reservation[]) {
    if (!reservations)
        return;

    reservations.forEach(reservation => {
        reservation['Date Made'] = moment
            .utc(reservation['Date Made'])
            .local()
            .format('YYYY-MM-DD HH:mm:ss');
    });
}

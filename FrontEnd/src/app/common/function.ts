import { Reservation, Bus, Time } from '../model';
import * as moment from 'moment';

export function getDateString(date: Date) {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
}

export function changeTimezoneUTCtoLocal(dateStr: string) {
    return moment
        .utc(dateStr)
        .local()
        .format('YYYY-MM-DD HH:mm:ss');
}

export function changeReservationsTimezone(reservations: Reservation[]) {
    if (!reservations)
        return;

    reservations.forEach(reservation => {
        reservation['Date Made'] = changeTimezoneUTCtoLocal(reservation['Date Made']);
    });
}

export function calcBusesTotalSeats(buses: Bus[]) {
    buses.forEach (bus => calcBusTotalSeats(bus));
}

export function calcBusTotalSeats(bus: Bus) {
    let count = 0;
    bus.times.forEach (time => count += time['reservation_cnt']);
    bus['totalSeats'] = count;
}

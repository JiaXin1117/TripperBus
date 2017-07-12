import { Time } from './time.type';

class Price {
  public id: number;
  public group_id: number;
  public first_seats: number;
  public first_price: number;
  public special_price: number;
  public last_seats: number;
  public last_price: number;
  constructor() {
    this.id = 0;
    this.group_id = 0;
    this.first_seats = 0;
    this.first_price = 0;
    this.special_price = 0;
    this.last_seats = 0;
    this.last_price = 0;
  }
}

export class Bus {
  public max_cap: number;
  public group_id: number;
  public travel_zoo_booked: number;
  public reserved: number;
  public price: any;
  public destination: string;
  public times: any[];
  constructor() {
    this.max_cap = 0;
    this.group_id = 0;
    this.travel_zoo_booked = 0;
    this.reserved = 0;
    this.price = new Price();
    this.times = [];
    this.destination = "";
  }

  public static getBusFromGroupId(buses: Bus[], groupId: number): Bus {
    for (let i = 0; i < buses.length; i++) {
      if (buses[i].group_id == groupId)
        return buses[i];
    }

    return null;
  }

  public static getTimeIndexFromTimeId(bus: Bus, timeId: number) {
    for (let i = 0; i < bus.times.length; i++) {
      let time = bus.times[i] as Time;
      if (time.id == timeId)
        return time;
    }

    return null;
  }
}

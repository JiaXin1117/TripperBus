class Price{
    public id: number;
    public group_id: number;
    public first_seats: number;
    public first_price: number;
    public special_price: number;
    public last_seats: number;
    public last_price: number;
    constructor(){
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
  public group_id:      number;
  public travel_zoo_booked:     number;
  public reserved:     number;
  public price:   any;
  public times:   any[];
  constructor(){
    this.max_cap = 0;
    this.group_id = 0;
    this.travel_zoo_booked = 0;
    this.reserved = 0;
    this.price = new Price();
    this.times = [];
  }
}

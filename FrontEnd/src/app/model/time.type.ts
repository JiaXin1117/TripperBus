export class Time {
  public id: number;
  public group_id:      number;
  public area_id:     number;
  public w_h:     number;
  public day_of_week:   number;
  public time: string;
  public date: string;
  public short: string;
  public area_name: string;
  constructor(){
    this.id = 0;
    this.group_id = 0;
    this.area_id = 0;
    this.w_h = 0;
    this.day_of_week = 0;
    this.time = "";
    this.date = "";
    this.short = "";
    this.area_name = "";
  }
}

export class Reservation {
    public id: number;
    public time_id: number;
    public outbound_area_id: number;
    public valid: number;
    public reason: string;
    public 'First Name': string;
    public 'Last Name': string;
    public 'Phone': number;
    public 'Email': string;
    public 'Seats': number;
    public 'Groupon Codes': string;
    public 'Other Codes': string;
    public 'Payment Method': string;
    public 'Authorize.net Link': number;
    public 'IP Adresses': string;
    public 'Date Made': string;
    public 'Made By': string;
    public 'Notes': string;
    public 'App Scanned': string;
    public 'Leg Price': number;
    public 'Transaction Amount': number;
    public 'Under an Account': string;
    public 'Points Used': number;
    public 'Points Earned': number;
    public 'Action Records': string;
    public 'Other Leg': string;
    constructor() {
        this['id'] = 0;
        this['time_id'] = 0;
        this['outbound_area_id'] = 0;
        this['valid'] = 0;
        this['reason'] = '';
        this['First Name'] = '';
        this['Last Name'] = '';
        this['Phone'] = 0;
        this['Email'] = '';
        this['Seats'] = 0;
        this['Groupon Codes'] = '';
        this['Other Codes'] = '';
        this['Payment Method'] = '';
        this['Authorize.net Link'] = 0;
        this['IP Adresses'] = '';
        this['Date Made'] = '';
        this['Made By'] = '';
        this['Notes'] = '';
        this['App Scanned'] = '';
        this['Leg Price'] = 0;
        this['Transaction Amount'] = 0;
        this['Under an Account'] = '';
        this['Points Used'] = 0;
        this['Points Earned'] = 0;
        this['Action Records'] = '';
        this['Other Leg'] = '';
    }
}

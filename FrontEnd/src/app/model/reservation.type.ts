export class Reservation {
    public id: number;
    public time_id: number;
    public outbound_area_id: number;
    public valid: number;
    public 'First Name': string;
    public 'Last Name': string;
    public 'Phone': string;
    public 'Email': string;
    public 'Seats': number;
    public 'Groupon Code': string;
    public 'Campaign Name': string;
    public 'Payment Method': string;
    public 'Authorize net Link': string;
    public 'IP Address': string;
    public 'Date Made': string;
    public 'Made By': string;
    public 'Note': string;
    public 'App Scanned': string;
    public 'Leg Price': number;
    public 'Transaction Amount': any;
    public 'Under Account': string;
    public 'Points Used': number;
    public 'Points Earned': number;
    public 'Action Record': string;
    public 'Other Leg': string;
    public 'CC Name': string;
    public 'CC Number': string;
    public 'CC Code': string;
    public 'CC Month': number;
    public 'CC Year': number;
    constructor() {
        this.init();
    }

    public init() {
        this['id'] = 0;
        this['time_id'] = 0;
        this['outbound_area_id'] = 0;
        this['valid'] = 1;
        this['First Name'] = '';
        this['Last Name'] = '';
        this['Phone'] = "";
        this['Email'] = '';
        this['Seats'] = 0;
        this['Groupon Code'] = '';
        this['Campaign Name'] = '';
        this['Payment Method'] = 'Credit Card';
        this['Authorize net Link'] = '';
        this['IP Address'] = '';
        this['Date Made'] = '';
        this['Made By'] = '';
        this['Note'] = '';
        this['App Scanned'] = '';
        this['Leg Price'] = 0;
        this['Transaction Amount'] = 0;
        this['Under Account'] = '';
        this['Points Used'] = 0;
        this['Points Earned'] = 0;
        this['Action Record'] = '';
        this['Other Leg'] = '';
        this['CC Name'] = '';
        this['CC Number'] = '';
        this['CC Code'] = '';
        this['CC Month'] = (new Date()).getMonth() + 1;
        this['CC Year'] = (new Date()).getFullYear();
    }

    public copy(src: Reservation) {
        Object.keys(src).forEach(key => {
            this[key] = src[key];
        });
    }
}

export class Customer {
    public id: number;
    public fname: string;
    public lname: string;
    public email: string;
    public password: string;
    public phone: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public ipaddress: string;
    public date_joined: string;
    public mailing: number;
    public point: number;
    public money: number;
    public created_at: string;
    public updated_at: string;
    
    constructor() {
        this.init();
    }

    init() {
        this.id = 0;
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.password = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
        this.ipaddress = '';
        this.date_joined = '';
        this.mailing = 0;
        this.point = 0;
        this.money = 0;
        this.created_at = '';
        this.updated_at = '';
    }

    copy(src: Customer) {
        Object.keys(src).forEach(key => {
            this[key] = src[key];
        });
    }
}

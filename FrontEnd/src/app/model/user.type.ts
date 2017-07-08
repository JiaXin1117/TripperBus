export class User {
    public id: number;
    public name: string;
    public email: string;
    public password: string;
    public full_name: string;
    public created_at: string;
    public updated_at: string;

    constructor() {
        this.init();
    }

    init() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.password = "";
        this.full_name = "";
        this.created_at = "";
        this.updated_at = "";
    }

    copy(src: User) {
       Object.keys(src).forEach(key => {
           this[key] = src[key];
       });
   }
}

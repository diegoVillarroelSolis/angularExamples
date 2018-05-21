export class User {
    name: string;
    password: string;
    isAuthenticated: boolean
    
    constructor(){
        this.isAuthenticated = false;
    }
}
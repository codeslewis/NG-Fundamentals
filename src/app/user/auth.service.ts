import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    private currentUser: IUser;

    public loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Lewis',
            lastName: 'Sneddon'
        };
    }

    public isAuthenticated() {
        return !!this.currentUser;
    }
}

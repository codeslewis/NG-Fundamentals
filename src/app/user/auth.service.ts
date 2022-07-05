import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    public currentUser: IUser;

    public loginUser(userName: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Lewis',
            lastName: 'Sneddon'
        };
    }

    public isAuthenticated(): boolean {
        return !!this.currentUser;
    }

    public getCurrentUser(): IUser {
        return this.currentUser;
    }

    public updateCurrentUser(firstName: string, lastName: string): void {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}

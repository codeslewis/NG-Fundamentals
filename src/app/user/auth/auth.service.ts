import { Injectable } from "@angular/core";
import { IUser } from "../user.model";
import { IAuthService } from './auth.interface';

@Injectable()
export class AuthService implements IAuthService {
    public currentUser: IUser;

    public loginUser(userName: string, password: string): void {
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Kermit',
            lastName: 'The Frog'
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

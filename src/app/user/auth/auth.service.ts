import { Injectable } from "@angular/core";
import { IUser } from "../user.model";
import { IAuthService } from './auth.interface';

/**
 * Represents the auth implementation that is registered with the app.
 * The simple implementation is provided. This demonstrates using different
 * implementations using the useClass provider in Angular DI.
 */
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

import { Injectable } from '@angular/core';
import { IUser } from '../user.model';
import { IAuthService } from './auth.interface';

/**
 * A simple Auth implementation that provides a hard-coded user.
 * Used for development purposes.
 */
@Injectable()
export class SimpleAuthService implements IAuthService {
    public currentUser: IUser;

    public loginUser(userName: string, password: string): void {
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

import { IUser } from '../user.model';

export interface IAuthService {
    loginUser(userName: string, password: string): void;
    isAuthenticated(): boolean;
    getCurrentUser(): IUser;
    updateCurrentUser(firstName: string, lastName: string): void;
}

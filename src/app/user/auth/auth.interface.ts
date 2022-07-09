import { IUser } from '../user.model';

/**
 * Handles authentication and querying current user.
 */
export interface IAuthService {
    loginUser(userName: string, password: string): void;
    isAuthenticated(): boolean;
    getCurrentUser(): IUser;
    updateCurrentUser(firstName: string, lastName: string): void;
}

import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public userName: string;
    public password: string;

    constructor(
        private authService: AuthService,
        private router: Router) {}

    public login(formValues: any): void {
        this.authService.loginUser(
            formValues.userName,
            formValues.password);
        this.router.navigate(['events']);
    }

    public cancel(): void {
        this.router.navigate(['events']);
    }
}

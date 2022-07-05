import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ɵFormGroupValue, ɵTypedOrUntyped } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit{
    public profileForm: FormGroup;

    constructor(
        private authService: AuthService,
        private router: Router) {}

    ngOnInit(): void {
        let firstName = new FormControl(
            this.authService.getCurrentUser().firstName
        );
        let lastName = new FormControl(
            this.authService.getCurrentUser().lastName
        );

        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName
        });
    }

    public cancel(): void {
        this.router.navigate(['events']);
    }

    public saveProfile(values: any): void {
        this.authService.updateCurrentUser(values.firstName, values.lastName);
        this.router.navigate(['events']);
    }
}

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators, ɵFormGroupValue, ɵTypedOrUntyped } from "@angular/forms";
import { Toastr, TOASTR_TOKEN } from '../common/toastr.service';
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
    public profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(
        private authService: AuthService,
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

    ngOnInit(): void {
        this.firstName = new FormControl(
            this.authService.getCurrentUser().firstName,
            [Validators.required, Validators.pattern('[a-zA-Z].*')]
        );
        this.lastName = new FormControl(
            this.authService.getCurrentUser().lastName,
            [Validators.required, Validators.pattern('[a-zA-Z].*')]
        );

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    public cancel(): void {
        this.router.navigate(['events']);
    }

    public saveProfile(values: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>): void {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(values.firstName, values.lastName);
            // this.router.navigate(['events']);
            this.toastr.success("Profile Saved");
        }
    }

    public lastNameHasValidationError(): boolean {
        return this.lastName.invalid &&
            this.lastName.touched;
    }

    public firstNameHasValidationError(): boolean {
        return this.firstName.invalid &&
            this.firstName.touched
    }

    public firstNameHasRequiredError(): boolean {
        return ProfileComponent.hasValidationError(this.firstName, 'required');
    }

    public firstNameHasPatternError(): boolean {
        return ProfileComponent.hasValidationError(this.firstName, 'pattern');
    }

    public lastNameHasRequiredError(): boolean {
        return ProfileComponent.hasValidationError(this.lastName, 'required');
    }

    public lastNameHasPatternError(): boolean {
        return ProfileComponent.hasValidationError(this.lastName, 'pattern');
    }

    private static hasValidationError(item: FormControl, errorType: string): boolean {
        if (!item.touched) {
            return false;
        }

        let errors: ValidationErrors | null = item.errors;
        if (errors != null) {
            errors = <ValidationErrors> errors;
            return errors[errorType];
        }
        return false;
    }
}

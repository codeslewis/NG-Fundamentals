import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, ValidationErrors, Validators, ɵFormGroupValue, ɵTypedOrUntyped } from "@angular/forms";
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
        private router: Router) {}

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
            this.router.navigate(['events']);
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
        return this.hasValidationError(this.firstName, 'required');
    }

    public firstNameHasPatternError(): boolean {
        return this.hasValidationError(this.firstName, 'pattern');
    }

    public lastNameHasRequiredError(): boolean {
        return this.hasValidationError(this.lastName, 'required');
    }

    public lastNameHasPatternError(): boolean {
        return this.hasValidationError(this.lastName, 'pattern');
    }

    private hasValidationError(item: FormControl, errorType: string): boolean {
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

import {Component} from "@angular/core";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public userName: string;
    public password: string;

    public login(formValues: any): void {
        console.log(formValues);
    }
}

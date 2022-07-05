import { Component} from "@angular/core";
import { AuthService } from "../user/auth.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    constructor(private authService: AuthService) {}

    public displayLogin(): boolean {
        return !this.authService.isAuthenticated();
    }

    public displayUser(): boolean {
        return this.authService.isAuthenticated();
    }

    public getDisplayName(): string {
        return this.authService.getCurrentUser().firstName
    }
}

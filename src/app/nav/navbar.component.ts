import { Component} from "@angular/core";
import { AuthService } from "../user/auth/auth.service";
import {EventService, ISession} from "../events";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

    public searchTerm: string;
    public foundSessions: ISession[];

    constructor(
        private authService: AuthService,
        private eventService: EventService) {
        this.searchTerm = "";
    }

    public displayLogin(): boolean {
        return !this.authService.isAuthenticated();
    }

    public displayUser(): boolean {
        return this.authService.isAuthenticated();
    }

    public getDisplayName(): string {
        return this.authService.getCurrentUser().firstName
    }

    public searchSessions(term: string): ISession[] {
        this.eventService.searchSessions(term)
            .subscribe(sessions => {
                this.foundSessions = sessions;
                console.log(sessions);
            });
        return [];
    }
}

import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() public sessions: ISession[];
    @Input() public filter: string;
    public visibleSessions: ISession[] = [];

    public ngOnChanges(changes: SimpleChanges): void {
        if (this.sessions) {
            this.filterSessions(this.filter);
        }
    }

    private filterSessions(filter: string) {
        if (filter == 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions
                .filter(s => s.level.toLocaleLowerCase() == filter);
        }
    }
}

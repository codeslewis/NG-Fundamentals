import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";
import { ISession } from "../shared";

@Component({
    selector: 'session-list',
    templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input()
    public sessions: ISession[];
    @Input()
    public filter: string;
    @Input()
    public sort: string;
    public visibleSessions: ISession[] = [];

    public ngOnChanges(_: SimpleChanges): void {
        if (!this.sessions) {
            return;
        }

        this.filterSessions(this.filter);

        this.sort == 'name' ?
            this.visibleSessions.sort(SessionListComponent.sortByNameAsc) :
            this.visibleSessions.sort(SessionListComponent.sortByVotesDesc);
    }

    private filterSessions(filter: string) {
        filter == 'all'
            ? this.visibleSessions = this.sessions.slice(0)
            : this.visibleSessions = this.sessions
                .filter(s => s.level.toLocaleLowerCase() == filter);
    }

    private static sortByNameAsc(previous: ISession, next: ISession): number {
        return previous.name == next.name
            ? 0
            : previous.name > next.name ? 1 : -1;
    }

    private static sortByVotesDesc(previous: ISession, next: ISession): number {
        return next.voters.length - previous.voters.length;
    }
}

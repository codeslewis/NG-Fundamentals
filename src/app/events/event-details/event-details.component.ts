import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from "../shared";
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "../shared";

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    public event: IEvent | undefined;
    public addMode: boolean;
    public filterBy: string = 'all';
    public sortBy: string = 'votes';

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        const eventId: number = parseInt(this.route.snapshot.params['id']);
        this.event = this.eventService.getEvent(eventId);
    }

    public addSession(): void {
        this.addMode = true;
    }

    saveSession(session: ISession): void {
        if (this.event != undefined) {
            const nextId = (<IEvent>this.event)
                .sessions
                .map(s => s.id)
                .filter(id => id != undefined)
                .map(num => <number>num)
                .reduce((current: number, next: number) => Math.max(current, next), 0);

            session.id = nextId + 1;
            this.event.sessions.push(session);
            this.eventService.updateEvent(this.event);
            this.addMode = false;
        } else {
            // Assert.fail('Should not be able to save a session on a non-loaded event');
        }

    }

    cancelAdd() {
        this.addMode = false;
    }
}

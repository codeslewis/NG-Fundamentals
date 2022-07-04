import { Component, OnInit } from '@angular/core';
import { EventService } from "../shared";
import { ActivatedRoute } from "@angular/router";
import {IEvent} from "../shared";

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

    public event: IEvent | undefined;

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit(): void {
        const eventId: number = parseInt(this.route.snapshot.params['id']);
        this.event = this.eventService.getEvent(eventId);
    }

}

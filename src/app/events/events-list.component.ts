import {Component, OnInit} from "@angular/core";
import { EventService } from "./shared/event.service"
import {IEvent} from "./shared/event.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit{

    events: IEvent[];

    constructor(
        private eventService: EventService,
        private route: ActivatedRoute) {
        this.events = [];
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(e => this.events = e);
        this.events = this.route.snapshot.data['events'];
    }
}

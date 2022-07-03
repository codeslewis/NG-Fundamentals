import {Component, OnInit} from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrService } from "../common/toastr.service";
import {EventModel} from "../models/eventModel";
import {ActivatedRoute} from "@angular/router";

@Component({
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit{

    events: EventModel[];

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
        private route: ActivatedRoute) {
        this.events = [];
    }

    ngOnInit() {
        // this.eventService.getEvents().subscribe(e => this.events = e);
        this.events = this.route.snapshot.data['events'];
    }

    handleThumbnailClick(eventName: string) {
        this.toastrService.success(eventName);
    }
}

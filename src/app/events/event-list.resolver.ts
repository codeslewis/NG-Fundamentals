import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { EventService } from "./shared/event.service";
import { EventModel } from "../models/eventModel";

@Injectable({
    providedIn: 'root'
})
export class EventListResolver implements Resolve<EventModel[]> {

    constructor(private eventService: EventService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EventModel[]> {
        return this.eventService
            .getEvents()
            .pipe(map(events => events));
    }
}

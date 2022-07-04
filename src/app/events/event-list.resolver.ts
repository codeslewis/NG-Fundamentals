import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { EventService } from "./shared/event.service";
import { IEvent } from "./shared/event.model";

@Injectable({
    providedIn: 'root'
})
export class EventListResolver implements Resolve<IEvent[]> {

    constructor(private eventService: EventService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEvent[]> {
        return this.eventService
            .getEvents()
            .pipe(map(events => events));
    }
}

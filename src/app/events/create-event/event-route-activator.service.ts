import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import { EventService} from "../shared/event.service";

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate{

    constructor(
        private eventService: EventService,
        private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const routeId = parseInt(route.params['id']);
        const eventExists: boolean = !!this.eventService.getEvent(routeId);

        if (!eventExists) {
            this.router
                .navigate(['/404'])
                .then();
            return false;
        }

        return true;
    }
}

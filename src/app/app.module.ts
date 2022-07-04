import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    EventsListComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolver,
    EventThumbnailComponent
} from './events';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from "./nav/navbar.component";
import { ToastrService } from "./common/toastr.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/error404.component";
import { AuthService } from "./user/auth.service";

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        Error404Component
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivatorService,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty()) {
        return window.confirm('You have not saved this event, do you really want to cancel?');
    }
    return true;
}

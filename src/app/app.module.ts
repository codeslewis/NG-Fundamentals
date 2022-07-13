import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    EventsListComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivatorService,
    EventListResolver,
    EventThumbnailComponent,
    CreateSessionComponent,
    SessionListComponent,
    DurationPipe
} from './events';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from "./nav/navbar.component";
import { Toastr, TOASTR_TOKEN } from "./common";
import { CollapsibleWellComponent } from "./common";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/error404.component";
import { AuthService } from "./user/auth/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SimpleAuthService } from './user/auth/simple-auth.service';

declare let toastr: Toastr;

@NgModule({
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavbarComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ReactiveFormsModule
    ],
    providers: [
        EventService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        EventRouteActivatorService,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        },
        { provide: AuthService, useClass: SimpleAuthService }
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

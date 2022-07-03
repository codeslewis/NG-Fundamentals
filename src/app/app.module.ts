import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { NavbarComponent } from "./nav/navbar.component";
import { EventService } from "./events/shared/event.service";
import { ToastrService } from "./common/toastr.service";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from "./errors/error404.component";
import { EventRouteActivatorService } from "./events/create-event/event-route-activator.service";
import { EventListResolver } from "./events/event-list.resolver";

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
      }
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

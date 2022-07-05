import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EventService } from "../shared";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

    private _isDirty: boolean = true;

    public newEvent: any;

    constructor(
        private router: Router,
        private eventService: EventService) { }

    public saveEvent(formValues: any): void {
        console.log(formValues);
        this.eventService.saveEvent(formValues);
        this._isDirty = false;
        this.router.navigate(['/events']);
    }

    public cancel() {
        this.router.navigate(['/events']);
    }

    public isDirty() {
        return this._isDirty;
    }
}

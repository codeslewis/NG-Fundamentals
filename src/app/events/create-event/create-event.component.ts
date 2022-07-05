import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { EventService, IEvent } from "../shared";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{

    private _isDirty: boolean = true;

    public event: IEvent;

    constructor(
        private router: Router,
        private eventService: EventService) { }

    ngOnInit(): void {
        this.event = {
            id: 999,
            name: 'NG Spectacular',
            date: new Date('8/8/2008'),
            time: '10am',
            price: 799.99,
            location: {
                address: '456 Happy Street',
                city: 'Felicity',
                country: 'Angularisation'
            },
            sessions: [],
            onlineUrl: 'http://ngSpectacular.com',
            imageUrl: 'http://ngSpectacular.com/logo.png'
        }
    }

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

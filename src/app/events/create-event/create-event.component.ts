import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

    private _isDirty: boolean = true;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    public cancel() {
        this.router.navigate(['/events']);
    }

    public isDirty() {
        return this._isDirty;
    }
}

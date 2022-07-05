import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators, ɵFormGroupValue, ɵTypedOrUntyped } from "@angular/forms";
import { ISession } from "../shared";

@Component({
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit{
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    public newSessionForm: FormGroup;

    ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl(
            '',
            [Validators.required, Validators.maxLength(400)]
        );

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(values: ɵTypedOrUntyped<any, ɵFormGroupValue<any>, any>) {
        let session: ISession = {
            id: undefined,
            name: values.name,
            duration: +values.duration,
            level: values.level,
            presenter: values.presenter,
            abstract: values.abstract,
            voters: []
        }
        console.log(session);
    }
}

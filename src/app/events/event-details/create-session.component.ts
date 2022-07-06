import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../shared";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit{
    @Output() private saveNewSession: EventEmitter<ISession>;
    @Output() private cancelAddSession: EventEmitter<null>;

    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;

    public newSessionForm: FormGroup;

    public constructor() {
        this.saveNewSession = new EventEmitter();
        this.cancelAddSession = new EventEmitter();
    }

    public ngOnInit(): void {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl(
            '',
            [
                Validators.required,
                Validators.maxLength(400),
                restrictedWords(['foo', 'bar'])
            ]
        );

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    public saveSession(values: any) {
        let session: ISession = {
            id: undefined,
            name: values.name,
            duration: +values.duration,
            level: values.level,
            presenter: values.presenter,
            abstract: values.abstract,
            voters: []
        }
        this.saveNewSession.emit(session);
    }

    public cancel(): void {
        this.cancelAddSession.emit();
    }

    public hasValidationError(item: FormControl, errorType: string): boolean {
        if (!item.dirty) {
            return false;
        }

        let errors: ValidationErrors | null = item.errors;
        if (errors != null) {
            errors = <ValidationErrors> errors;
            return errors[errorType];
        }
        return false;
    }
}

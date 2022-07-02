import { Injectable } from '@angular/core';

declare let toastr: any;

@Injectable()
export class ToastrService {
    public success(message: string, title?: string) {
        console.log('Fake Toast: ' + message);
    }

    public info(message: string, title?: string) {
        console.log('Fake Toast: ' + message);
    }

    public warning(message: string, title?: string) {
        console.log('Fake Toast: ' + message);
    }

    public error(message: string, title?: string) {
        console.log('Fake Toast: ' + message);
    }
}

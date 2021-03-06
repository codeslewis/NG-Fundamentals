import { Component, Input } from "@angular/core";

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {
    public visible: boolean = true;

    public toggleContent(): void {
        this.visible = !this.visible;
    }
}

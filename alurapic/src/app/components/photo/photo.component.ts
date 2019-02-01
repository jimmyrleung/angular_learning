import { Component, Input } from '@angular/core';

@Component({
    selector: "ap-photo",
    templateUrl: "photo.component.html"
})
export class PhotoComponent {
    // Inbound properties
    @Input() description: string = "";
    @Input() url: string = "";
}
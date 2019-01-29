import { Component, Input } from '@angular/core';

@Component({
    selector: "ap-photo",
    templateUrl: "photo.component.html"
})
export class PhotoComponent {
    // Inbound properties
    @Input() title: string = "";
    @Input() url: string = "";
}
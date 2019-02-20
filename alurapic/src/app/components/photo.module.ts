/* Angular imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

/* Custom imports */
import { PhotoComponent } from './photo/photo.component';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    // Declarations = Which components are part of this module
    // They are visible only between them and not for external components
    declarations: [PhotoComponent, PhotoListComponent, PhotoFormComponent],

    // Which components we want to export to other modules
    // Yes, we need to explicit which components we want to export
    exports: [PhotoComponent],
    imports: [HttpClientModule, CommonModule]
})
export class PhotoModule { }
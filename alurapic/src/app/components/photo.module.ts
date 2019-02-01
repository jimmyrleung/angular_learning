import { NgModule } from '@angular/core';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    // Declarations = Which components are part of this module
    // They are visible only between them and not for external components
    declarations: [PhotoComponent],

    // Which components we want to export to other modules
    // Yes, we need to explicit which components we want to export
    exports: [PhotoComponent],
    imports: [HttpClientModule]
})
export class PhotoModule { }
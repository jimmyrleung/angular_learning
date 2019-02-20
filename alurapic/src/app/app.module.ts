/* Angular Imports */

// The browser module gives us features that angular needs to run in the browser 
// for example: angular directives
// The browser module shouldn't be imported by other modules, only by our main module
// If you're dealing with any template error issue, try to import the common module 
// (it provides the angular directives and other features that the browser module uses)
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Custom Imports */
import { PhotoModule } from './components/photo.module';
import { ErrorsModule } from './components/errors.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoModule,
    ErrorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

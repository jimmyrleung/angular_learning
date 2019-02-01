/* Angular Imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Custom Imports */
import { PhotoModule } from './components/photo.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

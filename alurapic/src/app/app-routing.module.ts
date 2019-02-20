import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

// Configuration for each route
const routes: Routes = [
  { path: 'users/flavio', component: PhotoListComponent },
  { path: 'photos/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent } // Otherwise
];

@NgModule({
  // We are not just importing a RouterModule, we are importing a 
  // RouterModule that already knows our routes based on the root
  // URL
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

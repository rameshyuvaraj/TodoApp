import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValidateUserPageComponent } from './validate-user-page/validate-user-page.component';
import { EntryPageComponent } from './entry-page/entry-page.component';

const routes: Routes = [
  { path: '', component: EntryPageComponent },
  { path: 'validate-user', component: ValidateUserPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})


export class AppRoutingModule { }

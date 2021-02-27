import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContentComponent } from './content/content.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'content', component: ContentComponent },
{ path: '', redirectTo: 'login', pathMatch: 'full' },
{ path: '**', component: ErrorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

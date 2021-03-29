import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormEditComponent } from './graphql/form-edit/form-edit.component';
import { HomeComponent } from './graphql/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'criar', component: FormEditComponent },
  { path: 'editar/:id', component: FormEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

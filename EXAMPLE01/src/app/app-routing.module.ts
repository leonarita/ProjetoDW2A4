import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ListagemComponent } from './component/listagem/listagem.component';
 
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'listar', component: ListagemComponent },
  { path: '*', redirectTo: '' },
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
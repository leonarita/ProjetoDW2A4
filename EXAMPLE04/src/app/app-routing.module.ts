import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InfiniteScrollV1Component } from './components/infinite-scroll-v1/infinite-scroll-v1.component';
 
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'infinite-scroll-v1', component: InfiniteScrollV1Component }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
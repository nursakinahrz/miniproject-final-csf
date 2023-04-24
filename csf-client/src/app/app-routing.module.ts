import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add.component';
import { UpdateComponent } from './components/update.component';
import { ViewComponent } from './components/view.component';
import { HomeComponent } from './components/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent},
  { path: 'update/:id', component: UpdateComponent},
  { path: 'view', component: ViewComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SuperheroesListComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class SuperheroesRoutingModule { }

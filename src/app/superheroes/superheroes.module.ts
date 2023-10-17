import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperheroesRoutingModule } from './superheroes-routing.module';
//Angular Material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
//Componentes
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';
import { SuperheroCreateComponent } from './superhero-create/superhero-create.component';
import { SuperheroDeleteComponent } from './superhero-delete/superhero-delete.component';

@NgModule({
  declarations: [
    SuperheroesListComponent,
    SuperheroCreateComponent,
    SuperheroDeleteComponent
  ],
  imports: [
    CommonModule,
    SuperheroesRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatListModule
  ]
})
export class SuperheroesModule { }

import { SuperheroeService } from './../../services/superheroe.service';
//Debo usar esto para usar la tabla
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Superhero } from 'src/app/interfaces/superhero';
import {MatDialog} from '@angular/material/dialog';
import { SuperheroCreateComponent } from '../superhero-create/superhero-create.component';
import { SuperheroWithAbilitiesResponse } from 'src/app/interfaces/superherowithabilitiesresponse';
import { SuperheroDeleteComponent } from '../superhero-delete/superhero-delete.component';
@Component({
  selector: 'app-superheroes-list',
  templateUrl: './superheroes-list.component.html',
  styleUrls: ['./superheroes-list.component.css']
})
//Implemento implements AfterViewInit
export class SuperheroesListComponent implements AfterViewInit, OnInit{
  displayedColumns: string[] = ['Id', 'Nombre', 'Descripción', 'Nivel_de_poder','Habilidades','Acciones'];
  dataSource = new MatTableDataSource<SuperheroWithAbilitiesResponse>();

  constructor(private superheroeService:SuperheroeService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.mostrarSuperheroes();
  }

  openDialogCreate(){
    this.dialog.open(SuperheroCreateComponent,{
      disableClose:true,
      width:"300px"
    }).afterClosed().subscribe(resultado =>{
      if(resultado === "creado"){
        this.mostrarSuperheroes();
      }
    });
  }

  openDialogEdit(dataSuperhero: SuperheroWithAbilitiesResponse){
    this.dialog.open(SuperheroCreateComponent,{
      disableClose:true,
      width:"300px",
      data:dataSuperhero
    }).afterClosed().subscribe(resultado =>{
      if(resultado === "editado"){
        this.mostrarSuperheroes();
      }
    });
  }

  openDialogDelete(dataSuperhero: SuperheroWithAbilitiesResponse){
    this.dialog.open(SuperheroDeleteComponent,{
      disableClose:true,
      data:dataSuperhero
    }).afterClosed().subscribe(resultado =>{
      if(resultado === "eliminado"){
        this.mostrarSuperheroes();
      }
    });
  }

  mostrarSuperheroes(){
    this.superheroeService.getAllEnabledSuperheroesWithAbilities().subscribe(
      (data:any) => {
        this.dataSource.data = data;
      },(error) => {
        console.log(error);
      }


    )
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}





import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Superhero } from 'src/app/interfaces/superhero';
import { SuperheroWithAbilitiesResponse } from 'src/app/interfaces/superherowithabilitiesresponse';
import { SuperheroeService } from 'src/app/services/superheroe.service';

@Component({
  selector: 'app-superhero-delete',
  templateUrl: './superhero-delete.component.html',
  styleUrls: ['./superhero-delete.component.css']
})
export class SuperheroDeleteComponent implements OnInit {
  constructor(
    public dialogoReferencia: MatDialogRef<SuperheroDeleteComponent>,
    private snackBar:MatSnackBar,
    private superheroeService:SuperheroeService,
    @Inject(MAT_DIALOG_DATA) public dataSuperHero: SuperheroWithAbilitiesResponse
  )
  {

  }

  ngOnInit(): void{

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition:"center",
      verticalPosition:"bottom",
      duration: 3000
    });
  }

  confirmDeleteSuperhero(){
    if(this.dataSuperHero){
      this.superheroeService.deleteSuperhero(this.dataSuperHero.id).subscribe(
        (response) => {
          console.log(response)
          this.openSnackBar("Super Héroe eliminado con éxito","Listo");
          this.dialogoReferencia.close("eliminado");
        },(error) => {
          console.log(error);
          this.openSnackBar("Hubo un error al eliminar el Super Héroe","Listo");
        }
      )

    }
  }
}

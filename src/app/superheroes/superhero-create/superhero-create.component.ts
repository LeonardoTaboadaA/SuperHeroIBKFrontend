import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SuperheroWithAbilitiesRequest } from 'src/app/interfaces/superherowithabilitiesrequest';
import { Ability } from 'src/app/interfaces/ability';
import { SuperheroeService } from 'src/app/services/superheroe.service';
import { AbilityService } from './../../services/ability.service';
import { Superhero } from 'src/app/interfaces/superhero';
import { SuperheroWithAbilitiesResponse } from 'src/app/interfaces/superherowithabilitiesresponse';
@Component({
  selector: 'app-superhero-create',
  templateUrl: './superhero-create.component.html',
  styleUrls: ['./superhero-create.component.css']
})
export class SuperheroCreateComponent implements OnInit{
  tituloAccion = "Agregar";
  botonAccion = "Guardar";
  formSuperheroe: FormGroup;
  listAbility: Ability[] = [];

  constructor(
    public dialogoReferencia: MatDialogRef<SuperheroCreateComponent>,
    private fb: FormBuilder,
    private snackBar:MatSnackBar,
    private superheroeService:SuperheroeService,
    private abilityService:AbilityService,
    @Inject(MAT_DIALOG_DATA) public dataSuperHero: SuperheroWithAbilitiesResponse
  )
  {
    this.formSuperheroe = this.fb.group({
      name: ["",Validators.required],
      description: ["",Validators.required],
      powerLevel: ["",Validators.required],
      idAbility: ["",Validators.required]
    });

    this.abilityService.getAllEnabledAbilities().subscribe(
      (data:any) => {
        this.listAbility = data;
      },(error) => {
        console.log(error);
      }


    )


  }

  getSelectedOptionsText(): string {
    const selectedOptions = this.formSuperheroe?.get('idAbility')?.value || [];
    const numberOfSelected = selectedOptions.length;

    if (numberOfSelected === 0) {
      return 'Selecciona habilidades';
    }

    // Obtener los nombres de las habilidades seleccionadas
    const selectedAbilityNames = this.listAbility
      .filter(item => selectedOptions.includes(item.id))
      .map(item => item.name);

    // Generar el texto personalizado
    if (numberOfSelected === 1) {
      return `${selectedAbilityNames[0]}`;
    } else if (numberOfSelected === 2) {
      return `${selectedAbilityNames[0]} (+ ${numberOfSelected - 1} habilidad)`;
    } else {
      return `${selectedAbilityNames[0]} (+ ${numberOfSelected - 1} habilidades)`;
    }
  }

  ngOnInit(): void {
    if(this.dataSuperHero){
      const selectedAbilities = this.dataSuperHero.abilities.map(ability => ability.id);

      this.formSuperheroe.patchValue({
        name: this.dataSuperHero.name,
        description: this.dataSuperHero.description,
        powerLevel: this.dataSuperHero.powerLevel,
        idAbility: selectedAbilities
      })

      this.tituloAccion = "Editar";
      this.botonAccion = "Actualizar";
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      horizontalPosition:"end",
      verticalPosition:"top",
      duration: 3000
    });
  }



  addEditSuperhero(){
    console.log(this.formSuperheroe.value);

    const modelo : SuperheroWithAbilitiesRequest = {
      name : this.formSuperheroe.value.name,
      description : this.formSuperheroe.value.description,
      powerLevel : this.formSuperheroe.value.powerLevel,
      selectedAbilities : this.formSuperheroe.value.idAbility
    }

    if(this.dataSuperHero == null){
      this.superheroeService.createSuperhero(modelo).subscribe(
        (response) => {
          console.log(response)
          this.openSnackBar("Super Héroe agregado con éxito","Listo");
          this.dialogoReferencia.close("creado");
        },(error) => {
          console.log(error);
          this.openSnackBar("Hubo un error al agregar el Super Héroe","Listo");
        }
      )
    }
    else{
      this.superheroeService.updateSuperhero(this.dataSuperHero.id,modelo).subscribe(
        (response) => {
          console.log(response)
          this.openSnackBar("Super Héroe editado con éxito","Listo");
          this.dialogoReferencia.close("editado");
        },(error) => {
          console.log(error);
          this.openSnackBar("Hubo un error al editar el Super Héroe","Listo");
        }
      )
    }

  }
}

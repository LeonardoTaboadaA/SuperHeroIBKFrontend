import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  menu: any;
  constructor( private router: Router) { }

  abrirListaSuperHeroe(){
    this.router.navigate(['/superheroes']);
  }
}

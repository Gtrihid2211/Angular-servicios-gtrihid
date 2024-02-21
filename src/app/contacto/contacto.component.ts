import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  constructor(private ruta: Router) { 
    
  }

  volverHome(): void {
    this.ruta.navigate(['']);
  }

  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  mostrarMensaje(mensaje: string) {
    alert(mensaje);
  }
}

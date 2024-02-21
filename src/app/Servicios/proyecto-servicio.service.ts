import { Injectable } from '@angular/core';
import { Proyecto } from '../clases/proyecto.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectoServicioService {
  public proyecto: Proyecto;
  public arrayProyectos: Proyecto[] = [];

  constructor() { 
    this.proyecto = new Proyecto();
  }

  crearProyecto(nombre: Proyecto){ 
    /* this.proyecto=nombre; */
    this.arrayProyectos.push(nombre);
  }

  obtenerProyecto(): Proyecto{
    return this.proyecto;
  }

  obtenerListaProyectos(): Proyecto[]{
    return this.arrayProyectos;
  }
}

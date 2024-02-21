import { Component } from '@angular/core';
import { AlertService } from '../Servicios/alert.service';
import { Proyecto } from '../clases/proyecto.model';
import { ProyectoServicioService } from '../Servicios/proyecto-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  public input_name: string = '';
  public input_presupuesto: string = '';

  public proyecto: Proyecto = new Proyecto();
  public listaProyectos: Proyecto[] = new Array<Proyecto>();
  
  constructor(private ruta:Router ,private servicioAlerta:AlertService, private servicioProyecto:ProyectoServicioService){
    console.log("entro en constructor proyectos");
  }

  //se llama al metodo del servicio
  llamarServicioProyectos(mensaje: string){
    this.servicioAlerta.mostrarMensaje(mensaje);
  }

  ngOnInit(): void {
    /* this.llamarServicioProyectos('Hola desde el componente proyectos'); */
  }

  agregarProyecto(){
    this.proyecto.setNombre(this.input_name);
    this.proyecto.setPresupuesto(this.input_presupuesto);
    this.servicioProyecto.crearProyecto(this.proyecto);
   
    //navegar a otro componente por codigo

    this.ruta.navigate(['']);
  }

}

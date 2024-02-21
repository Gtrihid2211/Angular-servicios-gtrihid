import { Component, OnInit } from '@angular/core';
import { AlertService } from '../Servicios/alert.service';
import { ProyectoServicioService } from '../Servicios/proyecto-servicio.service';
import { Proyecto } from '../clases/proyecto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  public proyecto: Proyecto;
  public arrayProyectos: Proyecto[] = [];
  //se inyecta el servicio en el constructor
  constructor(private servicioAlerta:AlertService, private servicioProyecto:ProyectoServicioService) { 
    this.proyecto = this.servicioProyecto.obtenerProyecto();
    this.arrayProyectos = this.servicioProyecto.obtenerListaProyectos();

    console.log("entro en constructor home");
  }

  //se llama al metodo del servicio
  llamarServicioHome(mensaje: string){
    this.servicioAlerta.mostrarMensaje(mensaje);
  }

  ngOnInit(): void {
    /* this.llamarServicioHome('Hola desde el componente home'); */
    
  }
}

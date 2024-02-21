import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlaceHolder } from '../interfaces/place-holder';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  public resultadoPeticion: any;
  public inputIdGet: string = '';
  public url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.get();
  }

  get(){
    return this.http.get(this.url)
    .subscribe ( (data) => {this.resultadoPeticion = data;});
  }

  get2(){
    return this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe ( data => {
      this.resultadoPeticion = data;
      this.resultadoPeticion.userId
    });
  }

  get3(){
    this.http.get<PlaceHolder>(this.url+"/"+this.inputIdGet)
    .subscribe(
      {
      next: (respuesta: PlaceHolder)=> {
        this.resultadoPeticion = respuesta;
        console.log(this.resultadoPeticion.userId);
        console.log(this.resultadoPeticion.id);
        console.log(this.resultadoPeticion.title);
        console.log(this.resultadoPeticion.body);

      },
      error: (err)=>{
        console.log("error en la peticion: ", err);
      },
    })

  }

  post(){
    this.http.post(this.url, 
      {
      userId: 2,
      id: 200,
      title: "titulo del 101",
      body: "cuerpo del 101"
      }
    ).subscribe(data=>{this.resultadoPeticion = data;});
  }

  // put actualiza el recurso completo, si no pone algun campo, ese campo se borra
  put(){
    this.http.put(this.url+"/2", 
      {
      userId: 2,
      title: "titulo del 2",
      body: "titulo del 2"
      }
    ).subscribe(data=>{this.resultadoPeticion = data;});
  }

  // patch solo actualiza los campos que se le pasan, sino ese campo se queda igual que estaba
  patch(){
    this.http.patch(this.url+"/2", 
      {
        userId: 2,
        body: "titulo del 2"
      }
    ).subscribe(data=>{this.resultadoPeticion = data;});
  }

  delete(){
    this.http.delete(this.url+"/2").subscribe(data=>{this.resultadoPeticion = data;});
  }
    
}

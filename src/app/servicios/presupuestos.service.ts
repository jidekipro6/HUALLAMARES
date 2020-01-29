import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpHeaderResponse } from '@angular/common/http';
import { Presupuestos } from '../Model/presupuestos.model';


import { map, filter } from 'rxjs/operators';
import { stringify } from 'querystring';




@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {


  presURL = 'https://appcompras-40a44jideki.firebaseio.com/presupuestos.json';
  preURL = 'https://appcompras-40a44jideki.firebaseio.com/presupuestos';


  constructor(private http: HttpClient) { }
  postPresupuesto(presupuesto: any) {
    return this.http.post(this.presURL, presupuesto)

  }

  getPresupuestos() {
    return this.http.get(this.presURL).pipe(map(res => {
      const presupuestos: Presupuestos[] = [];

      Object.keys(res).forEach(key => {

        const presupuesto: Presupuestos = res[key];
        presupuesto.id = key;
        presupuestos.push(presupuesto);
      });
      return presupuestos;
    })

    );
  }

  getPresupuesto(id) {
    const url = this.presURL + '/${id}.json';
    console.log(id);
    return this.http.get<Presupuestos>(url);


  }
  putPresupuesto(presupuesto: Presupuestos,id: string){
const url = this.presURL + '/${id}.json';
return this.http.put(url, presupuesto);


  }







}

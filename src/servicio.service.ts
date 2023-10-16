import {Injectable} from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class ServicioService{
    URL="assets/Datos/del_ahorro.json";

    constructor(private http:HttpClient){

    }
get(){
    return this.http.get(this.URL)
}
 /*       GetById(ID:String){
            return new Observable(observer =>{
                this.get().subscribe((result:any[])=>{
                    const filtro =result.filter(item=> item.ID === ID)
                    return observer.next(filtro[0]);
                })
            })
        }*/
}

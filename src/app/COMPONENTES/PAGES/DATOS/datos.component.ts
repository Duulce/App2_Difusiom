import { Component } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import { ServicioService } from '../../../../servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DATOSComponent {
FarmaciasList: any[]=[];
constructor(private SVC:ServicioService, private router:Router){
  this.SVC.get().subscribe((result:any)=>{
    this.FarmaciasList=result
  })
  }
  Detalle(ID:String){
    this.router.navigate(['ID',ID]);
    console.log(ID)
  }
}

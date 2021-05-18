import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.component.html',
  styleUrls: ['./informazioni.component.css']
})
export class InformazioniComponent implements OnInit {

  constructor(public http: HttpClient) { }
  sesso : String ;
  taglia : String;
  pelo : String ;
  sterilizzato : String ;
  o :Observable<Object>;
  data:Object;

  image: any[] = [
  "/assets/3NX63.jpg",
  "/assets/4PTQ6.jpg",
  "/assets/5C5QM.jpg",
  "/assets/A2ZD8.jpg",
  "/assets/A9L89.jpg",
  "/assets/B8AMY.jpg",
  "/assets/G7K8U.jpg",
  "/assets/GRFA9.jpg",
  "/assets/JFC5T.jpg",
  "/assets/M4JAN.jpg",
  "/assets/M5JCT.jpg",
  "/assets/MAGH3.jpg",
  "/assets/P3AHT.jpg",
  "/assets/P4X47.jpg",
  "/assets/R8B9Q.jpg",
  "/assets/SDF7G.jpg",
  "/assets/UCL7Y.jpg",
  "/assets/V837M.jpg",
  "/assets/WGM27.jpg",
  "/assets/WV8Q4.jpg",
  "/assets/YDM68.jpg",
  "/assets/ZG75H.jpg",
  "/assets/SS89K.jpg",
  "/assets/CXCV9.jpg",
  "/assets/LLK7T.jpg",



 ]
 listaSesso = [
    { id: "M", tipo: "maschio" },
    { id: "F", tipo: "femmina" }
]
listaTaglia = [
    { id: "G", tipo: "grande" },
    { id: "media", tipo: "media" },
    { id: "P", tipo: "piccola" }
]
listaPelo = [
    { id: "L", tipo: "lungo" },
    { id: "MED", tipo: "medio" },
    { id: "C", tipo: "corto" }
]

listaSter= [
    { id: "Si", tipo: "si" },
    { id: "No", tipo: "no" },

]



contact = {
    firstName: "CFR",
    comment: "No comment",
    subscribe: true,
    contactMethod: 2 // this id you'll send and get from backend
}


  ngOnInit(): void {
  }

  ciao(taglia){
this.o = this.http.get(`https://3000-white-constrictor-cw8ydu3m.ws-eu04.gitpod.io/taglia/${taglia}`);
     this.o.subscribe(this.getData);
  }

getData = (d : Object) =>
   {
     this.data = new Object(d);
console.log(this.data);
   }


}

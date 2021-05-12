import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.component.html',
  styleUrls: ['./informazioni.component.css']
})
export class InformazioniComponent implements OnInit {

  constructor() { }
  sesso : String ;
  taglia : String;
  pelo : String ;
  regioni : String ;
  sterilizzato : String ;

  image: any[] = [
  "/assets/3NX63.jpg",
  "/assets/4PTQ6.jpg",
  "/assets/5C5QM.jpg",
  "/assets/A2ZD8.jpg",
  "/assets/A9L89.jpg",
  "/assets/B8AMY.jpg",
  "/assets/G7K8U.jpg",
  "/assets/M4JAN.jpg",
  "/assets/M5JCT.jpg",
  "/assets/MAGH3.jpg",
  "/assets/P3AHT.jpg",
  "/assets/P4X47.jpg",
  "/assets/R8B9Q.jpg",
  "/assets/UCL7Y.jpg",
  "/assets/V837M.jpg",
  "/assets/WGM27.jpg",
  "/assets/WV8Q4.jpg",
  "/assets/YDM68.jpg",
  "/assets/ZG75H.jpg",
  "/assets/ZYJP2.jpg"


 ]
 listaSesso = [
    { id: "M", tipo: "maschio" },
    { id: "F", tipo: "femmina" }
]
listaTaglia = [
    { id: "G", tipo: "grande" },
    { id: "ME", tipo: "media" },
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
listaRegioni = [
    { id: "a", tipo: "abruzzo" },
    { id: "b", tipo: "basilicata" },
    { id: "c", tipo: "calabria" },
    { id: "d", tipo: "campania" },
    { id: "e", tipo: "emilia-romagna" },
    { id: "f", tipo: "friuli" },
    { id: "g", tipo: "lazio" },
    { id: "h", tipo: "liguria" },
    { id: "i", tipo: "lombardia" },
    { id: "j", tipo: "marche" },
    { id: "k", tipo: "molise" },
    { id: "l", tipo: "piemonte" },
    { id: "m", tipo: "puglia" },
    { id: "n", tipo: "sardegna" },
    { id: "o", tipo: "sicilia" },
    { id: "p", tipo: "toscana" },
    { id: "q", tipo: "trentino" },
    { id: "r", tipo: "umbria" },
    { id: "s", tipo: "valle d'aosta" },
    { id: "t", tipo: "veneto" }


]


contact = {
    firstName: "CFR",
    comment: "No comment",
    subscribe: true,
    contactMethod: 2 // this id you'll send and get from backend
}


  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informazioni',
  templateUrl: './informazioni.component.html',
  styleUrls: ['./informazioni.component.css']
})
export class InformazioniComponent implements OnInit {

  constructor() { }


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
 contactMethods = [
    { id: 1, label: "Email" },
    { id: 2, label: "Phone" }
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

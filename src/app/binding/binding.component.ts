import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  titre : string = "demo du Data Binding"

  status : boolean = true;
  chargerTitre(){
    this.titre="mon nouveau titre"
  }
  nom : string = "ayoub gaouet";
    constructor() { }

  ngOnInit(): void {
  }

}

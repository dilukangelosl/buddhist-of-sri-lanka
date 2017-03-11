import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {


  locations:any  ;



  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.locations = [

      {
        name:"CENTRAL PROVINCE"
      },
      {
        name:"EASTERN PROVINCE"
      },
      {
        name:"NOTHERN PROVINCE"
      },
      {
        name:"SOUTHERN PROVINCE"
      },
      {
        name:"WESTERN PROVINCE"
      },
      {
        name:"NORTH WESTERN PROVINCE"
      },
      {
        name:"NORTH CENTRAL PROVINCE"
      },
      {
        name:"UVA PROVINCE"
      },
      {
        name:"SABARAGAMUWA PROVINCE"
      }


    ]


  }


}

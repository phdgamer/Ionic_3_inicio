import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public NomeUsuario:string = "nheee";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros(num1:number, num2:number): void{

    alert(num1+num2);

  }

  ionViewDidLoad() {
    
    //this.somaDoisNumeros(10, 10);
  }

  
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ScanHistoryDetailPage } from "../scan-history-detail/scan-history-detail";


/**
 * Generated class for the ScanHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan-history',
  templateUrl: 'scan-history.html',
})
export class ScanHistoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanHistoryPage');
  }

  checkDetail(){
    this.navCtrl.push(ScanHistoryDetailPage);
  }

}

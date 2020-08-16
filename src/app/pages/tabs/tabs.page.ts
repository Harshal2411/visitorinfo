import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {

  constructor(private db : DatabaseService, private alertCtrl: AlertController,
    private platform: Platform,) {
    this.db.createDB()
   }
  
  ngOnInit() {
  }

  async appClose() {
    const alert = await this.alertCtrl.create({
      subHeader: 'Do you want close the App ?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            navigator['app'].exitApp()
          }
        }
      ],
    })
    await alert.present();
  }

}

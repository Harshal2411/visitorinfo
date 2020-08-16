import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {
  details:any
  constructor(private iab: InAppBrowser, private db:DatabaseService) { 
    this.details = this.db.getNewsDetail()
    console.log(this.details)
  }

  ngOnInit() {
   
  }
  openLink(){
    this.iab.create(this.details.url);
  }
}

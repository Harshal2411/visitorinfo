import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-visitorlog',
  templateUrl: './visitorlog.page.html',
  styleUrls: ['./visitorlog.page.scss'],
})
export class VisitorlogPage implements OnInit {
  logs:any
  constructor(private databaseService : DatabaseService) { 
    
  }
  ionViewWillEnter(){
    console.log("enter")
    this.logs = this.databaseService.row_data
    console.log(this.logs)
  }
  ngOnInit() {
    this.logs = this.databaseService.row_data
    console.log(this.logs)
  }

}

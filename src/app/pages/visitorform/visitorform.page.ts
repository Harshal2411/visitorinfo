import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from 'src/app/service/database.service';

@Component({
  selector: 'app-visitorform',
  templateUrl: './visitorform.page.html',
  styleUrls: ['./visitorform.page.scss'],
})
export class VisitorformPage implements OnInit {
date:any
  constructor( private databaseService : DatabaseService ) { 
  let rowDate = new Date();
  this.date =  rowDate.toISOString().substring(0, 10);

  }

  ngOnInit() {
  }
  

  


  submit(form: NgForm ){
  this.databaseService.insert(form, this.date)
  form.reset()
  }

}

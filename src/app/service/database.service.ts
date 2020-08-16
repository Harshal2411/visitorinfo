import { Injectable } from '@angular/core';
import { SQLite,SQLiteObject } from '@ionic-native/sqlite/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  database:any
  row_data:any
  newDetail:any
  constructor(private sqlite: SQLite, private toastController: ToastController) { 
    
  }
  createDB(){
    this.sqlite.create({
      name: 'visitorInfo.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.database =  db
        db.executeSql('create table IF NOT EXISTS visitorlog(name TEXT,email TEXT,typeofvisit TEXT,dateofvisit TEXT, timeofentry TEXT,timeofexit TEXT)', [])
          .then(() => {console.log('Executed SQL')
        this.getRows()
        })
          .catch(e => console.log(e));
      })
      .catch(e => console.log(e));
  }

  getRows() {
       this.database.executeSql('SELECT * FROM visitorlog', [])
      .then((res) => {
        this.row_data = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            this.row_data.push(res.rows.item(i));
          }
        }
        //console.log(this.row_data)
      })
      .catch(e => {
        alert("error " + JSON.stringify(e))
      });
  }

  insert(form,date){
   return this.database.executeSql('INSERT INTO visitorlog (name, email, typeofvisit, dateofvisit, timeofentry, timeofexit) VALUES (?, ?, ?, ?, ?, ?)',[form.value.name, form.value.email, form.value.typeofvisit, date, form.value.entryTime, form.value.exitTime] )
    .then(data => {
      
       console.log(JSON.stringify(data))
       this.getRows()
       this.toast()
     });
  }

  setNewsDetail(data){
    this.newDetail = data
  }

  getNewsDetail(){
    return this.newDetail
  }


  async toast(){
    const toast = await this.toastController.create({
      message: 'Visitor info submitted',
      position: 'bottom',
      duration: 3000,
    });
    toast.present();
  }
}

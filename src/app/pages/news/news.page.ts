import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatabaseService } from 'src/app/service/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
 news:any = ''

  constructor(private http: HttpClient, private db: DatabaseService,
    private router:Router) { 
    this.getNews()
    }
  ngOnInit() {
    
}



  getNews(){
    this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2020-08-15&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98').subscribe(data=>{
      //process the json data
      console.log(data)
      this.news = data
    
      for (var i = 0; i < this.news.articles.length; i++) {
        
        let dateTime=this.news.articles[i].publishedAt.split("T")
        let date=dateTime[0]
        let time=dateTime[1].substring(0,dateTime[1].length-1)
        this.news.articles[i].date = date
        this.news.articles[i].time = time
      }
      })
      
  }

  details(item){
    this.db.setNewsDetail(item)
    this.router.navigateByUrl('/news-detail')
  }
}

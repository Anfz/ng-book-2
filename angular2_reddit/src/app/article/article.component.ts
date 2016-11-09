import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'], 
  host: {
  	class: 'row' //sets the class row on the app-article tag
  }
})
export class ArticleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

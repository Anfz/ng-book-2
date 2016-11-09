import { Component, OnInit } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'], 
  host: {
  	class: 'row' //sets the class row on the app-article tag
  }
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor() { 
  	this.article = new Article(
    'Angular 2',
    'http://angular.io',
     10);
  }
  
  voteUp() {
  	this.article.voteUp(); 
  	return false; // return false stops the page from reloading
  }

  voteDown() {
  	this.article.voteDown(); 
  	return false;
  }

  ngOnInit() {
  }

}

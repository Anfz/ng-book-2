import { Component, OnInit, Input } from '@angular/core';
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
   @Input() article: Article;

    
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

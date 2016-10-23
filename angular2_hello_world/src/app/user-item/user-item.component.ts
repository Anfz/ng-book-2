import { Component, 
	     OnInit, 
	     Input  // allows for parameters
} from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name:  string; // <-- added Input annotation
  
  constructor() { 
  }

  ngOnInit() {
  }

}

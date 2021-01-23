import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {

  constructor(public data:DataService) { }
text="";
  ngOnInit(): void {
    this.data.change.subscribe(x=>this.text=x)
  }

}

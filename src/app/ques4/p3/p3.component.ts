import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component implements OnInit {

  constructor(public data:DataService) { }
  text="";
    ngOnInit(): void {
      this.data.change.subscribe(x=>this.text=x)
    }

}

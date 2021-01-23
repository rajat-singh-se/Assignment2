import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {

  constructor(public data:DataService) { }
  text="";
    ngOnInit(): void {
      this.data.change.subscribe(x=>this.text=x)
    }

}

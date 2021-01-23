import { Component, OnInit } from '@angular/core';
import{DataService} from '../data.service';
@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {

  constructor(public data:DataService) { }
text="";
  ngOnInit(): void {
    this.data.change.subscribe(x=>this.text=x)
  }

}

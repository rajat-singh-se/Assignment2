import { Component, OnInit } from '@angular/core';
import{DataService } from '../data.service';
@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component implements OnInit {

  text:string="";

  constructor(public data:DataService) { }

  ngOnInit(): void {
  }
  onchange()
  {

    this.data.onchange(this.text);
  }
}

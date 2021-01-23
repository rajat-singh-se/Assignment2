import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num:number=0;
  dis:boolean=false;
  text="";

  display(){
    var n=parseInt(this.text);
    if(n%2==0)
    {
      this.num=n*n-1;

    }
    else{
      this.num=n*n+1;
    }
    this.dis=true;
  }

}

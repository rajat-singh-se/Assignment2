import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ques2',
  templateUrl: './ques2.component.html',
  styleUrls: ['./ques2.component.css']
})
export class Ques2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrX:Array<any>=[];
  sButton:boolean=false;

  addX(){
    let data={
      x:'',
      y:[]};
    this.arrX.push(data);
    this.sButton=true;
  }
  addY(i:number){
    let data={y:''}
    this.arrX[i].y.push(data);

  }

  submitx(i:any,data:any){
    this.arrX[i].x=data;
  }

  submity(i:number,j:number,data:any){
    this.arrX[i].y[j].y=data;
  }

text="";
  showx()
  {
    console.log(this.arrX);
    this.text="Check Output on Console:"
  }



}

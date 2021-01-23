import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ques3',
  templateUrl: './ques3.component.html',
  styleUrls: ['./ques3.component.css']
})
export class Ques3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num ="";
  text="";
  button:boolean=false;
  count:number=2;



  myArray = [
    { id:1, name:''},

  ];

  removeItem(id:any){
     this.myArray = this.myArray.filter(item => item.id !== id);
     if(this.myArray.length<=1)
     {
       this.button=false;
     }

     this.text="";
  }



  addItem(){

    let data={id:this.count++,name:""};
    this.myArray.push(data);
    this.button=true;
    this.text="";

  }



  showItem(){


    for (let i = 0; i <  this.myArray.length; i++) {

      console.log("phoneNumber"+(i+1)+":"+this.myArray[i].name);


    }

this.text="cheak Console for Result";
  }
}



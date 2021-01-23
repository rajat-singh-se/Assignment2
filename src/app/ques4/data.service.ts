import { Injectable } from '@angular/core';
import{ BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private input=new BehaviorSubject<string>("");
  public change=this.input.asObservable();

  public onchange(t:string){
    this.input.next(t);
  }
}

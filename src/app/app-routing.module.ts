import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Ques1Component } from './ques1/ques1.component';
import { Ques2Component } from './ques2/ques2.component';
import { Ques3Component } from './ques3/ques3.component';
import { Ques4Component } from './ques4/ques4.component';

const routes: Routes = [
 { path:'ques1', component:Ques1Component},
 {
   path:'ques2', component:Ques2Component},
   {
     path:'ques3',component:Ques3Component},
     {
       path:'ques4', component:Ques4Component
     },{
      path: '**', component:Ques1Component
     }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

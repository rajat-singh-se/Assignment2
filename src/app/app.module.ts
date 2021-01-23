import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ques1Component } from './ques1/ques1.component';
import { Ques2Component } from './ques2/ques2.component';
import { Ques3Component } from './ques3/ques3.component';
import { Ques4Component } from './ques4/ques4.component';

import { P1Component } from './ques4/p1/p1.component';
import { P2Component } from './ques4/p2/p2.component';
import { P3Component } from './ques4/p3/p3.component';
import { P4Component } from './ques4/p4/p4.component';
import { P5Component } from './ques4/p5/p5.component';

@NgModule({
  declarations: [
    AppComponent,
    Ques1Component,
    Ques2Component,
    Ques3Component,
    Ques4Component,

    P1Component,
    P2Component,
    P3Component,
    P4Component,
    P5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

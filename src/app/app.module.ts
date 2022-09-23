import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import {FormsModule} from '@angular/forms';
import { PartFourComponent } from './component/part-four/part-four.component';
import { PartFiveComponent } from './component/part-five/part-five.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PartFourComponent,
    PartFiveComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

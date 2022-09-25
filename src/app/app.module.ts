import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PartFourComponent } from './component/part-four/part-four.component';
import { PartFiveComponent } from './component/part-five/part-five.component';
import { StudentDetailComponent } from './component/student-detail/student-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    PartFourComponent,
    PartFiveComponent,
    StudentDetailComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

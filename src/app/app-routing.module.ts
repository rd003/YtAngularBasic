import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { PartFiveComponent } from './component/part-five/part-five.component';
import { PartFourComponent } from './component/part-four/part-four.component';
import { ReactiveFormComponent } from './component/reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './component/template-driven/template-driven.component';

const routes: Routes = [
  {path:'student',component:PartFiveComponent},
  {path:'first',component:FirstComponent},
  {path:'fourth',component:PartFourComponent},
  {path:'template-driven',component:TemplateDrivenComponent},
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'',redirectTo:'/student',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

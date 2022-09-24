import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './component/first/first.component';
import { PartFiveComponent } from './component/part-five/part-five.component';
import { PartFourComponent } from './component/part-four/part-four.component';

const routes: Routes = [
  {path:'student',component:PartFiveComponent},
  {path:'first',component:FirstComponent},
  {path:'fourth',component:PartFourComponent},
  {path:'',redirectTo:'/student',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

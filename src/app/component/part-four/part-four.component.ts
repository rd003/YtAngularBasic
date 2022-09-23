import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-four',
  templateUrl: './part-four.component.html',
  styleUrls: ['./part-four.component.css']
})
export class PartFourComponent implements OnInit {
  
  isActivated=false;
  //classes="active box"; 
  // classes= ['active','box'];
  classes= {'active':this.isActivated,'deactive':!this.isActivated,'box':true};

  // hidden
  hidden=true;

  // disable
  disable=true;

  // ngIf 
  display=true;

  // ngFor
  names:string[]=['john','max','mike','tony'];
  constructor() { }

  // ngSwitch
  number=13;

  ngOnInit(): void {
  }

}

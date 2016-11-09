import { Component, OnInit, ViewChild } from '@angular/core';

import { SidenavComponent } from '../sidenav/sidenav.component';

@Component({
  selector: 'app-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrls: ['./sidenav-layout.component.css']
})
export class SidenavLayoutComponent implements OnInit {

  @ViewChild('sidenav')
  sidenav: SidenavComponent;

  open() {
    // this.sidenav.open();
  }

  constructor() { }

  ngOnInit() {
    this.open();
    // setTimeout(() => console.log( this.sidenav ) , 3000);
  }

}

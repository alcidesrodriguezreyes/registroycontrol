import { 
  Component, 
  OnInit, 
  Renderer, 
  HostBinding, 
  transition, 
  animate, 
  state, 
  trigger, 
  style,
  Input
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  animations: [
    trigger('isOpen', [
      state('open', style({
        transform: 'translateX(0%)'
      })),
      transition('* => open', animate('100ms ease-out'))
    ])
  ]
})
export class SidenavComponent implements OnInit {
  // _opened: boolean = false;
  isOpen;
  @Input() backdrop;

  constructor() { }

  ngOnInit() {
    console.log(this.backdrop);
    this.backdrop.classList.add('sidenav-backdrop');
  }

  open() {
    this._opened = !this._opened;
    this.isOpen = 'open';
  }

  @HostBinding('class.open') _opened: boolean;

}

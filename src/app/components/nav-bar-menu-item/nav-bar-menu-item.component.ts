import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-nav-bar-menu-item',
  templateUrl: './nav-bar-menu-item.component.html',
  styleUrls: ['./nav-bar-menu-item.component.css']
})
export class NavBarMenuItemComponent {
  @Input() label: String;
  @Input() link: String;
}

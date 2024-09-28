import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { MenuComponent } from '../menu/menu.component';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from '../menu-button/menu-button.component';

@Component({
  selector: 'app-main-navbar',
  standalone: true,
  imports: [LogoComponent, MenuComponent, MenuButtonComponent, CommonModule],
  templateUrl: './main-navbar.component.html',
  styleUrl: './main-navbar.component.css'
})
export class MainNavbarComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

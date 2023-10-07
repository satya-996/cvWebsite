import { Component, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  collapseNavbar() {
    const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarNav = this.el.nativeElement.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarNav) {
      this.renderer.removeClass(navbarNav, 'show');
    }
  }
}


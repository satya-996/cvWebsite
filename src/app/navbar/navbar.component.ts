import { Component, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef,private router:Router) {}

  collapseNavbar() {
    const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarNav = this.el.nativeElement.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarNav) {
      this.renderer.removeClass(navbarNav, 'show');
    }
  }

  gotoPart(fragment: string) {
    this.router.navigate([''], { fragment: fragment});
  }
}



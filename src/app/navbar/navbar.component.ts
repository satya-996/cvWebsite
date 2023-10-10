import { Component, Renderer2, ElementRef, RendererStyleFlags2, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

type NavItems = {
  [key: string]: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2, private el: ElementRef, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.removeActiveClassFromNavItems();
    });
  }

  collapseNavbar() {
    const navbarToggler = this.el.nativeElement.querySelector('.navbar-toggler');
    const navbarNav = this.el.nativeElement.querySelector('.navbar-collapse');

    if (navbarToggler && navbarNav) {
      this.renderer.removeClass(navbarNav, 'show');
    }
  }

  gotoPart(fragment: string) {
    this.router.navigate([''], { fragment: fragment });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const fromTop = window.scrollY;

    const navItems: NavItems = {
      'home': 'homeNavItem',
      'education': 'educationNavItem',
      'skills': 'skillsNavItem',
      'projects': 'projectsNavItem',
      'awards': 'awardsNavItem',
      'communityservice': 'communityserviceNavItem',
      'experience': 'experienceNavItem',
      'certifications': 'certificationsNavItem',
      'mr': 'mrNavItem'
    }

    Object.values(navItems).forEach(item => {
      const navItem = document.getElementById(item);
      if (navItem) {
        navItem.classList.remove('active');
      }
    });

    for (const section in navItems) {
      const element = document.getElementById(section);
      if (element && element.offsetTop <= fromTop + 150) {
        const navItem = document.getElementById(navItems[section]);
        if (navItem) {
          navItem.classList.add('active');
        }
      }
    }
  }

  private removeActiveClassFromNavItems() {
    const navItems: NavItems = {
      'home': 'homeNavItem',
      'education': 'educationNavItem',
      'skills': 'skillsNavItem',
      'projects': 'projectsNavItem',
      'awards': 'awardsNavItem',
      'communityservice': 'communityserviceNavItem',
      'experience': 'experienceNavItem',
      'certifications': 'certificationsNavItem',
      'mr': 'mrNavItem'
    }

    Object.values(navItems).forEach(item => {
      const navItem = document.getElementById(item);
      if (navItem) {
        navItem.classList.remove('active');
      }
    });
  }
}

import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @ViewChild('mobileNavbar') mobileNavbar!: ElementRef;
  isOpen: boolean = false;

  toggleSidebar(event: Event) {
    event.stopPropagation();
    this.isOpen = !this.isOpen;
  }

  closeSidebar() {
    this.isOpen = false;
  }
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (this.mobileNavbar && !this.mobileNavbar.nativeElement.contains(event.target)) {
      this.closeSidebar();
    }
  }
}

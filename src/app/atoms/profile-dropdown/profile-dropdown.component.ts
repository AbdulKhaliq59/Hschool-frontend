import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-dropdown.component.html',
  styleUrl: './profile-dropdown.component.css'
})
export class ProfileDropdownComponent {
  isDropdownOpen = false;
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const dropdown = document.querySelector('.relative');
    if (dropdown && !dropdown.contains(target)) {
      this.isDropdownOpen = false
    }
  }
}

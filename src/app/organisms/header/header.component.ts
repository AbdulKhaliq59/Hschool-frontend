import { Component } from '@angular/core';
import { ProfileDropdownComponent } from '../../atoms/profile-dropdown/profile-dropdown.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ProfileDropdownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

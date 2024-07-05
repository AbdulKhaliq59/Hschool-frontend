import { Component } from '@angular/core';
import { SearchFormComponent } from '../../molecules/search-form/search-form.component';
import { MainLayoutComponent } from '../../templates/main-layout/main-layout.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchFormComponent, MainLayoutComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

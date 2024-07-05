import { Component } from '@angular/core';
import { ButtonComponent } from '../../atoms/button/button.component';
import { InputFieldComponent } from '../../atoms/input-field/input-field.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ButtonComponent, InputFieldComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css'
})
export class SearchFormComponent {

}

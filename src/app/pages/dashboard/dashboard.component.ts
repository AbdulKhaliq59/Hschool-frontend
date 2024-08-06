import { Component } from '@angular/core';
import { HeaderComponent } from '../../organisms/header/header.component';
import { DashboardMoleculesComponent } from '../../molecules/dashboard-molecules/dashboard-molecules.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, DashboardMoleculesComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

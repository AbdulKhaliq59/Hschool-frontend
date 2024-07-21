import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { graphqlProvider } from './graphql.provider';
import { ToastrModule } from 'ngx-toastr';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
  ],
  providers: [graphqlProvider],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'hschool-frontend';
}

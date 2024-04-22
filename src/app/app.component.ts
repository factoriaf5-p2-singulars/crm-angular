import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { HeaderComponent } from './layout/header/header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, DashboardComponent, NavbarComponent]
})
export class AppComponent {
  title = 'acme-crm-project';
}

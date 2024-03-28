import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomeComponent,RouterModule],
  styleUrl: './app.component.css',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/favicon.ico" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
})
export class AppComponent {
  title = 'homes';
}

import { Component, signal } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  title = 'dashboard-metrica';
}

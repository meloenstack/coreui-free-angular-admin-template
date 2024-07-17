import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-remittance',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './remittance.component.html',
  styleUrl: './remittance.component.scss',
})
export class RemittanceComponent {}

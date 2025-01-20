import { Component, Inject } from '@angular/core';
import { PrimaryButtonComponent } from '../../../components/primary-button/primary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-section',
  imports: [PrimaryButtonComponent],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
})
export class SectionComponent {

  constructor(private router: Router){}

  onNavigate(): void {
    this.router.navigate(['register'])
  }
}

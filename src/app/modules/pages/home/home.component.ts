import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { ActivityCreationComponent } from '../../home/activity-creation/activity-creation.component';
import { EmissionService } from '../../../shared/services/emission.service';
import { Emission } from '../../../shared/interfaces/emission';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainNavbarComponent, ActivityCreationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  private emissions: Emission[] = [];

  constructor(private emissionService: EmissionService) {}

  ngOnInit(): void {
    this.emissionService.getAllEmissions()
      .subscribe({
        next: (emissions) => {
          this.emissions = emissions;
        } 
      });
  }

  
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from '../../../shared/components/google-map/google-map.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { ActivityCategoryComponent } from "../activity-category/activity-category.component";
import { Emission } from '../../../shared/interfaces/emission';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-activity-creation',
  standalone: true,
  imports: [GoogleMapComponent, SearchBarComponent, ActivityCategoryComponent, CommonModule],
  templateUrl: './activity-creation.component.html',
  styleUrl: './activity-creation.component.css'
})
export class ActivityCreationComponent {
  emissions: Emission[] = [];
  selectedEmission: Emission | null = null;
  showCategory: boolean = false;

  onEmissionSelected(emissions: Emission[]) {
    if (emissions.length > 0) {
      this.selectedEmission = emissions[0];
    } else {
      this.selectedEmission = null;
    }
  }

  onShowCategory() {
    this.showCategory = true;
  }
}

import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../../shared/components/google-map/google-map.component';
import { SearchBarComponent } from '../../../shared/components/search-bar/search-bar.component';
import { ActivityCategoryComponent } from "../activity-category/activity-category.component";

@Component({
  selector: 'app-activity-creation',
  standalone: true,
  imports: [GoogleMapComponent, SearchBarComponent, ActivityCategoryComponent],
  templateUrl: './activity-creation.component.html',
  styleUrl: './activity-creation.component.css'
})
export class ActivityCreationComponent {

}

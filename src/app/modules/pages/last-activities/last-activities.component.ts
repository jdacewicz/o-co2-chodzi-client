import { Component } from '@angular/core';
import { MainNavbarComponent } from '../../../shared/components/main-navbar/main-navbar.component';
import { HistoryComponent } from '../../last-activities/history/history.component';

@Component({
  selector: 'app-last-activities',
  standalone: true,
  imports: [MainNavbarComponent, HistoryComponent],
  templateUrl: './last-activities.component.html',
  styleUrl: './last-activities.component.css'
})
export class LastActivitiesComponent {

}

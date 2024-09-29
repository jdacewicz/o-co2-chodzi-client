import { Component } from '@angular/core';
import { Activity } from '../../../shared/interfaces/activity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  activities: Activity[] = [
    { name: 'Rower', value: 13.02, date: new Date(2024, 0, 1) },
    { name: 'Samochód', value: 45.31, date: new Date(2024, 0, 1) },
    { name: 'Kebab', value: 2, date: new Date(2024, 0, 2) },
    { name: 'Rower', value: 17, date: new Date(2024, 0, 2) },
    { name: 'Samochod', value: 65.88, date: new Date(2024, 0, 3) },
    { name: 'Rower', value: 17.44, date: new Date(2024, 0, 3) },
    { name: 'Rower', value: 8, date: new Date(2024, 0, 3) },
  ];
}

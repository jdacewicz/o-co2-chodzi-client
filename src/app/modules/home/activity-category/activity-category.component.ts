import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-category',
  standalone: true,
  imports: [ActivityCategoryComponent, CommonModule],
  templateUrl: './activity-category.component.html',
  styleUrl: './activity-category.component.css'
})
export class ActivityCategoryComponent {
  isVisible = false;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
}

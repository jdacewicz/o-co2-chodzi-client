import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Emission } from '../../interfaces/emission';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @Input() emissions: Emission[] = [];
  @Output() emissionSelected = new EventEmitter<Emission[]>();
  @Output() showCategory = new EventEmitter<void>();
  searchTerm: string = '';

  onSearch() {
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.showCategory.emit(); // Emit event to show activity category
    }
  }
}

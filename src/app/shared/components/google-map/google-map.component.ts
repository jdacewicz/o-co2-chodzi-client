import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.css'
})
export class GoogleMapComponent implements OnInit {
  
  private map!: L.Map;

  ngOnInit() {
    this.map = L.map("map").setView([50.06768712493273, 19.991585216758555], 10);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
}
}

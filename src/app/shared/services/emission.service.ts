import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Emission } from '../interfaces/emission';

@Injectable({
  providedIn: 'root'
})
export class EmissionService {

  constructor(private httpClient: HttpClient) { }

  getAllEmissions() {
    return this.httpClient.get<Emission[]>('http://10.250.192.95:4200/discovery');
  } 
}

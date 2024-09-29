import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LastActivitiesComponent } from './modules/pages/last-activities/last-activities.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'last-activities', component: LastActivitiesComponent}
];

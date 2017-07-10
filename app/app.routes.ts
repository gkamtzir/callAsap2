import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

export const AppRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'about', component: AboutComponent }
];

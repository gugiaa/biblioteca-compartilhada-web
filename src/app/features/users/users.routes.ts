import { Routes } from '@angular/router';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

export const USERS_ROUTES: Routes = [
  { path: 'profile', component: UserProfileComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
];

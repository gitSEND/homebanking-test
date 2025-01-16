import { Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { AccountMovementsComponent } from './account-movements/account-movements.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user-detail', pathMatch: 'full' },
  { path: 'user-detail', component: UserDetailComponent },
  { path: 'account-balance', component: AccountBalanceComponent },
  { path: 'account-movements', component: AccountMovementsComponent },
];

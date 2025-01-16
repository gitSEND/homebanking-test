import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AccountBalanceComponent } from './account-balance/account-balance.component';
import { AccountMovementsComponent } from './account-movements/account-movements.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AccountBalanceComponent, AccountMovementsComponent, UserDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
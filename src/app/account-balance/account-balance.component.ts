import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-account-balance',
  imports: [CommonModule, MatTableModule],
  templateUrl: './account-balance.component.html',
  styleUrl: './account-balance.component.css'
})
export class AccountBalanceComponent {
  accounts: any[] = [];
  displayedColumns: string[] = ['name', 'balance'];

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAccountBalances().subscribe((data) => {
      this.accounts = data;
    });
  }
}

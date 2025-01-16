import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-account-movements',
  imports: [CommonModule, MatTableModule],
  templateUrl: './account-movements.component.html',
  styleUrl: './account-movements.component.css'
})
export class AccountMovementsComponent {
  movements: any[] = [];
  displayedColumns: string[] = ['date', 'amount', 'description'];

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAccountMovements().subscribe((data) => {
      this.movements = data;
    });
  }
}

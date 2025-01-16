import { Component, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-account-movements',
  imports: [CommonModule],
  templateUrl: './account-movements.component.html',
  styleUrl: './account-movements.component.css'
})
export class AccountMovementsComponent {
  movements: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getAccountMovements().subscribe((data) => {
      this.movements = data;
    });
  }
}

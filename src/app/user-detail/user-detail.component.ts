import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-user-detail',
  imports: [MatCardModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  user: any;

  constructor(private readonly apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserDetails().subscribe((data) => {
      console.log('data response =>', data)
      this.user = data;
    });
  }
}

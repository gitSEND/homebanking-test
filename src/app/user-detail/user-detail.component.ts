import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  user: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUserDetails().subscribe((data) => {
      console.log('data response =>', data)
      this.user = data;
    });
  }
}

import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ApiService} from '@core/services/api.service';
import {User} from '@core/models/users.model';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  apiService = inject(ApiService)
  users: User[] | null = null;

  ngOnInit() {
    this.apiService.getUsers$().subscribe((res: User[]) => {
      console.log(res)
      this.users = res;
    });

  }
}

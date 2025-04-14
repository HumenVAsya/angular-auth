import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../core/models/users.model';
import { UsersGatewayService } from '../../core/services/users-gateway.service';

// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  gatewayUsers = inject(UsersGatewayService);
  users: User[] | null = null;

  ngOnInit() {
    this.gatewayUsers
      .getUsers()
      // .pipe(takeUntilDestroyed())
      .subscribe((res: User[]) => {
        this.users = res;
      });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { authService} from '@auth/services/auth.sevrice';
import { AuthStore } from '@auth/store/auth.store';
import {UserRole} from '@core/enums/userRole.enum'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterModule, NgIf]
})

export class HeaderComponent implements OnInit{
  router = inject(Router)
  authService = inject(authService);
  readonly authStore = inject(AuthStore);
  readonly UserRole = UserRole;
  store = inject(AuthStore)
  isAuthenticated = false;
  storedUser = localStorage.getItem('user');

  ngOnInit() {
    if(this.storedUser){
      const userData = JSON.parse(this.storedUser)

      this.store.authorization(userData)
    }

    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}

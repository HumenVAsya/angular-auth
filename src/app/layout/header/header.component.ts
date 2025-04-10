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


  logout() {
    this.authService.logout();

    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    console.log(this.authStore.role());
  }
}

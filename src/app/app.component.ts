import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { authService} from '@auth/services/auth.sevrice';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '@layout/header/header.component'
import {AuthStore} from '@auth/store/auth.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, NgIf, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  authService = inject(authService);
  store = inject(AuthStore)
  isAuthenticated = false;
  storedUser = localStorage.getItem('user');


  ngOnInit(): void {
    if(this.storedUser){
      const userData = JSON.parse(this.storedUser)

      this.store.authorization(userData)
    }

    this.authService.isAuthenticated$.subscribe(auth => {
      this.isAuthenticated = auth;
    });
  }
}

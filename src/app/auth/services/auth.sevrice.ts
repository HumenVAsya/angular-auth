import {inject, Injectable} from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { ApiService as api } from '@core/services/api.service';
import { ResponseModel } from '@auth/models/response.model';
import { AuthStore } from '@auth/store/auth.store'
import {RequestModel} from '@auth/models/request.model';

@Injectable({
  providedIn: 'root'
})
export class authService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  api = inject(api)
  store = inject(AuthStore)

  login(user: RequestModel) {
    return this.api.getLogin$(user).pipe(
      tap((res: ResponseModel) => {
        const { token } = res;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(res));

        this.store.authorization(res)
        this.isAuthenticatedSubject.next(true);
      })
    );
  }

  logout() {
    localStorage.clear()
    this.isAuthenticatedSubject.next(false);
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}




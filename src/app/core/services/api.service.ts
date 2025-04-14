import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../environment/api.environment';
import { Observable } from 'rxjs';
import { ResponseModel } from '@auth/models/response.model';
import { RequestModel } from '@auth/models/request.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http: HttpClient = inject(HttpClient);

  getLogin$(user: RequestModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/login`, user);
  }
}

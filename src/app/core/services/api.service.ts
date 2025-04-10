import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../environment/api.environment';
import {GraphResponse} from '../models/graph.model';
import {Observable} from 'rxjs';
import {ResponseModel} from '@auth/models/response.model';
import {RequestModel} from '@auth/models/request.model';
import {User} from '@core/models/users.model';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  http: HttpClient = inject(HttpClient);

  getUsers$(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`)
  }

  getLogin$(user: RequestModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${API_URL}/login`, user)
  }

  getUserAssessments$() {
    return this.http.get(`${API_URL}/userassessments`)
  }

  getGraph$(userId: string) {
    return this.http.get<GraphResponse>(`${API_URL}/userassessments/graph?id=${userId}`)
  }
}

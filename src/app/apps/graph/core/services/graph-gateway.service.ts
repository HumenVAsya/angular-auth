import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'app/environment/api.environment';
import { GraphResponse } from '../models/graph.model';

@Injectable({
  providedIn: 'root',
})
export class GraphGatewayService {
  http: HttpClient = inject(HttpClient);

  getGraph(userId: string) {
    return this.http.get<GraphResponse>(
      `${API_URL}/userassessments/graph?id=${userId}`,
    );
  }
}

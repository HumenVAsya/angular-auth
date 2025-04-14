import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from 'app/environment/api.environment';
import { Observable } from 'rxjs';
import { AssessmentModel } from '../models/assessment.model';

@Injectable({
  providedIn: 'root',
})
export class AssessmentsGatewayService {
  http: HttpClient = inject(HttpClient);

  getUserAssessments(): Observable<AssessmentModel[]> {
    return this.http.get<AssessmentModel[]>(`${API_URL}/userassessments`);
  }
}

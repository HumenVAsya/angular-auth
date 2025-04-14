import { inject, Injectable } from '@angular/core';
import { GraphGatewayService } from '../services/graph-gateway.service';
import { GraphData } from '../models/graph.model';
import { BehaviorSubject, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GraphFacadeService {
  private gateway = inject(GraphGatewayService);

  private graphDataSubject = new BehaviorSubject<GraphData | null>(null);

  graphData$ = this.graphDataSubject.asObservable();

  init(id: string): void {
    this.gateway
      .getGraph(id)
      .pipe(
        map((res) => res.data),
        catchError((error) => {
          console.error('Failed to load graph:', error);
          return of(null);
        }),
      )
      .subscribe((data) => {
        if (data) {
          this.graphDataSubject.next(data);
        }
      });
  }
}

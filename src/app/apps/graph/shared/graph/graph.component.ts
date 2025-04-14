import { Component, inject, OnInit } from '@angular/core';
import { GraphFacadeService } from '../../core/facades/graph-facade.service';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { createBarChart } from 'app/apps/graph/core/utils/chart.util';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  chart: Chart | null = null;
  facade = inject(GraphFacadeService); // підключаємо фасад
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const assessmentId: string = params['id'];
      if (assessmentId) {
        this.facade.init(assessmentId);
      }
    });

    this.facade.graphData$.subscribe((data) => {
      if (data) {
        this.chart = null;
        this.chart = createBarChart('myChart', data);
      }
    });
  }
}

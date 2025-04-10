import { Component, OnInit } from '@angular/core';
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { ApiService } from '@core/services/api.service';
import {ActivatedRoute} from '@angular/router';
import {NgIf} from "@angular/common";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart: Chart | null = null;
  assessmentId: string | null = null;

  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.assessmentId = params['id'];
      if (this.assessmentId) {
        this.fetchData(this.assessmentId);
      }
    });
  }

  fetchData(id: string) {
    this.apiService.getGraph$(id).subscribe(res => {
      this.createChart(res.data);
    });
  }

  createChart(data: any) {

    if (this.chart) {
      this.chart.destroy();
    }

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Agreeableness', 'Drive', 'Luck', 'Openness'],
        datasets: [{
          label: 'Scores',
          data: [
            data.agreeableness,
            data.drive,
            data.luck,
            data.openness
          ],
          backgroundColor: ['#4e79a7', '#f28e2b', '#e15759', '#76b7b2'],
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          }
        }
      }
    });
  }
}

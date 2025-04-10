import { Component, OnInit } from '@angular/core';
import { ApiService } from '@core/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, RouterModule],
})

export class AssessmentCardComponent implements OnInit {
  assessments: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    this.apiService.getUserAssessments$().subscribe(
      (res: any) => {
        this.assessments = res.data || res;
      },
    );
  }
}

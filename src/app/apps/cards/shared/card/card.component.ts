import { Component, inject, OnInit } from '@angular/core';
// import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AssessmentModel } from '../../core/models/assessment.model';
import { AssessmentsGatewayService } from '../../core/services/assessments-gateway.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [CommonModule, RouterModule, NgFor],
})
export class AssessmentCardComponent implements OnInit {
  assessments: AssessmentModel[] = [];
  gatewayAssessment = inject(AssessmentsGatewayService);

  ngOnInit() {
    this.gatewayAssessment
      .getUserAssessments()
      // .pipe(takeUntilDestroyed())
      .subscribe((res: AssessmentModel[]) => {
        this.assessments = res;
      });
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiningPipelineReportComponent } from './joining-pipeline-report.component';

describe('JoiningPipelineReportComponent', () => {
  let component: JoiningPipelineReportComponent;
  let fixture: ComponentFixture<JoiningPipelineReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiningPipelineReportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoiningPipelineReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

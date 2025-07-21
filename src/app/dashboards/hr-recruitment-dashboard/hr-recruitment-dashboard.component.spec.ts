import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRecruitmentDashboardComponent } from './hr-recruitment-dashboard.component';

describe('HrRecruitmentDashboardComponent', () => {
  let component: HrRecruitmentDashboardComponent;
  let fixture: ComponentFixture<HrRecruitmentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HrRecruitmentDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HrRecruitmentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

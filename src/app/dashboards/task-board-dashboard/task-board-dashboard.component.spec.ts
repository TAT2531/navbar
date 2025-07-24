import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardDashboardComponent } from './task-board-dashboard.component';

describe('TaskBoardDashboardComponent', () => {
  let component: TaskBoardDashboardComponent;
  let fixture: ComponentFixture<TaskBoardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskBoardDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskBoardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

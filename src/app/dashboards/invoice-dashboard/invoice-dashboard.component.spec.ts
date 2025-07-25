import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceDashboardComponent } from './invoice-dashboard.component';

describe('InvoiceDashboardComponent', () => {
  let component: InvoiceDashboardComponent;
  let fixture: ComponentFixture<InvoiceDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvoiceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

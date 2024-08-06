import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMoleculesComponent } from './dashboard-molecules.component';

describe('DashboardMoleculesComponent', () => {
  let component: DashboardMoleculesComponent;
  let fixture: ComponentFixture<DashboardMoleculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardMoleculesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMoleculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

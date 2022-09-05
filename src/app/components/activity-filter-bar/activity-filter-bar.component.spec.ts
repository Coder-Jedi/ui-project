import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFilterBarComponent } from './activity-filter-bar.component';

describe('ActivityFilterBarComponent', () => {
  let component: ActivityFilterBarComponent;
  let fixture: ComponentFixture<ActivityFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFilterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFilterBarComponent } from './secondary-filter-bar.component';

describe('SecondaryFilterBarComponent', () => {
  let component: SecondaryFilterBarComponent;
  let fixture: ComponentFixture<SecondaryFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFilterBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

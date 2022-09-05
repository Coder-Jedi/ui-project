import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryFilterItemComponent } from './secondary-filter-item.component';

describe('SecondaryFilterItemComponent', () => {
  let component: SecondaryFilterItemComponent;
  let fixture: ComponentFixture<SecondaryFilterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryFilterItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryFilterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

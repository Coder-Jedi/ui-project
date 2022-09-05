import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituencyCardComponent } from './constituency-card.component';

describe('ConstituencyCardComponent', () => {
  let component: ConstituencyCardComponent;
  let fixture: ComponentFixture<ConstituencyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstituencyCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstituencyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

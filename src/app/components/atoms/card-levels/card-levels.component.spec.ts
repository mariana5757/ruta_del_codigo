import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLevelsComponent } from './card-levels.component';

describe('CardLevelsComponent', () => {
  let component: CardLevelsComponent;
  let fixture: ComponentFixture<CardLevelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLevelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLevelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingLogicTraineeComponent } from './programming-logic-trainee.component';

describe('ProgrammingLogicTraineeComponent', () => {
  let component: ProgrammingLogicTraineeComponent;
  let fixture: ComponentFixture<ProgrammingLogicTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingLogicTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingLogicTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

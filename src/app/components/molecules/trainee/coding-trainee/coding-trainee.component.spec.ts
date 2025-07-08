import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingTraineeComponent } from './coding-trainee.component';

describe('CodingTraineeComponent', () => {
  let component: CodingTraineeComponent;
  let fixture: ComponentFixture<CodingTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodingTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodingTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

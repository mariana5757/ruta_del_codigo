import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameworksTraineeComponent } from './frameworks-trainee.component';

describe('FrameworksTraineeComponent', () => {
  let component: FrameworksTraineeComponent;
  let fixture: ComponentFixture<FrameworksTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameworksTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameworksTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

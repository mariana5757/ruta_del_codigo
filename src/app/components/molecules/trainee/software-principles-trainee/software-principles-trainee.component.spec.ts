import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwarePrinciplesTraineeComponent } from './software-principles-trainee.component';

describe('SoftwarePrinciplesTraineeComponent', () => {
  let component: SoftwarePrinciplesTraineeComponent;
  let fixture: ComponentFixture<SoftwarePrinciplesTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwarePrinciplesTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwarePrinciplesTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersioningTraineeComponent } from './versioning-trainee.component';

describe('VersioningTraineeComponent', () => {
  let component: VersioningTraineeComponent;
  let fixture: ComponentFixture<VersioningTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VersioningTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersioningTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

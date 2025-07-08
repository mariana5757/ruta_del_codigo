import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersistenceTraineeComponent } from './persistence-trainee.component';

describe('PersistenceTraineeComponent', () => {
  let component: PersistenceTraineeComponent;
  let fixture: ComponentFixture<PersistenceTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersistenceTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersistenceTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicStylesTraineeComponent } from './graphic-styles-trainee.component';

describe('GraphicStylesTraineeComponent', () => {
  let component: GraphicStylesTraineeComponent;
  let fixture: ComponentFixture<GraphicStylesTraineeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphicStylesTraineeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphicStylesTraineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

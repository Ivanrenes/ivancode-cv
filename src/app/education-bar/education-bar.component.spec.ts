import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationBarComponent } from './education-bar.component';

describe('EducationBarComponent', () => {
  let component: EducationBarComponent;
  let fixture: ComponentFixture<EducationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

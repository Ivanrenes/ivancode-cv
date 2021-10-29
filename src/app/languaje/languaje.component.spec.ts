import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguajeComponent } from './languaje.component';

describe('LanguajeComponent', () => {
  let component: LanguajeComponent;
  let fixture: ComponentFixture<LanguajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

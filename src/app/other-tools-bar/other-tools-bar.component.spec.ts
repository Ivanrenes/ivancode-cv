import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherToolsBarComponent } from './other-tools-bar.component';

describe('OtherToolsBarComponent', () => {
  let component: OtherToolsBarComponent;
  let fixture: ComponentFixture<OtherToolsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherToolsBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherToolsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

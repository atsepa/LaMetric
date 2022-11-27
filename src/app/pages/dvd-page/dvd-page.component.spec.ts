import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvdPageComponent } from './dvd-page.component';

describe('DvdPageComponent', () => {
  let component: DvdPageComponent;
  let fixture: ComponentFixture<DvdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

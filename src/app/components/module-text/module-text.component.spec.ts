import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTextComponent } from './module-text.component';

describe('ModuleTextComponent', () => {
  let component: ModuleTextComponent;
  let fixture: ComponentFixture<ModuleTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

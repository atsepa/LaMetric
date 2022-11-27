import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCommentSelectorPageComponent } from './youtube-comment-selector-page.component';

describe('YoutubeCommentSelectorPageComponent', () => {
  let component: YoutubeCommentSelectorPageComponent;
  let fixture: ComponentFixture<YoutubeCommentSelectorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeCommentSelectorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeCommentSelectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

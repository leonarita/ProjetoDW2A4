import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollV1Component } from './infinite-scroll-v1.component';

describe('InfiniteScrollV1Component', () => {
  let component: InfiniteScrollV1Component;
  let fixture: ComponentFixture<InfiniteScrollV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfiniteScrollV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfiniteScrollV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

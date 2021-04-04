import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerInputButtonComponent } from './container-input-button.component';

describe('ContainerInputButtonComponent', () => {
  let component: ContainerInputButtonComponent;
  let fixture: ComponentFixture<ContainerInputButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerInputButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerInputButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

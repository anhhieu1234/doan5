import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vd2Component } from './vd2.component';

describe('Vd2Component', () => {
  let component: Vd2Component;
  let fixture: ComponentFixture<Vd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

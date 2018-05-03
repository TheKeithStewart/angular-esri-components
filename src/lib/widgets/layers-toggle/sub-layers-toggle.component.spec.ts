/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SubLayersToggleComponent } from './sub-layers-toggle.component';

describe('SubLayersToggleComponent', () => {
  let component: SubLayersToggleComponent;
  let fixture: ComponentFixture<SubLayersToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubLayersToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLayersToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

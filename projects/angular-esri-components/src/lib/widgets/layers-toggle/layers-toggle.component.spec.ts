import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LayersToggleComponent } from './layers-toggle.component';
import { EsriMapService } from '../../core/esri-map.service';
import {
  MockEsriMapSerivice,
  MockCustomWidgetDirective
} from '../../../testing';

describe('LayersToggleComponent', () => {
  let component: LayersToggleComponent;
  let fixture: ComponentFixture<LayersToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayersToggleComponent, MockCustomWidgetDirective],
      providers: [{ provide: EsriMapService, useClass: MockEsriMapSerivice }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

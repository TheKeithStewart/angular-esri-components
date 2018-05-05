import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersToggleComponent } from './layers-toggle.component';
import { EsriMapService } from '../../core/esri-map.service';
import { MockEsriMapSerivice } from '../../../testing';

describe('LayersToggleComponent', () => {
  let component: LayersToggleComponent;
  let fixture: ComponentFixture<LayersToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersToggleComponent ],
      providers: [
        { provide: EsriMapService, useClass: MockEsriMapSerivice }
      ]
    })
    .compileComponents();
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

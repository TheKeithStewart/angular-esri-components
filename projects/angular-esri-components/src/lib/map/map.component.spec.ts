import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapComponent } from './map.component';
import { EsriMapService } from '../core/esri-map.service';
import { MockEsriMapSerivice } from '../../testing';

describe('MapComponent', () => {
  let component: MapComponent;
  let fixture: ComponentFixture<MapComponent>;
  let mapService: MockEsriMapSerivice;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapComponent ],
      providers: [
        { provide: EsriMapService, useClass: MockEsriMapSerivice }
      ]
    })
    .compileComponents();

    mapService = TestBed.get(EsriMapService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('ngOnInit()', () => {
    it('should load the map if the map has not already been loaded', () => {
      component.loadMap = jasmine.createSpy('loadMap');
      component.map = null;

      component.ngOnInit();
      expect(component.loadMap).toHaveBeenCalled();
    });

    it('should NOT load the map if the map HAS already been loaded', () => {
      component.loadMap = jasmine.createSpy('loadMap');
      component.map = {} as any;

      component.ngOnInit();
      expect(component.loadMap).not.toHaveBeenCalled();
    });
  });

  describe('loadMap()', () => {
    const map = 'map';
    const view = 'view';

    it('should load a Map if map properties are provided and emit the loaded map and view after loading', () => {
      mapService.loadMap.and.returnValue(new Promise(resolve => resolve({ map, view })));
      component.mapProperties = { type: 'mapProps' } as any;

      component.mapInit.subscribe(result => {
        expect(result).toEqual({ map, mapView: view });
      });
      component.loadMap();
      expect(mapService.loadMap).toHaveBeenCalled();
      expect(mapService.loadWebMap).not.toHaveBeenCalled();
    });

    it('should load a Web Map if web map properties are provided and emit the loaded map and view after loading', () => {
      mapService.loadWebMap.and.returnValue(new Promise(resolve => resolve({ map, view })));
      component.webMapProperties = { type: 'webMapProps' } as any;

      component.mapInit.subscribe(result => {
        expect(result).toEqual({ map, mapView: view });
      });
      component.loadMap();
      expect(mapService.loadWebMap).toHaveBeenCalled();
      expect(mapService.loadMap).not.toHaveBeenCalled();
    });

    it('should log an error to the console if no map properties or web map properties are provided', () => {
      spyOn(console, 'error');

      component.loadMap();
      expect(console.error).toHaveBeenCalled();
      expect(mapService.loadMap).not.toHaveBeenCalled();
      expect(mapService.loadWebMap).not.toHaveBeenCalled();
    });
  });
});

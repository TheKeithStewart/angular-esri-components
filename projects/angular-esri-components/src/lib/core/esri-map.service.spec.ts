import { TestBed, inject } from '@angular/core/testing';

import { EsriMapService } from './esri-map.service';
import { EsriModuleProvider } from '../core/esri-module-provider';
import { MockEsriModuleProvider } from './../../testing';

describe('EsriMapService', () => {
  let service: EsriMapService;
  let esriModuleProvider: MockEsriModuleProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EsriMapService,
        { provide: EsriModuleProvider, useClass: MockEsriModuleProvider }
      ]
    });

    service = TestBed.get(EsriMapService);
    esriModuleProvider = TestBed.get(EsriModuleProvider);
  });

  describe('prepareViewProps()', () => {
    const mapEl = { nativeElement: { id: 'mapElId' } };
    const map = { type: 'map' } as any;

    it('should initialize the map and container properties if values are not already present', () => {
      const mapViewProperties = {};
      const expected = { container: mapEl.nativeElement.id, map };

      const result = service.prepareViewProps(mapViewProperties, mapEl, map);
      expect(result).toEqual(expected);
    });

    it('should not change the value of the map and container properties if a value is already present', () => {
      const mapViewProperties = { container: 'initContainer', map: 'initMap' } as any;
      const expected = { container: 'initContainer', map: 'initMap' } as any;

      const result = service.prepareViewProps(mapViewProperties, mapEl, map);
      expect(result).toEqual(expected);
    });
  });

  describe('loadMap()', () => {
    let Map;
    let View;
    const map = { type: 'map' } as any;
    const view = { type: 'view' } as any;
    const mapProperties = { type: 'mapProperties'} as any;
    const mapViewProperties = { type: 'mapViewProperties' } as any;
    const newViewProps = { type: 'newViewProps' } as any;
    const mapEl: any = {};
    const viewType = 'MapView';

    beforeEach(() => {
      Map = jasmine.createSpy('map').and.returnValue(map);
      View = jasmine.createSpy('view').and.returnValue(view);
      esriModuleProvider.require.and.returnValue(new Promise(resolve => resolve([Map, View]) ));
      service.prepareViewProps = jasmine.createSpy('prepareViewProps').and.returnValue(newViewProps);
    });

    it('should prepare new view props', () => {
      service.loadMap(mapProperties, mapViewProperties, mapEl, viewType).then(() => {
        expect(service.prepareViewProps).toHaveBeenCalled();
      });
    });

    it('should create a map and a view, save them to class properties, and return them', () => {
      service.loadMap(mapProperties, mapViewProperties, mapEl, viewType).then((result) => {
        expect(Map).toHaveBeenCalledWith(mapProperties);
        expect(View).toHaveBeenCalledWith(newViewProps);
        expect(service.map).toEqual(map);
        expect(service.view).toEqual(view);
        expect(result).toEqual({ map, view });
      });
    });

    it('should emit an isLoaded event', () => {
      spyOn(service.isLoaded, 'emit');

      service.loadMap(mapProperties, mapViewProperties, mapEl, viewType).then(() => {
        expect(service.isLoaded.emit).toHaveBeenCalled();
      });
    });
  });

  describe('loadWebMap()', () => {
    let WebMap;
    let View;
    const map = { type: 'webMap' } as any;
    const view = { type: 'view' } as any;
    const mapProperties = { type: 'mapProperties'} as any;
    const mapViewProperties = { type: 'mapViewProperties' } as any;
    const newViewProps = { type: 'newViewProps' } as any;
    const mapEl: any = {};
    const viewType = 'MapView';

    beforeEach(() => {
      WebMap = jasmine.createSpy('webMap').and.returnValue(map);
      View = jasmine.createSpy('view').and.returnValue(view);
      esriModuleProvider.require.and.returnValue(new Promise(resolve => resolve([WebMap, View]) ));
      service.prepareViewProps = jasmine.createSpy('prepareViewProps').and.returnValue(newViewProps);
    });

    it('should prepare new view props', () => {
      service.loadWebMap(mapProperties, mapViewProperties, mapEl, viewType).then(() => {
        expect(service.prepareViewProps).toHaveBeenCalled();
      });
    });

    it('should create a map and a view, save them to class properties, and return them', () => {
      service.loadWebMap(mapProperties, mapViewProperties, mapEl, viewType).then((result) => {
        expect(WebMap).toHaveBeenCalledWith(mapProperties);
        expect(View).toHaveBeenCalledWith(newViewProps);
        expect(service.map).toEqual(map);
        expect(service.view).toEqual(view);
        expect(result).toEqual({ map, view });
      });
    });

    it('should emit an isLoaded event', () => {
      spyOn(service.isLoaded, 'emit');

      service.loadWebMap(mapProperties, mapViewProperties, mapEl, viewType).then(() => {
        expect(service.isLoaded.emit).toHaveBeenCalled();
      });
    });
  });

  describe('addWidget()', () => {
    it('should add a widget to the map UI in the bottom right position', () => {
      const spy = jasmine.createSpy('add');
      service.view = { ui: { add: spy }} as any;
      const element = {} as HTMLElement;
      const position = 'bottomRight';

      service.addWidget(element, position);
      expect(spy).toHaveBeenCalledWith(element, position);
    });
  });

  describe('extend()', () => {
    it('should merge two objects together', () => {
      const obj1 = { key1: 'val1', key2: 'val2' } as any;
      const obj2 = { key3: 'val3', key4: 'val4' } as any;
      const expected = { key1: 'val1', key2: 'val2', key3: 'val3', key4: 'val4' } as any;

      const result = service.extend(obj1, obj2);
      expect(result).toEqual(expected);
    });
  });
});

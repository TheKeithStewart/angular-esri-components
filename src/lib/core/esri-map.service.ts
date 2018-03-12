import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { EsriLoaderService } from 'angular-esri-loader';
import { EsriModuleProvider } from './index';

@Injectable()
export class EsriMapService {
  isLoaded = new EventEmitter();
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private esriLoader: EsriLoaderService, private moduleProvider: EsriModuleProvider) { }

  loadMap(mapProperties: __esri.MapProperties, mapViewProperties: __esri.MapViewProperties, mapEl: ElementRef) {
    return this.moduleProvider.require(['esri/Map', 'esri/views/MapView'])
      .then(([Map, MapView]: [__esri.MapConstructor, __esri.MapViewConstructor]) => {
        // create map
        const map = new Map(mapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        const newMapViewProps = this.extend({}, mapViewProperties);
        if (!newMapViewProps.container) { newMapViewProps.container = mapEl.nativeElement.id; }
        if (!newMapViewProps.map) {
          newMapViewProps.map = map;
        }

        // create the MapView
        const mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map: map,
          mapView: mapView
        };
      });
  }

  loadWebMap(webMapProperties: __esri.WebMapProperties, mapViewProperties: __esri.MapViewProperties, mapEl: ElementRef) {
    return this.moduleProvider.require(['esri/views/MapView', 'esri/WebMap'])
    .then(([MapView, WebMap]: [__esri.MapViewConstructor, __esri.WebMapConstructor]) => {
        // create map
        const map = new WebMap(webMapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        const newMapViewProps = this.extend({}, mapViewProperties);
        if (!newMapViewProps.container) { newMapViewProps.container = mapEl.nativeElement.id; }
        if (!newMapViewProps.map) { newMapViewProps.map = map; }

        // create the MapView
        const mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map: map,
          mapView: mapView
        };
    });
  }

  addWidget(element: HTMLElement, position: string) {
    this.mapView.ui.add(element, position);
  }

  extend(obj: any, src: any) {
    Object.keys(src).forEach(function (key) { obj[key] = src[key]; });
    return obj;
  }
}

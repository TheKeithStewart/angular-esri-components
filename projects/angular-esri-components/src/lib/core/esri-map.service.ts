import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { EsriModuleProvider } from './esri-module-provider';

@Injectable()
export class EsriMapService {
  isLoaded = new EventEmitter();
  map: __esri.Map;
  view: __esri.View;

  constructor(private moduleProvider: EsriModuleProvider) { }

  loadMap(mapProperties: __esri.MapProperties, mapViewProperties: __esri.ViewProperties, mapEl: ElementRef, viewType: string = 'MapView') {
    return this.moduleProvider.require(['esri/Map', 'esri/views/' + viewType])
      .then(([Map, View]: [__esri.MapConstructor, __esri.MapViewConstructor]) => {
        // create map
        const map = new Map(mapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        const newViewProps = this.extend({}, mapViewProperties);
        if (!newViewProps.container) { newViewProps.container = mapEl.nativeElement.id; }
        if (!newViewProps.map) {
          newViewProps.map = map;
        }

        // create the MapView
        const view = new View(newViewProps);

        this.map = map;
        this.view = view;

        this.isLoaded.emit();

        return {
          map: map,
          view: view
        };
      });
  }

  loadWebMap(webMapProperties: __esri.WebMapProperties, viewProperties: __esri.ViewProperties, mapEl: ElementRef,
    viewType: string = 'MapView') {
    return this.moduleProvider.require(['esri/views/' + viewType, 'esri/WebMap'])
    .then(([View, WebMap]: [__esri.ViewConstructor, __esri.WebMapConstructor]) => {
        // create map
        const map = new WebMap(webMapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        const newViewProps = this.extend({}, viewProperties);
        if (!newViewProps.container) { newViewProps.container = mapEl.nativeElement.id; }
        if (!newViewProps.map) { newViewProps.map = map; }

        // create the MapView
        const view = new View(newViewProps);

        this.map = map;
        this.view = view;

        this.isLoaded.emit();

        return {
          map: map,
          view: view
        };
    });
  }

  addWidget(element: HTMLElement, position: string) {
    this.view.ui.add(element, position);
  }

  extend(obj: any, src: any) {
    Object.keys(src).forEach(function (key) { obj[key] = src[key]; });
    return obj;
  }
}

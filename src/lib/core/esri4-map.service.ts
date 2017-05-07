import { Injectable, ElementRef, EventEmitter } from '@angular/core';
import { EsriLoaderService } from 'angular2-esri-loader';

@Injectable()
export class Esri4MapService {
  isLoaded = new EventEmitter();
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private esriLoader: EsriLoaderService) { }

  loadMap(mapProperties: __esri.MapProperties, mapViewProperties: __esri.MapViewProperties, mapEl: ElementRef) {
    return this.esriLoader.load({
      // the specific version of the API that is to be used
      url: 'https://js.arcgis.com/4.3/'
    }).then(() => {
      return this.esriLoader.loadModules([
        'esri/Map', 'esri/views/MapView'
      ]).then(([
        Map, MapView
      ]: [__esri.MapConstructor, __esri.MapViewConstructor]) => {
        // create map
        let map = new Map(mapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        let newMapViewProps = this.extend({}, mapViewProperties);
        if (!newMapViewProps.container) newMapViewProps.container = mapEl.nativeElement.id;
        if (!newMapViewProps.map) newMapViewProps.map = map;

        // create the MapView
        let mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map: map,
          mapView: mapView
        }
      });
    });
  }

  loadWebMap(webMapProperties: __esri.WebMapProperties, mapViewProperties: __esri.MapViewProperties, mapEl: ElementRef) {
    return this.esriLoader.load({
      // the specific version of the API that is to be used
      url: 'https://js.arcgis.com/4.3/'
    }).then(() => {
      return this.esriLoader.loadModules([
        'esri/views/MapView', 'esri/WebMap'
      ]).then(([
        MapView, WebMap
      ]: [__esri.MapViewConstructor, __esri.WebMapConstructor]) => {
        // create map
        let map = new WebMap(webMapProperties);

        // prepare properties that should be set locally
        // create a new object so as to not modify the provided object
        let newMapViewProps = this.extend({}, mapViewProperties);
        if (!newMapViewProps.container) newMapViewProps.container = mapEl.nativeElement.id;
        if (!newMapViewProps.map) newMapViewProps.map = map;

        // create the MapView
        let mapView = new MapView(newMapViewProps);

        this.map = map;
        this.mapView = mapView;

        this.isLoaded.emit();

        return {
          map: map,
          mapView: mapView
        }
      });
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

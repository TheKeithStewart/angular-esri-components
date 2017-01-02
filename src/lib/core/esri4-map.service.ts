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
      url: '//js.arcgis.com/4.1'
    }).then(() => {
      return this.esriLoader.loadModules([
        'esri/Map', 'esri/views/MapView', 'esri/WebMap'
      ]).then(([
        Map, MapView, WebMap
      ]: [__esri.MapConstructor, __esri.MapViewConstructor, __esri.WebMapConstructor]) => {
        // create map
        let map = new WebMap(mapProperties);

        // prepare properties that should be set locally
        if (!mapViewProperties.container) mapViewProperties.container = mapEl.nativeElement.id;
        if (!mapViewProperties.map) mapViewProperties.map = map;

        // create the MapView
        let mapView = new MapView(mapViewProperties);

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
}

# EsriModuleProvider

`EsriModuleProvider`  a service which abstracts the esri loader service using [ArcGIS API for JavaScript v4.6](https://developers.arcgis.com/javascript/)

An example with the Search widget using constructors can be found here:
https://github.com/JordeyWijnbergen/angular-esri-arcgis-example


## Usage

```
import { Component } from '@angular/core';

import { EsriModuleProvider } from 'angular-esri-components';

@Component({
  selector: 'app-map',
  template: `
    <esri-map [mapProperties]="mapProperties" [mapViewProperties]="mapViewProperties" (mapInit)="onMapInit($event)"></esri-map>
  `,
  styleUrls: ['./map.component.scss']
})
export class MapComponent {
  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8
  };
  map: __esri.Map;
  mapView: __esri.MapView;

  constructor(private moduleProvider: EsriModuleProvider) { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
    
    this.moduleProvider.require(['esri/core/watchUtils'])
        .then(([watchUtils]) => {
                // your code
        });
  }

}
```

# esri-map

`esri-map` is a component that will create an ESRI map using the [ArcGIS API for JavaScript v4.6](https://developers.arcgis.com/javascript/)

## Usage

```
import { Component } from '@angular/core';

import { EsriModuleProvider } from 'angular-esri-components/src/lib/core';

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
  }
}
```

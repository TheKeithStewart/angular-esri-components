# esri-map

`esri-map` is a component that will create an ESRI map using the [ArcGIS API for JavaScript v4.3](https://developers.arcgis.com/javascript/)

## Usage

```
import { Component, OnInit, ViewChild } from '@angular/core';

import { EsriLoaderService } from 'angular-esri-loader';
import { EsriMapComponent } from 'angular-esri-components';

@Component({
  selector: 'app-map',
  template: `
    <esri-map [mapProperties]="mapProperties" [mapViewProperties]="mapViewProperties" (mapInit)="onMapInit($event)"></esri-map>
  `,
  styleUrls: ['./map.component.scss'],
  providers: [EsriLoaderService]
})
export class MapComponent implements OnInit {
  mapProperties: __esri.MapProperties = {
    basemap: 'dark-gray'
  };
  mapViewProperties: __esri.MapViewProperties = {
    center: [-118, 34.5],
    zoom: 8
  };
  map: __esri.Map;
  mapView: __esri.MapView;

  @ViewChild(EsriMapComponent) esriComponent: EsriMapComponent;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() { }

  onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
    this.map = mapInfo.map;
    this.mapView = mapInfo.mapView;
  }
}
```

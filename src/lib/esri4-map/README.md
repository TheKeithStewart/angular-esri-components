# esri4-map

`esri4-map` is a component that will create an ESRI map using the [ArcGIS API for JavaScript v4.1](https://developers.arcgis.com/javascript/)

## Usage

```
import { Component, OnInit, ViewChild } from '@angular/core';

import { EsriLoaderService } from 'angular2-esri-loader';
import { Esri4MapComponent } from 'angular2-esri4-components';

@Component({
  selector: 'app-map',
  template: `
    <esri4-map [mapProperties]="mapProperties" [mapViewProperties]="mapViewProperties" (mapInit)="onMapInit($event)"></esri4-map>
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

  @ViewChild(Esri4MapComponent) esriComponent: Esri4MapComponent;

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() { }

  onMapInit(map: __esri.Map) {
    this.map = map;
  }
}
```
import { Component } from '@angular/core';
import { EsriModuleProvider } from 'angular-esri-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

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

    // add a layer with sublayers to map
    this.moduleProvider
      .require(['esri/layers/MapImageLayer'])
      .then(
        ([MapImageLayer]) => {
          const layer = new MapImageLayer({
            url: 'https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer',
            sublayers: [
              {
                id: 3,
                title: 'States',
                visible: false
              },
              {
                id: 2,
                title: 'Railroads',
                visible: true
              },
              {
                id: 1,
                title: 'Highways',
                visible: true
              },
              {
                id: 0,
                title: 'Cities',
                visible: true
              }
            ]
          });

          this.map.layers.add(layer);
        });
  }
}

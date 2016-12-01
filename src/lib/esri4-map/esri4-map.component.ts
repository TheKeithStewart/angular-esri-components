import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { EsriLoaderService } from 'angular2-esri-loader';

@Component({
  selector: 'esri4-map',
  template: `
    <div class="map" id="esri4-map" #map></div>
  `,
  styles: [`
    .map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  `]
})
export class Esri4MapComponent implements OnInit {
  map: __esri.Map;
  mapView: __esri.MapView;

  @ViewChild('map') mapEl: ElementRef;

  @Input() mapProperties: __esri.MapProperties;
  @Input() mapViewProperties: __esri.MapViewProperties;

  @Output() mapInit: EventEmitter<{map: __esri.Map, mapView: __esri.MapView}> = new EventEmitter();

  constructor(private esriLoader: EsriLoaderService) { }

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }

    this._loadMap();
  }

  _loadMap() {
    this.esriLoader.load({
      // the specific version of the API that is to be used
      url: '//js.arcgis.com/4.1'
    }).then(() => {
      this.esriLoader.loadModules(['esri/Map', 'esri/views/MapView'])
        .then(([Map, MapView]: [__esri.MapConstructor, __esri.MapViewConstructor]) => {
          this.map = new Map(this.mapProperties);

          // prepare properties that should be set locally
          if (!this.mapViewProperties.container) this.mapViewProperties.container = this.mapEl.nativeElement.id;
          if (!this.mapViewProperties.map) this.mapViewProperties.map = this.map;

          this.mapView = new MapView(this.mapViewProperties)

          this.mapInit.emit({
            map: this.map,
            mapView: this.mapView
          });
          this.mapInit.complete();
        });
    });
  }
}
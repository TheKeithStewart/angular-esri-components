import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { EsriMapService } from './../core/index';

@Component({
  selector: 'esri-map',
  template: `
    <div class="map" id="esri-map" #map></div>
  `,
  styles: [`
    /* Required CSS for the ArcGIS API for JavaScript */
    @import '//js.arcgis.com/4.3/esri/css/main.css';

    .map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  `]
})
export class EsriMapComponent implements OnInit {
  map: __esri.Map;
  mapView: __esri.MapView;

  @ViewChild('map') mapEl: ElementRef;

  @Input() mapProperties: __esri.MapProperties;
  @Input() webMapProperties: __esri.WebMapProperties;
  @Input() mapViewProperties: __esri.MapViewProperties = {};

  @Output() mapInit = new EventEmitter();

  constructor(private mapService: EsriMapService) { }

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }

    this.loadMap();
  }

  loadMap() {
    let mapPromise: Promise<any>;

    // determine if loading a WebMap or creating a custom map
    if (this.mapProperties) {
      mapPromise = this.mapService.loadMap(this.mapProperties, this.mapViewProperties, this.mapEl);
    } else if (this.webMapProperties) {
      mapPromise = this.mapService.loadWebMap(this.webMapProperties, this.mapViewProperties, this.mapEl);
    } else {
      console.error('Proper map properties were not provided');
      return;
    }

    mapPromise.then(mapInfo => {
      this.map = mapInfo.map;
      this.mapView = mapInfo.mapView;

      // emit event informing application that the map has been loaded
      this.mapInit.emit({
        map: this.map,
        mapView: this.mapView
      });
      this.mapInit.complete();
    });
  }
}

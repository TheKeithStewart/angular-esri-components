import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';

import { Esri4MapService } from './../core';

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
  @Input() mapViewProperties: __esri.MapViewProperties = {};
  @Input() portalItemId: string;

  @Output() mapInit = new EventEmitter();

  constructor(private mapService: Esri4MapService) { }

  ngOnInit() {
    if (this.map) {
      // map is already initialized
      return;
    }

    this.loadMap();
  }

  loadMap() {
    // determine if loading a WebMap or creating a custom map
    if (this.portalItemId) {
      // create one object containing the portalItemId and the map properties
      const mapProperties = Object.assign({
        portalItem: {
          id: this.portalItemId
        }
      }, this.mapProperties);
    }

    this.mapService.loadMap(this.mapProperties, this.mapViewProperties, this.mapEl).then(mapInfo => {
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
import { Component, OnInit, Input, Output, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { EsriMapService } from './../core/esri-map.service';
import { environment } from './../../environments/environment';

@Component({
  selector: 'esri-map',
  templateUrl: './map.component.html',
  styles: [`
    /* Required CSS for the ArcGIS API for JavaScript */
    @import '${environment.arcGisCssUrl}';
    .map {
      height: 100%;
      width: 100%;
      margin: 0;
      padding: 0;
    }
  `]
})
export class MapComponent implements OnInit {
  map: __esri.Map;
  mapView: __esri.MapView;

  @ViewChild('map') mapEl: ElementRef;

  @Input() mapProperties: __esri.MapProperties;
  @Input() webMapProperties: __esri.WebMapProperties;
  @Input() mapViewProperties: __esri.ViewProperties = {};
  @Input() viewType: string = 'MapView';

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
      mapPromise = this.mapService.loadMap(this.mapProperties, this.mapViewProperties, this.mapEl, this.viewType);
    } else if (this.webMapProperties) {
      mapPromise = this.mapService.loadWebMap(this.webMapProperties, this.mapViewProperties, this.mapEl, this.viewType);
    } else {
      console.error('Proper map properties were not provided');
      return;
    }

    mapPromise.then((mapInfo: { map: __esri.Map, view: __esri.MapView }) => {
      this.map = mapInfo.map;
      this.mapView = mapInfo.view;

      // emit event informing application that the map has been loaded
      this.mapInit.emit({
        map: this.map,
        mapView: this.mapView
      });
      this.mapInit.complete();
    });
  }
}

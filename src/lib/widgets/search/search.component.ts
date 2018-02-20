import { Component, OnInit, Input } from '@angular/core';

import { EsriMapService } from './../../core/index';
// import { TabsComponent } from '../tabs/tabs.component';

@Component({
  selector: 'esri-search',
  template: '',
  styles: ['']
})

export class SearchComponent implements OnInit {
  map: __esri.Map;
  mapView: __esri.MapView;

  @Input() position: string;

  constructor(private mapService: EsriMapService) { }
   ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      this.map = this.mapService.map;
      this.mapView = this.mapService.mapView;
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { EsriMapService } from './../../core/index';

@Component({
  selector: 'esri-layersToggle',
  template: `
    <div esri-customWidget [position]="position">
      <!-- Only display if there is a map and it has layers -->
      <div *ngIf="map?.layers.length > 0" class="esri-layers-toggle">
        <div *ngFor="let layer of map.layers.toArray()">
          <input type="checkbox" [attr.checked]="layer.visible" (click)="onCheck($event, layer)" /> {{layer.title}}
          <a href="javascript:void(0)" (click)="onZoomLayer(layer)">Zoom</a>
          <div *ngIf="layer.sublayers && layer.sublayers.items">
            <div *ngFor="let lay of layer.sublayers.items">
              &nbsp;&nbsp;&nbsp;<input type="checkbox" [attr.checked]="lay.visible" (click)="onCheck($event, lay)" /> {{lay.title}}
              <div *ngIf="lay.sublayers && lay.sublayers.items">
                  <div *ngFor="let sl of lay.sublayers.items">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" [attr.checked]="sl.visible" (click)="onCheck($event, sl)" /> {{sl.title}}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .esri-layers-toggle {
      z-index: 99;
      background-color: white;
      border-radius: 8px;
      padding: 10px;
      opacity: 0.75;
    }
  `]
})
export class LayersToggleComponent implements OnInit {

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

  onCheck($event: any, layer: __esri.Layer) {
    layer.visible = $event.target.checked;
  }

  onZoomLayer(layer: __esri.Layer) {
    this.mapView.goTo(layer.fullExtent);
  }
}

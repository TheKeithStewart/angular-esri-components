import { Component, OnInit, Input/*, Pipe*/ } from '@angular/core';
import { EsriMapService } from './../../core/index';
/*@Pipe({
  name: 'reverse'
})
export class ReversePipe {
  transform(value:any) {
    return value.slice().reverse();
  }
}*/
@Component({
  selector: 'esri-layersToggle',
  template: `
    <div esri-customWidget [position]="position">
      <!-- Only display if there is a map and it has layers -->
      <div *ngIf="map?.layers.length > 0" class="esri-layers-toggle">
        <div *ngFor="let layer of map.layers.toArray()">
          <input type="checkbox" [checked]="layer.visible" (click)="onCheck($event, layer)" /> {{layer.title}}
          <a href="javascript:void(0)" (click)="onZoomLayer(layer)">Zoom</a>
          <div *ngIf="layer.sublayers && layer.sublayers.items">
            <div *ngFor="let lay of layer.sublayers.items.slice().reverse()">
              &nbsp;&nbsp;&nbsp;<input type="checkbox" [checked]="lay.visible" (click)="onCheck($event, lay)" /> {{lay.title}}
              <div *ngIf="lay.sublayers && lay.sublayers.items">
                  <div *ngFor="let sl of lay.sublayers.items.slice().reverse()">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" [checked]="sl.visible" (click)="onCheck($event, sl)" /> {{sl.title}}
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
  view: __esri.View;

  @Input() position: string;

  constructor(private mapService: EsriMapService) { }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      this.map = this.mapService.map;
      this.view = this.mapService.view;
    });
  }

  onCheck($event: any, layer: __esri.Layer) {
    layer.visible = $event.target.checked;
  }

  onZoomLayer(layer: __esri.Layer) {
    if (this.view.type==="2d") {
      (this.view as __esri.MapView).goTo(layer.fullExtent);
    } else {
      let v = (this.view as __esri.SceneView);
      v.goTo({
          target:layer.fullExtent,
          heading:v.camera.heading
      });
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';

import { Esri4MapService } from './../../core';

@Component({
  selector: 'esri4-layersToggle',
  template: `
    <div esri4-customWidget [position]="position">
      <!-- Only display if there is a map and it has layers -->
      <div *ngIf="map?.layers.items.length > 0" class="esri4-layers-toggle">
        <div *ngFor="let layer of map.layers.items" ><input type="checkbox" [attr.checked]="layer.visible" (click)="onCheck($event, layer)"> {{layer.title}} </div>
      </div>
    </div>
  `,
  styles: [`
    .esri4-layers-toggle {
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

  @Input() position: string;

  constructor(private mapService: Esri4MapService) { }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      this.map = this.mapService.map;
    });
  }

  onCheck($event: any, layer: __esri.Layer) {
    layer.visible = $event.target.checked;
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { EsriMapService } from '../../core/esri-map.service';

@Component({
  selector: 'esri-layers-toggle, esri-layersToggle',
  templateUrl: './layers-toggle.component.html',
  styleUrls: ['./layers-toggle.component.css']
})
export class LayersToggleComponent implements OnInit {
  map: __esri.Map;
  view: __esri.View;

  @Input() position: string;

  constructor(private mapService: EsriMapService) {}

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
    if (this.view.type === '2d') {
      (this.view as __esri.MapView).goTo(layer.fullExtent);
    } else {
      const sceneView = this.view as __esri.SceneView;
      sceneView.goTo({
        target: layer.fullExtent,
        heading: sceneView.camera.heading
      });
    }
  }
}

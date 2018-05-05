import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'esri-sublayers-toggle, esri-sublayersToggle',
  templateUrl: './sub-layers-toggle.component.html',
  styleUrls: ['./sub-layers-toggle.component.css']
})
export class SubLayersToggleComponent {
  _sublayers: __esri.Collection<__esri.Sublayer>;
  @Input()
  set layer(layer) {
    this._sublayers = layer.sublayers
      .toArray()
      .slice()
      .reverse();
  }

  constructor() {}

  onCheck($event: any, sublayer: __esri.Sublayer) {
    sublayer.visible = $event.target.checked;
  }
}

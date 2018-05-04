import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'esri-sublayersToggle',
  template: `<!-- Only display if there is a layer with sublayers -->
    <div *ngFor="let sublayer of layer.sublayers.toArray().slice().reverse()" class="sublayers">
        <input type="checkbox" [checked]="sublayer.visible" (click)="onCheck($event, sublayer)" /> {{sublayer.title}}
        <esri-sublayersToggle [layer]="sublayer" *ngIf="sublayer.sublayers && sublayer.sublayers.toArray()"></esri-sublayersToggle><!--recursive sub layers-->
    </div>
  `,
  styles: [`
    .sublayers {
        padding-left: 15px;
    }
  `]
})
export class SubLayersToggleComponent {
  @Input() layer: __esri.Sublayer;

  constructor() { }

  onCheck($event: any, sublayer: __esri.Sublayer) {
    sublayer.visible = $event.target.checked;
  }

}

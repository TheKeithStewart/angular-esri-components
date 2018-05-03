import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'esri-sublayersToggle',
  template: `<!-- Only display if there is a layer with sublayers -->
    <div *ngIf="layer && layer.sublayers && layer.sublayers.items">
        <div *ngFor="let sublayer of layer.sublayers.items.slice().reverse()" class="sublayers">
            <input type="checkbox" [checked]="sublayer.visible" (click)="onCheck($event, sublayer)" /> {{sublayer.title}}
            <esri-sublayersToggle [layer]="sublayer"></esri-sublayersToggle><!--recursive sub layers-->
        </div>
    </div>
  `,
  styles: [`
    .sublayers {
        padding-left: 15px;
    }
  `]
})
export class SubLayersToggleComponent {
  @Input() layer: any;

  constructor() { }

  onCheck($event: any, sublayer: any) {
    sublayer.visible = $event.target.checked;
  }

}

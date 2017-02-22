import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Esri4MapComponent,
  Esri4MapService,
  CustomWidgetDirective,
  LayersToggleComponent
} from './lib/index';

export * from './lib/esri4-map/esri4-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Esri4MapComponent,
    CustomWidgetDirective,
    LayersToggleComponent
  ],
  exports: [
    Esri4MapComponent,
    CustomWidgetDirective,
    LayersToggleComponent
  ],
  providers: [
    Esri4MapService
  ]
})
export class Angular2Esri4Module { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Esri4MapComponent,
  Esri4MapService
} from './src/lib';

export * from './src/lib/esri4-map/esri4-map.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Esri4MapComponent,
  ],
  exports: [
    Esri4MapComponent,
  ],
  providers: [
    Esri4MapService
  ]
})
export class Angular2Esri4Module { }
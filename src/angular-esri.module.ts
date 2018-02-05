import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  EsriMapComponent,
  EsriMapService,
  CustomWidgetDirective,
  LayersToggleComponent,
  EsriModuleProvider
} from './lib/index';
import { EsriLoaderModule } from 'angular-esri-loader';

export * from './lib/esri-map/esri-map.component';

@NgModule({
  imports: [
    CommonModule,
    EsriLoaderModule
  ],
  declarations: [
    EsriMapComponent,
    CustomWidgetDirective,
    LayersToggleComponent
  ],
  exports: [
    EsriMapComponent,
    CustomWidgetDirective,
    LayersToggleComponent
  ],
  providers: [
    EsriMapService,
    EsriModuleProvider
  ]
})
export class AngularEsriModule { }

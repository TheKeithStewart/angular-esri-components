import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsriLoaderModule } from 'angular-esri-loader';

import { AngularEsriComponentsComponent } from './angular-esri-components.component';
import { MapComponent } from './map/map.component';
import { CustomWidgetDirective } from './widgets/custom-widget/custom-widget.directive';
import { LayersToggleComponent } from './widgets/layers-toggle/layers-toggle.component';
import { SubLayersToggleComponent } from './widgets/layers-toggle/sub-layers-toggle/sub-layers-toggle.component';
import { EsriModuleProvider } from './core/esri-module-provider';
import { EsriMapService } from './core/esri-map.service';

@NgModule({
  imports: [
    CommonModule,
    EsriLoaderModule
  ],
  declarations: [
    AngularEsriComponentsComponent,
    MapComponent,
    CustomWidgetDirective,
    LayersToggleComponent,
    SubLayersToggleComponent
  ],
  exports: [
    AngularEsriComponentsComponent,
    MapComponent,
    CustomWidgetDirective
  ],
  providers: [EsriModuleProvider, EsriMapService]
})
export class AngularEsriModule {}

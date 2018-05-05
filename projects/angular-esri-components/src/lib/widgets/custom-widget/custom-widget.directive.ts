import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { EsriMapService } from './../../core/esri-map.service';

@Directive({
  selector: '[esriCustomWidget], [esri-customWidget]'
})
export class CustomWidgetDirective implements OnInit {
  @Input() position: string;

  constructor(private el: ElementRef, private mapService: EsriMapService) { }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      // after map is loaded then add widget
      this.mapService.addWidget(this.el.nativeElement, this.position);
    });
  }

}

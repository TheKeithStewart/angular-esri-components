import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { EsriMapService } from './../../core/index';

@Directive({
  selector: '[esri-customWidget]'
})
export class CustomWidgetDirective implements OnInit {

  @Input() position: string;

  private el: HTMLElement;

  constructor(el: ElementRef, private mapService: EsriMapService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      // after map is loaded then add widget
      this.mapService.addWidget(this.el, this.position);
    });
  }

}

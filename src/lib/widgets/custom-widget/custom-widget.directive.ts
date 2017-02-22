import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { Esri4MapService } from './../../core/index';

@Directive({
  selector: '[esri4-customWidget]'
})
export class CustomWidgetDirective implements OnInit {

  @Input() position: string;

  private el: HTMLElement;

  constructor(el: ElementRef, private mapService: Esri4MapService) {
    this.el = el.nativeElement;
  }

  ngOnInit() {
    this.mapService.isLoaded.subscribe(() => {
      // after map is loaded then add widget
      this.mapService.addWidget(this.el, this.position);
    });
  }

}

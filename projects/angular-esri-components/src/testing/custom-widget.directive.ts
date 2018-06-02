import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[esriCustomWidget], [esri-customWidget]'
})
export class MockCustomWidgetDirective {
  @Input() position: string;
}

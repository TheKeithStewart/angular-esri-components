import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[esri-customWidget]'
})
export class MockCustomWidgetDirective {
  @Input() position: string;
}

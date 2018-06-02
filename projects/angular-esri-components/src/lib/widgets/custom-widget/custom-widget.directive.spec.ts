import { ElementRef, Component } from '@angular/core';
import {
  inject,
  TestBed,
  ComponentFixture,
  async
} from '@angular/core/testing';

import { CustomWidgetDirective } from './custom-widget.directive';
import { EsriMapService } from '../../core/esri-map.service';
import { MockEsriMapSerivice } from '../../../testing';

@Component({
  selector: 'esri-test-component',
  template: `
    <div esri-customWidget [position]="position">test widget</div>
  `
})
class TestComponent {
  position: string;
}

describe('CustomWidgetDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let mapService: MockEsriMapSerivice;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, CustomWidgetDirective],
      providers: [{ provide: EsriMapService, useClass: MockEsriMapSerivice }]
    }).compileComponents();

    mapService = TestBed.get(EsriMapService);
  }));

  it('should add a widget to the element in the bottomRight position', () => {
    const position = 'bottomRight';

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    component.position = position;
    fixture.detectChanges();
    const div: HTMLElement = fixture.nativeElement.querySelector('div');

    expect(mapService.addWidget).toHaveBeenCalledWith(div, position);
  });
});

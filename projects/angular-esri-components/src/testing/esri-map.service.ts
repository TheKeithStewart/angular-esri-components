import { of } from 'rxjs';

export class MockEsriMapSerivice {
  isLoaded = of(true);
  addWidget = jasmine.createSpy('addWidget');
}

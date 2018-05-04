import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEsriComponentsComponent } from './angular-esri-components.component';

describe('AngularEsriComponentsComponent', () => {
  let component: AngularEsriComponentsComponent;
  let fixture: ComponentFixture<AngularEsriComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularEsriComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEsriComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

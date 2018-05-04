import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayersToggleComponent } from './layers-toggle.component';

describe('LayersToggleComponent', () => {
  let component: LayersToggleComponent;
  let fixture: ComponentFixture<LayersToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayersToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayersToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

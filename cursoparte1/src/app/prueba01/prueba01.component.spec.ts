import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prueba01Component } from './prueba01.component';

describe('Prueba01Component', () => {
  let component: Prueba01Component;
  let fixture: ComponentFixture<Prueba01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prueba01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prueba01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

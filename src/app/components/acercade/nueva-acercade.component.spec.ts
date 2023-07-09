import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaAcercadeComponent } from './nueva-acercade.component';

describe('NuevaAcercadeComponent', () => {
  let component: NuevaAcercadeComponent;
  let fixture: ComponentFixture<NuevaAcercadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevaAcercadeComponent]
    });
    fixture = TestBed.createComponent(NuevaAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAcercadeComponent } from './editar-acercade.component';

describe('EditarAcercadeComponent', () => {
  let component: EditarAcercadeComponent;
  let fixture: ComponentFixture<EditarAcercadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarAcercadeComponent]
    });
    fixture = TestBed.createComponent(EditarAcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

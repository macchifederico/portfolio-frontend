import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEducacionComponent } from './editar-educacion.component';

describe('EditarEducacionComponent', () => {
  let component: EditarEducacionComponent;
  let fixture: ComponentFixture<EditarEducacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarEducacionComponent]
    });
    fixture = TestBed.createComponent(EditarEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

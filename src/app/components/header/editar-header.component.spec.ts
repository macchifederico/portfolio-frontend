import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarHeaderComponent } from './editar-header.component';

describe('EditarHeaderComponent', () => {
  let component: EditarHeaderComponent;
  let fixture: ComponentFixture<EditarHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarHeaderComponent]
    });
    fixture = TestBed.createComponent(EditarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

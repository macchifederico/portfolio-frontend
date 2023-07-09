import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSkillComponent } from './editar-skill.component';

describe('EditarSkillComponent', () => {
  let component: EditarSkillComponent;
  let fixture: ComponentFixture<EditarSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSkillComponent]
    });
    fixture = TestBed.createComponent(EditarSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

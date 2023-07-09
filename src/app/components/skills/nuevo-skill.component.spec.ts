import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoSkillComponent } from './nuevo-skill.component';

describe('NuevoSkillComponent', () => {
  let component: NuevoSkillComponent;
  let fixture: ComponentFixture<NuevoSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoSkillComponent]
    });
    fixture = TestBed.createComponent(NuevoSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

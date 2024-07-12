import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtudiantComponent } from './ajout-etudiant.component';

describe('AjoutEtudiantComponent', () => {
  let component: AjoutEtudiantComponent;
  let fixture: ComponentFixture<AjoutEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutEtudiantComponent]
    });
    fixture = TestBed.createComponent(AjoutEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

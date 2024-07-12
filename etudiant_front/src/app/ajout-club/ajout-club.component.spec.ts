import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutClubComponent } from './ajout-club.component';

describe('AjoutClubComponent', () => {
  let component: AjoutClubComponent;
  let fixture: ComponentFixture<AjoutClubComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutClubComponent]
    });
    fixture = TestBed.createComponent(AjoutClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

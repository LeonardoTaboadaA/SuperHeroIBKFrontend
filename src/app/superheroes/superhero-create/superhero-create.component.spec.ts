import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroCreateComponent } from './superhero-create.component';

describe('SuperheroCreateComponent', () => {
  let component: SuperheroCreateComponent;
  let fixture: ComponentFixture<SuperheroCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroCreateComponent]
    });
    fixture = TestBed.createComponent(SuperheroCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

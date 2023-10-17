import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperheroDeleteComponent } from './superhero-delete.component';

describe('SuperheroDeleteComponent', () => {
  let component: SuperheroDeleteComponent;
  let fixture: ComponentFixture<SuperheroDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperheroDeleteComponent]
    });
    fixture = TestBed.createComponent(SuperheroDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

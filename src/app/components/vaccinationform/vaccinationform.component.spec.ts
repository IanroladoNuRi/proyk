import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationformComponent } from './vaccinationform.component';

describe('VaccinationformComponent', () => {
  let component: VaccinationformComponent;
  let fixture: ComponentFixture<VaccinationformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VaccinationformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VaccinationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownButComponent } from './dropdown-but.component';

describe('DropdownButComponent', () => {
  let component: DropdownButComponent;
  let fixture: ComponentFixture<DropdownButComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownButComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownButComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

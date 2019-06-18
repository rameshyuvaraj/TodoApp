import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateUserPageComponent } from './validate-user-page.component';

describe('ValidateUserPageComponent', () => {
  let component: ValidateUserPageComponent;
  let fixture: ComponentFixture<ValidateUserPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidateUserPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpReactiveformComponent } from './sign-up-reactiveform.component';

describe('SignUpReactiveformComponent', () => {
  let component: SignUpReactiveformComponent;
  let fixture: ComponentFixture<SignUpReactiveformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpReactiveformComponent]
    });
    fixture = TestBed.createComponent(SignUpReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

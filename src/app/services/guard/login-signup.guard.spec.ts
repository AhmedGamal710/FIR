import { TestBed } from '@angular/core/testing';
import { LoginSignupGuard } from './login-signup.guard';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSignupGuard = TestBed.get(LoginSignupGuard);
    expect(service).toBeTruthy();
  });
});

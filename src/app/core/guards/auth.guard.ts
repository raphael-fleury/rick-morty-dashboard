import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanMatchFn = (route, state) => {
  const authService = inject(AuthService)
  return authService.isLoggedIn()
};

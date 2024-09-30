import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

export const authGuard: CanActivateFn = (route, state) => {
  const registerService = inject(RegisterService);
  const router = inject(Router);

  if (registerService.isLoggedIn()) {
    console.log("china");
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};

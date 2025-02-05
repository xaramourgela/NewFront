import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';
import { inject } from '@angular/core';

export const repairNavGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
    const router = inject(Router);
  
    if (authService.isTokenPresent()) {
      const userType = authService.getUserType(); // Get the userType from decoded JWT
  
      if (userType === 'Admin') {
       
        return true;  // Prevent navigation if already redirected to admin home
      } else if (userType === 'User') {
        router.navigate(['/']);
        return false; // Prevent navigation if already redirected to user home
      }
  
      // If the user type is unknown or not found
      // router.navigate(['/login']);
      // return false;
    }
  
    // If no token is present, navigate to login
    router.navigate(['/login']);
    return false;
    
  };
 
    
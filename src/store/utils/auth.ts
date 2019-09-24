import { authService } from '../../shared/services/auth.service';

export const isLoggedIn = (): boolean => {
  return (authService.getToken() !== null);
};
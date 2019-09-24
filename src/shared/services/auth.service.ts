import { storageService } from './storage.service';

class AuthService {
  tokenKey = 'auth-token';

  getToken() {
    return storageService.getItem(this.tokenKey);
  }

  setToken(token: string) {
    return storageService.setItem(this.tokenKey, token);
  }

  removeToken() {
    return storageService.removeItem(this.tokenKey);
  }
}

export const authService = new AuthService();


// import { of } from 'rxjs';
// import { authToken } from '../variables/authToken';
//
// class AuthService {
//
//   setToken(token: string) {
//     return localStorage.setItem(authToken, token);
//   }
//
//   getToken() {
//     return of(localStorage.getItem(authToken));
//   }
//
//   removeToken() {
//     return of(localStorage.removeItem(authToken));
//   }
// }
//
// export const authService = new AuthService();
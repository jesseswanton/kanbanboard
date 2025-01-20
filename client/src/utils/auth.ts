import {jwtDecode, JwtPayload } from 'jwt-decode';

// Decode the JWT token to get the user profile
class AuthService {
  getProfile() {
    const token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token); 
    }
    return null;
  }

  // Checks if the user is logged in by validating the token
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); 
  }

  // Checks if the token is expired
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      const currentTime = Math.floor(Date.now() / 1000);
      return !!decoded.exp && decoded.exp < currentTime; 
    } catch (error) {
      console.error('Error decoding token:', error);
      // If decoding fails, assume the token is invalid or expired
      return true; 
    }
  }

  // Retrieves the token from localStorage
  getToken(): string {
    return localStorage.getItem('id_token') || ''; 
  }

  // Saves the token to localStorage
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    // Redirects to the home page which will now show the Kanban board
    window.location.assign('/'); 
  }

  // Removes the token from localStorage
  logout() {
    localStorage.removeItem('id_token');
    // Redirects to the login page 
    window.location.assign('/login'); 
  }
}

export default new AuthService();
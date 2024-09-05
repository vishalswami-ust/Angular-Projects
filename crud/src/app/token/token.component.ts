import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent {
  token = {
    username: '',
    password: ''
  };

  constructor(private authService: TokenService) {}

  authenticationSubmit() {
    // Call the authentication method from the AuthService
    this.authService.authenticate(this.token.username, this.token.password)
      .subscribe(
        response => {
          // Handle successful authentication
          console.log('Authentication successful:', response['jwt']);
          // Optionally redirect or handle authenticated state
          this.authService.setToken(response['jwt']);
        },
        error => {
          // Handle authentication errors
          console.error('Authentication failed:', error);
        }
      );
  }

  greet() {
    this.authService.greet()
      .subscribe(
        (message: string) => {
          console.log('Server response: ' + message);
        },
        (error: any) => {
          console.error('Greet request failed:', error);
        }
      );
  }

  admin() {
    alert('Admin functionality is not yet implemented.');
  }
}

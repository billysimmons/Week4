import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Import the Router module

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = ''; // For displaying error messages

  constructor(private router: Router) {} // Inject the Router in the constructor

  ngOnInit() {}

  submitLogin = () => {
    const users = [
      { email: 'user1@example.com', password: 'password1' },
      { email: 'user2@example.com', password: 'password2' },
      { email: 'user3@example.com', password: 'password3' },
    ];

    const userMatch = users.find(
      (user) => user.email === this.email && user.password === this.password
    );

    if (userMatch) {
      this.errorMessage = '';
      this.router.navigate(['/account']); // Replace 'account' with the actual route
    } else {
      this.errorMessage = 'Invalid email or password';
    }

    if (this.errorMessage.length > 1) {
      console.log(this.errorMessage);
    }
  };
}

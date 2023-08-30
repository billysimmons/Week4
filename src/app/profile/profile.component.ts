import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userDetails: any = {};

  constructor() {}

  ngOnInit() {
    const storedUserDetails = sessionStorage.getItem('userDetails');
    if (storedUserDetails) {
      this.userDetails = JSON.parse(storedUserDetails);
    }
  }

  saveChanges() {
    sessionStorage.setItem('userDetails', JSON.stringify(this.userDetails));
    console.log('Saved session storage values:', this.userDetails); // Add this line
  }
}

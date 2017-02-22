import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  job = 'Lawn Care and Maintanance';
  business = 'Clymer Service';
  phone = '3215437659';
  buttons = ['Home', 'Contact', 'About Us'];
  description = 'Lawn Service and Maintanance is our specialty at Clymer service.';
  advert = { title: 'Get your free estimate today!', desc: 'Call us at 321-480-7048 or email Clymerservice@gmailcom' }
  footer = 'Clymer Service is a family owned and operated small buisness.';
}

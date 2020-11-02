import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  userDetails: any = {
    name:  '',
    email: ''
  };

  ngOnInit(): void {
  }

  onSubmit(event:any, value: any) {
    console.log(value);
  }
}

import { Component, OnInit } from '@angular/core';

import { Username } from '../username';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  content: String = "Change your username:";

  namechange: Username = {
    current_name: "boop",
    new_name: "",
  };

}

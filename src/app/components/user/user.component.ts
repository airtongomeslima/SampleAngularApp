import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: UserModel = new UserModel();
  @Output() deleteUser: EventEmitter<number> = new EventEmitter();
  @Output() editUser: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/UserModel';

@Component({
  selector: 'app-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.css']
})
export class UserEditorComponent implements OnInit {
  @Input() user: UserModel = new UserModel();
  @Input() isEdit: boolean = false;
  @Output() cancelEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() userChange: EventEmitter<UserModel> = new EventEmitter<UserModel>();
  @Output() save: EventEmitter<UserModel> = new EventEmitter<UserModel>();

  constructor() { }

  ngOnInit() {
    this.isEdit = false;
  }

  public saveUser(): void {
    this.save.emit(this.user);
  }

  public cancel(): void {
    this.user = new UserModel();
    this.cancelEvent.emit(false);
    this.isEdit = false;
  }

  onUserChange(newValue: UserModel) {
    this.user = newValue;
    this.userChange.emit(this.user);
  }
}

import { Component, OnInit, Output, Input, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { SimpleList } from '../../models/simpleListModel';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements OnInit {
  @Input() inputModel: any;
  @Input() name: string = "";
  @Input() label: string = "";
  @Input() type: string = "text";
  @Input() placeholder: string = "";
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() checkboxchecked: boolean = false;
  @Input() checkboxlabel: string = "";
  @Input() options: Array<SimpleList> = [];
  @Output() checkboxChanged = new EventEmitter<boolean>();
  @Output() inputModelChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log('blured', this.type);
  }

  eventBlur(field: any) {
    // console.log('blured', field);
  }

}

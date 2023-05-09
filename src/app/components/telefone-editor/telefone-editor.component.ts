import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { TelefoneModel } from '../../models/TelefoneModel';

@Component({
  selector: 'app-telefone-editor',
  templateUrl: './telefone-editor.component.html',
  styleUrls: ['./telefone-editor.component.css']
})
export class TelefoneEditorComponent implements OnInit {
  @Output() telefoneChange: EventEmitter<TelefoneModel> = new EventEmitter<TelefoneModel>();

  @Input() telefone: TelefoneModel = new TelefoneModel();

  constructor() {
    // this.telefone = new TelefoneModel();
  }

  ngOnInit() {
    console.log(this.telefone);
    this.telefoneChange.emit(this.telefone);
  }

  onTelefoneChange() {
    this.telefoneChange.emit(this.telefone);
  }
}

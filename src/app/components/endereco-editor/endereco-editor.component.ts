import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EnderecoModel } from 'src/app/models/EnderecoModel';


@Component({
  selector: 'app-endereco-editor',
  templateUrl: './endereco-editor.component.html',
  styleUrls: ['./endereco-editor.component.css']
})
export class EnderecoEditorComponent implements OnInit {
  @Input() endereco: EnderecoModel = new EnderecoModel();
  @Output() enderecoChange: EventEmitter<EnderecoModel> = new EventEmitter<EnderecoModel>();

  constructor() { }

  ngOnInit() {
  }

  onEnderecoChange() {
    this.enderecoChange.emit(this.endereco);
  }

}

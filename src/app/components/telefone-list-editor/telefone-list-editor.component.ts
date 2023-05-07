import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TelefoneModel } from 'src/app/models/TelefoneModel';


@Component({
  selector: 'app-telefone-list-editor',
  templateUrl: './telefone-list-editor.component.html',
  styleUrls: ['./telefone-list-editor.component.css']
})
export class TelefoneListEditorComponent implements OnInit {
  @Input() telefones: TelefoneModel[] = [];
  @Output() telefonesChange: EventEmitter<TelefoneModel[]> = new EventEmitter<TelefoneModel[]>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionarTelefone() {
    this.telefones.push(new TelefoneModel());
  }

  removerTelefone(index: number) {
    this.telefones.splice(index, 1);
  }
}

import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { PessoaModel } from 'src/app/models/PessoaModel';
import { PessoaService } from '../../services/pessoa/pessoa.service';
import { SimpleList } from 'src/app/models/simpleListModel';

@Component({
  selector: 'app-pessoa-editor',
  templateUrl: './pessoa-editor.component.html',
  styleUrls: ['./pessoa-editor.component.css']
})
export class PessoaEditorComponent implements OnInit {
  @Output() onSaveEvent: EventEmitter<PessoaModel> = new EventEmitter<PessoaModel>();
  @Input() pessoa: PessoaModel = new PessoaModel();
  pessoas: SimpleList[] = [];

  listaSexo: SimpleList[] = [
    { name: 'M', value: 'M' },
    { name: 'F', value: 'F' }
  ];

  constructor(private pessoaService: PessoaService) { }

  private getPessoas(): void {
    this.pessoaService.pessoas.subscribe(pessoas => {
      this.pessoas = pessoas.map(p => ({ id: p.id, name: p.nome, value: p.id }));
    });

    this.pessoaService.getPessoas();
  }

  ngOnInit() {
    this.getPessoas();
  }

  onSave() {
    this.onSaveEvent.emit(this.pessoa);
  }
}

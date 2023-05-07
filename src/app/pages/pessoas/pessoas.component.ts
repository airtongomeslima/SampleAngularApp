import { Component } from '@angular/core';
import { PessoaModel } from 'src/app/models/PessoaModel';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  pessoas: PessoaModel[] = [];

  constructor(private pessoaService: PessoaService) {

  }

  ngOnInit(): void {
    this.pessoaService.pessoas.subscribe(pessoas => {
      this.pessoas = pessoas;
    });

    this.pessoaService.getPessoas();
  }

  deletePessoa(id: number) {
    console.log('Deletar pessoa: ', id);
  }

  editPessoa(id: number) {
    console.log('Editar pessoa: ', id);
  }

  addPessoa() {
    console.log('Adicionar pessoa.');
  }
}

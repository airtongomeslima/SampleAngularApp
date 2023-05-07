import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaModel } from 'src/app/models/PessoaModel';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';

@Component({
  selector: 'app-pessoas',
  templateUrl: './pessoas.component.html',
  styleUrls: ['./pessoas.component.css']
})
export class PessoasComponent {
  pessoas: PessoaModel[] = [];

  constructor(private pessoaService: PessoaService, private router: Router) {

  }

  ngOnInit(): void {
    this.pessoaService.pessoas.subscribe(pessoas => {
      this.pessoas = pessoas;
    });

    this.pessoaService.getPessoas();
  }

  deletePessoa(id: number) {
    this.pessoaService.deletarPessoa(id);
  }

  editPessoa(id: number) {
    this.router.navigate(['/pessoa', id]);
  }

  addPessoa() {
    this.router.navigate(['/pessoa']);
  }
}

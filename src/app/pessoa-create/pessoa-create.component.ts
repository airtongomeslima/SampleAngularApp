import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa, Endereco, Telefone } from '../pessoa';

@Component({
  selector: 'app-pessoa-create',
  templateUrl: './pessoa-create.component.html',
  styleUrls: ['./pessoa-create.component.css']
})
export class PessoaCreateComponent implements OnInit {

  pessoa: Pessoa = {
    nome: '',
    idade: 0,
    sexo: '',
    endereco: {
      logradouro: '',
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep: ''
    },
    telefones: [{
      ddd: '',
      numero: ''
    }],
    id: '',
    idPessoaResponsavel: '',
    sobreNome: ''
  };

  constructor(
    private pessoaService: PessoaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create(): void {
    this.pessoaService.create(this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoa']);
    });
  }

}
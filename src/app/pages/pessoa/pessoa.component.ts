import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PessoaModel } from 'src/app/models/PessoaModel';
import { PessoaService } from 'src/app/services/pessoa/pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  title: string = "";
  pessoa: PessoaModel = new PessoaModel();

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const idParam = this.route.snapshot.paramMap.get('id');
      const id = idParam ? parseInt(idParam, 10) : null;
      if (id) {
        this.title = 'Editar Pessoa';
        this.pessoaService.currentPessoa.subscribe(pessoa => {
          if (pessoa)
            this.pessoa = pessoa;
          else
            throw new Error('Pessoa não encontrada.');
        });
        this.pessoaService.getPessoa(id);
      } else {
        this.title = 'Nova Pessoa';
      }
    });


  }

  onPessoaChange(): void {
    console.log('Pessoa alterada.');
  }

  salvar(): void {
    console.log('Salvar pessoa.');
  }

}
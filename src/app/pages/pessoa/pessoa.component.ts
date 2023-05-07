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
  isEdit: boolean = false;
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
        this.isEdit = true;
        this.pessoaService.getPessoa(id);
      } else {
        this.isEdit = false;
        this.title = 'Nova Pessoa';
      }
    });


  }

  onSave(): void {
    if (this.isEdit) {
      this.pessoaService.atualizarPessoa(this.pessoa).subscribe(result => {
        console.log("Resultado: ", result);
      });
    } else {
      this.pessoaService.criarPessoa(this.pessoa).subscribe(result => {
        console.log("Resultado: ", result);
      });
    }
  }
}
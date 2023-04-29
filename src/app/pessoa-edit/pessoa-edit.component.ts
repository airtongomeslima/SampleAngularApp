import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { Pessoa, Endereco, Telefone } from '../pessoa';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;

  constructor(
    private pessoaService: PessoaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(!id){
      id = "";
    }
    this.pessoaService.getById(id).subscribe(pessoa => {
      this.pessoa = pessoa;
    });
  }

  save(): void {
    this.pessoaService.update(this.pessoa.id, this.pessoa).subscribe(() => {
      this.router.navigate(['/pessoa']);
    });
  }

}

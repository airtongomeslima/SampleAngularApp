import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { Pessoa } from '../pessoa';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(): void {
    this.pessoaService.getAll().subscribe(pessoas => {
      this.pessoas = pessoas;
    });
  }

  openDeleteDialog(pessoa: Pessoa): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        message: `Deseja deletar a pessoa ${pessoa.nome}?`
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(pessoa);
      }
    });
  }


  delete(pessoa: Pessoa): void {
    if (confirm(`Tem certeza que deseja deletar ${pessoa.nome}?`)) {
      this.pessoaService.delete(pessoa.id).subscribe(() => {
        this.pessoas = this.pessoas.filter(p => p.id !== pessoa.id);
      });
    }
  }

}
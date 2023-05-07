import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BaseService } from '../base.service';
import { take } from 'rxjs/operators';
import { PessoaModel } from 'src/app/models/PessoaModel';

@Injectable({
  providedIn: 'root'
})

export class PessoaService {
  public pessoas: BehaviorSubject<PessoaModel[]> = new BehaviorSubject<PessoaModel[]>([]);
  public currentPessoa: BehaviorSubject<PessoaModel | null> = new BehaviorSubject<PessoaModel | null>(null);

  constructor(private baseService: BaseService) { }

  public getPessoas(page: number = 1, quantity: number = 25, orderBy: string = "Id", order: string = "asc"): void {
    this.baseService.getList<PessoaModel>('', `pessoa?page=${page}&quantity=${quantity}&orderBy=${orderBy}&order=${order}`)
      .pipe(take(1))
      .subscribe(response => {
        this.pessoas.next(response);
      }, error => {
        console.warn('Erro ao buscar pessoas: ', error);
      });
  }

  public getPessoa(id: number): void {
    const queryOptions = `id=${id.toString()}`;
    this.baseService.get<PessoaModel>(queryOptions, 'pessoa')
      .pipe(take(1))
      .subscribe(response => {
        this.currentPessoa.next(response);
      });
  }

  public criarPessoa(pessoa: PessoaModel): Observable<PessoaModel> {
    return this.baseService.post<PessoaModel, PessoaModel>(pessoa, 'pessoa');
  }

  public atualizarPessoa(pessoa: PessoaModel): Observable<PessoaModel> {
    return this.baseService.put<PessoaModel, PessoaModel>(pessoa, 'pessoa', pessoa.id);
  }

  public deletarPessoa(id: number): void {
    const queryOptions = `/${id.toString()}`;
    this.baseService.delete(queryOptions, 'pessoa')
      .pipe(take(1))
      .subscribe(res => {
        console.log('Pessoa deletada com sucesso.');
      }, error => {
        console.warn('Erro ao deletar pessoa: ', error);
      });
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UserModel } from 'src/app/models/UserModel';
import { BaseService } from '../base.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: BehaviorSubject<Array<UserModel>> = new BehaviorSubject<Array<UserModel>>(new Array<UserModel>());
  public currentUser: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private baseService: BaseService) { }

  public GetUsers(): void {
    this.baseService.getList<UserModel>('', 'users')
      .pipe(take(1))
      .subscribe(response => {
        this.users.next(response);
      });
  }

  public GetUser(userId: number): void {
    const queryOptions = `id=${userId.toString()}`;

    this.baseService.get<UserModel>(queryOptions, 'users')
      .pipe(take(1))
      .subscribe(response => {
        this.currentUser.next(response);
      });
  }

  public CreateUser(newUser: UserModel): Observable<UserModel> {
    return this.baseService.post<UserModel, UserModel>(newUser, 'users');
  }

  public UpdateUser(userToUpdate: UserModel): Observable<UserModel> {
    return this.baseService.put<UserModel, UserModel>(userToUpdate, 'users', userToUpdate.id);
  }

  public DeleteUser(userId: number): void {
    const queryOptions = `/${userId.toString()}`;

    this.baseService.delete(queryOptions, 'users').pipe(take(1)).subscribe(res => {
      console.log('usuário deletado com sucesso.');
    }, error => {
      console.warn('Erro ao deletar usuário: ', error);
    });
  }
}

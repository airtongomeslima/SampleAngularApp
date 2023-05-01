import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users/users.service';
import { UserModel } from 'src/app/models/UserModel';
import { GeneralService } from 'src/app/helpers/general.service';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit, OnDestroy {

  users: Array<UserModel> = new Array<UserModel>();
  currentUser: UserModel = new UserModel();
  subscriptions: Subscription = new Subscription();
  isEdit: boolean = false;

  constructor(private userService: UsersService, private generalService: GeneralService) { }

  ngOnInit() {
    this.userService.GetUsers();
    this.subscriptions.add(this.userService.users.subscribe(response => {
      this.users = response;
    }));

    this.subscriptions.add(this.userService.currentUser.subscribe(response => {
      this.currentUser = response;
      console.log('selected', this.currentUser);
    }));
  }

  addUser() {
    this.subscriptions.add(this.userService.CreateUser(this.currentUser).subscribe(response => {
      alert('Usuário adicionado com sucesso.');
      this.currentUser = response;
    }, error => {
      console.warn('Erro ao adicionar usuário: ', error);
      alert('Erro ao adicionar usuário, veja o console para mais detalhes.');
    }, () => {
      this.userService.GetUsers();
    }));
  }

  editUser() {
    this.subscriptions.add(this.userService.UpdateUser(this.currentUser).subscribe(response => {
      alert('Usuário editado com sucesso.');
      this.currentUser = response;
    }, error => {
      console.warn('Erro ao editar usuário: ', error);
      alert('Erro ao editar usuário, veja o console para mais detalhes.');
    }, () => {
      this.userService.GetUsers();
    }));
  }

  deleteUser(userId: number) {
    try {
      this.userService.DeleteUser(userId);
      alert('Usuário deletado com sucesso.');
      this.generalService.goToTop();
    } catch (error) {
      console.warn('Erro ao deletar usuário: ', error);
      alert('Erro ao deletar usuário, veja o console para mais detalhes.');
    }
  }

  selectUsertoEdit(userId: number) {
    this.userService.GetUser(userId);
    this.isEdit = true;
    console.log('selected');
    this.generalService.goToTop();
  }

  saveUser(user: UserModel) {
    if (this.isEdit) {
      this.editUser();
    } else {
      this.addUser();
    }
    this.generalService.goToTop();
  }

  ngOnDestroy(): void {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }

}

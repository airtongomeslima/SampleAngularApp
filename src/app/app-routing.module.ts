import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa', component: PessoaListComponent },
  { path: 'pessoa/create', component: PessoaCreateComponent },
  { path: 'pessoa/edit/:id', component: PessoaEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

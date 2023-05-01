import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { PaginaLogadaComponent } from './pages/pagina-logada/pagina-logada.component';
import { AuthGuard } from './guards/Auth.Guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //Caso não digite um endereço (Ex. http://localhost/algumacoisa) redireciona para home
  { path: 'home', component: HomeComponent }, //Home em http://localhost:xxxx/home
  { path: 'pagina', component: PaginaComponent }, //chama uma outra pagina em http://localhost:xxxx/pagina
  { path: 'paginaLogada', component: PaginaLogadaComponent, canActivate: [AuthGuard] }, //chama uma outra pagina se o usuário estiver logado em  em http://localhost:xxxx/paginalogada
  { path: '**', redirectTo: 'home' } //chama a home em caso de endereço desconhecido
];
@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { PaginaComponent } from './pages/pagina/pagina.component';
import { PaginaLogadaComponent } from './pages/pagina-logada/pagina-logada.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { UserEditorComponent } from './components/user-editor/user-editor.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { TelefoneEditorComponent } from './components/telefone-editor/telefone-editor.component';
import { TelefoneListEditorComponent } from './components/telefone-list-editor/telefone-list-editor.component';
import { EnderecoEditorComponent } from './components/endereco-editor/endereco-editor.component';
import { PessoaEditorComponent } from './components/pessoa-editor/pessoa-editor.component';
import { PessoaComponent } from './pages/pessoa/pessoa.component';
import { PessoasComponent } from './pages/pessoas/pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    PaginaLogadaComponent,
    HomeComponent,
    UserComponent,
    UserEditorComponent,
    InputComponent,
    TelefoneEditorComponent,
    TelefoneListEditorComponent,
    EnderecoEditorComponent,
    PessoaEditorComponent,
    PessoaComponent,
    PessoasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

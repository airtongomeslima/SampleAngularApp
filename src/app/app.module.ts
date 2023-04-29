import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
//import {BrowserAnimationsModule} from '@angular/platform browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    PessoaCreateComponent,
    PessoaEditComponent,
    ConfirmationDialogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    MatDialogModule
    //BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

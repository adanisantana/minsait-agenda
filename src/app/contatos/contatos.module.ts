import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContatosRoutingModule } from './contatos-routing.module';
import {ContatosComponent } from './contatos.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { PessoaFormComponent } from './pessoa-form/pessoa-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContatosComponent,
    
  ],
  imports: [
    CommonModule,
    ContatosRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    PessoaFormComponent

  ]
})
export class ContatosModule {

 }

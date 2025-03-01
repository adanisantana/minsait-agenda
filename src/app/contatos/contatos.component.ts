import { Component, OnInit } from '@angular/core';
import { ContatosService } from './services/contatos.service';
import { Observable,  } from 'rxjs';
import { Pessoa } from './model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit{
 contatos$: Observable< Pessoa[]>;

 displayedColumns = ['nome','endereco','contato','actions'];


 constructor(private contatosSevice :ContatosService,  private router :Router,
  private route:ActivatedRoute){
  this.contatos$ = this.contatosSevice.findAll();
 }

 ngOnInit(): void {

 }

 onAdd(){
  this.router.navigate(['contatos/new'])
 }
}

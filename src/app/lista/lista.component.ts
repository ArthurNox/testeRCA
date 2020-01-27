import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Content } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  produtos: Array<any>

  constructor(private apiService: APIService ) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.apiService.listar().subscribe(produto => this.produtos = produto) 
  }


}

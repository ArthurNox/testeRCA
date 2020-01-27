import { Component, OnInit } from '@angular/core';

export interface DadosVeiculo {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  selectedValue: string;
  selectedCar: string;
  
  marcas: DadosVeiculo[] = [
    {value: 'Fiat', viewValue: 'Fiat'},
    {value: 'Wolksvagen', viewValue: 'Wolksvagen'},
    {value: 'Chevrolet', viewValue: 'Chevrolet'},
    {value: 'Ford', viewValue: 'Ford'}
  ];

  modelos: DadosVeiculo[] = [
    {value: 'Idea', viewValue: 'Idea'},
    {value: 'Gol', viewValue: 'Gol'},
    {value: 'Onix', viewValue: 'Onix'},
    {value: 'Ká', viewValue: 'Ká'}
  ];

  versoes: DadosVeiculo[] = [
    {value: '1.0', viewValue: '1.0'},
    {value: '1.4', viewValue: '1.4'},
    {value: '1.6', viewValue: '1.6'},
    {value: '2.0', viewValue: '2.0'}
  ];

  anos: DadosVeiculo[] = [
    {value: '2015', viewValue: '2015'},
    {value: '2016', viewValue: '2016'},
    {value: '2017', viewValue: '2017'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
  ];

  meses: DadosVeiculo[] = [
    {value: '1.0', viewValue: '1.0'},
    {value: '1.4', viewValue: '1.4'},
    {value: '1.6', viewValue: '1.6'},
    {value: '2.0', viewValue: '2.0'}
  ];

  kms: DadosVeiculo[] = [
    {value: '1.0', viewValue: '1.0'},
    {value: '1.4', viewValue: '1.4'},
    {value: '1.6', viewValue: '1.6'},
    {value: '2.0', viewValue: '2.0'}
  ];

  
  constructor() { }

  ngOnInit() {
  }
}

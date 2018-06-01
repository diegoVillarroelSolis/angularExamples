import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  name = 'anony';
  categorySelect:number;
  items: MenuItem[];
  constructor(private router:Router) { } 
  ngOnInit() {
      this.items = [
            {label: 'Jugos', icon: 'fa fa-glass fa-1x', routerLink: ['/juice']},
            {label: 'Bebidas Frias', icon: 'fa fa-beer fa-1x', routerLink: ['/coldDrink']},
            {label: 'Bebidas Calientes', icon: 'fa fa-coffee fa-1x', routerLink: ['/hotDrink']},
            {label: 'Sandwiches', icon: 'fa fa-cutlery fa-1x', routerLink: ['/sandwich']},
            {label: 'Ensalada de Frutas', icon: 'fa fa-lemon-o fa-1x', routerLink: ['/fruit']}
        ];
  }

}
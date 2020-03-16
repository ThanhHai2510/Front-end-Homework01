import { Component, OnInit } from '@angular/core';
import { product } from '../Product';
import { data } from '../MockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
  selected: product;
  showDetail(product){
    console.log(product);
    this.selected = product;
  }
}
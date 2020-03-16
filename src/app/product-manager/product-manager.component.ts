import { Component, OnInit } from '@angular/core';
import { product } from '../Product';
import { data } from '../MockData';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public products = data;
  removeProduct(name){
    console.log(name);
    this.products = this.products.filter(product => product.name != name)
  }
  
}
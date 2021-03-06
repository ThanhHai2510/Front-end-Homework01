import { Injectable } from '@angular/core';
import { product } from '../Product';
import { data } from '../MockData';
@Injectable()
export class ProductService {

  constructor() { }
  products = data;

  getProducts(){
    console.log('getProducts');
    return this.products;
  }

  removeProduct(name){
    console.log('removeProduct');
    return this.products = this.products.filter(product => product.name != name);
  }
  addProduct(product){
    let newObj = {...product};
    this.products.push(newObj);
    console.log(newObj);
  }
  getProduct(name){
    return this.products.find(product => product.name == name);
    console.log(this.products);
  }
}
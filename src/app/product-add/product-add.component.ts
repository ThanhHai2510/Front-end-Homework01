import { Component, OnInit } from '@angular/core';
import { product } from "../Product";
import { ProductService } from "../services/product.service";
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: product = new product();
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
  }
  addProduct(product){
    console.log(product);
    return this.productService.addProduct(product);
  }
}
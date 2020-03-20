import { Component, OnInit } from "@angular/core";
import { product } from "../Product";
import { data } from "../MockData";
import { ProductService } from "../services/product.service";

@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  constructor(private productService: ProductService) {}
  products;
  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  removeProduct(name) {
    console.log(name);
    this.products = this.productService.removeProduct(name);
  }
}

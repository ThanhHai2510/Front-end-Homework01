import { Component, OnInit, Input } from "@angular/core";
import { product } from "../Product";
import { data } from "../MockData";
import { ProductService } from "../services/product.service";
@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
  // @Input() products: product[];
  selected: product;
  showDetail(product) {
    console.log(product);
    this.selected = product;
  }
}

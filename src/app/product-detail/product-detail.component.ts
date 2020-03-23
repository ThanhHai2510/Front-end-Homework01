import { Component, OnInit} from '@angular/core';
import { product } from '../Product';
import { ProductService } from "../services/product.service";
import { ActivatedRoute } from "@angular/router"
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // @Input("detail") data : product;
  product;
  
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct(){
    this.activatedRoute.params.subscribe(param => {
      // console.log(param.name);
      this.product = this.productService.getProduct(param.name);
    });
  }
}
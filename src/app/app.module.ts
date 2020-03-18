import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SliderComponent } from './slider/slider.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductListComponent, CategoryComponent, ProductComponent, SliderComponent, ProductManagerComponent, ProductDetailComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

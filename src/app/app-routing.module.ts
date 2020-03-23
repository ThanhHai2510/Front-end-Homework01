import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  {path: "manager", component: ProductManagerComponent},
  {path: "home", component: ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
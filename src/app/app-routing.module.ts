import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [
  {path: "", redirectTo:"home", pathMatch:"full"},
  {path: "home", component: ProductListComponent},
  {path: "manager", component: ProductManagerComponent},
  {path: "product/detail/:name", component: ProductDetailComponent},
  {path: "about", component: AboutComponent},
  {path: "services", component: ServicesComponent},
  {path: "contact", component: ContactComponent},
  {path: "404", component: NotFoundComponent},
  {path: "**", redirectTo:"/404", pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
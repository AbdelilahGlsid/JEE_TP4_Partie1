import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewProductComponent} from "./new-product/new-product.component";
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "products", component : ProductsComponent},
  {path : "newProduct", component : NewProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

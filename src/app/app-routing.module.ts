import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component'
const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"home",component:HomeComponent},
  {path:"newProduct",component:ProductAddComponent},
  {path:"editProduct/:id",component:ProductEditComponent},
  {path:"",redirectTo:"",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

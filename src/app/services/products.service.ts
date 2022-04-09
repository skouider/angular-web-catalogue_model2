import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../components/model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
    let host = environment.host
   return this.http.get<Product[]>(host+"/products")
  }

  getSelctedProducts():Observable<Product[]>{
    let host = environment.host
   return this.http.get<Product[]>(host+"/products?selected=true")
  }

  getAvailableProducts():Observable<Product[]>{
    let host = environment.host
   return this.http.get<Product[]>(host+"/products?available=true")
  }

  searcheProducts(keyword:string):Observable<Product[]>{
    let host = environment.host
   return this.http.get<Product[]>(host+"/products?name_like="+keyword)
  }

  ifSelectedProducts(product:Product):Observable<Product>{
    product.selected = !product.selected
    let host = environment.host
   return this.http.put<Product>(host+"/products/"+product.id,product)
  }
  deleteProducts(product:Product):Observable<void>{
    
    let host = environment.host
   return this.http.delete<void>(host+"/products/"+product.id)
  }

  saveProducts(product:Product):Observable<Product>{
    
    let host = environment.host
   return this.http.post<Product>(host+"/products/",product)
  }

  getProduct(productId:number):Observable<Product>{
    let host = environment.host
   return this.http.get<Product>(host+"/products/"+productId)
  }
  updateProduct(product:Product){
    let host = environment.host
    return this.http.put<Product>(host+"/products/"+product.id,product)
  }

}

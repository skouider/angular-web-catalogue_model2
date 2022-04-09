import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { ProductsService } from 'src/app/services/products.service';
import { AppDAtaState, DataStateEnum } from 'src/app/state/product.state';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // procedural methode*****
  // products: Product[] = []
  // observable methode*****
  products$: Observable<AppDAtaState<Product[]>> | null = null

  readonly DataStateEnum = DataStateEnum;

  constructor(private service: ProductsService,private router:Router) { }

  ngOnInit(): void {

  }

  onGetAllProducts() {
    this.products$ = this.service.getAllProducts()
      .pipe(map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

      )

  }

  onGetSelectedProducts() {

    this.products$ = this.service.getSelctedProducts()
      .pipe(map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
      )
}


  onGetAvailableProducts() {
    this.products$ = this.service.getAvailableProducts()
      .pipe(map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))    
      )
  }

  onSearch(form:any){
    this.products$ = this.service.searcheProducts(form.keyword)
      .pipe(map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
        startWith({ dataState: DataStateEnum.LOADING }),
        catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))    
      )
  }

  onSelect(p:Product){

    this.service.ifSelectedProducts(p)
    .subscribe(data=>{
      p.selected = data.selected
    })
  }

  onDelete(p:Product){

    let v = confirm("Etes vous sure???");
    if(v == true)
    this.service.deleteProducts(p)
    .subscribe(data=>{
       this.onGetAllProducts()
    })
  }

  onNewProducts(){
this.router.navigateByUrl('/newProduct')
  }
  
  onEdit(p:Product){
    this.router.navigateByUrl('/editProduct/'+p.id)
  }
}

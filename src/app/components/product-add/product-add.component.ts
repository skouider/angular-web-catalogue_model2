import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  
  product?:Product
  productFormGroup:any 
  submitted:boolean = false
  
  constructor(private fb: FormBuilder,private service:ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["",Validators.required],
      price:[0],
      quantity:[0],
      available:[""],  
      selected:[""],  
    })
  }

 

  onSaveProduct(){
    this.submitted = true
    if(this.productFormGroup.invalid){
      console.log("product not valid");
      alert("Item Not Saved.....")
      return;
    }
    this.service.saveProducts(this.productFormGroup.value)
    .subscribe(data=>{
      console.log("product saved succcesfully....");
      
      // this.product = data
      alert("Success Saving Product...")
    },err=>{
      console.log(err);
     })
    }
  }

    


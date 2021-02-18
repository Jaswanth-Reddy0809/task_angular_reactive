import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder,private data:ProductsService,private actroute:ActivatedRoute) { }
  productFG:any={}
  ngOnInit(): void {
    console.log(this.data)
    this.productFG=this.fb.group({
      name:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      cost:this.fb.control('',Validators.required),
      details:this.fb.control('')})

    

  }
  createProduct(){
    console.log(this.productFG.value)
    this.data.addProduct(this.productFG.value)
    console.log(this.data)
    alert("created")
  }

}

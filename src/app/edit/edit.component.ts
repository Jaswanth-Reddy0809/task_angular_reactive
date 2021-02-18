import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private data:ProductsService,private actroute:ActivatedRoute) { }
  productFG:any={}
  ngOnInit(): void {
    this.productFG=this.fb.group({
      name:this.fb.control(''),
      cost:this.fb.control(''),
      details:this.fb.control('')})

    

  }
  updateProduct(){
    
    this.data.update(this.actroute.snapshot.params.id,this.productFG.value)
    console.log(this.productFG.value)
  }

}

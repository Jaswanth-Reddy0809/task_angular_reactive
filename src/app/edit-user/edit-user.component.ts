import { Component, OnInit } from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private route:Router,private fb:FormBuilder,private user:UsersService,private actroute:ActivatedRoute) { }
productFG:any={}
  ngOnInit(): void {
    
    console.log(this.user.getData())
    console.log(this.actroute.snapshot.params.id)
    this.productFG=this.fb.group({
      uername:this.fb.control('',[Validators.required,Validators.minLength(5),Validators.maxLength(30)]),
      email:this.fb.control('',[Validators.required,Validators.minLength(10),Validators.maxLength(30)]),
      mobile:this.fb.control('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
      password:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      confirm_password:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      country:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      state:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      city:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      gender:this.fb.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(30)]),
      zipcode:this.fb.control('',[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
    })
  
    console.log(this.productFG.value)
  }
  updateUser(){
    
    this.user.update(this.actroute.snapshot.params.id,this.productFG.value)
    console.log(this.user)
  }


  
  

}

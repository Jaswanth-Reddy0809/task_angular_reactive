import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { UsersService } from '../users.service'
import{Router} from '@angular/router'


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
productFG : any={}
  constructor(private fb:FormBuilder,private user:UsersService,private route:Router) { }

  ngOnInit(): void {
    this.productFG=this.fb.group({
      username:this.fb.control(''),
      email:this.fb.control(''),
      mobile:this.fb.control(''),
      password:this.fb.control(''),
      confirm_password:this.fb.control(''),
      country:this.fb.control(''),
      state:this.fb.control(''),
      city:this.fb.control(''),
      gender:this.fb.control(''),
      zipcode:this.fb.control('')
    })
  }
  submitform(){
    console.log(this.productFG.value)
    this.user.adduser(this.productFG.value)

}
}

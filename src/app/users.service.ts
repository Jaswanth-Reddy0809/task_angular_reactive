import { getLocaleEraNames } from '@angular/common';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  userData=[
    {
      id:1,
      username:"user1",
     email:"user1@gmail.com",
     mobile:"1234567890",
      password:"qwerty",
      confirm_password:"qwerty",
      country:"country1",
      state:"State1",
      city:"city1",
      gender:"male",
      zipcode:"123456"
    },
    {
      id:2,
      username:"user2",
      email:"user2@gmail.com",
      mobile:"1232567890",
      password:"qwerty",
     confirm_password:"qwerty",
      country:"country2",
      state:"State2",
      city:"city2",
      gender:"male",
      zipcode:"133456"
    },
    {
      id:3,
      username:"user3",
      email:"user3@gmail.com",
      mobile:"1232567890",
      password:"q3erty",
     confirm_password:"q3erty",
      country:"country3",
      state:"State3",
      city:"city3",
       zipcode:"323456"
    }
  ]
  constructor(private http:HttpClient) { }
  getData():Array<Object>{
    return this.userData
  
  }
  getLength(){
    return this.userData.length
  }
  deleteObj(id:number)
  {
    
    var index =this.userData.map(item => {return item.id}).indexOf(id)
    this.userData.splice(index,1)
    console.log(index)
  }
  adduser(temp:any){
    temp.id=this.userData.length+1
    this.userData.push(temp)
  }
  
  update(id:number,temp:any)
  {
    //return this.http.put(`https://5cdd0a92b22718001417c19d.mockapi.io/api/users/${id}`,temp)
    let index=this.userData.findIndex((item) => {return item.id==id})
    temp.id=id
    this.userData[index]=temp
    console.log(this.userData)
}


  }


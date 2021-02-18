import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productData=[
    {
      id:1,
      name:"prod1",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_1_details"
    },
    {
      id:2,
      name:"prod2",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_2_details"
    }
    ,
    {
      id:3,
      name:"prod3",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_3_details"
    },
    {
      id:4,
      name:"prod4",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_4_details"
    },
    {
      id:5,
      name:"prod5",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_5_details"
    },
    {
      id:6,
      name:"prod6",
      img:"https://www.printwand.com/blog/media/2012/01/ultimate-guide-to-your-product-launch.jpg",
      cost:"$24.99",
      details:"prod_6_details"
    }
  ]

  constructor(private http:HttpClient) { }
  getAllProducts():Array<Object>{
   return this.productData
  }
  productId(id:number){

    return this.productData.find(p => p.id==id)
  }
  getLength(){
    return this.productData.length
  }
  deleteObj(id:number)
  {
    var index =this.productData.map(item => {return item.id}).indexOf(id)
    this.productData.splice(index,1)
    console.log(index)
  }
  addProduct(temp:any){
    temp.id=this.productData.length+1
    temp.img="https://whyfutz.com/how-to-sell-a-product/"
    this.productData.push(temp)
  }
  
  update(id:number,temp:any)
  {
    let index=this.productData.findIndex((item) => {return item.id==id})
    temp.id=id
    this.productData[index]=temp
    console.log(this.productData)
}
}
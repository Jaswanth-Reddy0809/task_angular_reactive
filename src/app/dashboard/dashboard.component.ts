import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  total_users:number=0
  total_products:number=0

  constructor(private prod_data:ProductsService,private user_data:UsersService ) { }

  ngOnInit(): void {
    this.total_users=this.user_data.getLength()
    this.total_products=this.prod_data.getLength()


  }

}

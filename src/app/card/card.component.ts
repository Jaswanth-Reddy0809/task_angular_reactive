import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {prod_data} from '../model1'
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
 @Input() prod_data:any={}
 prodObj:any={}
  constructor(private dataserv:ProductsService,private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.prodObj=this.dataserv.productId(this.actroute.snapshot.params.id)
  }
  deleteObject(id:number)
{
this.dataserv.deleteObj(id)
}

}

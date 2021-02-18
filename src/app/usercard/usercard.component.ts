import { Component, Input, OnInit } from '@angular/core';
import { userData } from '../model1';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-usercard',
  templateUrl: './usercard.component.html',
  styleUrls: ['./usercard.component.css']
})
export class UsercardComponent implements OnInit {
  @Input() userData:any={}
  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }
  deleteobj(id:number)
{
this.user.deleteObj(id)

}
}

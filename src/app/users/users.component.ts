import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userdata:Array<object>=[];
  constructor(private dataserv:UsersService) { }

  ngOnInit(): void {
    this.userdata=this.dataserv.getData()

}
}

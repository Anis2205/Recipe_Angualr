import { Component, OnInit ,Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { storageservice } from '../recipe/datastore.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // @Output() feature = new EventEmitter<string>();
  constructor(private databseservice : storageservice) { }

  ngOnInit(): void {
  }
  // onshoppinglist(){
  //  this.router.navigate(['shoppinglist'],{relativeTo:this.route})
  // }
  // onrecipe(){
  //   this.router.navigate(['recipes'],{relativeTo:this.route})
  // }
  onsave(){
    console.log("hey")
    this.databseservice.postdata()
  }
  onfetchdata(){
    this.databseservice.fetchdata()
  }

}

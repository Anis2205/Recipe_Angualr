import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { Shoppinglistservice } from '../shopping_list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy { 
  ingredient: Ingredient[] =[];
  private mysubscription : Subscription | undefined

  constructor(private shoppinglistservice : Shoppinglistservice) { }
  ngOnDestroy(): void {
    this.mysubscription?.unsubscribe()
  }

  ngOnInit() {
    this.ingredient = this.shoppinglistservice.getingredients()
    this.mysubscription = this.shoppinglistservice.ingredientschanged.subscribe(
      (newingredient : Ingredient[]) => this.ingredient = newingredient
    )
  }

  onedititem(pos:number){
      this.shoppinglistservice.startediting.next(pos)
  }

  // addingingredient(value:any){
  // this.ingredient.push(value)
  // }
  
}

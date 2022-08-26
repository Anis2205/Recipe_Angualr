
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class Shoppinglistservice {
    ingredientschanged = new Subject<Ingredient[]>();
    startediting = new Subject<number>()
    ingredients: Ingredient[] =[
    ];

    getvalue(index : number){
   return this.ingredients[index]
    }
    edititem(index:number,item:Ingredient){
        this.ingredients[index]=item
        this.ingredientschanged.next(this.ingredients.slice())
    }

    getingredients(){
        return this.ingredients.slice()
    }

    deleteitem(index:number){
        this.ingredients.splice(index,1)
        this.ingredientschanged.next(this.ingredients.slice())
    }
    
    addingingredient(value:Ingredient){
        console.log(value)
        this.ingredients.push(value)
        //as we need to save the changes from original array to copy will inform this using subscibe
        this.ingredientschanged.next(this.ingredients)
        }
}
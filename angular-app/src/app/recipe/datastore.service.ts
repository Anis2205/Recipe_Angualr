import { HttpClient } from "@angular/common/http";
import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Recipe } from "./recipe.model";
import { Recipeservice } from "./recipe.service";
import {map,tap} from 'rxjs/operators'
import { Ingredient } from "../shared/ingredient.model";
@Injectable({providedIn:'root'})

export class storageservice implements OnDestroy {
    subscribed :Subscription |undefined
    constructor(private http : HttpClient,private recipeservice:Recipeservice){

    }


    ngOnDestroy(): void {
        this.subscribed?.unsubscribe()
    }

    postdata(){
      const recipe=this.recipeservice.getrecipes()
        //use put to modify the data in  there already
       this.subscribed = this.http.put('https://recipebook-d1d06-default-rtdb.firebaseio.com/recipes.json',recipe).subscribe(
            (response)=>{
                console.log(response)
            }
        )
    }
    fetchdata(){
      return this.http.get<Recipe[]>('https://recipebook-d1d06-default-rtdb.firebaseio.com/recipes.json').pipe
      (map(
          recipes=>{
          return recipes.map(
          recipe => {
              return {...recipe,ingredients : recipe.ingredients ? recipe.ingredients : []}
          }
      )}
      ),tap(
          (Responsedata)=>{
              this.recipeservice.newrecipes(Responsedata)

          }
      )
      )
    }

}

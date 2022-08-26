import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router"
import { storageservice } from "./datastore.service";
import { Recipe } from "./recipe.model";
import { Recipeservice } from "./recipe.service";

@Injectable({
    providedIn:'root'
})
export class Reciperesolver implements Resolve<Recipe[]>{
    constructor(private datastorageservice : storageservice,private recipeservice:Recipeservice){
        
    }
  
    resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
        const recipes = this.recipeservice.getrecipes()
        if(recipes.length === 0 ){
            return this.datastorageservice.fetchdata()
        }
        else{
            return recipes
        }
        
    }

}
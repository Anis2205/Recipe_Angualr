import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { storageservice } from '../datastore.service';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  in = 0
  // recipes : Recipe[] = [
  //   new Recipe("Halwa","two spoon of sugar","https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Suji-Halwa-Thumbnail.jpg",[]),
  //   new Recipe("Laddu","two spoons of sugar","https://www.funfoodfrolic.com/wp-content/uploads/2020/10/Suji-Halwa-Thumbnail.jpg",[])
  // ] ;
  // @Output() recipedetailview = new EventEmitter<Recipe>();

  recipes : Recipe[] = [

  ]
  subscribing : Subscription | undefined
  constructor(private recipeservice : Recipeservice,private dataservice : storageservice) { }

  ngOnInit(): void {
    this.subscribing=this.recipeservice.recipesChanged.subscribe(
      (data:Recipe[])=>{
        this.recipes=data }
    )
    this.dataservice.fetchdata()
    this.recipes = this.recipeservice.getrecipes()
  }
  ngOnDestroy(){
     this.subscribing?.unsubscribe()
  }
  // onrecipeitemdetail(recipetoview: any) {
  //   this.recipedetailview.emit(recipetoview)

  // }
}

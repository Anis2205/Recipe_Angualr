
import { Component, OnInit  } from '@angular/core';
import { Recipe } from './recipe.model';
import { Recipeservice } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  detail :Recipe | undefined
  constructor(private recipeservice : Recipeservice) { }

  ngOnInit(): void {
    // this.recipeservice.recipeselected.subscribe(
    //   //after getting the recipe to which we view detail will store it in detail variable
    //   (recipe : Recipe) => this.detail = recipe
    // )
  }
  
 

}

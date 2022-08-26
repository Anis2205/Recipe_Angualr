import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Recipeservice } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  // @Input()
  // recipe!: Recipe;
  recipe:Recipe | undefined
  id :number | undefined
  constructor(private recipeservice: Recipeservice,
    private route:ActivatedRoute,
    private router : Router) {
      
     }
  ngOnInit(): void {   
    this.route.params.subscribe(
      (data:Params)=>{
            this.id=+data['id']
            this.recipe = this.recipeservice.getrecipe(this.id!);
      }
    )
    // if(this.recipe === undefined){
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // }  
  }
  oningredienttoshoppinglist() {
   this.recipeservice.addingtoshopping(this.recipe!.ingredients)
   this.router.navigate(['shoppinglist'])
  }
  ondelete(){
    this.recipeservice.deleterecipe(this.id!)
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
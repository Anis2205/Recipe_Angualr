import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { Recipeservice } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // @Output() viewrecipedetail = new EventEmitter<void>();
  @Input()
  recipe!: Recipe;
  @Input()index !: number;
  constructor(private recipeservice : Recipeservice) { }

  ngOnInit(): void {

  }
  // onselect(){
  //  // this.viewrecipedetail.emit();
  //   this.recipeservice.recipeselected.emit(this.recipe);
  // }

}

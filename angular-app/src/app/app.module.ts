import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping_list/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping_list/shopping-list-edit/shopping-list-edit.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeComponent } from './recipe/recipe.component';
import { dropdown } from './directives/dropdown.directive';
import { Recipeservice } from './recipe/recipe.service';
import { Shoppinglistservice } from './shopping_list/shopping_list.service';
import { AppRoutes } from './app-routes.model';
import { RecipestartComponent } from './recipestart/recipestart.component';
import { RecipeEditComponent } from "./recipe/recipedit/recipedit.component";
import {HttpClientModule} from "@angular/common/http";
import { AuthComponent } from './auth/auth.component'
import { LoadingspinnerComponent } from './shared/loadingspinner/loadingspinner.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeComponent,
    dropdown,
    RecipestartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingspinnerComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [Recipeservice,Shoppinglistservice],
  bootstrap: [AppComponent]
})
export class AppModule { }

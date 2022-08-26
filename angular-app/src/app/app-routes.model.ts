import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipeComponent } from "./recipe/recipe.component";
import { RecipestartComponent } from "./recipestart/recipestart.component";
import { ShoppingListComponent } from "./shopping_list/shopping-list/shopping-list.component";
import { RecipeEditComponent } from "./recipe/recipedit/recipedit.component";
import { RecipeDetailComponent } from "./recipe/recipe-detail/recipe-detail.component";
import { Reciperesolver } from "./recipe/reciperesolver.service";
import { AuthComponent } from "./auth/auth.component";

const approutes: Routes = [
    //    {path:'',redirectTo:"/recipes",pathMatch:"full"},
    { path: '', component:AuthComponent,pathMatch:"full"},
    {
        path: 'recipes', component: RecipeComponent,children: [
            { path: '', component: RecipestartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent, resolve: [Reciperesolver] },
            { path: ':id/edit', component: RecipeEditComponent, resolve: [Reciperesolver] }
        ]
    },
    { path: 'shoppinglist', component: ShoppingListComponent }
]


@NgModule({
    imports: [
        RouterModule.forRoot(approutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutes {

}

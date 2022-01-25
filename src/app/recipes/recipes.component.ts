import { Component, OnInit } from '@angular/core'
import { Recipe } from './recipe-model'
import { RecipeServices } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers : [RecipeServices]
})
export class RecipesComponent implements OnInit {
  selectedRecipe:Recipe;
  constructor(private recipeServices:RecipeServices) {}

  ngOnInit(){
    this.recipeServices.recipeSelected.subscribe(
      (recipe:Recipe)=>{ 
        this.selectedRecipe=recipe;
      }
    );
  }
}

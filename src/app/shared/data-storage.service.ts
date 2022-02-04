import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe-model'

import { RecipeServices } from '../recipes/recipes.service'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeServices,
  ) {}
  stroreRecipe() {
    const recipes = this.recipeService.getRecipes()
    this.http
      .put(
        'https://myapp-9ff9e-default-rtdb.firebaseio.com/recipes.json',
        recipes,
      )
      .subscribe((response) => {
        console.log(response)
      })
  }
  fetchRecipes() {
    this.http
      .get<Recipe[]>(
        'https://myapp-9ff9e-default-rtdb.firebaseio.com/recipes.json',
      )
      .subscribe((recipes) => {
        this.recipeService.setRecipes(recipes)
      })
  }
}

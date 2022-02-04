import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { map,tap } from 'rxjs/operators'
import { Recipe } from '../recipes/recipe-model'

import { RecipeServices } from '../recipes/recipes.service'

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeServices,
  ) {}
  storeRecipe() {
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
    return this.http
      .get<Recipe[]>(
        'https://myapp-9ff9e-default-rtdb.firebaseio.com/recipes.json',
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipes) => {
            return {
              ...recipes,
              ingredients: recipes.ingredients ? recipes.ingredients : [],
            }
          })
        }),
        tap(recipes=>{
          this.recipeService.setRecipes(recipes)
        })
      )
      
  }
}

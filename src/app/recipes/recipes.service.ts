import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-model'

export class RecipeServices {
recipeSelected= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'this is just for the test',
      'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ),
    new Recipe(
      'a test recipe',
      'this is just for the test',
      'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    ),
  ]
  getRecipes() {
    return this.recipes.slice();
  }
}

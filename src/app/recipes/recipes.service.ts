import { EventEmitter, Injectable } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe-model'
@Injectable()
export class RecipeServices {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'this is just for the test',
      'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      [new Ingredient('meat', 1), new Ingredient('French Fries', 14)],
    ),
    new Recipe(
      'Big fat Burger',
      'this is just for the test',
      'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmVjaXBlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
      [new Ingredient('buns', 16), new Ingredient('French Fries', 14)],
    ),
  ]
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice()
  }
  addingIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}

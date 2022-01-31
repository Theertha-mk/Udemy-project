import { Injectable } from '@angular/core'

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe-model'

@Injectable()
export class RecipeServices {


  private recipes: Recipe[] = [
    new Recipe(
      'Tasty schnitzel',
      'this is just for the test',
      'https://media.istockphoto.com/photos/fried-steaks-french-fries-and-vegetables-picture-id621971616?k=20&m=621971616&s=612x612&w=0&h=nG5gMCxSKMp-1i3XjOT1R0Pyn9njls6rVGBq5nvH0pU=',
      [new Ingredient('meat', 1), new Ingredient('French Fries', 14)],
    ),
    new Recipe(
      'Big fat Burger',
      'this is just for the test',
      'https://www.eatthis.com/wp-content/uploads/sites/4/2021/04/fatburger.jpg',
      [new Ingredient('buns', 16), new Ingredient('French Fries', 14)],
    ),
  ]
  constructor(private slService: ShoppingListService) {}
  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }
  addingIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}

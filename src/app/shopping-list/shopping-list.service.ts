import { EventEmitter } from '@angular/core'
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs'
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>()
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('Orange', 15),
  ]
  getIngredients() {
    return this.ingredients.slice()
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
  addIngredients(ingredients: Ingredient[]) {
    //   for (let ingredient of ingredients){
    //     this.addIngredient(ingredient)
    //   }

    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}

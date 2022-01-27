import { Component, Input, OnInit } from '@angular/core'
import { Recipe } from '../recipe-model'
import { RecipeServices } from '../recipes.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  constructor(private recipeService: RecipeServices) {}

  ngOnInit(): void {}
  onAddToShoppingList() {
    this.recipeService.addingIngredientsToShoppingList(this.recipe.ingredients)
  }
}

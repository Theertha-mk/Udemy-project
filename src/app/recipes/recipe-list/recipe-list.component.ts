import { Component,Input, OnDestroy, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe-model'
import { RecipeServices } from '../recipes.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit,OnDestroy {
 recipes: Recipe[];
 subscription:Subscription

  constructor(private recipeServices: RecipeServices,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription=this.recipeServices.recipeChanged.subscribe(
      (recipes:Recipe[])=>{
        this.recipes=recipes;
      }
    )
    this.recipes = this.recipeServices.getRecipes()
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
ngOnDestroy(): void {
    this.subscription.unsubscribe()
}
}

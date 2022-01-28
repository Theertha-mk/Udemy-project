import { Component,Input, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe-model'
import { RecipeServices } from '../recipes.service'
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = []

  constructor(private recipeServices: RecipeServices,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipes()
  }
  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

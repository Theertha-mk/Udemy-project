import { Component, Input, OnInit} from '@angular/core'
import { Recipe } from '../../recipe-model'
import { RecipeServices } from '../../recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
 
  constructor(private recipeServices:RecipeServices) {}

  ngOnInit(): void {}
  onSelected(){
   this.recipeServices.recipeSelected.emit(this.recipe);
  }
}

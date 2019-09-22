import { Component, OnInit } from '@angular/core';
import {IRecipe} from '../Models/IRecipe';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeService } from '../../services/recipe.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})
export class ListRecipeComponent implements OnInit {

  constructor(private httpclient: HttpClient, public recipeService : RecipeService) { }
  
  recipes:IRecipe[];
  recipeFilter;
  selectedCars:IRecipe[];
  numberPage;
  //recipes:Object
  ngOnInit() {
     // this.recipes = this.getRecipe();
     this.getRecipeByTitleAndPage("","1");
     this.numberPage ="1";
  }
    changeText(){
      let textFilter = this.recipeFilter;
      this.getRecipeByTitleAndPage(textFilter, this.numberPage);
    }

    changePage(){
      this.getRecipeByTitleAndPage(this.recipeFilter,this.numberPage);
    }


    getRecipeByTitleAndPage(textFilter, page) {
        let recipeArray = []
          this.recipeService.getRecipeByTitle(textFilter, page)
            .subscribe((data: any) => {
              data.results.forEach(e => {
                recipeArray.push(e)
              })
            this.recipes = recipeArray;
            })
  
       }




}

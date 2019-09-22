import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListRecipeComponent } from './list-recipe/list-recipe.component';
import {InputTextModule} from 'primeng/inputtext';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {OrderListModule} from 'primeng/orderlist';
import {HttpClientModule} from '@angular/common/http';
import { RecipeService } from '../services/recipe.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InputTextModule,
    AngularFontAwesomeModule,
    OrderListModule,
    FormsModule
  ],
  providers: [
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

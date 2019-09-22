import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable()

export class RecipeService {

  constructor(private httpclient : HttpClient) { }

  getRecipeByTitle(title, page){
    return this.httpclient.get(`/api/?q=${title}&p=${page}`)
    .pipe(map(res => {
      return res;
    }));
  }

}

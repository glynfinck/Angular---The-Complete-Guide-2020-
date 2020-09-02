import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fettucine Alfredo',
               'Best Alfredo Ever!',
               'https://cdn.loveandlemons.com/wp-content/uploads/2020/02/alfredo-sauce.jpg')
    ,new Recipe('Cheese Burgers',
                'Great cheese burger recipe for the grill!',
                'https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }

}

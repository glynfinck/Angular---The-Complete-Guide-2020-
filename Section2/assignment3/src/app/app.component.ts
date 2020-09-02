import { Component } from '@angular/core';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'assignment3';
  showSecret = false;
  log = [];


  onButtonClicked(){
    this.log.push(formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss', 'en'))
    this.showSecret = !this.showSecret;
  }
}

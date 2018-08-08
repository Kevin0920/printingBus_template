import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    setTheme('bs3');
  }

  ngOnInit() {
    $("#return-to-top").hide();
    $(window).scroll(function () {
      var scrollval = $(window).scrollTop();
      if (scrollval >= 50) {
        $('#return-to-top').fadeIn(200);
      }
      else {
        $('#return-to-top').fadeOut(200);
      }
    })
  }

  arrowClick(event) {
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }

}

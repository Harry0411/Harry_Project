import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tivo';

  ngOnInit(){
    $(document).ready(function(){
      
      if (!sessionStorage.isVisited) {
        sessionStorage.isVisited = 'true';
        $(".loader").fadeIn(1000, "linear").css("display", "inline-block");
        $(".loader").delay(2150).fadeOut(500, "linear");
        $(".pre-loader").delay(3200).fadeOut(1000);
      }
      else
      $(".pre-loader, .loader").hide();
    });
  }
}

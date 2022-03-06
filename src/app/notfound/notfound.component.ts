import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',

})


export class NotfoundComponent implements OnInit {
  imgPrefix="assets/images/not-found.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}

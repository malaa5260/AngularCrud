import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {
  languale:string = '';
  listOfLanguage:string[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addLanguage(){
    this.listOfLanguage.push(this.languale)
  }
  removeLanguage(){
    this.listOfLanguage.splice(0,1);
  }
}

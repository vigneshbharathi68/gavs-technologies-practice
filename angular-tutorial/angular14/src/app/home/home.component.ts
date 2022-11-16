import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headerName = "Angular Tutorial";
  salary = 1000;
  isDisabled = true;
  ngOnInit(): void {
  }

  FunctionClick (name: string) {
    alert(name);
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-languaje',
  templateUrl: './languaje.component.html',
  styleUrls: ['./languaje.component.scss']
})
export class LanguajeComponent implements OnInit {

  @Input() languaje = ""
  @Input() level = ""
  constructor() { }

  ngOnInit(): void {
  }

}

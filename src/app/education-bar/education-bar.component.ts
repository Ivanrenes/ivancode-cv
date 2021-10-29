import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-bar',
  templateUrl: './education-bar.component.html',
  styleUrls: ['./education-bar.component.scss']
})
export class EducationBarComponent implements OnInit {


  @Input() career = ""
  @Input() university = ""
  @Input() year = ""

  constructor() { }

  ngOnInit(): void {
  }

}

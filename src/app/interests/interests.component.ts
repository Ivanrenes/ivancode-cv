import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {

  @Input() interest = ""
  constructor() { }

  ngOnInit(): void {
  }

}

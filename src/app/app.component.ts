import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jobs = {
    "first":{
      "companyName" : "Corporación Empresarial de Salamanca",
      "roleTitle": "Software Developer (Intern)",
      "roleDescription" : "Responsible for the improvement of the internal student management system, development of new projects in favor of the automation of internal processes",
      "roleAchievements" : [
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      "roleSkills": [
        "PHP",
        "jQuery",
        "Javascript",
        "MySQL",
        "Dart"
      ]
    },
    "second":{
      "companyName" : "GudarDevs",
      "roleTitle": "Software Developer",
      "roleDescription" : "Responsible for the improvement of the internal student management system, development of new projects in favor of the automation of internal processes",
      "roleAchievements" : [
        "Development processes for customers completed succesfully"
      ],
      "roleSkills": [
        "Python",
        "Django",
        "Angular",
        "Javascript",
        "ReactJS",
        "Docker"
      ]
    }
  }
  title = 'Ivan Rodriguez E';
}

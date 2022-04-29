import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  jobs = {
    "first": {
      "companyName": "Corporación Empresarial de Salamanca",
      "roleTitle": "Software Developer (Intern)",
      "roleDescription": "In this internship  for the improvement of the internal student management system, development of new projects in favor of the automation of internal processes",
      "roleAchievements": [
        "In charge to support university score platform ",
        "Create a students identification software to validate their identity by the security personnel",
        "IT support for administrative personnel"
      ],
      "jobDuration": "Jul 2020 - Jan 2021",
      "roleSkills": [
        "PHP",
        "jQuery",
        "Javascript",
        "MySQL",
        "Dart",
        "Flutter"
      ]
    },
    "second": {
      "companyName": "GudarDevs",
      "roleTitle": "Software Developer",
      "roleDescription": "Mainly in charge of supporting the projects managed by the company, talking with customers and translation product owner needs to development tasks",
      "roleAchievements": [
        "In charge of build a system where a bus company can place its available buses and people can place orders to ask for its services",
        "Backend support for online game where you can play with a robot anywhere you be",
        "Create strategy for bot's trading",
        "Backend support for an api where you can analyze pokemon cards"
      ],
      "jobDuration": "Feb 2021 - Feb 2022",
      "roleSkills": [
        "Python",
        "Django",
        "Angular",
        "Javascript",
        "ReactJS",
        "Docker"
      ]
    },
    "third": {
      "companyName": "Joonik",
      "roleTitle": "Full-Stack Developer",
      "roleDescription": "Working on a famous hiring platform, delivering modules for its main features",
      "roleAchievements": [
        "Covering full stack tasks like Firebase Cloud Functions with NodeJS, API integrations and Front-end Design",
      ],
      "jobDuration": "Feb 2022 - Currently",
      "roleSkills": [
        "React",
        "Redux",
        "Fuse",
        "Javascript",
        "NodeJs",
        "Firebase",
      ]
    }
  }
  title = 'Ivan Rodriguez E';
  skills = {
    "first": {
      "techName": "JavaScript",
      "widthBar": 90
    },
    "second": {
      "techName": "Angular",
      "widthBar": 85
    },
    "third": {
      "techName": "HTML/CSS/SASS/LESS",
      "widthBar": 70
    },
    "fourth": {
      "techName": "React",
      "widthBar": 85
    },
    "fifth": {
      "techName": "Python/Django",
      "widthBar": 90
    }
  }
  education = {
    "first": {
      "career": "Systems Engineer",
      "university": "Corporación Universitaria Empresarial de Salamanca · CUES",
      "year": "2021 - present"
    },
    "second": {
      "career": "Software Developer",
      "university": "Corporación Universitaria Empresarial de Salamanca · CUES",
      "year": "2018 - 2021"
    },
  }
  awards = {
    "first": {
      "awardTitle": "Python Barranquilla",
      "awardDescription": "3th place in the python league tournament with the presentation 'Some curiosities about Django'"
    }
  }
  languaje = {
    "first": {
      "languaje": "Spanish",
      "level": "(Native)"
    },
    "second": {
      "languaje": "English",
      "level": "(Professional)"
    },
  }

  jobList: Array<any> = Object.entries(this.jobs).reverse();

}

import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'courses',
    template: `
      <h2>{{title}}</h2>
      <input type="text" autoGrow/>
      <ul>
        <li *ngFor="#course of courses">
          {{course}}
        </li>
      </ul>
      `,
    providers: [CourseService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent {
  title = "I'm a title of the courses component, nice lady";
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

}
// courseService is a parameter, which is of the type CourseService

/* Naming convention:
    the parameter courseService uses camelCase
    the class name uses Pascal case

*/

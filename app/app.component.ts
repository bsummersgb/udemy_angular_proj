import {Component} from 'angular2/core';  // Importing the Component Decorator from Angular
import {CoursesComponent} from './courses.component'; // Start searching in current folder. Don't use .ts extension
import {AuthorsComponent} from './authors.component';

// Then call the decorator (which is a function, that takes an object of properties/attributes)
@Component({
    selector: 'my-app',
    template: '<h1>Yo yo yo yo yo !!</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent] // Must be imported at the top of the file
})
export class AppComponent {

}

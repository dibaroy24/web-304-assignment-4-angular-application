import { Component } from '@angular/core';

// Import our service into our app component.
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Movies!';

  /*
  In order to provide access to component's properties and methods Angular
  creates a new instance of the class behind the scenes.

  When it does this it checks the constructor's parameters for any
  dependencies.

  If we want to pass our service to the componetn we need to specifiy it as a
  dependency.
  */
  constructor(private logger: LoggerService) { }
  /*
  Once we have passed the service as a dependency we can access it inside
  the class.
  */
  testLogger(): void {
    this.logger.log('The logger works!');
  }
}

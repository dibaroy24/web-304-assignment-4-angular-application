import { Injectable } from '@angular/core';
/*
The Injectable module is a decorator which defines a service by loading
dependencies into it.
*/
@Injectable({
  /*
  The Injectable decorator takes an object literal as a parameter which uses one
  primary property called providedIn.

  Unless you wish to limit the scope of your service, it is recommended to
  always define this property as a string of ‘root’ which inidicates that it is
  available in all modules by default.
  */
  providedIn: 'root'
})
export class LoggerService {
  /*
  Inside of a service you would any properties and methods which your service
  needs to provide its service.
  */
  log(message: any): void {
    console.log(message);
  }

  error(message: string): void {
    console.error(message);
  }

  warn(message: string): void {
    console.warn(message);
  }

  table(message: any[]): void {
    console.table(message);
  }
}

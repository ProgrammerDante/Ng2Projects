import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  appTitle: string = 'ng2- third party';
   appList: any[] = [{
      'ID': '1',
      'Name': 'One',
      'url': 'app/Images/One.jpg'
   },
   {
      'ID': '2',
      'Name': 'Two',
      'url': 'app/Images/two.jpg'
   } ];
 }

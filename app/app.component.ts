import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  /* this makes it so that CSS that i put in app.component.css applies globally, but it seems scary */
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = `Lion's Arch, Ltd.`
};
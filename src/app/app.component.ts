import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './global.css'],
  /* this makes it so that CSS that i put in global.css applies globally, but it seems scary */
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private title: string = `Lion's Arch, Ltd.`;
}
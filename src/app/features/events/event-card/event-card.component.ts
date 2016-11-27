import { Component, Input } from '@angular/core';
import { EventViewModel } from '../../../shared/viewmodels/event.viewmodel';

@Component({
  selector: 'event-card',
  styleUrls: ['event-card.component.css'],
  templateUrl: 'event-card.component.html'
})
export class EventCardComponent {
  @Input() private viewModel: EventViewModel;
}
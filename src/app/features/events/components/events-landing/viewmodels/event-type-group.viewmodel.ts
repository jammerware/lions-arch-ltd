import { EventType } from '../../../../../shared/models/event-type';
import { EventViewModel } from '../../../../../shared/viewmodels/event.viewmodel';

export class EventTypeGroupViewModel {
    eventType: EventType;
    events: EventViewModel[] = [];
}
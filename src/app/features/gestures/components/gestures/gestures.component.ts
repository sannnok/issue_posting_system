import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-gestures',
  templateUrl: './gestures.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GesturesComponent {
  src = 'https://sannnok.github.io/swipe-list-live/';
  title = 'Gestures - Swipe';
}

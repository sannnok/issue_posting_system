import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VirtualScrollComponent {
  src = 'https://sannnok.github.io/mona_table/';
  title = 'Virtual Scroll';
}

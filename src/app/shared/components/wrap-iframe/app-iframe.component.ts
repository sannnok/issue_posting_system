import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-iframe',
  templateUrl: './app-iframe.component.html',
  styleUrls: ['./app-iframe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IframePageComponent {
  @Input() public src: string;
  @Input() public title: string;
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-serverless-render',
  templateUrl: './serverless-render.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerlessRenderComponent {
  src = 'https://sannnok.github.io/tab-con-render/';
  title = 'Serverless Live Render';
}

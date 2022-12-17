import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-serverless-render',
  templateUrl: './serverless-render.component.html',
  styleUrls: ['./serverless-render.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServerlessRenderComponent {
  src: string = 'https://sannnok.github.io/tab-con-render/';

  constructor(private sanitizer: DomSanitizer) {
    // this.src = this.sanitizer.bypassSecurityTrustUrl('https://sannnok.github.io/tab-con-render/')
  }
}

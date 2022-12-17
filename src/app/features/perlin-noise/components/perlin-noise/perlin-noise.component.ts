import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-perlin-noise',
  templateUrl: './perlin-noise.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PerlinNoiseComponent {
  src = 'https://sannnok.github.io/super-duper-social-net-like/';
  title = 'Perlin Noise Heart';
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PerlinNoiseComponent } from './components/perlin-noise/perlin-noise.component';
import { PerlinNoiseRoutingModule } from './perlin-noise-routing.module';



@NgModule({
  declarations: [ PerlinNoiseComponent ],
  imports: [
    CommonModule,
    SharedModule,
    PerlinNoiseRoutingModule,
  ]
})
export class PerlinNoiseModule { }

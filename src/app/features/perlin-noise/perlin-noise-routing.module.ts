import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PerlinNoiseComponent } from './components/perlin-noise/perlin-noise.component'

const routes: Routes = [
{
  path: '',
  component: PerlinNoiseComponent,
  pathMatch: 'full',
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerlinNoiseRoutingModule {
}

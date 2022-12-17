import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { GesturesComponent } from './components/gestures/gestures.component'

const routes: Routes = [
{
  path: '',
  component: GesturesComponent,
  pathMatch: 'full',
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GesturesRoutingModule {
}

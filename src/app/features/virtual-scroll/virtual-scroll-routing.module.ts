import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component'

const routes: Routes = [
{
  path: '',
  component: VirtualScrollComponent,
  pathMatch: 'full',
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VirtualScrollRoutingModule {
}

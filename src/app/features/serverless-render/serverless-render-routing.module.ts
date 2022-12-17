import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ServerlessRenderComponent } from './components/serverless-render/serverless-render.component'

const routes: Routes = [
{
  path: '',
  component: ServerlessRenderComponent,
  pathMatch: 'full',
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {
}

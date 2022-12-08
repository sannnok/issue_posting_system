import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FileListComponent } from './components/file-list/file-list.component'
import { UploadComponent } from './components/upload/upload.component'

const routes: Routes = [
  {
    path: '',
    // component: UploadComponent,
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: FileListComponent,
  },
  {
    path: 'create',
    component: UploadComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {
}

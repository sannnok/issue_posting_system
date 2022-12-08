import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { FileDetailsComponent } from './components/file-details/file-details.component'
import { FileListComponent } from './components/file-list/file-list.component'
import { FilesComponent } from './components/files/files.component'
import { UploadComponent } from './components/upload/upload.component'

const routes: Routes = [
{
  path: '',
  component: FilesComponent,
  children: [
    {
      path: '',
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
    },
    {
      path: ':id',
      component: FileDetailsComponent,
    },
  ]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadRoutingModule {
}

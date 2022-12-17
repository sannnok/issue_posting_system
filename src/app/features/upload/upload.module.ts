import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileListComponent } from './components/file-list/file-list.component';
import { FilesComponent } from './components/files/files.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';



@NgModule({
  declarations: [
    UploadComponent,
    FileListComponent,
    FilesComponent,
    FileDetailsComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class UploadModule { }

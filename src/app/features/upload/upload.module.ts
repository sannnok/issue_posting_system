import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './components/upload/upload.component';
import { UploadRoutingModule } from './upload-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FileListComponent } from './components/file-list/file-list.component';
import { CreateComponent } from './components/create/create.component';



@NgModule({
  declarations: [
    UploadComponent,
    FileListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    UploadRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class UploadModule { }

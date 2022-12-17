import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { IFile } from 'src/app/features/posts/models/file.model';
import { createFilesItem } from 'src/app/features/posts/store/upload.actions';
import { FilesState } from 'src/app/features/posts/store/upload.state';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadComponent {
  @ViewChild('preview') preview: ElementRef;
  previewValue: string = 'No files currently selected for upload';
  fileName: string = '';
  selectedFile: File;

  constructor(
    public cdr: ChangeDetectorRef,
    private store: Store<FilesState>,
    ) {
  }

  updateImageDisplay(file: File) {
    file.text().then(text => {
      this.previewValue = text;
      this.cdr.detectChanges();
    })
    this.fileName = file.name;
    this.selectedFile = file;
  }

  saveFile() {
    if (!this.selectedFile) return;

    this.selectedFile.text().then(t => {
      const saveFile: IFile = {
        id: Date.now().toString(),
        name: this.selectedFile.name,
        size: this.selectedFile.size,
        lastModified: this.selectedFile.lastModified,
        type: this.selectedFile.type,
        content: t,
      }

      this.store.dispatch(createFilesItem({ file: saveFile }))
    })
  }
}

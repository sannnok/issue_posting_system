import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
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

    file.arrayBuffer().then( arrayBuffer => {
      const blob = new Blob([new Uint8Array(arrayBuffer)], { type: file.type });
      blob.text().then(console.log);
    })
  }

  saveFile() {
    if (!this.selectedFile) return;
    this.store.dispatch(createFilesItem({ file: {...this.selectedFile, id: this.selectedFile.lastModified.toString()} }))
  }
}

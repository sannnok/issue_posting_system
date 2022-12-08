import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { IFile } from 'src/app/features/posts/models/file.model';
import { selectFileById } from 'src/app/features/posts/store/files.selectors';
import { deleteFilesItem, readFilesItem } from 'src/app/features/posts/store/upload.actions';
import { FilesState } from 'src/app/features/posts/store/upload.state';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileDetailsComponent {
  public file$: Observable<IFile>
  fileId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<FilesState>,
  ) {
  }

  public ngOnInit(): void {
    this.fileId = this.activatedRoute.snapshot.params['id'];
    this.file$ = this.store.pipe(select(selectFileById(this.fileId)))
    this.file$.pipe(take(1)).subscribe(file => !file && this.store.dispatch(readFilesItem({ id: this.fileId })))
  }

  public delete(fileId) {
    this.store.dispatch(deleteFilesItem({ id: fileId }))
  }
}

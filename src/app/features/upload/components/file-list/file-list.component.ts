import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IFile } from 'src/app/features/posts/models/file.model';
import { selectFiles } from 'src/app/features/posts/store/files.selectors';
import { readFiles } from 'src/app/features/posts/store/upload.actions';
import { FilesState } from 'src/app/features/posts/store/upload.state';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FileListComponent {
  files$: Observable<IFile[]>

  constructor(private store: Store<FilesState>, public cdr: ChangeDetectorRef) {
    store.dispatch(readFiles())
    this.files$ = this.store.pipe(select(selectFiles))
  }

  onRefresh(): void {
    this.store.dispatch(readFiles())
  }
}

import { createFeatureSelector, createSelector } from '@ngrx/store'
import { filesAdapter, FilesState } from './upload.state'

const { selectAll } = filesAdapter.getSelectors()
const selectFilesState = createFeatureSelector<FilesState>('files')

export const selectFiles = createSelector(
  selectFilesState,
  selectAll,
)

export const selectFileById = (fileId: string) => createSelector(
  selectFilesState,
  postsState => postsState.entities[fileId],
)


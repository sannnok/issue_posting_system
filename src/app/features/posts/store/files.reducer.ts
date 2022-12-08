import { Action, createReducer, on } from '@ngrx/store'
import { createFilesItemSuccess, deleteFilesItem, readFilesSuccess } from './upload.actions'
import { filesAdapter, FilesState, initialFilesState } from './upload.state'

const reducer = createReducer(
  initialFilesState,
  on(createFilesItemSuccess, (state, file) => {
    return filesAdapter.addOne(file.file, state)
  }),
  on(readFilesSuccess, (state, { files }) => {
    return filesAdapter.setAll(files, state)
  }),
  on(deleteFilesItem, (state, { id }) => filesAdapter.removeOne(id, state)),
)

export function filesReducer(state: FilesState, action: Action) {
  return reducer(state, action)
}
// 
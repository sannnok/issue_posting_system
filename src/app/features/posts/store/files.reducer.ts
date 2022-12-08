import { Action, createReducer, on } from '@ngrx/store'
import { createFilesItemSuccess, readFilesSuccess } from './upload.actions'
import { filesAdapter, FilesState, initialFilesState } from './upload.state'

const reducer = createReducer(
  initialFilesState,
  on(createFilesItemSuccess, (state, file) => {
    return filesAdapter.addOne(file.file, state)
  }),
  on(readFilesSuccess, (state, { files }) => {
    return filesAdapter.setAll(files, state)
  }),
)

export function filesReducer(state: FilesState, action: Action) {
  return reducer(state, action)
}
// 
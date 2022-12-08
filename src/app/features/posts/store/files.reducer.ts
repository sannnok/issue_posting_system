import { Action, createReducer, on } from '@ngrx/store'
import { createFilesItemSuccess } from './upload.actions'
import { fileAdapter, FilesState, initialFilesState } from './upload.state'

const reducer = createReducer(
  initialFilesState,
  on(createFilesItemSuccess, (state, file) => {
    return fileAdapter.addOne(file.file, state)
  }),

)

export function filesReducer(state: FilesState, action: Action) {
  return reducer(state, action)
}
// 
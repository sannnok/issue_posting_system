import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { IFile } from '../models/file.model'

export interface FilesState extends EntityState<IFile> {
}

export const filesAdapter: EntityAdapter<IFile> = createEntityAdapter<IFile>({
  selectId: (item: IFile) => {
    return item.id
  },
  sortComparer: false,
})

export const initialFilesState: FilesState = filesAdapter.getInitialState({
})

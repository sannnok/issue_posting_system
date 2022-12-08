import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity'
import { IFile } from '../models/file.model'

export interface FilesState extends EntityState<IFile> {
}

export const fileAdapter: EntityAdapter<IFile> = createEntityAdapter<IFile>({
  selectId: (item: IFile) => item.id,
  sortComparer: false,
})

export const initialFilesState: FilesState = fileAdapter.getInitialState({
})

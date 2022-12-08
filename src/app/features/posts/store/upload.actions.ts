import { createAction, props } from '@ngrx/store'
import { IFile } from '../models/file.model'
import { Update } from '@ngrx/entity'

// CRUD

// Create File
export const createFilesItem = createAction('[Files] Create File', props<{ file: Partial<IFile> }>())
export const createFilesItemSuccess = createAction('[Files] Create Create Success', props<{ file: IFile }>())
export const createFilesItemFail = createAction('[Files] Create Create Fail')

// Read Files
export const readFiles = createAction('[Files] Read Files')
export const readFilesSuccess = createAction('[Files] Read Files Success', props<{ files: IFile[] }>())
export const readFilesFail = createAction('[Files] Read Files Fail')

// Read File
export const readFilesItem = createAction('[Files] Read File', props<{ id: string }>())
export const readFilesItemSuccess = createAction('[Files] Read File Success', props<{ File: IFile }>())
export const readFilesItemFail = createAction('[Files] Read File Fail')

// Update File
export const updateFilesItem = createAction('[Files] Update File', props<{ updateFile: Update<IFile> }>())
export const updateFilesItemSuccess = createAction('[Files] Update File Success')
export const updateFilesItemFail = createAction('[Files] Update File Fail')

// Delete File
export const deleteFilesItem = createAction('[Files] Delete File', props<{ id: string }>())
export const deleteFilesItemSuccess = createAction('[Files] Delete File Success')
export const deleteFilesItemFail = createAction('[Files] Delete File Fail')

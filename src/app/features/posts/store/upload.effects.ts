import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { createFilesItem, createFilesItemFail, createFilesItemSuccess, deleteFilesItem, deleteFilesItemFail, deleteFilesItemSuccess, readFiles, readFilesSuccess, updateFilesItemSuccess } from './upload.actions'
import { IFile } from '../models/file.model'
import { FilesApiService } from '../services/upload-api.service'

@Injectable()
export class UploadEffects {

  constructor(private filesService: FilesApiService, private actions$: Actions, private router: Router) {
  }

  // CRUD

  createFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFilesItem.type),
      mergeMap(({file}) => { 
        return this.filesService.createItem(file).pipe(
        map((response: HttpResponseModel<IFile>) => {
          return {
            type: createFilesItemSuccess.type,
            file: response,
            }
        }),
        catchError(() => of({
          type: createFilesItemFail.type,
        })),
      )}),
    ),
  )

  readFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(readFiles.type),
      mergeMap(() => this.filesService.readItems().pipe(
        map((response: HttpResponseModel<IFile[]>) => ({
          type: readFilesSuccess.type,
          files: response,
        })),
        catchError(() => of({
          type: readFilesSuccess.type,
        })),
      )),
    ),
  )

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteFilesItem.type),
      mergeMap(({id}) => this.filesService.deleteItem(id).pipe(
        map((response: HttpResponseModel<IFile>) => ({
          type: deleteFilesItemSuccess.type,
          file: response,
        })),
        catchError(() => of({
          type: deleteFilesItemFail.type,
        })),
      )),
    ),
  )

  navigate$ = createEffect(() =>
      this.actions$.pipe(
        ofType(createFilesItemSuccess.type, updateFilesItemSuccess.type, deleteFilesItemSuccess.type),
        tap(({user}) => this.router.navigate(['/', 'upload'])),
      ),
    {dispatch: false},
  )
}

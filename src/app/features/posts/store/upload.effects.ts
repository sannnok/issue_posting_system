import { Injectable } from '@angular/core'
import { PostsApiService } from '../services/posts-api.service'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, map, mergeMap, tap } from 'rxjs/operators'
import { HttpResponseModel } from '../../../shared/models/http-response-model.model'
import { of } from 'rxjs'
import { Router } from '@angular/router'
import { createFilesItem, createFilesItemFail, createFilesItemSuccess, deleteFilesItemSuccess, updateFilesItemSuccess } from './upload.actions'
import { IFile } from '../models/file.model'

@Injectable()
export class UploadEffects {

  constructor(private postsService: PostsApiService, private actions$: Actions, private router: Router) {
  }

  // CRUD

  createFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createFilesItem.type),
      mergeMap(({post}) => this.postsService.createItem(post).pipe(
        map((response: HttpResponseModel<IFile>) => {
          return {
            type: createFilesItemSuccess.type,
            post: response,
            }
        }),
        catchError(() => of({
          type: createFilesItemFail.type,
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

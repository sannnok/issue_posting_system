import { ActionReducerMap } from '@ngrx/store'
import { AppState } from './app-store.state'
import { postsReducer } from '../../features/posts/store/posts.reducer'
import { sharedReducer } from '../../shared/store/shared.reducer'
import { filesReducer } from 'src/app/features/posts/store/files.reducer'

export const appReducers: ActionReducerMap<AppState> = {
  shared: sharedReducer,
  posts: postsReducer,
  files: filesReducer,
}

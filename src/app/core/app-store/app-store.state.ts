import { FilesState } from 'src/app/features/posts/store/upload.state'
import { PostsState } from '../../features/posts/store/posts.state'
import { SharedState } from '../../shared/store/shared.state'

export interface AppState {
  shared: SharedState
  posts: PostsState
  files: FilesState
}

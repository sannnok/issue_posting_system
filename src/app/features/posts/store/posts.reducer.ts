import { Action, createReducer, on } from '@ngrx/store'
import { initialPostsState, postsAdapter, PostsState } from './posts.state'
import { createPostsItemSuccess, deletePostsItem, readPostsSuccess, readPostsItemSuccess, updatePostsItem } from './posts.actions'

const reducer = createReducer(
  initialPostsState,
  on(createPostsItemSuccess, (state, { post }) => postsAdapter.addOne(post, state)),
  on(readPostsSuccess, (state, { posts }) => postsAdapter.setAll(posts, state)),
  on(readPostsSuccess, (state, { posts }) => ({
    ...state,
    allPossibleTags: Array.from(new Set(posts.reduce((result, item) => (result.push(...item.tags), result), [])))
  })),
  on(readPostsItemSuccess, (state, { post }) => postsAdapter.upsertOne(post, state)),
  on(updatePostsItem, (state, { updatePost}) => postsAdapter.updateOne(updatePost, state)),
  on(deletePostsItem, (state, { id }) => postsAdapter.removeOne(id, state)),
)

export function postsReducer(state: PostsState, action: Action) {
  return reducer(state, action)
}

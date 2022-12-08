import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { Observable } from 'rxjs'
import { PostsState } from '../../store/posts.state'
import { select, Store } from '@ngrx/store'
import { Post } from '../../models/post.model'
import { selectPostById } from '../../store/posts.selectors'
import { deletePostsItem, readPostsItem } from '../../store/posts.actions'
import { take } from 'rxjs/operators'

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PostDetailsComponent implements OnInit {
  public post$: Observable<Post>
  postId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<PostsState>,
  ) {
  }

  public ngOnInit(): void {
    this.postId = this.activatedRoute.snapshot.params['id'];
    this.post$ = this.store.pipe(select(selectPostById(this.postId)))
    this.post$.pipe(take(1)).subscribe(post => !post && this.store.dispatch(readPostsItem({id: this.postId})))
  }

  public delete(postId) {
    this.store.dispatch(deletePostsItem({id: postId}))
  }
}

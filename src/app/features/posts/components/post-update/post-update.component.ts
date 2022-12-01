import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { CanDeactivateComponentModel } from '../../../../shared/models/can-deactivate-component.model'
import { PostsState } from '../../store/posts.state'
import { deletePostsItem, readPostsItem, updatePostsItem } from '../../store/posts.actions'
import { Post } from '../../models/post.model'
import { selectAllTags, selectPostById } from '../../store/posts.selectors'
import { NotificationBarService } from '../../../../shared/services/notification-bar.service'

export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PostUpdateComponent implements CanDeactivateComponentModel, OnInit, OnDestroy {
  private subscriptions: Subscription = new Subscription()
  postForm: UntypedFormGroup
  post$: Observable<Post>
  options$: Observable<string[]>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: UntypedFormBuilder,
    private store: Store<PostsState>,
    private notification: NotificationBarService,
  ) {
  }

  ngOnInit(): void {
    const postId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('id::::: ', postId)
    this.post$ = this.store.pipe(select(selectPostById(postId)))

    this.subscriptions.add(
      this.post$.subscribe(post => {
        this.postForm = this.createPostFormGroup(post)
        if (!post) {
          this.store.dispatch(readPostsItem({id: postId}))
        }
      }),
    )
    this.options$ = this.store.pipe(select(selectAllTags));
  }

  onPostFormSubmit(): void {
    if (this.postForm.valid) {
      this.store.dispatch(updatePostsItem({
        updatePost: {
          id: this.postForm.controls.id.value,
          changes: this.postForm.value,
        },
      }))
    } else {
      this.notification.showError('Form contains errors. Fix it and try again.')
    }
  }

  delete(postId) {
    this.store.dispatch(deletePostsItem({id: postId}))
  }

  canDeactivate(): boolean {
    return !this.postForm.dirty
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

  createPostFormGroup(post: Post): UntypedFormGroup {
    return this.formBuilder.group({
      id: [post ? post.id : null, Validators.required],
      title: [post ? post.title : '', Validators.required],
      body: [post ? post.body : '', Validators.required],
      tags: [post ? post.tags : [], Validators.required],
    })
  }
}

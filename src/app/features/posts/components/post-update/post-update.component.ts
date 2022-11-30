import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Params } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable, Subscription } from 'rxjs'
import { select, Store } from '@ngrx/store'
import { CanDeactivateComponentModel } from '../../../../shared/models/can-deactivate-component.model'
import { PostsState } from '../../store/posts.state'
import { deletePostsItem, readPostsItem, updatePostsItem } from '../../store/posts.actions'
import { Post } from '../../models/post.model'
import { selectAllTags, selectPostById } from '../../store/posts.selectors'
import { NotificationBarService } from '../../../../shared/services/notification-bar.service'
import { MatChip } from '@angular/material/chips'

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
  postForm: FormGroup
  post$: Observable<Post>
  options$: Observable<string[]>;


  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private store: Store<PostsState>,
    private notification: NotificationBarService,
  ) {
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.post$ = this.store.pipe(select(selectPostById(params.id)))

      this.subscriptions.add(
        this.post$.subscribe(post => {
          this.postForm = this.createPostFormGroup(post)
          if (!post) {
            this.store.dispatch(readPostsItem({id: params.id}))
          }
        }),
      )
    })
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

  private createPostFormGroup(post: Post): FormGroup {
    return this.formBuilder.group({
      id: [post ? post.id : null, Validators.required],
      title: [post ? post.title : '', Validators.required],
      body: [post ? post.body : '', Validators.required],
      tags: [post ? post.tags : [], Validators.required],
    })
  }
}

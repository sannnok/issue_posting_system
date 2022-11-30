import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { createPostsItem } from '../../store/posts.actions'
import { NotificationBarService } from '../../../../shared/services/notification-bar.service'
import { CanDeactivateComponentModel } from '../../../../shared/models/can-deactivate-component.model'
import { selectAllTags } from '../../store/posts.selectors'
import { Observable } from 'rxjs/internal/Observable'

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PostCreateComponent implements CanDeactivateComponentModel, OnInit {
  postForm: FormGroup
  options$: Observable<string[]>;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<PostsState>,
    private notification: NotificationBarService,
  ) {
  }

  public ngOnInit(): void {
    this.postForm = this.createPostCreateFormGroup()
    this.options$ = this.store.pipe(select(selectAllTags));
  }

  public onPostFormSubmit(): void {
    if (this.postForm.valid) {
      this.store.dispatch(createPostsItem({post: this.postForm.value}))
    } else {
      this.notification.showError('Form contains errors. Fix it and try again.')
    }
  }

  private createPostCreateFormGroup(): FormGroup {
    return this.formBuilder.group({
      date: [new Date(), Validators.required],
      title: ['', Validators.required],
      body: ['', Validators.required],
      tags: [[]],
    })
  }

  canDeactivate(): boolean {
    return !this.postForm.dirty
  }
}

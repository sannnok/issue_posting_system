import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { readPosts } from '../../store/posts.actions'
import { selectAllTags, selectPosts } from '../../store/posts.selectors'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { map, tap } from 'rxjs/operators'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>
  options$: Observable<string[]>
  filter = new FormControl(['bug']);
  // postForm: FormGroup;

  constructor(private store: Store<PostsState>, private cdr: ChangeDetectorRef, private formBuilder: FormBuilder) {
    store.dispatch(readPosts())
    this.posts$ = this.store.pipe(select(selectPosts)).pipe(tap(() => {
      // this.postForm = this.formBuilder.group({
      //   tags: [[], Validators.required],
      // })
    }))
    this.options$ = this.store.pipe(select(selectAllTags))//.subscribe(options => this.options$ = options)
  }

  ngOnInit(): void {

  }

  onRefresh(): void {
    this.store.dispatch(readPosts())
  }

  applyFilter(filterTags: string[]) {
    this.posts$ = this.store.pipe(select(selectPosts), map(posts => posts.filter(post => {
      if (!filterTags.length) return true;
      let ret = true;
      for (let filterTag of filterTags) {
        if (!post.tags.includes(filterTag)) ret = false;
      }
      return ret;
    })))

    this.cdr.detectChanges();
  }
}

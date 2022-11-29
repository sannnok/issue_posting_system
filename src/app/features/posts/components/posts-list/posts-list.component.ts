import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Post } from '../../models/post.model'
import { select, Store } from '@ngrx/store'
import { PostsState } from '../../store/posts.state'
import { readPosts } from '../../store/posts.actions'
import { selectAllTags, selectPosts } from '../../store/posts.selectors'
import { FormControl } from '@angular/forms'
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent {
  public posts$: Observable<Post[]>
  public options$: Observable<string[]>
  public filter = new FormControl('');

  constructor(private store: Store<PostsState>) {
    store.dispatch(readPosts())
    this.posts$ = this.store.pipe(select(selectPosts))
    this.options$ = this.store.pipe(select(selectAllTags));
  }

  public onRefresh(): void {
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
  }
}

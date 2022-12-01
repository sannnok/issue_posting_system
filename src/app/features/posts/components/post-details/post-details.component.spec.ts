import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, StoreModule } from '@ngrx/store';
import { PostDetailsComponent } from './post-details.component';
import { Observable, of } from 'rxjs';
import { PostsState } from '../../store/posts.state';
import { Post } from '../../models/post.model';
import { postsReducer } from '../../store/posts.reducer';
import { selectPostById, selectPosts } from '../../store/posts.selectors';
import { readPostsItemSuccess, readPostsSuccess } from '../../store/posts.actions';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;
  let page: { querySelector: Function; querySelectorAll: Function };
  let store: Store<PostsState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PostDetailsComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('posts', postsReducer),
      ],
      providers: [
        { provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: '5e5e9670-3bdd-4a86-9b40-53e409cf48e2' }
            }
          },
        },
      ]
    });
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    store = TestBed.inject(Store);

    const post = 
      {
        "id": "5e5e9670-3bdd-4a86-9b40-53e409cf48e2",
        "title": "This is an item",
        "body": "This is a description of the item, it might describe a bug/task/comment, it can also display <a test-id=\"link-tag\"  href=\" www.google.com \">Links</a>",
        "tags": [
          "bug",
          "issue",
          "epic"
        ]
      }

    store.dispatch(readPostsItemSuccess({ post }))

    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render all tags in template', () => {
    fixture.detectChanges();

    expect(page.querySelector('[test-id="page-content"]')).not.toBeNull();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(store, 'pipe').and.callThrough();
      spyOn(store, 'dispatch').and.callThrough();
      component.ngOnInit();
      expect(store.pipe).toHaveBeenCalled();
      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });

  it('on delete post should dispatch action', () => {
    const deletePostSpy = spyOn(store, 'dispatch').and.callThrough();
    component.delete(15);
    expect(deletePostSpy).toHaveBeenCalled();
  });
});

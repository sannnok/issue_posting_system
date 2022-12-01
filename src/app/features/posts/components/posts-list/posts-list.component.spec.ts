import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { Store, StoreModule } from '@ngrx/store';
import { PostsListComponent } from './posts-list.component';
import { PostsState } from '../../store/posts.state';
import { readPostsSuccess } from '../../store/posts.actions';
import { Post } from '../../models/post.model';
import { selectPosts } from '../../store/posts.selectors';
import { postsReducer } from '../../store/posts.reducer';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;
  let store: Store<PostsState>;
  let page: { querySelector: Function; querySelectorAll: Function };

  beforeEach(() => {
    const changeDetectorRefStub = () => ({ detectChanges: () => ({}) });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        PostsListComponent,
      ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('posts', postsReducer),
      ],
      providers: [
        { provide: ChangeDetectorRef, useFactory: changeDetectorRefStub },
      ]
    });

    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    store = TestBed.inject(Store);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onRefresh', () => {
    it('makes dispatch call on refresh', () => {
      spyOn(store, 'dispatch').and.callThrough();
      component.onRefresh();
      expect(store.dispatch).toHaveBeenCalled();
    });
  });

  describe('applyFilter call on Custom Chips list change', () => {
    beforeEach(() => {
      const posts: Post[] = [
        {
          "id": "5e5e9670-3bdd-4a86-9b40-53e409cf48e2",
          "title": "This is an item",
          "body": "This is a description of the item, it might describe a bug/task/comment, it can also display <a href=\" www.google.com \">Links</a>",
          "tags": [
            "bug",
            "issue",
            "epic"
          ]
        },
        {
          "id": "5e5e9670-3bdd-4a86-9b40-sfsdferwf",
          "title": "This is an item",
          "body": "This is a description of the item, it might describe a bug/task/comment, it can also display <a href=\" www.google.com \">Links</a>",
          "tags": [
            "bug"
          ]
        },
      ]

      store.dispatch(readPostsSuccess({ posts }))
      fixture.detectChanges();
    });

    it('posts list render', () => {
      expect(page.querySelector('[test-id="list-item"]')).not.toBeNull();
    });

    it('Posts list is generated', () => {
      expect(page.querySelector('[test-id="list-item"]')).not.toBeNull();
      expect(page.querySelectorAll('[test-id="list-item"]').length).toEqual(2);
    })

    it('Filter values by tag', () => {
      store.select(selectPosts).subscribe(posts => {
        expect(posts.length).toEqual(2)
      })

      component.applyFilter(["issue"])
      fixture.detectChanges();

      expect(page.querySelectorAll('[test-id="list-item"]').length).toEqual(1);
    })

    it('Change Detector is called afterwards', () => {
      spyOn(component.cdr, 'detectChanges').and.callThrough();
      component.applyFilter([]);
      expect(component.cdr.detectChanges).toHaveBeenCalled();
    });
  });
});

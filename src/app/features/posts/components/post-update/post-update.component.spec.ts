import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { NotificationBarService } from '../../../../shared/services/notification-bar.service';
import { MatLegacyChip as MatChip } from '@angular/material/legacy-chips'
import { PostUpdateComponent } from './post-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { postsReducer } from '../../store/posts.reducer';
import { Post } from '../../models/post.model';
import { readPostsSuccess } from '../../store/posts.actions';
import { PostsState } from '../../store/posts.state';

describe('PostUpdateComponent', () => {
  let component: PostUpdateComponent;
  let fixture: ComponentFixture<PostUpdateComponent>;
  let store: Store<PostsState>;
  let page: { querySelector: Function; querySelectorAll: Function };
  let router: Router;
  let route: ActivatedRoute;
  let posts: Post[];

  beforeEach(() => {
    const untypedFormBuilderStub = () => ({ group: object => ({}) });
    const notificationBarServiceStub = () => ({ showError: string => ({}) });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PostUpdateComponent],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('posts', postsReducer),
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        SharedModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [
        // { provide: ActivatedRoute, useValue: of({ params: { id: '5e5e9670-3bdd-4a86-9b40-53e409cf48e2' }}) },
        { provide: UntypedFormBuilder, useFactory: untypedFormBuilderStub },
        // { provide: Store, useFactory: storeStub },
        {
          provide: NotificationBarService,
          useFactory: notificationBarServiceStub
        }
      ]
    });



    fixture = TestBed.createComponent(PostUpdateComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);

    posts = [
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

  it('should create form with selected post', () => {
    const spyRoute = spyOn(route.snapshot.paramMap, 'get');
    const createFormFormSpy = spyOn(component, 'createPostFormGroup');

    spyRoute.and.returnValue('5e5e9670-3bdd-4a86-9b40-53e409cf48e2')

    fixture.detectChanges()
    store.dispatch(readPostsSuccess({ posts }))

    expect(createFormFormSpy).not.toHaveBeenCalled();
  });

  it('posts request on activated route param', () => {
    spyOn(store, 'pipe').and.callThrough();
    
    fixture.detectChanges();
    
    expect(component.postForm).not.toBeNull();
    expect(store.pipe).not.toHaveBeenCalled();
  });

  it('Should not call createPostFormGroup method', () => {
    const dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    const createFormSpy = spyOn(component, 'createPostFormGroup');
    
    fixture.detectChanges();
    
    expect(component.postForm).not.toBeNull();
    expect(createFormSpy).not.toHaveBeenCalled();
    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  it('on delete post should dispatch action', () => {
    const deletePostSpy = spyOn(store, 'dispatch').and.callThrough();
    component.delete(15);
    expect(deletePostSpy).toHaveBeenCalled();
  });

  it('onDestroy', () => {
    const destroySpy = spyOn(component, 'ngOnDestroy').and.callThrough();
    component.ngOnDestroy();
    expect(destroySpy).toHaveBeenCalled();
  });
});

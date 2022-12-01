import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { FormsModule, ReactiveFormsModule, UntypedFormBuilder } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';
import { NotificationBarService } from '../../../../shared/services/notification-bar.service';
import { PostCreateComponent } from './post-create.component';
import { postsReducer } from '../../store/posts.reducer';
import { PostsState } from '../../store/posts.state';
import { FormsModule, ReactiveFormsModule, NG_VALUE_ACCESSOR, DefaultValueAccessor, ControlValueAccessor } from '@angular/forms';
import { ChipsMultiSelectComponent } from 'src/app/shared/components/chips-multi-select/chips-multi-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;
  let page: { querySelector: Function; querySelectorAll: Function };
  let store: Store<PostsState>;

  beforeEach(() => {
    const notificationBarServiceStub = () => ({ showError: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [
        PostCreateComponent,
        ChipsMultiSelectComponent,
      ],
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('posts', postsReducer),
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        SharedModule,
      ],
      providers: [
        {
          provide: NotificationBarService,
          useFactory: notificationBarServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;
    store = TestBed.inject(Store);
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.postForm.valid).toBeFalsy();
  });

  describe('submit valid form data', () => {
    it('makes dispatch call on refresh', () => {
      spyOn(store, 'dispatch').and.callThrough();
      
      component.postForm.patchValue({
        title: 'title',
        body: 'body',
        tags: ['bug', 'issue'],
      })
      
      component.onPostFormSubmit();
      
      expect(store.dispatch).toHaveBeenCalled();
    });
  });

  it('call submit handler on user click button', () => {
    const theSpy = spyOn(component, 'onPostFormSubmit');
    const button = page.querySelector('[test-id="submit-btn"]');
    const mouseEvent = new MouseEvent('click');
    
    button.dispatchEvent(mouseEvent);

    fixture.detectChanges();

    expect(theSpy).toHaveBeenCalled();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerlessRenderComponent } from './serverless-render.component';

describe('ServerlessRenderComponent', () => {
  let component: ServerlessRenderComponent;
  let fixture: ComponentFixture<ServerlessRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerlessRenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerlessRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

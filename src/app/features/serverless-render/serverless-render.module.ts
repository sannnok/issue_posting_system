import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerlessRenderComponent } from './components/serverless-render/serverless-render.component';
import { UploadRoutingModule } from './serverless-render-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ServerlessRenderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    UploadRoutingModule,
  ]
})
export class ServerlessRenderModule { }

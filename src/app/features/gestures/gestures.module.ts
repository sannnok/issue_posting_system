import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GesturesRoutingModule } from './gestures-routing.module';
import { GesturesComponent } from './components/gestures/gestures.component';


@NgModule({
  declarations: [ GesturesComponent ],
  imports: [
    CommonModule,
    SharedModule,
    GesturesRoutingModule,
  ]
})
export class GesturesModule { }

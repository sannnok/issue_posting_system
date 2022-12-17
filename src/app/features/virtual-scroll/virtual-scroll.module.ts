import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { VirtualScrollComponent } from './components/virtual-scroll/virtual-scroll.component';
import { VirtualScrollRoutingModule } from './virtual-scroll-routing.module';


@NgModule({
  declarations: [ VirtualScrollComponent ],
  imports: [
    CommonModule,
    SharedModule,
    VirtualScrollRoutingModule,
  ]
})
export class VirtualScrollModule { }

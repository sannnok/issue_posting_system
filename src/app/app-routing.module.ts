import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './core/components/dashboard/dashboard.component'
import { NotificationPageComponent, NotificationPageData } from './core/components/notification-page/notification-page.component'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'upload',
    loadChildren: () => import('./features/upload/upload.module').then(m => m.UploadModule),
  },
  {
    path: 'serverless-render',
    loadChildren: () => import('./features/serverless-render/serverless-render.module').then(m => m.ServerlessRenderModule),
  },
  {
    path: 'perlin-noise',
    loadChildren: () => import('./features/perlin-noise/perlin-noise.module').then(m => m.PerlinNoiseModule),
  },
  {
    path: 'gestures',
    loadChildren: () => import('./features/gestures/gestures.module').then(m => m.GesturesModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./features/virtual-scroll/virtual-scroll.module').then(m => m.VirtualScrollModule),
  },
  {
    path: '**',
    component: NotificationPageComponent,
    data: ({
      type: 'error',
      title: 'Page not found',
      heading: '404',
      description: 'This is not the page you are looking for.',
    } as NotificationPageData),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

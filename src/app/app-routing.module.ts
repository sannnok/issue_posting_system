import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './core/components/dashboard/dashboard.component'
import { NotificationPageComponent, NotificationPageData } from './core/components/notification-page/notification-page.component'


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full',
  },
  {
    path: 'posts',
    loadChildren: () => import('./features/posts/posts.module').then(m => m.PostsModule),
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

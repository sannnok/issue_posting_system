import { Type } from '@angular/core'
import { UploadEffects } from 'src/app/features/posts/store/upload.effects'
import { PostsEffects } from '../../features/posts/store/posts.effects'
import { SharedEffects } from '../../shared/store/shared.effects'

export const appEffects: Type<any>[] = [
  SharedEffects,
  PostsEffects,
  UploadEffects,
]

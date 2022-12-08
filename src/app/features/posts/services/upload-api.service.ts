import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment'
import { Post } from '../models/post.model'
import { Observable } from 'rxjs'
import { ApiServiceModel } from '../../../shared/models/api-service.model'
import { IFile } from '../models/file.model'

const FILES_API_ENDPOINT = '/files'

@Injectable({
  providedIn: 'root',
})
export class FilesApiService implements ApiServiceModel<IFile> {
  constructor(private http: HttpClient) {
  }

  public createItem(file: IFile): Observable<object> {
    return this.http.post(`${environment.baseUrl}${FILES_API_ENDPOINT}`, file)
  }

  public readItems(): Observable<object> {
    return this.http.get(`${environment.baseUrl}${FILES_API_ENDPOINT}`)
  }

  public readItem(id: string): Observable<object> {
    return this.http.get(`${environment.baseUrl}${FILES_API_ENDPOINT}/${id}`)
  }

  public updateItem(id: string, changes: Partial<IFile>): Observable<object> {
    return this.http.put(`${environment.baseUrl}${FILES_API_ENDPOINT}/${id}`, changes)
  }

  public deleteItem(id: string): Observable<object> {
    return this.http.delete(`${environment.baseUrl}${FILES_API_ENDPOINT}/${id}`)
  }
}

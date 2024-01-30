import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // API'nin gerçek URL'sini kullanın

  constructor(private http: HttpClient) {}

  getSkillData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:3000/api/skills');
  }
  getEducationData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:3000/api/education_experiences');
  }
  getProjectData(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:3000/api/projects');
  }

}

import { Injectable } from '@angular/core';
import { Courses } from './courses.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  formData :Courses
  list : Courses[];
  readonly rootURL ="http://localhost:60565/api"

  constructor(private http : HttpClient) { }

  //POST formdata to WebAPI
  postCourse(formData : Courses){
   return this.http.post(this.rootURL + '/Courses',formData)
  }

  /*GET   call WepAPI GET method returns an observable
  store in Courses[]*/
  refreshList(){
    this.http.get(this.rootURL + '/Courses')
    .toPromise().then(res => this.list = res as Courses[]);
  }

  /**PUT call WebAPI/controller PUT function Update Course, returns an observable*/
  putCourse(formData : Courses){
    return this.http.put(this.rootURL + '/Courses/'+formData.CourseID,formData);
   }


   /*delete api/Course/5  use id as argument */
   deleteCourse(id :number){
    return this.http.delete(this.rootURL + '/Courses/'+id);
   }
}

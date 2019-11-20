import { Injectable } from '@angular/core';
import { Courses } from './courses.model';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  formData :Courses
  list : Courses[];
  readonly rootURL ="http://localhost:60565/api/course"

 
  
  constructor(private http : HttpClient) { }

  //POST formdata to WebAPI
  postCourse(formData : Courses){
   return this.http.post(this.rootURL + '/Courses',formData)
  }

  /*GET   call WepAPI GET method returns an observable
  store in Courses[], see courselist.html*/
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
    /**Testing HomeController */
   
   StartConsoleOutput(){
    this.http.get('http://localhost:60565/api/home').subscribe(response => console.log(response));
   }

    testSimple(){
      this.http.post('http://localhost:60565/api/home/testpost', 'A simple value').subscribe(r => console.log(r));
    }



   testPostComplex(){
      this.http.post('http://localhost:60565/api/home/testpostcomplex', {
      name: "John",
      surname: "Doe",
      age: 38
    }).subscribe(r => console.log(r));
     
   }


}

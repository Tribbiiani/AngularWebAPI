import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Courses } from 'src/app/shared/courses.model';
import { ToastrService } from 'ngx-toastr';

import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})

export class CourseListComponent implements OnInit {

  constructor(private service : CourseService,
    private toastr : ToastrService,
    private url:LocationStrategy)  { }

  ngOnInit() {
    this.service.refreshList();

    this.service.StartConsoleOutput();
    this.service.testPostComplex();
    this.service.testSimple();

    console.info(this.url.path());
    
  }



  
  /*click on td datacell poulate form  */
  populateForm(crs : Courses){
    this.service.formData = Object.assign({}, crs);

  }

  /*Calls the service delete function */

    
   
onDelete(id:number)
{
      if(this.url.path()==='/admin-display')
    {
      {
           if(confirm('Are you sure you want to delete the Course?')){
            this.service.deleteCourse(id).subscribe(res=>{
             this.service.refreshList();
             this.toastr.warning('Deleted Successfully','Course Register');  
              });
            }  
      }
    }
}

}
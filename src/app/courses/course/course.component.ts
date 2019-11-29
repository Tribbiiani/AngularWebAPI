import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import {LocationStrategy} from '@angular/common';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private service : CourseService,
    private toastr : ToastrService,
    
    //get url, only admin access to CRUD, others can read
    private url:LocationStrategy) { }

  ngOnInit() {
    this.resetForm(); 
  }

  
  resetForm(form? : NgForm){
    if(form !=null)
    form.resetForm();
    this.service.formData = {
      CourseID: null,
      CourseName:'',
      Code: null,
      Location:'',
      Price: null

    }
  }

  onSubmit(form : NgForm){
    if(this.url.path()==='/admin-display')
    {

       if(form.value.CourseID ==null)
       this.insertRecord(form);
         else
          this.updateRecord(form);
      }
   }

  insertRecord(form : NgForm){
      if(this.url.path()==='/admin-display')
      {
        this.service.postCourse(form.value).subscribe(res => {
          this.toastr.success('Inserted Successfully','Course Register');  
            this.resetForm(form);
              this.service.refreshList();
        });
      }
  }

  /**Subscribe to observable returned from putCourse in Course.service class */
  updateRecord(form: NgForm){
    if(this.url.path()==='/admin-display')
    {  
        this.service.putCourse(form.value)
        .subscribe(res => {
          this.toastr.info('Updated Successfully','Course Register');  
            this.resetForm(form);
            this.service.refreshList();
        });
      }
    }

}

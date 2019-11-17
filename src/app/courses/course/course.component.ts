import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {

  constructor(private service : CourseService,
    private toastr : ToastrService) { }

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
    if(form.value.CourseID ==null)
      this.insertRecord(form);
        else
          this.updateRecord(form);

  }

  insertRecord(form : NgForm){
    this.service.postCourse(form.value).subscribe(res => {
      this.toastr.success('Inserted Successfully','Course Register');  
        this.resetForm(form);
          this.service.refreshList();
    });
  }

  /**Subscribe to observable returned from putCourse in Course.service class */
  updateRecord(form: NgForm){
    this.service.putCourse(form.value)
    .subscribe(res => {
      this.toastr.info('Updated Successfully','Course Register');  
        this.resetForm(form);
         this.service.refreshList();
    });
  }

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';

import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseService } from './shared/course.service';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,// required animations module
    ToastrModule.forRoot()// ToastrModule added
    
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

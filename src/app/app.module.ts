import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './courses/course/course.component';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseService } from './shared/course.service';
import {FormsModule} from "@angular/forms";
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CourseListComponent,
    AdminComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,// required animations module
    ToastrModule.forRoot(),// ToastrModule added
    RouterModule.forRoot([
      { path: 'courses', component: CoursesComponent},
      { path: 'admin', component: AdminComponent },
      { path: '**', redirectTo: 'courses' }
      
      
    ])

    
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

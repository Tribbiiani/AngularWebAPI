import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminDisplayComponent } from './admin-display/admin-display.component';
import { CoursesComponent } from './courses/courses.component';

import { AdminGuard } from './admin.guard';

const routes: Routes = [

  { path: 'courses', component: CoursesComponent},
  
  { path: 'admin', component: AdminComponent },

  { path: 'admin-display', component: AdminDisplayComponent,
   canActivate: [AdminGuard] },
   
  { path: '**', redirectTo: 'courses' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

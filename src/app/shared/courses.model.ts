import { DecimalPipe } from '@angular/common';

export class Courses {
    //Copy from WebAPI Models/Courses.cs convert to typescript
        CourseID   : number;
        CourseName : string;
        Code       : number;
        Location   : string;
        Price      : number;
}

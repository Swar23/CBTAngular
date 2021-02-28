import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Student } from '../model/student';
import { GetDataService } from '../_services/get-data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private service: GetDataService) { }

  student$: Observable<Student[]>;

  columnDefs = [
    { field: 'Id', sortable: true, filter: true },
    { field: 'Name', sortable: true, filter: true },
    { field: 'Subject', sortable: true, filter: true },
    { field: 'Marks', sortable: true, filter: true }
  ];

  rowData = [
    { Id: 'Toyota', Name: 'Celica', Subject: 'Maths', Marks: 35000 },
    { Id: 'Ford', Name: 'Swarup', Subject: 'Science', Marks: 35000 },
    { Id: 'Toyota2', Name: 'Celica2', Subject: 'Maths2', Marks: 35000 },
  ];

  ngOnInit(): void {
    this.getStudentData();
  }

  getStudentData() {
    this.student$ = this.service.getStudentData().pipe(map(res => this.getData(res)));
  }

  // if we have more fields we can select specific field and also operate on it
  getData(res): Student[] {
    const student: Student[] = [];
    res.data.users.forEach(element => {
      const stud = {} as Student;
      stud.name = element.firstName;
      stud.marks = element.grade;
      stud.userId = element.userId;
      student.push(stud);
    });

    return student;
  }

}

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

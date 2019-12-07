import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-studentmanagement',
  templateUrl: './studentmanagement.component.html',
  styleUrls: ['./studentmanagement.component.css']
})
export class StudentmanagementComponent implements OnInit {

  students:object=[];
  constructor(private studentapi:StudentsService) { }

  ngOnInit() {
    this.getstudents();
  }
getstudents(){
  this.studentapi.getallstudents().subscribe((allstudents)=>{
    this.students=allstudents;
  });
}
}

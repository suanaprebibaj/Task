import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  newCoursesClicked = false;
  courses = [
    {name:'Python', code:'program'},
    {name:'JavaScript', code:'tutorials'},
    {name:'Swift', code:'lesson'}
  ];
  color:any;

  constructor() { }

  ngOnInit(): void {
  }
  model:any = {};
  model2:any = {};
  addCourses(){
    this.courses.push(this.model);
    this.model = {}
  }
  deleteCourses(i:any){
this.courses.slice(i);
  }
myValue:any;

editCourses(editCoursesInfo:any){
  this.model2.name = this.courses[editCoursesInfo].name;
  this.model2.code = this.courses[editCoursesInfo].code;
  this.myValue = editCoursesInfo;
}
updateCourses(){
  let editCoursesInfo = this.myValue;
  for(let i=0; i<this.courses.length; i++){
    if(i==editCoursesInfo){
      this.courses[i]=this.model2;
      this.model2 ={}
    }
  }
}


addNewCoursesBtn(){
  this.newCoursesClicked = !this.newCoursesClicked;
}
chaneColorOne(){
  this.color = !this.color;
  if(this.color){
    return '#ffffff';
  }else{
    return '#f6f6f6';
  }
}
}

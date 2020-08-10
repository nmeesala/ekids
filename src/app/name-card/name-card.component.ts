import { FirebaseService } from './../firebase.service';
import { AppSettings } from './../app.settings';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common-service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class student {
  name: string;
  age: number;
  zipcode: number;
}

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.scss']
})
export class NameCardComponent implements OnInit {

  name:string;
  _form: FormGroup;

  /*
  1. variable
  2. Declaring the type of variable
  */
  students: student[] = []; //Array
  student: student = new student(); //Object
  student1: student = new student();

  constructor(private x: FirebaseService, private router: Router,private formBuilder: FormBuilder) {
    this._form = this.formBuilder.group({
      name: ["", Validators.required]
    });

    this.student.name = "Yana";
    this.student.age =  8;
    this.student.zipcode = 19426;

    this.students.push(this.student);


    this.student1.name = "Bhavya";
    this.student1.age =  10;
    this.student1.zipcode = 19406;

    this.students.push(this.student1);



  }

  ngOnInit(): void {
  }

  addName() {
    if(this._form.invalid) { return; }
     this.x.name = this.name;
     this.router.navigateByUrl("/bingo");
  }

}

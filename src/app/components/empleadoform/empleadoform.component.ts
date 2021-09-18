import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-empleadoform',
  templateUrl: './empleadoform.component.html',
  styleUrls: ['./empleadoform.component.css']
})

export class EmpleadoformComponent implements OnInit {

  vaccinationState:boolean = false;

  createFormGroup() {
    return new FormGroup({
      birthDate: new FormControl(''),
      direction: new FormControl(''),
      celNumber: new FormControl(''),
      vaccinationState: new FormControl('')
    });
  }

  empleadoForm: FormGroup;

  constructor() {
    this.empleadoForm =  this.createFormGroup();
  }

  ngOnInit(): void {
  }

  onChangeVac(){
    this.vaccinationState = !this.vaccinationState;
    console.log(this.vaccinationState);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserPersonalDataService } from 'src/app/services/user-personal-data.service';
import { AccountService } from 'src/app/services/account.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public respuesta: any = [];

  header: string = "Añadir usuario";

  isEdit: boolean = false;
  ciVal: boolean = false;

  idModify: string = '';
  alphPattern: any = /^[a-zA-Z]+$/;
  emailPattern: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  numPattern: any = /^[0-9]+$/;

  createFormGroup() {
    return new FormGroup({
      ci: new FormControl('', [Validators.required, Validators.pattern(this.numPattern), Validators.maxLength(10), Validators.minLength(10)]),
      name: new FormControl('', [Validators.required, Validators.pattern(this.alphPattern)]),
      lastname: new FormControl('', [Validators.required, Validators.pattern(this.alphPattern)]),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    });
  }

  userForm: FormGroup;

  constructor(private userData: UserPersonalDataService, private accountData: AccountService, private router: ActivatedRoute) {
    this.userForm = this.createFormGroup();
  }

  ngOnInit(): void {
    if (this.router.snapshot.params.id != null) {
      this.header = "Editar usuario"
      this.userData.getSingleUserPersonalData(this.router.snapshot.params.id).subscribe(respuesta => {
        console.log(respuesta);
        this.userForm.controls['ci'].setValue(respuesta[0].ci);
        this.userForm.controls['name'].setValue(respuesta[0].nombre);
        this.userForm.controls['lastname'].setValue(respuesta[0].apellido);
        this.userForm.controls['email'].setValue(respuesta[0].correo);
        this.isEdit = true;
        this.idModify = respuesta[0].id;
      })
    } else {
      this.header = "Añadir usuario";
    }
  }

  get name() { return this.userForm.get('name'); }
  get lastname() { return this.userForm.get('lastname'); }
  get email() { return this.userForm.get('email'); }
  get ci() { return this.userForm.get('ci'); }

  ResetForm() {
    this.userForm.reset();
  }

  public onSaveForm() {
    if (this.userForm.valid) {
      if(!this.isEdit){
        const newEmpleado = {
          nombre: this.name?.value,
          apellido: this.lastname?.value,
          correo: this.email?.value,
          ci: this.ci?.value
        }
        const newAccount = {
          usuario: this.email?.value,
          contraseña: this.ci?.value,
          usuario_ref: this.ci?.value
        }
        this.userData.postUserPersonalData(newEmpleado).subscribe(respuesta => {
          console.log('Empleado guardado!');
        })
        this.accountData.postUserAccount(newAccount).subscribe(respuesta => {
          console.log('Cuenta creada!');
        })
        this.ResetForm();
      }else{
        const newEmpleado = {
          nombre: this.name?.value,
          apellido: this.lastname?.value,
          correo: this.email?.value,
          ci: this.ci?.value,
          id: this.idModify
        }
        console.log(newEmpleado.id);
        this.userData.putUserPersonalData(newEmpleado).subscribe(respuesta => {
          console.log('Empleado actualizado!');
        })
      }
    } else {
      console.log('No enviado');
    }

  }



  VerifyCI(data: string) {
    this.ciVal = this.validarCedula(data);
  }

  validarCedula(cedula: string) {
    if (cedula.length == 10) {
      const digitoRegion = parseInt(cedula.substring(0, 2));
      if (digitoRegion >= 1 && digitoRegion <= 24) {
        const ultimoDigito = Number(cedula.substring(9, 10));
        const pares = Number(cedula.substring(1, 2)) + Number(cedula.substring(3, 4)) + Number(cedula.substring(5, 6)) + Number(cedula.substring(7, 8));
        let numeroUno: any = cedula.substring(0, 1);
        numeroUno = (numeroUno * 2);
        if (numeroUno > 9) {
          numeroUno = (numeroUno - 9);
        }
        let numeroTres: any = cedula.substring(2, 3);
        numeroTres = (numeroTres * 2);
        if (numeroTres > 9) {
          numeroTres = (numeroTres - 9);
        }
        let numeroCinco: any = cedula.substring(4, 5);
        numeroCinco = (numeroCinco * 2);
        if (numeroCinco > 9) {
          numeroCinco = (numeroCinco - 9);
        }
        let numeroSiete: any = cedula.substring(6, 7);
        numeroSiete = (numeroSiete * 2);
        if (numeroSiete > 9) {
          numeroSiete = (numeroSiete - 9);
        }
        let numeroNueve: any = cedula.substring(8, 9);
        numeroNueve = (numeroNueve * 2);
        if (numeroNueve > 9) {
          numeroNueve = (numeroNueve - 9);
        }
        const impares = numeroUno + numeroTres + numeroCinco + numeroSiete + numeroNueve;
        const sumaTotal = (pares + impares);
        const primerDigitoSuma = String(sumaTotal).substring(0, 1);
        const decena = (Number(primerDigitoSuma) + 1) * 10;
        let digitoValidador = decena - sumaTotal;
        if (digitoValidador == 10) {
          digitoValidador = 0;
        }
        if (digitoValidador == ultimoDigito) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }


}

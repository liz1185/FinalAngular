import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

  registerForm=this.formBuilder.group({
    username:[""],
    password:[""],
    // suscripcion: [Suscripcion.Basica],
    promociones:[true]

  });

  suscripciones:any[] =[];


  ngOnInit(): void {

      }

      submit() {
        console.log(this.registerForm.value);
    }
    refrescar() {
      this.registerForm.patchValue({
    username:"",
    password:"",
    promociones:true

      });

    }

}

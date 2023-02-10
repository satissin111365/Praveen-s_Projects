import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent {
  //  employeeform!:FormGroup
  //  submitted=false;
  //  constructor(private formBuilder:FormBuilder){}
  //  ngOnInit(){
  //   //validation
  //   this.employeeform=this.formBuilder.group({
  //     firstName:['',Validators.required]
  //   })

  //  }
  //  onSubmit(){
  //   this.submitted=true
  //   if(this.employeeform.invalid){
  //     return
  //   }
  //   alert("succes");
  //  }
  // }
  
  formcomponent= new FormGroup({
      firstname: new FormControl("",[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z].*")]),
      lastname: new FormControl(""),
      email: new FormControl(""),
      empid: new FormControl(""),
      mobile: new FormControl(""),
      gender: new FormControl("")

    });

    employeesubmitted(){
      console.log(this.formcomponent);
    }
    get FirstName() : FormControl{
      return this.formcomponent.get("firstname") as FormControl;
    }
    get LastName() : FormControl{
      return this.formcomponent.get("lastname") as FormControl;
    }
    get Email() : FormControl{
      return this.formcomponent.get("email") as FormControl;
    }
    get Empid() : FormControl{
      return this.formcomponent.get("empid") as FormControl;
    }
    get Mobile() : FormControl{
      return this.formcomponent.get("mobile") as FormControl;
    }
    get Gender() : FormControl{
      return this.formcomponent.get("gender") as FormControl;
    }

  // private result: any;
 
}





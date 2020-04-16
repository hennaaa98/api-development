import {Component} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {PasswordValidator} from './passwordvalidator'
import {LoginService} from './login.service';



@Component({
    selector:'login',
    templateUrl : 'login.component.html',
    providers: [LoginService]
})

export class LoginComponent{

    form : FormGroup;
        //{
     /*   username: new FormControl('',
        Validators.required),
        password : new FormControl('',Validators.required)
    });*/

    constructor(fb:FormBuilder, private _loginService : LoginService){
        this.form = fb.group({
            username: ["", Validators.required],
            password : ["", Validators.compose([Validators.required, PasswordValidator.canNotContainSpace])]
        })
    }

    login(){
        let result = this._loginService.login(this.form.controls['username'].value, this.form.controls['password'].value);
        if(!result){
            this.form.controls['password'].setErrors({
                invalidLognin:true
            });
        }
    
    }

}
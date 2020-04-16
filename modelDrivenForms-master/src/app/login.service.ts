import {Injectable} from '@angular/core'

@Injectable()
export class LoginService{

login(username, password){
    if(username === 'json' && password === '123'){
        return true;
    }

    return false;
}


}
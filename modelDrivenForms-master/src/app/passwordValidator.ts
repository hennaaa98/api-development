import {FormControl} from '@angular/forms'
export class PasswordValidator{

    static canNotContainSpace(formControl : FormControl){
        if(formControl.value.indexOf(" ") >= 0){
            return {canNotContainSpace : true}
        }
        return null;
    }
    
}
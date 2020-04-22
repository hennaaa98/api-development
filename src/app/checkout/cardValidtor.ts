import { Injectable } from '@angular/core'
import { FormControl } from '@angular/forms'
@Injectable()

export class CardValidator {
    /**
     * methode for validating card number
     * 
     * 
     * @param formControl 
     * 
     * validate card return null
     * 
     * 
     * not validate card return invalidCreditCard
     */
    static validateCardNumber(formControl: FormControl) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (formControl.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return { 'invalidCreditCard': true };
        }

    }

}
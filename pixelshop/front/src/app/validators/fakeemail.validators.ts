import { AbstractControl } from '@angular/forms'

export function ValidateFakeEmail(control : AbstractControl){
    if(control.value.includes('@fujul.com'))
    {
        return {invalidEmail: true}
    }
    return null;
}
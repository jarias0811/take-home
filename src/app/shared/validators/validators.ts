import {FormGroup} from '@angular/forms';

export function atLeastOneBooleanValidator(booleanControlNames: string[]) {
  return (formGroup: FormGroup) => {
    const atLeastOne: boolean = booleanControlNames.some(controlName => formGroup.controls[controlName].value === true);
    if (!atLeastOne) {
      return {atLeastOne: true};
    } else {
      return null;
    }
  };
}

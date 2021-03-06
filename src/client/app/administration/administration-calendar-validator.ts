import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdministrationValidationService } from './administration-validation.service';

@Component({
  selector: 'administration-calendar-error-messages',
  template: `<div *ngIf="errorMessage !== null" class="fontFamily form-control-feedback-calendar" style="">
  <span style="font-weight:bold;padding-right:1px;">X</span>
  {{ errorMessage }} </div>`,
  host: {'[style.min-width]': '"78%"', '[style.min-height]': '"16px"'}// tslint:disable-line
})
export class AdministrationCalendarValidatorComponent {
  @Input() control: FormControl;
  @Input() htmlElem: any;
  constructor() {
  } // tslint:disable-line

  get errorMessage():any {
    for (let propertyName in this.control.errors) {
      // console.log(i++, this.control, 'errors length='+this.control.errors.length, propertyName);
      try {
        if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
          let errorMsg = AdministrationValidationService.getValidatorErrorMessage(propertyName,this.control.errors[propertyName]);
          try { this.htmlElem.style.borderBottomColor = '#FF0000 !important';}catch(e){    }// tslint:disable-line
          return errorMsg?errorMsg:null;
        }else {
         // try { this.htmlElem.style.borderBottomColor = '#777373 !important';}catch(e){    }// tslint:disable-line
        }
      }catch(e){    }// tslint:disable-line
    }
    return null;
  }
}

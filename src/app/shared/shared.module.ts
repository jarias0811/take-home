import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonCheckboxComponent, CommonInputComponent, CommonSelectComponent} from './components';
import {NgSelectModule} from '@ng-select/ng-select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CommonInputComponent,
    CommonSelectComponent,
    CommonCheckboxComponent
  ],
  exports: [
    CommonInputComponent,
    CommonSelectComponent,
    CommonCheckboxComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    ReactiveFormsModule
  ]
})
export class SharedModule {
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {fadeInOutAnimation, slideInOutAnimation} from '../shared/animations';
import {atLeastOneBooleanValidator} from '../shared/validators/validators';
import {UserService} from '../core/services/user.service';
import {first} from 'rxjs/operators';
import {UserSubscription} from '../shared/models/user-subscription';
import {ToastrService} from 'ngx-toastr';
import {ResponseStatus} from '../shared/contants';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [fadeInOutAnimation, slideInOutAnimation],
})
export class PagesComponent implements OnInit {
  formGroup!: FormGroup;
  residentOptions = [
    'Yes',
    'No'
  ];

  @ViewChild('userForm') userForm!: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.initFormGroup();
  }

  initFormGroup() {
    this.formGroup = this.formBuilder.group({
      firstName: this.formBuilder.control(null, [Validators.required]),
      lastName: this.formBuilder.control(null, [Validators.required]),
      email: this.formBuilder.control(null, [Validators.required, Validators.email]),
      org: this.formBuilder.control(null),
      advances: this.formBuilder.control(true),
      alerts: this.formBuilder.control(false),
      other: this.formBuilder.control(false),
      euResident: this.formBuilder.control(null, [Validators.required])
    }, {
      validators: atLeastOneBooleanValidator(['advances', 'alerts', 'other'])
    });
  }

  convertToFormControl(absCtrl: AbstractControl | null): FormControl {
    const ctrl = absCtrl as FormControl;
    return ctrl;
  }

  onSubmit() {
    const userSubscription: UserSubscription = this.formGroup.value;

    this.userService.subscribeUser(userSubscription).pipe(
      first()
    ).subscribe(
      response => {
        if(response.status === ResponseStatus.SUCCESS){
          this.toastrService.success(response.message);
          this.initFormGroup();
        }else if (response.status === ResponseStatus.ERROR){
          this.toastrService.error(response.message);
        }
      });
  }

}

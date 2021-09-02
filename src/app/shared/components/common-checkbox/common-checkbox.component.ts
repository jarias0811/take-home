import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-common-checkbox',
  templateUrl: './common-checkbox.component.html',
  styleUrls: ['./common-checkbox.component.scss']
})
export class CommonCheckboxComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string | undefined;
  @Input() id: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-common-input',
  templateUrl: './common-input.component.html',
  styleUrls: ['./common-input.component.scss']
})
export class CommonInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string | undefined;
  @Input() id: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

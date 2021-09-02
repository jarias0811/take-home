import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-common-select',
  templateUrl: './common-select.component.html',
  styleUrls: ['./common-select.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommonSelectComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label: string | undefined;
  @Input() id: string | undefined;
  @Input() options: any[] | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

}

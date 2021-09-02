import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PagesComponent} from './pages.component';
import {FormBuilder} from '@angular/forms';
import {UserService} from '../core/services/user.service';
import {ToastrService} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('PagesComponent', () => {
  let component: PagesComponent;
  let fixture: ComponentFixture<PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagesComponent],
      imports:[BrowserAnimationsModule],
      providers: [
        FormBuilder,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideProvider(UserService, {useFactory: () => ({})})
      .overrideProvider(ToastrService, {useFactory: () => ({})})
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

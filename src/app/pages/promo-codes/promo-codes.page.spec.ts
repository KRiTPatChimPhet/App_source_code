/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Grocery This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PromoCodesPage } from './promo-codes.page';

describe('PromoCodesPage', () => {
  let component: PromoCodesPage;
  let fixture: ComponentFixture<PromoCodesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PromoCodesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

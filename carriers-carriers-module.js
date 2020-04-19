(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carriers-carriers-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-carriers-popup.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-carriers-popup.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-add-carriers-popup\">\n\t<h4 class=\"custom-title-popup\">\n\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.ADD_CARRIER' | translate }}\n\t</h4>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\t<form-wizard #wizzardFrom [ngClass]=\"{ 'second-step': choicedNew }\">\n\t\t<wizard-step\n\t\t\t#wizzardFromStep1\n\t\t\t[isValid]=\"choiced\"\n\t\t\t[title]=\"wizardStepsTitle.step1\"\n\t\t>\n\t\t\t<add-choice #addChoice (click)=\"onStep1Next(choiced)\"></add-choice>\n\t\t</wizard-step>\n\n\t\t<wizard-step\n\t\t\t[title]=\"wizardStepsTitle.step2\"\n\t\t\t[isValid]=\"isDone\"\n\t\t\t(onComplete)=\"add()\"\n\t\t\t#wizardFormStep2\n\t\t>\n\t\t\t<add-new-carrier\n\t\t\t\t#addNewCarrier\n\t\t\t\t*ngIf=\"choiced === 'new'\"\n\t\t\t\t(onCompleteEvent)=\"completeCreateCarrier($event)\"\n\t\t\t\t(buttonClickEvent)=\"buttonClickEvent($event)\"\n\t\t\t></add-new-carrier>\n\t\t\t<carriers-catalog\n\t\t\t\t#carriersCatalog\n\t\t\t\t*ngIf=\"choiced === 'existing'\"\n\t\t\t></carriers-catalog>\n\t\t</wizard-step>\n\t</form-wizard>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"carriers-add-choice\">\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"choiceType == 1 ? 'selected' : ''\"\n\t\t\t\tclass=\"option option2\"\n\t\t\t\t(click)=\"changeChoice('existing')\"\n\t\t\t>\n\t\t\t\t<span>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.SELECT_FROM_CARRIERS_CATALOG'\n\t\t\t\t\t| translate }}</span\n\t\t\t\t>\n\t\t\t</div>\n\t\t</ion-col>\n\t\t<ion-col>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"choiceType == 2 ? 'selected' : ''\"\n\t\t\t\tclass=\"option option1\"\n\t\t\t\t(click)=\"changeChoice('new')\"\n\t\t\t>\n\t\t\t\t<span\n\t\t\t\t\t>{{ 'CARRIERS_VIEW.ADD_CARRIER.ADD_NEW_CARRIER' | translate\n\t\t\t\t\t}}</span\n\t\t\t\t>\n\t\t\t</div>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.html":
/*!******************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.html ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"carrier-account-form\" [formGroup]=\"form\">\n\t<ion-row text-center class=\"crete-carrier\">\n\t\t<ion-col>\n\t\t\t<h5>{{ 'CARRIERS_VIEW.ADD_CARRIER.ACCOUNT' | translate }}</h5>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col col-6 text-center>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.USERNAME' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" formControlName=\"userName\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"items-end\">\n\t\t<ion-col>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PASSWORD' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.REPEAT_PASSWORD' | translate\n\t\t\t\t\t}}</ion-label\n\t\t\t\t>\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"repeatPassword\"\n\t\t\t\t></ion-input>\n\t\t\t</ion-item>\n\t\t\t<span *ngIf=\"repeatPassword.dirty || repeatPassword.touched\">\n\t\t\t\t<span [hidden]=\"password.value === repeatPassword.value\">\n\t\t\t\t\t<small style=\"color: red; margin-left: 16px;\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PASSWORD_DO_NOT_MATCH'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}.\n\t\t\t\t\t</small>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col>\n\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t<ion-checkbox\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\tcolor=\"success\"\n\t\t\t\t\tformControlName=\"isSharedCarrier\"\n\t\t\t\t></ion-checkbox>\n\n\t\t\t\t<!-- TODO add translate -->\n\t\t\t\t<ion-label>Carrier can be shared?</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t<ion-checkbox\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\tcolor=\"success\"\n\t\t\t\t\tformControlName=\"isActive\"\n\t\t\t\t></ion-checkbox>\n\n\t\t\t\t<ion-label>{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.IS_ACTIVE' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\t</ion-row>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <form [formGroup]=\"form\"> -->\n<div class=\"add-new-carrier\">\n\t<ion-grid [hidden]=\"!isNextStepOneAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<basic-info-form #basicInfoForm></basic-info-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid [hidden]=\"!isNextStepTwoAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<account-form #accountForm></account-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid [hidden]=\"!isNextStepThreeAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<carrier-location-form\n\t\t\t\t\t#locationForm\n\t\t\t\t\t(buttonClickEventComplete)=\"onClickComplete($event)\"\n\t\t\t\t\t(backToStep2event)=\"toStep2event($event)\"\n\t\t\t\t></carrier-location-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t*ngIf=\"isNextStepOneAvailable\"\n\t\t\t\t\t(click)=\"clickPrevOrComplete('previous')\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.PREVIOUS' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"light\"\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t*ngIf=\"isNextStepTwoAvailable\"\n\t\t\t\t\t(click)=\"backToStep1()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.BACK' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t*ngIf=\"isNextStepOneAvailable\"\n\t\t\t\t\t(click)=\"nextToStep2()\"\n\t\t\t\t\t[disabled]=\"!basicInfoForm?.form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.NEXT' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t*ngIf=\"isNextStepTwoAvailable\"\n\t\t\t\t\t(click)=\"nextToStep3()\"\n\t\t\t\t\t[disabled]=\"!accountForm?.form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.NEXT' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</div>\n<!-- </form> -->\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.html":
/*!************************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.html ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"carrier-basic-info\" [formGroup]=\"form\">\n\t<ion-grid>\n\t\t<ion-row text-center class=\"crete-carrier\">\n\t\t\t<ion-col>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PROFILE_DETAILS' | translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FIRST_NAME' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isFirstNameValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"firstName.errors.required\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.FIRST_NAME_REQUIRED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t\t<span *ngIf=\"firstName.errors.pattern\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LAST_NAME' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isLastNameValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"lastName.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.LAST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"lastName.errors.pattern\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PHONE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"phone\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isPhoneValid\" class=\"validation-errors\">\n\t\t\t\t\t<span [hidden]=\"!phone.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.LAST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span [hidden]=\"!phone.hasError('pattern')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.PHONE_MUST_CONTAINS_ONLY(special_signs)AND_DIGIT_CHARACTER'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">\n\t\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.EMAIL' | translate }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"email\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isEmailValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"email.errors != null\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.EMAIL_IS_REQUIRED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col id=\"common\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[name]=\"firstName?.value\"\n\t\t\t\t\t[fileUrl]=\"logo?.value\"\n\t\t\t\t\t(uploadedImgUrl)=\"logo.setValue($event)\"\n\t\t\t\t\t[buttonFullSpace]=\"true\"\n\t\t\t\t></e-cu-file-uploader>\n\t\t\t\t<ion-row class=\"form-group\" *ngIf=\"logo.value\">\n\t\t\t\t\t<div class=\"col-sm-12 p-0\">\n\t\t\t\t\t\t<ion-row class=\"pt-1 preview-img\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\tsrc=\"{{ logo.value }}\"\n\t\t\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"removeIcon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\tios=\"ios-remove-circle\"\n\t\t\t\t\t\t\t\t\tid=\"remove-circle\"\n\t\t\t\t\t\t\t\t\tmd=\"md-remove-circle\"\n\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carrier-location-form\">\n\t<form [formGroup]=\"form\">\n\t\t<ion-row text-center class=\"crete-carrier-location-title\">\n\t\t\t<ion-col>\n\t\t\t\t<h5 class=\"m-0\">\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.LOCATION' | translate }}\n\t\t\t\t</h5>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"search-find\">\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"location-find\">\n\t\t\t\t\t<ion-searchbar\n\t\t\t\t\t\t#autocomplete\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FIND_ADDRESS' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t></ion-searchbar>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"4\" text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.COUNTRY' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-select\n\t\t\t\t\t\tformControlName=\"country\"\n\t\t\t\t\t\t[cancelText]=\"buttonCancel\"\n\t\t\t\t\t\t[okText]=\"buttonOK\"\n\t\t\t\t\t\t(ionChange)=\"textInputChange(country, 'country')\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t*ngFor=\"let country of countries\"\n\t\t\t\t\t\t\tvalue=\"{{ country.id }}\"\n\t\t\t\t\t\t\t>{{ country.name }}</ion-select-option\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"4\" text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.CITY' | translate\n\t\t\t\t\t\t}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"city\"\n\t\t\t\t\t\t(change)=\"textInputChange(city, 'city')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.HOUSE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tformControlName=\"house\"\n\t\t\t\t\t\t(change)=\"textInputChange(house, 'house')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"8\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.STREET' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"street\"\n\t\t\t\t\t\t(change)=\"textInputChange(street, 'street')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.ZIP' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"postcode\"\n\t\t\t\t\t\t(change)=\"textInputChange(postcode, 'postcode')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col size=\"4\">\n\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.NEW_ORDER_VIEW.SHOW_COORDINATES'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\tcolor=\"secondary\"\n\t\t\t\t\t\t(ionChange)=\"toggleCoordinates()\"\n\t\t\t\t\t></ion-checkbox>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col size=\"4\" [hidden]=\"!showCoordinates\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LATITUDE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tformControlName=\"lat\"\n\t\t\t\t\t\t(change)=\"textInputChange(lat, 'lat')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col size=\"4\" [hidden]=\"!showCoordinates\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LONGITUDE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"lng\"\n\t\t\t\t\t\t(change)=\"textInputChange(lng, 'lng')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</form>\n\t<ion-grid class=\"buttons-back-done\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-button class=\"mr-2\" color=\"light\" (click)=\"toStep2()\">\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.BACK' | translate }}\n\t\t\t\t</ion-button>\n\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t(click)=\"clickComplete()\"\n\t\t\t\t\t[disabled]=\"!form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.DONE' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid class=\"google-map-frame\">\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"map-wrapper\">\n\t\t\t\t\t<google-map\n\t\t\t\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t\t\t\t>\n\t\t\t\t\t</google-map>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng2-smart-table\n\tclass=\"smart-table\"\n\t[settings]=\"settingsSmartTable\"\n\t[source]=\"sourceSmartTable\"\n\t(userRowSelect)=\"selectCarriersTmp($event)\"\n>\n</ng2-smart-table>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carrier-addr-popup\">\n\t<h4 class=\"custom-title-popup\">\n\t\t{{ 'CARRIERS_VIEW.ADDRESS.CARRIER_ADDRESS' | translate }}\n\t</h4>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\t<div class=\"addrInfo\">\n\t\t<span *ngIf=\"country\" class=\"infoRow\">\n\t\t\t<div class=\"label\">\n\t\t\t\t{{ 'CARRIERS_VIEW.ADDRESS.COUNTRY' | translate }}:\n\t\t\t</div>\n\t\t\t<div class=\"info\">{{ country }}</div>\n\t\t</span>\n\t\t<span *ngIf=\"street\" class=\"infoRow\">\n\t\t\t<div class=\"label\">\n\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.STREET' | translate }}:\n\t\t\t</div>\n\t\t\t<div class=\"info\">{{ street }}</div>\n\t\t</span>\n\t\t<span *ngIf=\"house\" class=\"infoRow\">\n\t\t\t<div class=\"label\">\n\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.HOUSE' | translate }}:\n\t\t\t</div>\n\t\t\t<div class=\"info\">{{ house }}</div>\n\t\t</span>\n\t\t<span *ngIf=\"coordinates\" class=\"infoRow\">\n\t\t\t<div class=\"label\">\n\t\t\t\t{{ 'CARRIERS_VIEW.ADDRESS.COORDINATES' | translate }}:\n\t\t\t</div>\n\t\t\t<div class=\"info\">{{ coordinates }}</div>\n\t\t</span>\n\t</div>\n\t<div #gmap id=\"mapDiv\" class=\"map\"></div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"carrier-deliveries-popup\" id=\"carriersTable\">\n\t<h4 class=\"custom-title-popup\">\n\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.CARRIER_DELIVERIES' | translate }}\n\t</h4>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\t<ion-row id=\"basicInfo\">\n\t\t<ion-col size=\"4\">\n\t\t\t<span\n\t\t\t\t>{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.ALL_DELIVERIES' | translate\n\t\t\t\t}}:\n\t\t\t</span>\n\t\t\t<span class=\"info\">{{ carrier?.numberOfDeliveries }}</span>\n\t\t</ion-col>\n\t\t<ion-col size=\"4\">\n\t\t\t<span\n\t\t\t\t>{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.DELIVERIES_TODAY' |\n\t\t\t\ttranslate }}:</span\n\t\t\t>\n\t\t\t<span class=\"info\">{{ carrier?.deliveriesCountToday }}</span>\n\t\t</ion-col>\n\t\t<ion-col size=\"4\">\n\t\t\t<span\n\t\t\t\t>{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.TOTAL_DISTANCE_TODAY' |\n\t\t\t\ttranslate }}:</span\n\t\t\t>\n\t\t\t<span class=\"info\">{{ carrier?.totalDistanceToday }}</span>\n\t\t</ion-col>\n\t</ion-row>\n\t<div class=\"body\">\n\t\t<ng2-smart-table\n\t\t\t*ngIf=\"!showNoDeliveryIcon\"\n\t\t\tclass=\"smart-table\"\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t>\n\t\t</ng2-smart-table>\n\n\t\t<div *ngIf=\"showNoDeliveryIcon\">\n\t\t\t<div class=\"no-orders-message\">\n\t\t\t\t<i class=\"fa fa-truck\"></i>\n\n\t\t\t\t<h2>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.NO_DELIVERIES' |\n\t\t\t\t\ttranslate }}\n\t\t\t\t</h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-grid>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/account/account-form.component.html":
/*!**************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/account/account-form.component.html ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"edit-carrier-account\" [formGroup]=\"form\">\n\t<ion-row text-center class=\"crete-carrier\">\n\t\t<ion-col>\n\t\t\t<h5>{{ 'CARRIERS_VIEW.ADD_CARRIER.ACCOUNT' | translate }}</h5>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row>\n\t\t<ion-col col-6 text-center>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.USERNAME' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t\t<ion-input type=\"text\" formControlName=\"userName\"></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\t</ion-row>\n\t<ion-row class=\"items-end\">\n\t\t<ion-col>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PASSWORD' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"password\"\n\t\t\t\t></ion-input>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t<ion-item>\n\t\t\t\t<ion-label position=\"floating\">\n\t\t\t\t\t{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.REPEAT_PASSWORD' | translate\n\t\t\t\t\t}}</ion-label\n\t\t\t\t>\n\t\t\t\t<ion-input\n\t\t\t\t\ttype=\"password\"\n\t\t\t\t\tformControlName=\"repeatPassword\"\n\t\t\t\t></ion-input>\n\t\t\t</ion-item>\n\t\t\t<span *ngIf=\"repeatPassword.dirty || repeatPassword.touched\">\n\t\t\t\t<span [hidden]=\"password.value === repeatPassword.value\">\n\t\t\t\t\t<small style=\"color: red; margin-left: 16px;\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PASSWORD_DO_NOT_MATCH'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}.\n\t\t\t\t\t</small>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</ion-col>\n\t</ion-row>\n\n\t<ion-row class=\"items-end\">\n\t\t<ion-col>\n\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t<ion-checkbox\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\tcolor=\"success\"\n\t\t\t\t\tformControlName=\"isSharedCarrier\"\n\t\t\t\t></ion-checkbox>\n\n\t\t\t\t<!-- TODO add translate -->\n\t\t\t\t<ion-label>Carrier can be shared?</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\n\t\t<ion-col>\n\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t<ion-checkbox\n\t\t\t\t\tcolor=\"success\"\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\tformControlName=\"isActive\"\n\t\t\t\t></ion-checkbox>\n\t\t\t\t<ion-label>{{\n\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.IS_ACTIVE' | translate\n\t\t\t\t}}</ion-label>\n\t\t\t</ion-item>\n\t\t</ion-col>\n\t</ion-row>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.html":
/*!********************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.html ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form class=\"edit-carrier-basic-info\" [formGroup]=\"form\">\n\t<ion-grid>\n\t\t<ion-row text-center class=\"crete-carrier\">\n\t\t\t<ion-col>\n\t\t\t\t<h5>\n\t\t\t\t\t{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PROFILE_DETAILS' | translate\n\t\t\t\t\t}}\n\t\t\t\t</h5>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FIRST_NAME' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"firstName\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isFirstNameValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"firstName.errors.required\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.FIRST_NAME_REQUIRED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t\t<span *ngIf=\"firstName.errors.pattern\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LAST_NAME' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"lastName\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isLastNameValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"lastName.errors.required\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.LAST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span *ngIf=\"lastName.errors.pattern\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.MUST_CONTAIN_ONLY_LETTERS'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.PHONE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"phone\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isPhoneValid\" class=\"validation-errors\">\n\t\t\t\t\t<span [hidden]=\"!phone.hasError('required')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.LAST_NAME_REQUIRED'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t\t<span [hidden]=\"!phone.hasError('pattern')\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.PHONE_MUST_CONTAINS_ONLY(special_signs)AND_DIGIT_CHARACTER'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t\t<ion-col>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">\n\t\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.EMAIL' | translate }}\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-input type=\"text\" formControlName=\"email\"></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t\t<div *ngIf=\"isEmailValid\" class=\"validation-errors\">\n\t\t\t\t\t<span *ngIf=\"email.errors != null\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FORMS.ERRORS.EMAIL_IS_REQUIRED'\n\t\t\t\t\t\t\t| translate\n\t\t\t\t\t}}</span>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col id=\"common\">\n\t\t\t\t<e-cu-file-uploader\n\t\t\t\t\t[inputCustomStyle]=\"true\"\n\t\t\t\t\t[buttonFullSpace]=\"true\"\n\t\t\t\t\t[name]=\"firstName?.value\"\n\t\t\t\t\t[fileUrl]=\"logo?.value\"\n\t\t\t\t\t(uploadedImgUrl)=\"logo.setValue($event)\"\n\t\t\t\t></e-cu-file-uploader>\n\n\t\t\t\t<ion-row class=\"form-group\" *ngIf=\"logo.value\">\n\t\t\t\t\t<div class=\"col-12 p-0\">\n\t\t\t\t\t\t<ion-row class=\"preview-img pt-1\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<img\n\t\t\t\t\t\t\t\t\tsrc=\"{{ logo.value }}\"\n\t\t\t\t\t\t\t\t\talt=\"Invalid image\"\n\t\t\t\t\t\t\t\t\tclass=\"img-rounded\"\n\t\t\t\t\t\t\t\t/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"removeIcon\" (click)=\"deleteImg()\">\n\t\t\t\t\t\t\t\t<ion-icon\n\t\t\t\t\t\t\t\t\tios=\"ios-remove-circle\"\n\t\t\t\t\t\t\t\t\tid=\"remove-circle\"\n\t\t\t\t\t\t\t\t\tmd=\"md-remove-circle\"\n\t\t\t\t\t\t\t\t></ion-icon>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t</div>\n\t\t\t\t</ion-row>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</form>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.html":
/*!**************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carrier-edit\">\n\t<h4 class=\"custom-title-popup mb-0\">\n\t\t{{ 'CARRIERS_VIEW.EDIT_CARRIER.EDIT_CARRIER' | translate }}\n\t</h4>\n\t<button class=\"close\" (click)=\"cancelModal()\">\n\t\t<i class=\"fa fa-close\"></i>\n\t</button>\n\t<ion-grid [hidden]=\"!isNextStepOneAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<basic-info-form\n\t\t\t\t\t#basicInfoForm\n\t\t\t\t\t[carrier]=\"carrier\"\n\t\t\t\t></basic-info-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid [hidden]=\"!isNextStepTwoAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<account-form #accountForm [carrier]=\"carrier\"></account-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid [hidden]=\"!isNextStepThreeAvailable\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<carrier-location-form\n\t\t\t\t\t#locationForm\n\t\t\t\t\t[carrier]=\"carrier\"\n\t\t\t\t\t(buttonClickEventComplete)=\"onClickComplete($event)\"\n\t\t\t\t\t(backToStep2event)=\"toStep2event($event)\"\n\t\t\t\t></carrier-location-form>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t*ngIf=\"isNextStepOneAvailable\"\n\t\t\t\t\t(click)=\"clickPrevOrComplete('previous')\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.PREVIOUS' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"light\"\n\t\t\t\t\tclass=\"mr-2\"\n\t\t\t\t\t*ngIf=\"isNextStepTwoAvailable\"\n\t\t\t\t\t(click)=\"backToStep1()\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.BACK' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t*ngIf=\"isNextStepOneAvailable\"\n\t\t\t\t\t(click)=\"nextToStep2()\"\n\t\t\t\t\t[disabled]=\"!basicInfoForm?.form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.NEXT' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t*ngIf=\"isNextStepTwoAvailable\"\n\t\t\t\t\t(click)=\"nextToStep3()\"\n\t\t\t\t\t[disabled]=\"!accountForm?.form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.NEXT' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/location/location-form.component.html":
/*!****************************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/location/location-form.component.html ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"carrier-location-form\">\n\t<form [formGroup]=\"form\">\n\t\t<ion-row text-center class=\"crete-carrier-location-title\">\n\t\t\t<ion-col>\n\t\t\t\t<h5>{{ 'CARRIERS_VIEW.ADD_CARRIER.LOCATION' | translate }}</h5>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"search-find\">\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"location-find\">\n\t\t\t\t\t<ion-searchbar\n\t\t\t\t\t\tclass=\"p-0\"\n\t\t\t\t\t\t#autocomplete\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tplaceholder=\"{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.FIND_ADDRESS' | translate\n\t\t\t\t\t\t}}\"\n\t\t\t\t\t></ion-searchbar>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col class=\"col-4\" text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.COUNTRY' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-select\n\t\t\t\t\t\tformControlName=\"country\"\n\t\t\t\t\t\t[cancelText]=\"buttonCancel\"\n\t\t\t\t\t\t[okText]=\"buttonOK\"\n\t\t\t\t\t\t(ionChange)=\"textInputChange(country, 'country')\"\n\t\t\t\t\t>\n\t\t\t\t\t\t<ion-select-option\n\t\t\t\t\t\t\t*ngFor=\"let country of countries\"\n\t\t\t\t\t\t\tvalue=\"{{ country.id }}\"\n\t\t\t\t\t\t\t>{{ country.name }}</ion-select-option\n\t\t\t\t\t\t>\n\t\t\t\t\t</ion-select>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"col-4\" text-center>\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.CITY' | translate\n\t\t\t\t\t\t}}</ion-label\n\t\t\t\t\t>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"city\"\n\t\t\t\t\t\t(change)=\"textInputChange(city, 'city')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"col-4\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.HOUSE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tformControlName=\"house\"\n\t\t\t\t\t\t(change)=\"textInputChange(house, 'house')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row>\n\t\t\t<ion-col class=\"col-8\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.STREET' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"street\"\n\t\t\t\t\t\t(change)=\"textInputChange(street, 'street')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"col-4\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label class=\"labels\" position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.ZIP' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"postcode\"\n\t\t\t\t\t\t(change)=\"textInputChange(postcode, 'postcode')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\n\t\t<ion-row class=\"items-end\">\n\t\t\t<ion-col class=\"col-6\">\n\t\t\t\t<ion-item class=\"coord-box\">\n\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t{{\n\t\t\t\t\t\t\t'WAREHOUSE_VIEW.NEW_ORDER_VIEW.SHOW_COORDINATES'\n\t\t\t\t\t\t\t\t| translate\n\t\t\t\t\t\t}}\n\t\t\t\t\t</ion-label>\n\t\t\t\t\t<ion-checkbox\n\t\t\t\t\t\tcolor=\"secondary\"\n\t\t\t\t\t\t(ionChange)=\"toggleCoordinates()\"\n\t\t\t\t\t></ion-checkbox>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\n\t\t\t<ion-col class=\"col-3\" [hidden]=\"!showCoordinates\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LATITUDE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"number\"\n\t\t\t\t\t\tformControlName=\"lat\"\n\t\t\t\t\t\t(change)=\"textInputChange(lat, 'lat')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t\t<ion-col class=\"col-3\" [hidden]=\"!showCoordinates\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label position=\"floating\">{{\n\t\t\t\t\t\t'CARRIERS_VIEW.ADD_CARRIER.LONGITUDE' | translate\n\t\t\t\t\t}}</ion-label>\n\t\t\t\t\t<ion-input\n\t\t\t\t\t\ttype=\"text\"\n\t\t\t\t\t\tformControlName=\"lng\"\n\t\t\t\t\t\t(change)=\"textInputChange(lng, 'lng')\"\n\t\t\t\t\t></ion-input>\n\t\t\t\t</ion-item>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</form>\n\t<ion-grid class=\"buttons-back-done\">\n\t\t<ion-row>\n\t\t\t<ion-col text-center>\n\t\t\t\t<ion-button color=\"light\" class=\"mr-2\" (click)=\"toStep2()\">\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.BACK' | translate }}\n\t\t\t\t</ion-button>\n\n\t\t\t\t<ion-button\n\t\t\t\t\tcolor=\"dark\"\n\t\t\t\t\t(click)=\"clickComplete()\"\n\t\t\t\t\t[disabled]=\"!form.valid\"\n\t\t\t\t>\n\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIER.DONE' | translate }}\n\t\t\t\t</ion-button>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\t<ion-grid class=\"google-map-frame\">\n\t\t<ion-row>\n\t\t\t<ion-col>\n\t\t\t\t<div class=\"map-wrapper\">\n\t\t\t\t\t<google-map\n\t\t\t\t\t\t[mapCoordEvent]=\"mapCoordEmitter\"\n\t\t\t\t\t\t[mapGeometryEvent]=\"mapGeometryEmitter\"\n\t\t\t\t\t>\n\t\t\t\t\t</google-map>\n\t\t\t\t</div>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-track-popup/carrier-track-popup.html":
/*!****************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-track-popup/carrier-track-popup.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div #gmap id=\"mapDiv\" class=\"map\"></div>\n<div class=\"sidebar\">\n\t<i (click)=\"cancelModal()\" class=\"fa fa-close close-btn\"></i>\n\t<h2 *ngIf=\"!user\">Carrier Tracking</h2>\n\t<h2 *ngIf=\"user\">Delivery Tracking</h2>\n\t<ul *ngIf=\"carrier\">\n\t\t<div>\n\t\t\t<img [src]=\"carrierIcon\" />\n\t\t\t<h4>Carrier</h4>\n\t\t</div>\n\t\t<h3>{{ carrier.fullName }}</h3>\n\t\t<small>@{{ carrier.username }} </small>\n\t\t<li><i class=\"fa fa-phone\"></i> {{ carrier.phone}}</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-pin\"></i> {{ carrier.geoLocation.streetAddress\n\t\t\t}}\n\t\t</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t{{ carrier.geoLocation.loc.coordinates[0].toFixed(6) + ', ' +\n\t\t\tcarrier.geoLocation.loc.coordinates[1].toFixed(6) }}\n\t\t</li>\n\t\t<li>Delivery count: {{ carrier.numberOfDeliveries }}</li>\n\t</ul>\n\t<ul *ngIf=\"warehouse\">\n\t\t<div>\n\t\t\t<img [src]=\"storeIcon\" />\n\t\t\t<h4>Store</h4>\n\t\t</div>\n\t\t<h3>{{ warehouse.name }}</h3>\n\t\t<li><i class=\"fa fa-envelope\"></i> {{ warehouse.contactEmail }}</li>\n\t\t<li><i class=\"fa fa-phone\"></i> {{ warehouse.contactPhone }}</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-pin\"></i> {{ warehouse.geoLocation.streetAddress\n\t\t\t}}\n\t\t</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t{{ warehouse.geoLocation.loc.coordinates[0].toFixed(6) + ', ' +\n\t\t\twarehouse.geoLocation.loc.coordinates[1].toFixed(6) }}\n\t\t</li>\n\t</ul>\n\t<ul *ngIf=\"user\">\n\t\t<div>\n\t\t\t<img [src]=\"userIcon\" />\n\t\t\t<h4>Customer</h4>\n\t\t</div>\n\t\t<h3>{{ user.firstName + ' ' + user.lastName }}</h3>\n\t\t<li><i class=\"fa fa-envelope\"></i> {{ user.email }}</li>\n\t\t<li><i class=\"fa fa-phone\"></i> {{ user.phone }}</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-pin\"></i> {{ user.geoLocation.streetAddress }}\n\t\t</li>\n\t\t<li>\n\t\t\t<i class=\"fa fa-map-marker\"></i>\n\t\t\t{{ user.geoLocation.loc.coordinates[0].toFixed(6) + ', ' +\n\t\t\tuser.geoLocation.loc.coordinates[1].toFixed(6) }}\n\t\t</li>\n\t</ul>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carriers.html":
/*!*********************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carriers.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-carriers\">\n\t<div id=\"header\" class=\"bar bar-header bar-brand\">\n\t\t<h1 class=\"title\">{{ 'CARRIERS_VIEW.CARRIERS' | translate }}</h1>\n\t\t<div class=\"buttons buttons-left header-item\">\n\t\t\t<span class=\"left-buttons\">\n\t\t\t\t<div class=\"waves-effect waves-classic\">\n\t\t\t\t\t<ion-menu-toggle class=\"button-icon\">\n\t\t\t\t\t\t<ion-icon ios=\"ios-menu\" md=\"md-menu\"></ion-icon>\n\t\t\t\t\t</ion-menu-toggle>\n\t\t\t\t</div>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"right-container\">\n\t\t\t<div class=\"allowOverflow\">\n\t\t\t\t<div class=\"button-bar\">\n\t\t\t\t\t<a class=\"button button-brand\" (click)=\"openAddCarriers()\">\n\t\t\t\t\t\t<span class=\"button-text\">\n\t\t\t\t\t\t\t{{ 'CARRIERS_VIEW.ADD_CARRIERS' | translate }}</span\n\t\t\t\t\t\t>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"allowOverflow track-btn\">\n\t\t\t\t<div class=\"button-bar\">\n\t\t\t\t\t<a class=\"button button-brand\" (click)=\"goToTrackPage()\">\n\t\t\t\t\t\t<span class=\"button-text\">\n\t\t\t\t\t\t\t{{ 'CARRIERS_VIEW.TRACK_CARRIER' | translate\n\t\t\t\t\t\t\t}}</span\n\t\t\t\t\t\t>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div id=\"contentWrapper\" scroll=\"false\">\n\t\t<ng2-smart-table\n\t\t\t*ngIf=\"!showNoDeliveryIcon\"\n\t\t\tclass=\"smart-table\"\n\t\t\t[settings]=\"settingsSmartTable\"\n\t\t\t[source]=\"sourceSmartTable\"\n\t\t\t(create)=\"openAddCarriers()\"\n\t\t\t(edit)=\"editCarrier($event)\"\n\t\t\t(delete)=\"deleteCarrier($event)\"\n\t\t\t(custom)=\"trackCarrier($event)\"\n\t\t>\n\t\t</ng2-smart-table>\n\n\t\t<div *ngIf=\"showNoDeliveryIcon\">\n\t\t\t<div class=\"no-orders-message\">\n\t\t\t\t<i class=\"fa fa-truck\"></i>\n\n\t\t\t\t<h2>{{ 'CARRIERS_VIEW.NO_CARRIERS' | translate }}</h2>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/components/carrier-deliveries-table/customer.ts":
/*!*************************************************************!*\
  !*** ./src/components/carrier-deliveries-table/customer.ts ***!
  \*************************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomerComponent = (function () {
    function CustomerComponent() {
    }
    CustomerComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    CustomerComponent.prototype.getUserName = function (order) {
        var user = order.user;
        if (user.firstName) {
            if (user.lastName) {
                return user.firstName + ' ' + user.lastName;
            }
            return user.firstName;
        }
    };
    CustomerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<span class=\"nameAddress\">\n\t\t\t<strong *ngIf=\"getUserName(order)\">{{ getUserName(order) }}</strong>\n\t\t\t<div class=\"address\">{{ order.user.fullAddress }}</div>\n\t\t</span>\n\t",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/components/carrier-deliveries-table/delivery.ts":
/*!*************************************************************!*\
  !*** ./src/components/carrier-deliveries-table/delivery.ts ***!
  \*************************************************************/
/*! exports provided: DeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryComponent", function() { return DeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryComponent = (function () {
    function DeliveryComponent() {
    }
    DeliveryComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    DeliveryComponent.prototype.getTotalDeliveryTime = function (order) {
        var start = order.createdAt;
        var end = new Date(order.deliveryTime);
        var delta = Math.abs(start.getTime() - end.getTime()) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        var secondsStr = seconds.toString();
        secondsStr = secondsStr.substring(0, secondsStr.indexOf('.'));
        var h = '0' + hours;
        h = h.substr(-2);
        var min = '0' + minutes;
        min = min.substr(-2);
        var sec = '0' + secondsStr;
        sec = sec.substr(-2);
        return (days !== 0 ? days + 'days ' : '') + "\n            " + hours + " : " + min + " : " + sec;
    };
    DeliveryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<span>\n\t\t\t<div>{{ order._createdAt | date: 'short' }}</div>\n\t\t\t<div>{{ getTotalDeliveryTime(order) }}</div>\n\t\t</span>\n\t",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], DeliveryComponent);
    return DeliveryComponent;
}());



/***/ }),

/***/ "./src/components/carrier-deliveries-table/status.ts":
/*!***********************************************************!*\
  !*** ./src/components/carrier-deliveries-table/status.ts ***!
  \***********************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<span>\n\t\t\t<div class=\"space\">\n\t\t\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.COMPLETED' | translate\n\t\t\t\t}}{{ order.isCompleted ? ' \u2714' : ' \u2718' }}\n\t\t\t</div>\n\t\t\t<div class=\"space\">\n\t\t\t\t{{ 'CARRIERS_VIEW.DELIVERIES_POP_UP.PAID' | translate\n\t\t\t\t}}{{ order.isPaid ? ' \u2714' : ' \u2718' }}\n\t\t\t</div>\n\t\t</span>\n\t",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/components/carrier-deliveries-table/warehouse.ts":
/*!**************************************************************!*\
  !*** ./src/components/carrier-deliveries-table/warehouse.ts ***!
  \**************************************************************/
/*! exports provided: WarehouseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarehouseComponent", function() { return WarehouseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WarehouseComponent = (function () {
    function WarehouseComponent() {
    }
    WarehouseComponent.prototype.ngOnInit = function () {
        this.order = this.rowData.order;
    };
    WarehouseComponent.prototype.getStoreName = function (order) {
        var store = order.warehouse;
        if (store)
            return store.name;
        return null;
    };
    WarehouseComponent.prototype.getStoreFullAddress = function (order) {
        var store = order.warehouse;
        var geoLocation = store.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    WarehouseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<span class=\"storeAddress\">\n\t\t\t<strong *ngIf=\"getStoreName(order)\">{{\n\t\t\t\tgetStoreName(order)\n\t\t\t}}</strong>\n\t\t\t<div class=\"address\">{{ getStoreFullAddress(order) }}</div>\n\t\t</span>\n\t",
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], WarehouseComponent);
    return WarehouseComponent;
}());



/***/ }),

/***/ "./src/components/carriers-table/addresses.ts":
/*!****************************************************!*\
  !*** ./src/components/carriers-table/addresses.ts ***!
  \****************************************************/
/*! exports provided: AddressesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressesComponent", function() { return AddressesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var pages_carriers_carrier_track_popup_carrier_track_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/+carriers/carrier-track-popup/carrier-track-popup */ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.ts");




var AddressesComponent = (function () {
    function AddressesComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    AddressesComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    AddressesComponent.prototype.showAddress = function (carrier) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: pages_carriers_carrier_track_popup_carrier_track_popup__WEBPACK_IMPORTED_MODULE_3__["CarrierTrackPopup"],
                            componentProps: { carrier: carrier },
                            cssClass: 'carrier-track-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    AddressesComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    AddressesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<span class=\"underlined\" (click)=\"showAddress(carrier)\">\n\t\t\t{{ carrier.geoLocation.city }}\n\t\t\t<span *ngIf=\"carrier.geoLocation.postcode\">{{\n\t\t\t\t'(' + carrier.geoLocation.postcode + ')'\n\t\t\t}}</span>\n\t\t</span>\n\t",
            styles: [""]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], AddressesComponent);
    return AddressesComponent;
}());



/***/ }),

/***/ "./src/components/carriers-table/deliveries.ts":
/*!*****************************************************!*\
  !*** ./src/components/carriers-table/deliveries.ts ***!
  \*****************************************************/
/*! exports provided: DeliveriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveriesComponent", function() { return DeliveriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var pages_carriers_carrier_deliveries_popup_carrier_deliveries_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup */ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.ts");




var DeliveriesComponent = (function () {
    function DeliveriesComponent(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    DeliveriesComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    DeliveriesComponent.prototype.showDeliveriesInfo = function (carrier) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: pages_carriers_carrier_deliveries_popup_carrier_deliveries_popup__WEBPACK_IMPORTED_MODULE_3__["CarrierDeliveriesPopupPage"],
                            componentProps: { carrier: carrier },
                            cssClass: 'carrier-deliveries',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    DeliveriesComponent.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    DeliveriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<div class=\"text-center\">\n\t\t\t<ion-icon\n\t\t\t\tios=\"ios-information-circle\"\n\t\t\t\tmd=\"md-information-circle\"\n\t\t\t></ion-icon>\n\t\t</div>\n\t\t<div class=\"text-center\">\n\t\t\t<span class=\"underlined\" (click)=\"showDeliveriesInfo(carrier)\">\n\t\t\t\t{{\n\t\t\t\t\tcarrier.deliveriesCountToday +\n\t\t\t\t\t\t'/' +\n\t\t\t\t\t\tcarrier.numberOfDeliveries\n\t\t\t\t}}\n\t\t\t</span>\n\t\t</div>\n\t",
            styles: [""]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], DeliveriesComponent);
    return DeliveriesComponent;
}());



/***/ }),

/***/ "./src/components/carriers-table/image.scss":
/*!**************************************************!*\
  !*** ./src/components/carriers-table/image.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image-component img {\n  width: 64px;\n  height: 64px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9jb21wb25lbnRzL2NhcnJpZXJzLXRhYmxlL2ltYWdlLnNjc3MiLCJzcmMvY29tcG9uZW50cy9jYXJyaWVycy10YWJsZS9pbWFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsV0FBVztFQUNYLFlBQVk7QUNBZCIsImZpbGUiOiJzcmMvY29tcG9uZW50cy9jYXJyaWVycy10YWJsZS9pbWFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbXBvbmVudCB7XG5cdGltZyB7XG5cdFx0d2lkdGg6IDY0cHg7XG5cdFx0aGVpZ2h0OiA2NHB4O1xuXHR9XG59XG4iLCIuaW1hZ2UtY29tcG9uZW50IGltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/components/carriers-table/image.ts":
/*!************************************************!*\
  !*** ./src/components/carriers-table/image.ts ***!
  \************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/store.service */ "./src/services/store.service.ts");



var ImageComponent = (function () {
    function ImageComponent(store) {
        this.store = store;
    }
    ImageComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    ImageComponent.ctorParameters = function () { return [
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    ImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-image-view',
            template: "\n\t\t<span class=\"image-component\">\n\t\t\t<img *ngIf=\"carrier?.logo\" src=\"{{ carrier.logo }}\" />\n\t\t</span>\n\t",
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./image.scss */ "./src/components/carriers-table/image.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_store_service__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ImageComponent);
    return ImageComponent;
}());



/***/ }),

/***/ "./src/components/carriers-table/status.ts":
/*!*************************************************!*\
  !*** ./src/components/carriers-table/status.ts ***!
  \*************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StatusComponent = (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    StatusComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<div class=\"text-center\" [ngSwitch]=\"carrier.status\">\n\t\t\t<span class=\"work\" *ngSwitchCase=\"0\">{{\n\t\t\t\t'CARRIERS_VIEW.WORKING' | translate\n\t\t\t}}</span>\n\t\t\t<span class=\"notWork\" *ngSwitchCase=\"1\">{{\n\t\t\t\t'CARRIERS_VIEW.NOT_WORKING' | translate\n\t\t\t}}</span>\n\t\t\t<span class=\"notWork\" *ngSwitchCase=\"2\">{{\n\t\t\t\t'CARRIERS_VIEW.BLOCKED' | translate\n\t\t\t}}</span>\n\t\t\t<div></div>\n\t\t</div>\n\t",
            styles: [""]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-carriers-popup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: AddCarriersPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarriersPopupPageModule", function() { return AddCarriersPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_carriers_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-carriers-popup */ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.ts");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-wizard */ "../../node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _add_choice_add_choice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-choice/add-choice */ "./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.ts");
/* harmony import */ var _carriers_catalog_carriers_catalog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carriers-catalog/carriers-catalog */ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _carriers_catalog_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carriers-catalog/address.component */ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/address.component.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_new_carrier_add_new_carrier_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-new-carrier/add-new-carrier.module */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");













var COMPONENTS = [
    _add_carriers_popup__WEBPACK_IMPORTED_MODULE_2__["AddCarriersPopupPage"],
    _add_choice_add_choice__WEBPACK_IMPORTED_MODULE_4__["AddChoiceComponent"],
    _carriers_catalog_carriers_catalog__WEBPACK_IMPORTED_MODULE_5__["CarriersCatalogComponent"],
    _carriers_catalog_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"],
];
var AddCarriersPopupPageModule = (function () {
    function AddCarriersPopupPageModule() {
    }
    AddCarriersPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENTS,
            entryComponents: COMPONENTS,
            exports: COMPONENTS,
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                angular2_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizardModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_6__["Ng2SmartTableModule"],
                _add_new_carrier_add_new_carrier_module__WEBPACK_IMPORTED_MODULE_9__["AddNewCarriersPopupPageModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forChild(),
            ],
        })
    ], AddCarriersPopupPageModule);
    return AddCarriersPopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.scss":
/*!************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-carriers-popup.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".app-keyboard-open .app-hide-on-keyboard-open {\n  display: none;\n}\n\nhtml,\nbody {\n  overflow: visible !important;\n  background-color: #1f212a !important;\n}\n\n.menu-open .side-menu-content-ltr {\n  -webkit-transform: translate3d(250px, 0px, 0px) !important;\n}\n\n.menu-open .side-menu-content-rtl {\n  -webkit-transform: translate3d(-250px, 0px, 0px) !important;\n}\n\n.loading-container .loading {\n  background-color: transparent;\n}\n\n.loading-container .loading .spinner {\n  fill: #fff;\n  stroke: #fff;\n}\n\n.loading-container .loading .spinner svg {\n  width: 40px;\n  height: 40px;\n}\n\n.bright-vie .loading-container .loading .spinner {\n  fill: #2a2c39;\n  stroke: #2a2c39;\n}\n\n.swiper-slide img {\n  width: 100%;\n}\n\n.bar.bar-brand {\n  border-bottom: 2px solid #262733;\n  background: #2a2c39 none;\n  color: white !important;\n}\n\n.bar.bar-brand .title {\n  color: white;\n}\n\n.bar.bar-brand .button-icon mr-1 {\n  color: white;\n}\n\n.brand-link {\n  color: #2a2c39;\n}\n\n.brand-link:active {\n  color: #353748;\n}\n\n.everbie-input {\n  height: 57px;\n  width: 100%;\n  font-size: 16px;\n  line-height: 20px;\n  border: solid #5c5f73 1px;\n  color: #fff;\n  background-color: inherit;\n  border-radius: 8px;\n  padding: 20px;\n  text-align: center;\n  -webkit-appearance: none;\n}\n\n.everbie-input::-webkit-input-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input::-moz-placeholder {\n  color: #6d6f80;\n}\n\n.everbie-input:-ms-input-placeholder {\n  color: #6d6f80;\n}\n\n.button.button-brand, .button-brand.everbie-button {\n  background-color: #2a2c39;\n  border-color: #242530;\n  color: #fff;\n}\n\n.button.button-brand.active, .button-brand.active.everbie-button, .button.button-brand.activated, .button-brand.activated.everbie-button {\n  background-color: #282a36;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-dark-brand, .button-dark-brand.everbie-button {\n  background-color: #1f212a;\n  border-color: #191a22;\n  color: #fff;\n}\n\n.button.button-dark-brand.active, .button-dark-brand.active.everbie-button, .button.button-dark-brand.activated, .button-dark-brand.activated.everbie-button {\n  background-color: #1d1e27;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-brand-lighted, .button-brand-lighted.everbie-button {\n  background-color: #353748;\n  border-color: #2f303f;\n  color: #fff;\n}\n\n.button.button-brand-lighted.active, .button-brand-lighted.active.everbie-button, .button.button-brand-lighted.activated, .button-brand-lighted.activated.everbie-button {\n  background-color: #333545;\n  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n\n.button.button-assertive.active, .active.everbie-button, .button.button-assertive.activated, .activated.everbie-button {\n  border-color: #aa403b !important;\n}\n\n.button.button-balanced.active, .button-balanced.active.everbie-button, .button.button-balanced.activated, .button-balanced.activated.everbie-button {\n  border-color: #2fc159 !important;\n}\n\n.button.button-balanced, .button-balanced.everbie-button {\n  background-color: #2db955;\n}\n\n.everbie-button {\n  border-radius: 8px !important;\n  font-size: 20px;\n  padding: 10px 16px;\n  margin-bottom: 0;\n  line-height: 34px;\n  background-color: #ce4843;\n}\n\n.bottom-0 {\n  position: absolute;\n  bottom: 0;\n}\n\n.no-padding {\n  padding: 0;\n}\n\n.no-padding-right {\n  padding-right: 0;\n}\n\n.no-padding-left {\n  padding-left: 0;\n}\n\n.no-padding-top {\n  padding-top: 0;\n}\n\n.no-padding-bottom {\n  padding-bottom: 0;\n}\n\n.text-align-right {\n  text-align: right;\n}\n\n.text-align-center {\n  text-align: center;\n}\n\n.text-align-left {\n  text-align: left;\n}\n\n.col-100 {\n  width: 100%;\n}\n\n.display-block {\n  display: block;\n}\n\n.header-bar-big-title {\n  font-size: 22px !important;\n  text-align: center !important;\n}\n\n.button-bar-right-container {\n  width: 280px;\n  margin-left: auto;\n}\n\n.pull-right {\n  margin-left: auto;\n}\n\n.plus-navbar-button::before {\n  font-size: 24px !important;\n}\n\n.border-color-brand {\n  border-color: #2a2c39;\n}\n\n.flip {\n  transform: scale(-1, 1);\n}\n\n.transition-on-color-change {\n  transition: background-color 0.3s, border-color 0.3s, color 0.3s;\n}\n\n.horizontal-space-10 {\n  width: 10px;\n}\n\n.margin-top-bottom {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n\n.maintenance-message-container {\n  color: white;\n  padding: 20px;\n  background: #2a2c39;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  height: 100%;\n}\n\n.page-add-carriers-popup {\n  background-color: #fff;\n  display: flex !important;\n  flex-direction: column;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL25vZGVfbW9kdWxlcy9AZXZlci1wbGF0Zm9ybS9jb21tb24tYW5ndWxhci9zcmMvc2Nzcy9ldmVyYmllLmNvbW1vbi5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLWNhcnJpZXJzLXBvcHVwLnNjc3MiLCIvaG9tZS9pdGV4cGVydC9Eb2N1bWVudHMvRG9sY2VHcm9jZXJ5L3BhY2thZ2VzL21lcmNoYW50LXRhYmxldC1pb25pYy9zcmMvcGFnZXMvK2NhcnJpZXJzL2FkZC1jYXJyaWVycy1wb3B1cC9hZGQtY2FycmllcnMtcG9wdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUVFLGFBQWE7QUNmZjs7QUQyRkE7O0VBRUMsNEJBQTRCO0VBQzVCLG9DQUEwQztBQ3hGM0M7O0FEK0ZBO0VBRUUsMERBQTBEO0FDN0Y1RDs7QUQyRkE7RUFNRSwyREFBMkQ7QUM3RjdEOztBRGlHQTtFQUNDLDZCQUE2QjtBQzlGOUI7O0FENkZBO0VBSUUsVUFBVTtFQUNWLFlBQVk7QUM3RmQ7O0FEd0ZBO0VBT0csV0FBVztFQUNYLFlBQVk7QUMzRmY7O0FEZ0dBO0VBQ0MsYUEzSGM7RUE0SGQsZUE1SGM7QUMrQmY7O0FEZ0dBO0VBRUUsV0FBVztBQzlGYjs7QURzR0E7RUFFRSxnQ0FBMkM7RUFDM0Msd0JBQXVCO0VBQ3ZCLHVCQUF1QjtBQ3BHekI7O0FEZ0dBO0VBTUcsWUFBWTtBQ2xHZjs7QUQ0RkE7RUFTRyxZQUFZO0FDakdmOztBRDBHQTtFQUNDLGNBNUpjO0FDcURmOztBRHNHQTtFQUdFLGNBN0pxQjtBQ3dEdkI7O0FENkdBO0VBQ0MsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQzFHekI7O0FER0M7RUFDQyxjQXdHMkI7QUN4RzdCOztBREVDO0VBQ0MsY0FxRzJCO0FDcEc3Qjs7QURDQztFQUNDLGNBa0cyQjtBQ2hHN0I7O0FEdUdBO0VBQ0MseUJBM0xjO0VBNExkLHFCQUFnQztFQUNoQyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUFvQztFQUNwQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQXBNZ0M7RUFxTWhDLHFCQUF1QztFQUN2QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUEyQztFQUMzQyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUNDLHlCQWhOc0I7RUFpTnRCLHFCQUF3QztFQUN4QyxXQUFXO0FDcEdaOztBRGlHQTtFQU1FLHlCQUE0QztFQUM1Qyw4Q0FBOEM7QUNuR2hEOztBRHVHQTtFQUdFLGdDQUEwQztBQ3RHNUM7O0FEMEdBO0VBR0UsZ0NBQThDO0FDekdoRDs7QUQ2R0E7RUFDQyx5QkFBdUM7QUMxR3hDOztBRDZHQTtFQU1DLDZCQUE2QjtFQUU3QixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFFakIseUJBQXlCO0FDakgxQjs7QUR3SEE7RUFDQyxrQkFBa0I7RUFDbEIsU0FBUztBQ3JIVjs7QUR3SEE7RUFDQyxVQUFVO0FDckhYOztBRHdIQTtFQUNDLGdCQUFnQjtBQ3JIakI7O0FEd0hBO0VBQ0MsZUFBZTtBQ3JIaEI7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUNDLGlCQUFpQjtBQ3JIbEI7O0FEd0hBO0VBQ0Msa0JBQWtCO0FDckhuQjs7QUR3SEE7RUFDQyxnQkFBZ0I7QUNySGpCOztBRHdIQTtFQUNDLFdBQVc7QUNySFo7O0FEd0hBO0VBQ0MsY0FBYztBQ3JIZjs7QUR3SEE7RUFDQywwQkFBMEI7RUFDMUIsNkJBQTZCO0FDckg5Qjs7QUR3SEE7RUFDQyxZQUFZO0VBQ1osaUJBQWlCO0FDckhsQjs7QUR3SEE7RUFDQyxpQkFBaUI7QUNySGxCOztBRHdIQTtFQUVFLDBCQUEwQjtBQ3RINUI7O0FEMEhBO0VBQ0MscUJBblVjO0FDNE1mOztBRDBIQTtFQXRTQyx1QkF1UytCO0FDbkhoQzs7QURzSEE7RUFNQyxnRUFMWTtBQ2hIYjs7QUR3SEE7RUFDQyxXQUFXO0FDckhaOztBRHdIQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7QUNySG5COztBRHdIQTtFQUNDLFlBQVk7RUFDWixhQUFhO0VBRWIsbUJBaFdjO0VBa1dkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixZQUFZO0FDdkhiOztBQ2pQQTtFQUNDLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBRG9QbkIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLWNhcnJpZXJzLXBvcHVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGF0aCBmb3Igb3VyIGlvbmljb25zIGZvbnQgZmlsZXMsIHJlbGF0aXZlIHRvIHRoZSBidWlsdCBDU1MgaW4gd3d3L2Nzc1xuJGlvbmljb25zLWZvbnQtcGF0aDogJy4uLy4uL2xpYi9pb25pYy9yZWxlYXNlL2ZvbnRzJyAhZGVmYXVsdDtcbiRmYS1mb250LXBhdGg6ICcuLi8uLi9saWIvZm9udC1hd2Vzb21lL2ZvbnRzJyAhZGVmYXVsdDtcblxuJGJyYW5kOiAjMmEyYzM5O1xuJGJyYW5kLWxpZ2h0ZWQ6ICMzNTM3NDg7XG4kYnJhbmQtZGFya2VuOiBkYXJrZW4oJGJyYW5kLCA1JSk7IC8vICMxZjIxMmFcblxuJGFzc2VydGl2ZTogI2JkNDc0MjtcbiRhc3NlcnRpdmUtbGlnaHRlZDogI2NlNDg0MztcbiRhc3NlcnRpdmUtZGFya2VuOiBkYXJrZW4oJGFzc2VydGl2ZSwgNSUpO1xuXG4kYmFsYW5jZWQ6ICMzM2NkNWY7XG4kYmFsYW5jZWQtbGlnaHRlZDogIzQ3ZDI2ZjtcblxuLmFwcC1rZXlib2FyZC1vcGVuIHtcblx0LmFwcC1oaWRlLW9uLWtleWJvYXJkLW9wZW4ge1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vXG4vLy8gTWl4aW5zIC8vLy9cbi8vLy8vLy8vLy8vLy8vL1xuXG5AbWl4aW4gY2FsYygkcHJvcGVydHksICRleHByZXNzaW9uLi4uKSB7XG5cdCN7JHByb3BlcnR5fTogLW1vei1jYWxjKCN7JGV4cHJlc3Npb259KTtcblx0I3skcHJvcGVydHl9OiAtd2Via2l0LWNhbGMoI3skZXhwcmVzc2lvbn0pO1xuXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3skZXhwcmVzc2lvbn0pO1xufVxuXG5AbWl4aW4gdHJhbnNmb3JtKCR0cmFuc2Zvcm1zKSB7XG5cdC1tb3otdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW8tdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0LW1zLXRyYW5zZm9ybTogJHRyYW5zZm9ybXM7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcblx0dHJhbnNmb3JtOiAkdHJhbnNmb3Jtcztcbn1cblxuQG1peGluIHZlcnRpY2FsLWFsaWduKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0dG9wOiA1MCU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtaXhpbiBjZW50ZXIoJHBvc2l0aW9uOiByZWxhdGl2ZSkge1xuXHRwb3NpdGlvbjogJHBvc2l0aW9uO1xuXHR0b3A6IDUwJTtcblx0bGVmdDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG5AbWl4aW4gdG9wLWNlbnRlcigkcG9zaXRpb246IHJlbGF0aXZlKSB7XG5cdHBvc2l0aW9uOiAkcG9zaXRpb247XG5cdGxlZnQ6IDUwJTtcblx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHR0b3A6IDA7XG59XG5cbkBtaXhpbiBib3R0b20tY2VudGVyKCRwb3NpdGlvbjogcmVsYXRpdmUpIHtcblx0cG9zaXRpb246ICRwb3NpdGlvbjtcblx0bGVmdDogNTAlO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xuXHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XG5cdGJvdHRvbTogMDtcbn1cblxuQG1peGluIGNhbGMoJHByb3BlcnR5LCAkZXhwcmVzc2lvbikge1xuXHQjeyRwcm9wZXJ0eX06IC13ZWJraXQtY2FsYygjeyRleHByZXNzaW9ufSk7XG5cdCN7JHByb3BlcnR5fTogY2FsYygjeyRleHByZXNzaW9ufSk7XG59XG5cbkBtaXhpbiBwbGFjZWhvbGRlcigkY29sb3IpIHtcblx0Jjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdFx0Y29sb3I6ICRjb2xvcjtcblx0fVxuXHQmOjotbW96LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGNvbG9yO1xuXHR9XG5cdCY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcblx0XHRjb2xvcjogJGNvbG9yO1xuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBOb3JtYWxpemUgSHRtbCBBbmQgQm9keSAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaHRtbCxcbmJvZHkge1xuXHRvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtZGFya2VuICFpbXBvcnRhbnQ7XG59XG5cbi8vLy8vLy8vLy8vLy8vL1xuLy8gSW9uaWMgQWRkIC8vXG4vLy8vLy8vLy8vLy8vLy9cblxuLm1lbnUtb3BlbiB7XG5cdC5zaWRlLW1lbnUtY29udGVudC1sdHIge1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNTBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuc2lkZS1tZW51LWNvbnRlbnQtcnRsIHtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcblx0fVxufVxuXG4ubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuXHQuc3Bpbm5lciB7XG5cdFx0ZmlsbDogI2ZmZjtcblx0XHRzdHJva2U6ICNmZmY7XG5cdFx0c3ZnIHtcblx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0aGVpZ2h0OiA0MHB4O1xuXHRcdH1cblx0fVxufVxuXG4uYnJpZ2h0LXZpZSAubG9hZGluZy1jb250YWluZXIgLmxvYWRpbmcgLnNwaW5uZXIge1xuXHRmaWxsOiAkYnJhbmQ7XG5cdHN0cm9rZTogJGJyYW5kO1xufVxuXG4uc3dpcGVyLXNsaWRlIHtcblx0aW1nIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBCYXIgU3R5bGVzIC8vL1xuLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5iYXIge1xuXHQmLmJhci1icmFuZCB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGRhcmtlbigkYnJhbmQsIDIlKTtcblx0XHRiYWNrZ3JvdW5kOiAkYnJhbmQgbm9uZTtcblx0XHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0XHQudGl0bGUge1xuXHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdH1cblx0XHQuYnV0dG9uLWljb24gbXItMSB7XG5cdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0fVxuXHR9XG59XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vLyBDdXN0b20gbGluayAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uYnJhbmQtbGluayB7XG5cdGNvbG9yOiAkYnJhbmQ7XG5cdCY6YWN0aXZlIHtcblx0XHRjb2xvcjogJGJyYW5kLWxpZ2h0ZWQ7XG5cdH1cbn1cblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gRXZlcmJpZSBJbnB1dCAvLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4uZXZlcmJpZS1pbnB1dCB7XG5cdGhlaWdodDogNTdweDtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdGJvcmRlcjogc29saWQgIzVjNWY3MyAxcHg7XG5cdGNvbG9yOiAjZmZmO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuXHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG5cdEBpbmNsdWRlIHBsYWNlaG9sZGVyKCM2ZDZmODApO1xufVxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLy8gQWRkIEJ1dHRvbiBTdHlsZXMgLy8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbi5idXR0b24uYnV0dG9uLWJyYW5kIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJyYW5kO1xuXHRib3JkZXItY29sb3I6IGRhcmtlbigkYnJhbmQsIDMlKTtcblx0Y29sb3I6ICNmZmY7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRicmFuZCwgMSUpO1xuXHRcdGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdH1cbn1cblxuLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICRicmFuZC1kYXJrZW47XG5cdGJvcmRlci1jb2xvcjogZGFya2VuKCRicmFuZC1kYXJrZW4sIDMlKTtcblx0Y29sb3I6ICNmZmY7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRicmFuZC1kYXJrZW4sIDElKTtcblx0XHRib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHR9XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLWxpZ2h0ZWQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYnJhbmQtbGlnaHRlZDtcblx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJyYW5kLWxpZ2h0ZWQsIDMlKTtcblx0Y29sb3I6ICNmZmY7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRicmFuZC1saWdodGVkLCAxJSk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1hc3NlcnRpdmUge1xuXHQmLmFjdGl2ZSxcblx0Ji5hY3RpdmF0ZWQge1xuXHRcdGJvcmRlci1jb2xvcjogJGFzc2VydGl2ZS1kYXJrZW4gIWltcG9ydGFudDtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZCB7XG5cdCYuYWN0aXZlLFxuXHQmLmFjdGl2YXRlZCB7XG5cdFx0Ym9yZGVyLWNvbG9yOiBkYXJrZW4oJGJhbGFuY2VkLCAzJSkgIWltcG9ydGFudDtcblx0fVxufVxuXG4uYnV0dG9uLmJ1dHRvbi1iYWxhbmNlZCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFsYW5jZWQsIDUlKTtcbn1cblxuLmV2ZXJiaWUtYnV0dG9uIHtcblx0Ly8gQGV4dGVuZCAud2F2ZXMtZWZmZWN0O1xuXHQvLyBAZXh0ZW5kIC53YXZlcy1jbGFzc2ljO1xuXHRAZXh0ZW5kIC5idXR0b247XG5cdEBleHRlbmQgLmJ1dHRvbi1hc3NlcnRpdmU7XG5cblx0Ym9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7XG5cblx0Zm9udC1zaXplOiAyMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDE2cHg7XG5cdG1hcmdpbi1ib3R0b206IDA7XG5cdGxpbmUtaGVpZ2h0OiAzNHB4O1xuXG5cdGJhY2tncm91bmQtY29sb3I6ICNjZTQ4NDM7XG59XG5cbi8vLy8vLy8vLy8vLy9cbi8vLyBVdGlscyAvLy9cbi8vLy8vLy8vLy8vLy9cblxuLmJvdHRvbS0wIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDA7XG59XG5cbi5uby1wYWRkaW5nIHtcblx0cGFkZGluZzogMDtcbn1cblxuLm5vLXBhZGRpbmctcmlnaHQge1xuXHRwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubm8tcGFkZGluZy1sZWZ0IHtcblx0cGFkZGluZy1sZWZ0OiAwO1xufVxuXG4ubm8tcGFkZGluZy10b3Age1xuXHRwYWRkaW5nLXRvcDogMDtcbn1cblxuLm5vLXBhZGRpbmctYm90dG9tIHtcblx0cGFkZGluZy1ib3R0b206IDA7XG59XG5cbi50ZXh0LWFsaWduLXJpZ2h0IHtcblx0dGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi50ZXh0LWFsaWduLWNlbnRlciB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtYWxpZ24tbGVmdCB7XG5cdHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5jb2wtMTAwIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5kaXNwbGF5LWJsb2NrIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5cbi5oZWFkZXItYmFyLWJpZy10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMjJweCAhaW1wb3J0YW50O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1iYXItcmlnaHQtY29udGFpbmVyIHtcblx0d2lkdGg6IDI4MHB4O1xuXHRtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnB1bGwtcmlnaHQge1xuXHRtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLnBsdXMtbmF2YmFyLWJ1dHRvbiB7XG5cdCY6OmJlZm9yZSB7XG5cdFx0Zm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn1cblxuLmJvcmRlci1jb2xvci1icmFuZCB7XG5cdGJvcmRlci1jb2xvcjogJGJyYW5kO1xufVxuXG4uZmxpcCB7XG5cdEBpbmNsdWRlIHRyYW5zZm9ybShzY2FsZSgtMSwgMSkpO1xufVxuXG4udHJhbnNpdGlvbi1vbi1jb2xvci1jaGFuZ2Uge1xuXHQkc3BlZWQ6IDAuM3M7XG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAkc3BlZWQsIGJvcmRlci1jb2xvciAkc3BlZWQsXG5cdFx0Y29sb3IgJHNwZWVkO1xuXHQtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHNwZWVkLCBib3JkZXItY29sb3IgJHNwZWVkLCBjb2xvciAkc3BlZWQ7XG5cdC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHNwZWVkLCBib3JkZXItY29sb3IgJHNwZWVkLCBjb2xvciAkc3BlZWQ7XG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgJHNwZWVkLCBib3JkZXItY29sb3IgJHNwZWVkLCBjb2xvciAkc3BlZWQ7XG59XG5cbi5ob3Jpem9udGFsLXNwYWNlLTEwIHtcblx0d2lkdGg6IDEwcHg7XG59XG5cbi5tYXJnaW4tdG9wLWJvdHRvbSB7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWFpbnRlbmFuY2UtbWVzc2FnZS1jb250YWluZXIge1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDIwcHg7XG5cblx0YmFja2dyb3VuZDogJGJyYW5kO1xuXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGhlaWdodDogMTAwJTtcbn1cbiIsIi5hcHAta2V5Ym9hcmQtb3BlbiAuYXBwLWhpZGUtb24ta2V5Ym9hcmQtb3BlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmMjEyYSAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1vcGVuIC5zaWRlLW1lbnUtY29udGVudC1sdHIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjUwcHgsIDBweCwgMHB4KSAhaW1wb3J0YW50O1xufVxuXG4ubWVudS1vcGVuIC5zaWRlLW1lbnUtY29udGVudC1ydGwge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1MHB4LCAwcHgsIDBweCkgIWltcG9ydGFudDtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciB7XG4gIGZpbGw6ICNmZmY7XG4gIHN0cm9rZTogI2ZmZjtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIC5sb2FkaW5nIC5zcGlubmVyIHN2ZyB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5icmlnaHQtdmllIC5sb2FkaW5nLWNvbnRhaW5lciAubG9hZGluZyAuc3Bpbm5lciB7XG4gIGZpbGw6ICMyYTJjMzk7XG4gIHN0cm9rZTogIzJhMmMzOTtcbn1cblxuLnN3aXBlci1zbGlkZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJhci5iYXItYnJhbmQge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI2MjczMztcbiAgYmFja2dyb3VuZDogIzJhMmMzOSBub25lO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJhci5iYXItYnJhbmQgLnRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFyLmJhci1icmFuZCAuYnV0dG9uLWljb24gbXItMSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJyYW5kLWxpbmsge1xuICBjb2xvcjogIzJhMmMzOTtcbn1cblxuLmJyYW5kLWxpbms6YWN0aXZlIHtcbiAgY29sb3I6ICMzNTM3NDg7XG59XG5cbi5ldmVyYmllLWlucHV0IHtcbiAgaGVpZ2h0OiA1N3B4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgYm9yZGVyOiBzb2xpZCAjNWM1ZjczIDFweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5ldmVyYmllLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2ZDZmODA7XG59XG5cbi5ldmVyYmllLWlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICM2ZDZmODA7XG59XG5cbi5ldmVyYmllLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjNmQ2ZjgwO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZCwgLmJ1dHRvbi1icmFuZC5ldmVyYmllLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTJjMzk7XG4gIGJvcmRlci1jb2xvcjogIzI0MjUzMDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5idXR0b24uYnV0dG9uLWJyYW5kLmFjdGl2ZSwgLmJ1dHRvbi1icmFuZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWJyYW5kLmFjdGl2YXRlZCwgLmJ1dHRvbi1icmFuZC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyYTM2O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kLCAuYnV0dG9uLWRhcmstYnJhbmQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYyMTJhO1xuICBib3JkZXItY29sb3I6ICMxOTFhMjI7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2ZSwgLmJ1dHRvbi1kYXJrLWJyYW5kLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tZGFyay1icmFuZC5hY3RpdmF0ZWQsIC5idXR0b24tZGFyay1icmFuZC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWQxZTI3O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkLCAuYnV0dG9uLWJyYW5kLWxpZ2h0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUzNzQ4O1xuICBib3JkZXItY29sb3I6ICMyZjMwM2Y7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2ZSwgLmJ1dHRvbi1icmFuZC1saWdodGVkLmFjdGl2ZS5ldmVyYmllLWJ1dHRvbiwgLmJ1dHRvbi5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmF0ZWQsIC5idXR0b24tYnJhbmQtbGlnaHRlZC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzNTQ1O1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uYnV0dG9uLmJ1dHRvbi1hc3NlcnRpdmUuYWN0aXZlLCAuYWN0aXZlLmV2ZXJiaWUtYnV0dG9uLCAuYnV0dG9uLmJ1dHRvbi1hc3NlcnRpdmUuYWN0aXZhdGVkLCAuYWN0aXZhdGVkLmV2ZXJiaWUtYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjYWE0MDNiICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24uYnV0dG9uLWJhbGFuY2VkLmFjdGl2ZSwgLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmUuZXZlcmJpZS1idXR0b24sIC5idXR0b24uYnV0dG9uLWJhbGFuY2VkLmFjdGl2YXRlZCwgLmJ1dHRvbi1iYWxhbmNlZC5hY3RpdmF0ZWQuZXZlcmJpZS1idXR0b24ge1xuICBib3JkZXItY29sb3I6ICMyZmMxNTkgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi5idXR0b24tYmFsYW5jZWQsIC5idXR0b24tYmFsYW5jZWQuZXZlcmJpZS1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmRiOTU1O1xufVxuXG4uZXZlcmJpZS1idXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2U0ODQzO1xufVxuXG4uYm90dG9tLTAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbn1cblxuLm5vLXBhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubm8tcGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLWxlZnQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uby1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4ubm8tcGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLnRleHQtYWxpZ24tcmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLnRleHQtYWxpZ24tY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC1hbGlnbi1sZWZ0IHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmNvbC0xMDAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRpc3BsYXktYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmhlYWRlci1iYXItYmlnLXRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWJhci1yaWdodC1jb250YWluZXIge1xuICB3aWR0aDogMjgwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4ucGx1cy1uYXZiYXItYnV0dG9uOjpiZWZvcmUge1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLmJvcmRlci1jb2xvci1icmFuZCB7XG4gIGJvcmRlci1jb2xvcjogIzJhMmMzOTtcbn1cblxuLmZsaXAge1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcbn1cblxuLnRyYW5zaXRpb24tb24tY29sb3ItY2hhbmdlIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MsIGJvcmRlci1jb2xvciAwLjNzLCBjb2xvciAwLjNzO1xuICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgYm9yZGVyLWNvbG9yIDAuM3MsIGNvbG9yIDAuM3M7XG59XG5cbi5ob3Jpem9udGFsLXNwYWNlLTEwIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5tYXJnaW4tdG9wLWJvdHRvbSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWFpbnRlbmFuY2UtbWVzc2FnZS1jb250YWluZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMyYTJjMzk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnBhZ2UtYWRkLWNhcnJpZXJzLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iLCJAaW1wb3J0ICd+QGV2ZXItcGxhdGZvcm0vY29tbW9uLWFuZ3VsYXIvc3JjL3Njc3MvZXZlcmJpZS5jb21tb24nO1xuXG4ucGFnZS1hZGQtY2FycmllcnMtcG9wdXAge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Ly8gb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-carriers-popup.ts ***!
  \**********************************************************************/
/*! exports provided: AddCarriersPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarriersPopupPage", function() { return AddCarriersPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_choice_add_choice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-choice/add-choice */ "./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.ts");
/* harmony import */ var _add_new_carrier_add_new_carrier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-new-carrier/add-new-carrier */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _carriers_catalog_carriers_catalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carriers-catalog/carriers-catalog */ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");












var AddCarriersPopupPage = (function () {
    function AddCarriersPopupPage(modalController, carrierRouter, warehouseRouter, store, _translateService) {
        this.modalController = modalController;
        this.carrierRouter = carrierRouter;
        this.warehouseRouter = warehouseRouter;
        this.store = store;
        this._translateService = _translateService;
        this.choicedNew = false;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    AddCarriersPopupPage.prototype.ngOnInit = function () {
        var _this = this;
        this.wizzardFromStep1.showNext = false;
        this.choice$ = this.addChoiceComponent.choice.subscribe(function (res) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.choiced = res;
                this.wizzardFrom.next();
                return [2];
            });
        }); });
    };
    AddCarriersPopupPage.prototype.buttonClickEvent = function (data) {
        var prevOrdNext = data;
        if (prevOrdNext === 'previous') {
            this.wizzardFrom.previous();
            this.choicedNew = false;
        }
    };
    AddCarriersPopupPage.prototype.completeCreateCarrier = function (data) {
        if (data === 'complete') {
            this.wizzardFrom.complete();
        }
    };
    Object.defineProperty(AddCarriersPopupPage.prototype, "wizardStepsTitle", {
        get: function () {
            var _this = this;
            var resultTitle = '';
            var step1 = function () {
                _this._translateService
                    .get('CARRIERS_VIEW.ADD_CARRIER.SELECT_HOW_TO_ADD')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this._ngDestroy$))
                    .subscribe(function (title) { return (resultTitle = title); });
                return resultTitle;
            };
            var step2 = function () {
                _this._translateService
                    .get('CARRIERS_VIEW.ADD_CARRIER.ADD')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["takeUntil"])(_this._ngDestroy$))
                    .subscribe(function (title) { return (resultTitle = title); });
                return resultTitle;
            };
            return {
                step1: step1(),
                step2: step2(),
            };
        },
        enumerable: true,
        configurable: true
    });
    AddCarriersPopupPage.prototype.ngOnDestroy = function () {
        if (this.choice$) {
            this.choice$.unsubscribe();
        }
        if (this.form$) {
            this.form$.unsubscribe();
        }
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    AddCarriersPopupPage.prototype.onStep1Next = function (choiced) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                if (choiced === 'new') {
                    this.choicedNew = true;
                }
                else if (choiced === 'existing') {
                    this.choicedNew = false;
                    this.form$ = this.carriersCatalog.hasChanges.subscribe(function (r) {
                        _this.isDone = _this.carriersCatalog.selecteCarriers.length > 0;
                    });
                }
                return [2];
            });
        });
    };
    AddCarriersPopupPage.prototype.add = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var warehouse, carrier;
            var _a;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.cancelModal();
                        return [4, this.warehouseRouter
                                .get(this.store.warehouseId)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["first"])())
                                .toPromise()];
                    case 1:
                        warehouse = _b.sent();
                        if (!(this.choiced === 'new')) return [3, 3];
                        return [4, this.carrierRouter.register({
                                carrier: this.addNewCarrierComponent.getCarrierCreateObject(),
                                password: this.addNewCarrierComponent.password.value,
                            })];
                    case 2:
                        carrier = _b.sent();
                        warehouse.hasRestrictedCarriers = true;
                        warehouse.usedCarriersIds.push(carrier.id);
                        return [3, 4];
                    case 3:
                        if (this.choiced === 'existing') {
                            warehouse.hasRestrictedCarriers = true;
                            (_a = warehouse.usedCarriersIds).push.apply(_a, this.carriersCatalog.selecteCarriers.map(function (c) { return c.id; }));
                        }
                        _b.label = 4;
                    case 4:
                        this.warehouseRouter.save(warehouse);
                        return [2];
                }
            });
        });
    };
    AddCarriersPopupPage.prototype.cancelModal = function () {
        this.modalController.dismiss();
    };
    AddCarriersPopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"] },
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseRouter"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addNewCarrier', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _add_new_carrier_add_new_carrier__WEBPACK_IMPORTED_MODULE_3__["AddNewCarrierComponent"])
    ], AddCarriersPopupPage.prototype, "addNewCarrierComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carriersCatalog', { static: false }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _carriers_catalog_carriers_catalog__WEBPACK_IMPORTED_MODULE_7__["CarriersCatalogComponent"])
    ], AddCarriersPopupPage.prototype, "carriersCatalog", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addChoice', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _add_choice_add_choice__WEBPACK_IMPORTED_MODULE_2__["AddChoiceComponent"])
    ], AddCarriersPopupPage.prototype, "addChoiceComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wizzardFrom', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizzardFrom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wizzardFromStep1', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizzardFromStep1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wizardFormStep2', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddCarriersPopupPage.prototype, "wizardFormStep2", void 0);
    AddCarriersPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-add-carriers-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-carriers-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-carriers-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-carriers-popup.scss */ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"],
            _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_4__["CarrierRouter"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_5__["WarehouseRouter"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], AddCarriersPopupPage);
    return AddCarriersPopupPage;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carriers-add-choice ion-grid,\n.carriers-add-choice ion-row,\n.carriers-add-choice ion-col {\n  background: white;\n}\n\n.carriers-add-choice .option {\n  margin-top: 20px !important;\n  position: absolute;\n  width: 200px;\n  height: 150px;\n  border: 2px solid #dadfe6;\n  margin: 0 auto;\n  position: relative;\n  text-align: center;\n  color: #2a2a2a;\n  letter-spacing: 0.4px;\n  font-weight: 500;\n  font-family: Exo;\n  transition: none;\n  cursor: default;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n  line-height: 1.25;\n  border-radius: 0.375rem;\n  padding-top: 63px;\n  font-weight: bold;\n}\n\n.carriers-add-choice .option:hover {\n  background: #dadfe6;\n}\n\n.carriers-add-choice .selected {\n  background: #dadfe6;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1jaG9pY2UvYWRkLWNob2ljZS5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLWNob2ljZS9hZGQtY2hvaWNlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUlFLGlCQUFpQjtBQ0FuQjs7QURKQTtFQVFFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztFQUdkLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBRWhCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUNGbkI7O0FENUJBO0VBcUNFLG1CQUFtQjtBQ0xyQjs7QURoQ0E7RUF5Q0UsbUJBQW1CO0FDTHJCIiwiZmlsZSI6InNyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1jaG9pY2UvYWRkLWNob2ljZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXJzLWFkZC1jaG9pY2Uge1xuXHRpb24tZ3JpZCxcblx0aW9uLXJvdyxcblx0aW9uLWNvbCB7XG5cdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdH1cblxuXHQub3B0aW9uIHtcblx0XHRtYXJnaW4tdG9wOiAyMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiAyMDBweDtcblx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNkYWRmZTY7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogIzJhMmEyYTtcblxuXHRcdC8vIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0Zm9udC1mYW1pbHk6IEV4bztcblx0XHQtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG5cdFx0dHJhbnNpdGlvbjogbm9uZTtcblx0XHRjdXJzb3I6IGRlZmF1bHQ7XG5cdFx0cGFkZGluZzogMC43NXJlbSAxLjVyZW07XG5cdFx0Zm9udC1zaXplOiAwLjlyZW07XG5cdFx0bGluZS1oZWlnaHQ6IDEuMjU7XG5cdFx0Ym9yZGVyLXJhZGl1czogMC4zNzVyZW07XG5cdFx0cGFkZGluZy10b3A6IDYzcHg7XG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdFx0c3BhbiB7XG5cdFx0XHQvLyBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4IHJnYigxODIsIDE4NCwgMTgyKSk7XG5cdFx0fVxuXHR9XG5cblx0Lm9wdGlvbjpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogI2RhZGZlNjtcblx0fVxuXG5cdC5zZWxlY3RlZCB7XG5cdFx0YmFja2dyb3VuZDogI2RhZGZlNjtcblx0fVxufVxuIiwiLmNhcnJpZXJzLWFkZC1jaG9pY2UgaW9uLWdyaWQsXG4uY2FycmllcnMtYWRkLWNob2ljZSBpb24tcm93LFxuLmNhcnJpZXJzLWFkZC1jaG9pY2UgaW9uLWNvbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uY2FycmllcnMtYWRkLWNob2ljZSAub3B0aW9uIHtcbiAgbWFyZ2luLXRvcDogMjBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhZGZlNjtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzJhMmEyYTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LWZhbWlseTogRXhvO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IG5vbmU7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gIHBhZGRpbmctdG9wOiA2M3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmNhcnJpZXJzLWFkZC1jaG9pY2UgLm9wdGlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG5cbi5jYXJyaWVycy1hZGQtY2hvaWNlIC5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkYWRmZTY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.ts ***!
  \*************************************************************************/
/*! exports provided: AddChoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChoiceComponent", function() { return AddChoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddChoiceComponent = (function () {
    function AddChoiceComponent() {
        this.choice = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddChoiceComponent.prototype.changeChoice = function (choiceType) {
        this.choiceType = choiceType === 'new' ? 2 : 1;
        this.choice.emit(choiceType);
    };
    AddChoiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-choice',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-choice.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-choice.scss */ "./src/pages/+carriers/add-carriers-popup/add-choice/add-choice.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddChoiceComponent);
    return AddChoiceComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-account-form .items-end {\n  display: flex;\n  align-items: flex-end;\n}\n\n.carrier-account-form .items-end ion-item {\n  width: 100%;\n}\n\n.carrier-account-form .items-end ion-item ion-checkbox {\n  margin: 25.5px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9hY2NvdW50L2FjY291bnQtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9hY2NvdW50L2FjY291bnQtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGFBQWE7RUFDYixxQkFBcUI7QUNBdkI7O0FESEE7RUFNRyxXQUFXO0FDQ2Q7O0FEUEE7RUFTSSxnQkFBZ0I7QUNFcEIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLW5ldy1jYXJyaWVyL2FjY291bnQvYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXItYWNjb3VudC1mb3JtIHtcblx0Lml0ZW1zLWVuZCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cblx0XHRpb24taXRlbSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblxuXHRcdFx0aW9uLWNoZWNrYm94IHtcblx0XHRcdFx0bWFyZ2luOiAyNS41cHggMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5jYXJyaWVyLWFjY291bnQtZm9ybSAuaXRlbXMtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uY2Fycmllci1hY2NvdW50LWZvcm0gLml0ZW1zLWVuZCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fycmllci1hY2NvdW50LWZvcm0gLml0ZW1zLWVuZCBpb24taXRlbSBpb24tY2hlY2tib3gge1xuICBtYXJnaW46IDI1LjVweCAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return AccountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");





var AccountFormComponent = (function () {
    function AccountFormComponent(formBuilder, translate) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.repeatPassword = this.form.get('repeatPassword');
        this.$password = this.password.valueChanges.subscribe(function (res) {
            _this.repeatPassword.setValue('');
        });
    };
    AccountFormComponent.prototype.ngOnChanges = function () { };
    AccountFormComponent.prototype.buildForm = function (formBuilder) {
        var _this = this;
        this.form = formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repeatPassword: [
                '',
                [
                    function (control) {
                        if (_this.password) {
                            return control.value === _this.password.value
                                ? null
                                : { validUrl: true };
                        }
                        else {
                            return null;
                        }
                    },
                ],
            ],
            isActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isSharedCarrier: [false],
        });
    };
    AccountFormComponent.prototype.bindFormControls = function () {
        this.userName = this.form.get('userName');
        this.password = this.form.get('password');
        this.repeatPassword = this.form.get('repeatPassword');
        this.isActive = this.form.get('isActive');
        this.isSharedCarrier = this.form.get('isSharedCarrier');
    };
    AccountFormComponent.prototype.ngOnDestroy = function () {
        if (this.$password) {
            this.$password.unsubscribe();
        }
    };
    AccountFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] }
    ]; };
    AccountFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'account-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account-form.component.scss */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
    ], AccountFormComponent);
    return AccountFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: CarrierAccountFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierAccountFormsModule", function() { return CarrierAccountFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _account_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var CarrierAccountFormsModule = (function () {
    function CarrierAccountFormsModule() {
    }
    CarrierAccountFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_account_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountFormComponent"]],
            exports: [_account_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountFormComponent"]],
        })
    ], CarrierAccountFormsModule);
    return CarrierAccountFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AddNewCarriersPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCarriersPopupPageModule", function() { return AddNewCarriersPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-wizard */ "../../node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _add_new_carrier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-new-carrier */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _basic_info_basic_info_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basic-info/basic-info-form.module */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.module.ts");
/* harmony import */ var _account_account_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account-form.module */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.module.ts");
/* harmony import */ var _location_location_form_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./location/location-form.module */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.module.ts");
/* harmony import */ var _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../@shared/google-map/google-map.module */ "./src/@shared/google-map/google-map.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");














var AddNewCarriersPopupPageModule = (function () {
    function AddNewCarriersPopupPageModule() {
    }
    AddNewCarriersPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_add_new_carrier__WEBPACK_IMPORTED_MODULE_5__["AddNewCarrierComponent"]],
            entryComponents: [_add_new_carrier__WEBPACK_IMPORTED_MODULE_5__["AddNewCarrierComponent"]],
            exports: [_add_new_carrier__WEBPACK_IMPORTED_MODULE_5__["AddNewCarrierComponent"]],
            imports: [
                angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_7__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _basic_info_basic_info_form_module__WEBPACK_IMPORTED_MODULE_8__["CarrierBasicFormsModule"],
                _account_account_form_module__WEBPACK_IMPORTED_MODULE_9__["CarrierAccountFormsModule"],
                _location_location_form_module__WEBPACK_IMPORTED_MODULE_10__["CarrierLocationFormsModule"],
                _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_11__["GoogleMapModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_13__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
        })
    ], AddNewCarriersPopupPageModule);
    return AddNewCarriersPopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.scss":
/*!*************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-new-carrier {\n  background: #f3f3f3 !important;\n}\n\n.add-new-carrier .coord-box {\n  margin: auto !important;\n}\n\n.add-new-carrier .coord-box ion-checkbox {\n  padding-right: 15px !important;\n  margin: auto !important;\n}\n\n.add-new-carrier .coord-box div.item-inner {\n  border: none !important;\n}\n\n.add-new-carrier .checkbox-icon {\n  border-radius: 50% !important;\n}\n\n.add-new-carrier ion-item {\n  padding-left: 19px !important;\n  padding-right: 19px !important;\n  padding-top: 0px !important;\n  border-radius: 3px !important;\n  transform: scale(1, 0.9);\n  font-size: 1.3em !important;\n  background: #ffffffc9 !important;\n}\n\n.add-new-carrier ion-col {\n  padding: 0 5px !important;\n}\n\n.add-new-carrier ion-row {\n  background: transparent !important;\n  padding: 0 !important;\n}\n\n.add-new-carrier .crete-carrier {\n  margin-top: 2%;\n}\n\n.add-new-carrier h5 {\n  margin-top: 0 !important;\n  margin-bottom: 2.5% !important;\n}\n\n.add-new-carrier h2 {\n  padding: 0 !important;\n}\n\n.add-new-carrier button {\n  text-transform: none !important;\n}\n\n.add-new-carrier ion-button {\n  border: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9hZGQtbmV3LWNhcnJpZXIuc2NzcyIsInNyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9hZGQtbmV3LWNhcnJpZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU9DLDhCQUE4QjtBQ0wvQjs7QURGQTtFQVNFLHVCQUF1QjtBQ0h6Qjs7QUROQTtFQVdHLDhCQUE4QjtFQUM5Qix1QkFBdUI7QUNEMUI7O0FEWEE7RUFpQkcsdUJBQXVCO0FDRjFCOztBRGZBO0VBc0JFLDZCQUE2QjtBQ0gvQjs7QURuQkE7RUE0QkUsNkJBQTZCO0VBQzdCLDhCQUE4QjtFQUU5QiwyQkFBMkI7RUFFM0IsNkJBQTZCO0VBRTdCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0FDUmxDOztBRDdCQTtFQXdDRSx5QkFBeUI7QUNQM0I7O0FEakNBO0VBMkNFLGtDQUFrQztFQUNsQyxxQkFBcUI7QUNOdkI7O0FEdENBO0VBZ0RFLGNBQWM7QUNOaEI7O0FEMUNBO0VBd0RFLHdCQUF3QjtFQUN4Qiw4QkFBOEI7QUNWaEM7O0FEL0NBO0VBNkRFLHFCQUFxQjtBQ1Z2Qjs7QURuREE7RUFpRUUsK0JBQStCO0FDVmpDOztBRHZEQTtFQXFFRSx1QkFBdUI7QUNWekIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLW5ldy1jYXJyaWVyL2FkZC1uZXctY2Fycmllci5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZC1uZXctY2FycmllciB7XG5cdC8vIC5sYWJlbHMge1xuXHQvLyBcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Ly8gXHRmb250LXNpemU6IDEuMWVtO1xuXHQvLyBcdGNvbG9yOiBncmF5O1xuXHQvLyBcdG9wYWNpdHk6IDAuODtcblx0Ly8gfVxuXHRiYWNrZ3JvdW5kOiAjZjNmM2YzICFpbXBvcnRhbnQ7XG5cdC5jb29yZC1ib3gge1xuXHRcdG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xuXHRcdGlvbi1jaGVja2JveCB7XG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcblx0XHR9XG5cblx0XHQvLyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdGRpdi5pdGVtLWlubmVyIHtcblx0XHRcdGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5jaGVja2JveC1pY29uIHtcblx0XHRib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcblx0fVxuXHRpb24taXRlbSB7XG5cdFx0Ly8gcGFkZGluZzogMiUgNSUgIWltcG9ydGFudDtcblx0XHQvLyBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50ICFpbXBvcnRhbnQgIWltcG9ydGFudCAhaW1wb3J0YW50O1xuXG5cdFx0cGFkZGluZy1sZWZ0OiAxOXB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1yaWdodDogMTlweCAhaW1wb3J0YW50O1xuXHRcdC8vIHBhZGRpbmctYm90dG9tOiA5cHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cblx0XHRib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcblxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMSwgMC45KTtcblx0XHRmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG5cdFx0YmFja2dyb3VuZDogI2ZmZmZmZmM5ICFpbXBvcnRhbnQ7XG5cdH1cblx0aW9uLWNvbCB7XG5cdFx0cGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcblx0fVxuXHRpb24tcm93IHtcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblx0fVxuXG5cdC5jcmV0ZS1jYXJyaWVyIHtcblx0XHRtYXJnaW4tdG9wOiAyJTtcblx0fVxuXHRidXR0b24ge1xuXHRcdC8vIG1hcmdpbi10b3A6IDIlICFpbXBvcnRhbnQ7XG5cdFx0Ly8gbWFyZ2luLWJvdHRvbTogMi40JSAhaW1wb3J0YW50O1xuXHR9XG5cblx0aDUge1xuXHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0XHRtYXJnaW4tYm90dG9tOiAyLjUlICFpbXBvcnRhbnQ7XG5cdH1cblxuXHRoMiB7XG5cdFx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xuXHR9XG5cblx0YnV0dG9uIHtcblx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXHR9XG5cblx0aW9uLWJ1dHRvbiB7XG5cdFx0Ym9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG5cdH1cbn1cbiIsIi5hZGQtbmV3LWNhcnJpZXIge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtbmV3LWNhcnJpZXIgLmNvb3JkLWJveCB7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYWRkLW5ldy1jYXJyaWVyIC5jb29yZC1ib3ggaW9uLWNoZWNrYm94IHtcbiAgcGFkZGluZy1yaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciAuY29vcmQtYm94IGRpdi5pdGVtLWlubmVyIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5hZGQtbmV3LWNhcnJpZXIgLmNoZWNrYm94LWljb24ge1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciBpb24taXRlbSB7XG4gIHBhZGRpbmctbGVmdDogMTlweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxOXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSwgMC45KTtcbiAgZm9udC1zaXplOiAxLjNlbSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmYzkgIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciBpb24tY29sIHtcbiAgcGFkZGluZzogMCA1cHggIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciBpb24tcm93IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uYWRkLW5ldy1jYXJyaWVyIC5jcmV0ZS1jYXJyaWVyIHtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi5hZGQtbmV3LWNhcnJpZXIgaDUge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDIuNSUgIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciBoMiB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmFkZC1uZXctY2FycmllciBidXR0b24ge1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uYWRkLW5ldy1jYXJyaWVyIGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.ts":
/*!***********************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.ts ***!
  \***********************************************************************************/
/*! exports provided: AddNewCarrierComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCarrierComponent", function() { return AddNewCarrierComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/utils */ "../common/src/utils.ts");
/* harmony import */ var _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic-info/basic-info-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.ts");
/* harmony import */ var _account_account_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account/account-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/account/account-form.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _location_location_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location/location-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.ts");







var AddNewCarrierComponent = (function () {
    function AddNewCarrierComponent() {
        this.emptyLogo = false;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.buttonClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
        this.backToPrevPage = false;
    }
    AddNewCarrierComponent.prototype.ngOnInit = function () { };
    AddNewCarrierComponent.prototype.ngOnChanges = function () { };
    Object.defineProperty(AddNewCarrierComponent.prototype, "password", {
        get: function () {
            return this.accountForm.password.value;
        },
        enumerable: true,
        configurable: true
    });
    AddNewCarrierComponent.prototype.getCarrierCreateObject = function () {
        var letter = this.basicInfoForm.firstName.value
            .charAt(0)
            .toUpperCase();
        var logo = '';
        this.basicInfoForm.logo.value === ''
            ? (logo = Object(_modules_server_common_utils__WEBPACK_IMPORTED_MODULE_2__["getDummyImage"])(300, 300, letter))
            : (logo = this.basicInfoForm.logo.value);
        var CarrierCreateObject = {
            firstName: this.basicInfoForm.firstName.value,
            lastName: this.basicInfoForm.lastName.value,
            email: this.basicInfoForm.email.value,
            logo: logo,
            phone: this.basicInfoForm.phone.value,
            username: this.accountForm.userName.value,
            isSharedCarrier: this.accountForm.isSharedCarrier.value,
            geoLocation: {
                city: this.locationForm.city.value,
                streetAddress: this.locationForm.street.value,
                house: this.locationForm.house.value,
                loc: {
                    type: 'Point',
                    coordinates: [
                        this.locationForm.lng.value,
                        this.locationForm.lat.value,
                    ],
                },
                countryId: this.locationForm.country.value,
                postcode: this.locationForm.postcode.value,
            },
        };
        return CarrierCreateObject;
    };
    AddNewCarrierComponent.prototype.backToStep1 = function () {
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.toStep2event = function ($event) {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.nextToStep2 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    AddNewCarrierComponent.prototype.nextToStep3 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = true;
    };
    AddNewCarrierComponent.prototype.clickPrevOrComplete = function (data) {
        var prevOrComplete = data;
        this.buttonClickEvent.emit(prevOrComplete);
    };
    AddNewCarrierComponent.prototype.onClickComplete = function (data) {
        this.onCompleteEvent.emit(data);
    };
    AddNewCarrierComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddNewCarrierComponent.prototype, "buttonClickEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], AddNewCarrierComponent.prototype, "onCompleteEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], AddNewCarrierComponent.prototype, "isDone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoFormComponent"])
    ], AddNewCarrierComponent.prototype, "basicInfoForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accountForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _account_account_form_component__WEBPACK_IMPORTED_MODULE_4__["AccountFormComponent"])
    ], AddNewCarrierComponent.prototype, "accountForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _location_location_form_component__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"])
    ], AddNewCarrierComponent.prototype, "locationForm", void 0);
    AddNewCarrierComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-new-carrier',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-new-carrier.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-new-carrier.scss */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/add-new-carrier.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], AddNewCarrierComponent);
    return AddNewCarrierComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-basic-info .email-err-wrapper {\n  padding: 0 19px;\n  text-align: left;\n  font-size: 14px;\n}\n\n.carrier-basic-info .validation-errors {\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n\n.carrier-basic-info .validation-errors span {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9iYXNpYy1pbmZvL2Jhc2ljLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9iYXNpYy1pbmZvL2Jhc2ljLWluZm8tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQ0FqQjs7QURKQTtFQVFFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQ0F4Qjs7QURYQTtFQWFHLFVBQVU7QUNFYiIsImZpbGUiOiJzcmMvcGFnZXMvK2NhcnJpZXJzL2FkZC1jYXJyaWVycy1wb3B1cC9hZGQtbmV3LWNhcnJpZXIvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fycmllci1iYXNpYy1pbmZvIHtcblx0LmVtYWlsLWVyci13cmFwcGVyIHtcblx0XHRwYWRkaW5nOiAwIDE5cHg7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdH1cblxuXHQudmFsaWRhdGlvbi1lcnJvcnMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRcdHBhZGRpbmctbGVmdDogMjBweDtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHNwYW4ge1xuXHRcdFx0Y29sb3I6IHJlZDtcblx0XHR9XG5cdH1cbn1cbiIsIi5jYXJyaWVyLWJhc2ljLWluZm8gLmVtYWlsLWVyci13cmFwcGVyIHtcbiAgcGFkZGluZzogMCAxOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5jYXJyaWVyLWJhc2ljLWluZm8gLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5jYXJyaWVyLWJhc2ljLWluZm8gLnZhbGlkYXRpb24tZXJyb3JzIHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var BasicInfoFormComponent = (function () {
    function BasicInfoFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buildForm(this.formBuilder);
    }
    BasicInfoFormComponent_1 = BasicInfoFormComponent;
    BasicInfoFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    BasicInfoFormComponent.prototype.ngOnInit = function () {
        this.bindFormControls();
    };
    BasicInfoFormComponent.prototype.ngOnChanges = function () { };
    Object.defineProperty(BasicInfoFormComponent.prototype, "isFirstNameValid", {
        get: function () {
            return (this.firstName.errors &&
                (this.firstName.dirty || this.firstName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isLastNameValid", {
        get: function () {
            return (this.lastName.errors &&
                (this.lastName.dirty || this.lastName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isPhoneValid", {
        get: function () {
            return this.phone && (this.phone.dirty || this.phone.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isEmailValid", {
        get: function () {
            return this.email && (this.email.dirty || this.email.touched);
        },
        enumerable: true,
        configurable: true
    });
    BasicInfoFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            firstName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            lastName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            phone: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(BasicInfoFormComponent_1.phoneNumberRegex),
                ],
            ],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logo: [''],
        });
    };
    BasicInfoFormComponent.prototype.bindFormControls = function () {
        this.firstName = this.form.get('firstName');
        this.lastName = this.form.get('lastName');
        this.logo = this.form.get('logo');
        this.email = this.form.get('email');
        this.phone = this.form.get('phone');
    };
    BasicInfoFormComponent.prototype.deleteImg = function () {
        this.logo.setValue('');
    };
    var BasicInfoFormComponent_1;
    BasicInfoFormComponent.phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9x]*$/;
    BasicInfoFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'basic-info-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BasicInfoFormComponent);
    return BasicInfoFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: CarrierBasicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierBasicFormsModule", function() { return CarrierBasicFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/basic-info/basic-info-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/file-uploader/file-uploader.module */ "./src/components/file-uploader/file-uploader.module.ts");








var CarrierBasicFormsModule = (function () {
    function CarrierBasicFormsModule() {
    }
    CarrierBasicFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__["FileUploaderModule"],
            ],
            declarations: [_basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
            exports: [_basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
        })
    ], CarrierBasicFormsModule);
    return CarrierBasicFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-location-form .location-find {\n  padding-top: 0px !important;\n  margin-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  width: 50%;\n  margin: auto;\n}\n\n.carrier-location-form ion-button {\n  border: none;\n}\n\n.carrier-location-form .search-find ion-col.col div.input-wrapper ion-label.label.label-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.carrier-location-form .search-find div.item-inner {\n  border-bottom: 0px !important;\n}\n\n.carrier-location-form .crete-carrier-location-title ion-col.col h5 {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.carrier-location-form ion-grid.buttons-back-done {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.carrier-location-form .g-map {\n  height: 190px !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvYWRkLWNhcnJpZXJzLXBvcHVwL2FkZC1uZXctY2Fycmllci9sb2NhdGlvbi9sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLW5ldy1jYXJyaWVyL2xvY2F0aW9uL2xvY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFlBQVk7QUNBZDs7QURQQTtFQVdFLFlBQVk7QUNBZDs7QURYQTtFQWtCSyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FDSHBCOztBRGxCQTtFQTBCRyw2QkFBNkI7QUNKaEM7O0FEdEJBO0VBaUNJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQ1A5Qjs7QUQ3QkE7RUEwQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FDVDVCOztBRHBDQTtFQWdERSx3QkFBd0I7QUNSMUIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9hZGQtY2FycmllcnMtcG9wdXAvYWRkLW5ldy1jYXJyaWVyL2xvY2F0aW9uL2xvY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2Fycmllci1sb2NhdGlvbi1mb3JtIHtcblx0LmxvY2F0aW9uLWZpbmQge1xuXHRcdHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcblx0XHRtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0d2lkdGg6IDUwJTtcblx0XHRtYXJnaW46IGF1dG87XG5cdH1cblxuXHRpb24tYnV0dG9uIHtcblx0XHRib3JkZXI6IG5vbmU7XG5cdH1cblxuXHQuc2VhcmNoLWZpbmQge1xuXHRcdGlvbi1jb2wuY29sIHtcblx0XHRcdGRpdi5pbnB1dC13cmFwcGVyIHtcblx0XHRcdFx0aW9uLWxhYmVsLmxhYmVsLmxhYmVsLW1kIHtcblx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMHB4O1xuXHRcdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4O1xuXHRcdFx0XHRcdG1hcmdpbi10b3A6IDBweDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRkaXYuaXRlbS1pbm5lciB7XG5cdFx0XHRib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHQuY3JldGUtY2Fycmllci1sb2NhdGlvbi10aXRsZSB7XG5cdFx0aW9uLWNvbC5jb2wge1xuXHRcdFx0aDUge1xuXHRcdFx0XHRwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlvbi1ncmlkLmJ1dHRvbnMtYmFjay1kb25lIHtcblx0XHRwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5nLW1hcCB7XG5cdFx0aGVpZ2h0OiAxOTBweCAhaW1wb3J0YW50O1xuXHR9XG59XG4iLCIuY2Fycmllci1sb2NhdGlvbi1mb3JtIC5sb2NhdGlvbi1maW5kIHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJyaWVyLWxvY2F0aW9uLWZvcm0gLnNlYXJjaC1maW5kIGlvbi1jb2wuY29sIGRpdi5pbnB1dC13cmFwcGVyIGlvbi1sYWJlbC5sYWJlbC5sYWJlbC1tZCB7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIC5zZWFyY2gtZmluZCBkaXYuaXRlbS1pbm5lciB7XG4gIGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIC5jcmV0ZS1jYXJyaWVyLWxvY2F0aW9uLXRpdGxlIGlvbi1jb2wuY29sIGg1IHtcbiAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItbG9jYXRpb24tZm9ybSBpb24tZ3JpZC5idXR0b25zLWJhY2stZG9uZSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJyaWVyLWxvY2F0aW9uLWZvcm0gLmctbWFwIHtcbiAgaGVpZ2h0OiAxOTBweCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: LocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function() { return LocationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var LocationFormComponent = (function () {
    function LocationFormComponent(formBuilder, translate, store, warehouseRouter) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.store = store;
        this.warehouseRouter = warehouseRouter;
        this.buttonClickEventComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backToStep2event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCoordinates = false;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'CARRIERS_VIEW.ADD_CARRIER.';
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    Object.defineProperty(LocationFormComponent.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "countries", {
        get: function () {
            return _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["countriesIdsToNamesArray"];
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.prototype.ngOnInit = function () {
        this._initGoogleAutocompleteApi();
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this._loadInitialData();
    };
    LocationFormComponent.prototype.ngOnChanges = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    LocationFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    LocationFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            house: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lng: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postcode: [''],
        });
    };
    LocationFormComponent.prototype.bindFormControls = function () {
        this.city = this.form.get('city');
        this.street = this.form.get('street');
        this.house = this.form.get('house');
        this.country = this.form.get('country');
        this.lng = this.form.get('lng');
        this.lat = this.form.get('lat');
        this.postcode = this.form.get('postcode');
    };
    LocationFormComponent.prototype.toggleCoordinates = function () {
        this.showCoordinates = !this.showCoordinates;
        console.log('Toggle Cordinates');
    };
    LocationFormComponent.prototype.textInputChange = function (val, input) {
        if (input === 'lat' || input === 'lng') {
            this._tryFindNewCoordinates();
        }
        else if (input !== 'apartment') {
            this._tryFindNewAddress();
        }
    };
    LocationFormComponent.prototype.toStep2 = function () {
        this.backToStep2event.emit();
    };
    LocationFormComponent.prototype.clickComplete = function () {
        console.log('send event to parent');
        this.buttonClickEventComplete.emit('complete');
    };
    LocationFormComponent.prototype._tryFindNewCoordinates = function () {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: new google.maps.LatLng(this.lat.value, this.lng.value),
        }, function (res, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var location_1 = res[0].geometry.location;
                _this.mapCoordEmitter.emit(location_1);
                var place = res[0];
                _this._applyNewPlaceOnTheMap(place);
            }
        });
    };
    LocationFormComponent.prototype._applyNewPlaceOnTheMap = function (locationResult) {
        if (locationResult.geometry === undefined ||
            locationResult.geometry === null) {
            return;
        }
        var loc = locationResult.geometry.location;
        this.lat.setValue(loc.lat());
        this.lng.setValue(loc.lng());
        this.mapCoordEmitter.emit(loc);
        this.mapGeometryEmitter.emit(locationResult.geometry);
        this._gatherAddressInformation(locationResult);
    };
    LocationFormComponent.prototype._gatherAddressInformation = function (locationResult) {
        var longName = 'long_name';
        var shortName = 'short_name';
        var neededAddressTypes = {
            country: shortName,
            locality: longName,
            route: longName,
            intersection: longName,
            street_number: longName,
            postal_code: longName,
            administrative_area_level_1: shortName,
            administrative_area_level_2: shortName,
            administrative_area_level_3: shortName,
            administrative_area_level_4: shortName,
            administrative_area_level_5: shortName,
        };
        var streetName = '';
        var streetNumber = '';
        var country = '';
        var postcode = '';
        var city = '';
        locationResult.address_components.forEach(function (address) {
            var addressType = address.types[0];
            var addressTypeKey = neededAddressTypes[addressType];
            var val = address[addressTypeKey];
            switch (addressType) {
                case 'country':
                    country = val;
                    break;
                case 'locality':
                case 'administrative_area_level_1':
                case 'administrative_area_level_2':
                case 'administrative_area_level_3':
                case 'administrative_area_level_4':
                case 'administrative_area_level_5':
                    if (city === '') {
                        city = val;
                    }
                    break;
                case 'route':
                case 'intersection':
                    if (streetName === '') {
                        streetName = val;
                    }
                    break;
                case 'street_number':
                    streetNumber = val;
                    break;
                case 'postal_code':
                    postcode = val;
                    break;
            }
        });
        this._setFormLocationValues(country, city, streetName, streetNumber, postcode);
    };
    LocationFormComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LocationFormComponent.prototype._setFormLocationValues = function (country, city, streetName, streetNumber, postcode) {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(country)) {
            this.country.setValue(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["Country"][country].toString());
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(city)) {
            this.city.setValue(city);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(streetName)) {
            this.street.setValue(streetName);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(streetNumber)) {
            this.house.setValue(streetNumber);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(postcode)) {
            this.postcode.setValue(postcode);
        }
    };
    LocationFormComponent.prototype._initGoogleAutocompleteApi = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var inputElement, autocomplete;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        autocomplete = new google.maps.places.Autocomplete(inputElement);
                        this._setupGoogleAutocompleteOptions(autocomplete);
                        this._listenForGoogleAutocompleteAddressChanges(autocomplete);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete.setComponentRestrictions({ country: ['us', 'bg', 'il'] });
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationFormComponent.prototype._listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this._applyNewPlaceOnTheMap(place);
        });
    };
    LocationFormComponent.prototype._tryFindNewAddress = function () {
        var _this = this;
        var house = this.house.value;
        var city = this.city.value;
        var streetAddress = this.street.value;
        var countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_5__["getCountryName"])(+this.country.value);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(streetAddress) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(house) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(city) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_6__["isEmpty"])(countryName)) {
            return;
        }
        var newAddress = "" + house + streetAddress + city + countryName;
        if (newAddress !== this._lastUsedAddress) {
            this._lastUsedAddress = newAddress;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: streetAddress + " " + house + ", " + city,
                componentRestrictions: { country: countryName },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var formattedAddress = results[0].formatted_address;
                    var place = results[0];
                    _this._applyNewPlaceOnTheMap(place);
                    _this._applyFormattedAddress(formattedAddress);
                }
            });
        }
    };
    LocationFormComponent.prototype._applyFormattedAddress = function (address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var inputElement;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        inputElement.value = address;
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._loadInitialData = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var geoLocation;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseRouter
                            .get(this.store.warehouseId, false)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["first"])())
                            .toPromise()];
                    case 1:
                        geoLocation = (_a.sent()).geoLocation;
                        this.city.setValue(geoLocation.city);
                        this.street.setValue(geoLocation.streetAddress);
                        this.house.setValue(geoLocation.house);
                        this.country.setValue(geoLocation.countryId.toString());
                        this.lng.setValue(geoLocation.coordinates.lng);
                        this.lat.setValue(geoLocation.coordinates.lat);
                        this.postcode.setValue(geoLocation.postcode);
                        this._tryFindNewCoordinates();
                        return [2];
                }
            });
        });
    };
    LocationFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"] },
        { type: services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autocomplete', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationFormComponent.prototype, "searchElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LocationFormComponent.prototype, "buttonClickEventComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LocationFormComponent.prototype, "backToStep2event", void 0);
    LocationFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-location-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-form.component.scss */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            services_store_service__WEBPACK_IMPORTED_MODULE_7__["Store"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_8__["WarehouseRouter"]])
    ], LocationFormComponent);
    return LocationFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: CarrierLocationFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierLocationFormsModule", function() { return CarrierLocationFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _location_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-form.component */ "./src/pages/+carriers/add-carriers-popup/add-new-carrier/location/location-form.component.ts");
/* harmony import */ var _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../@shared/google-map/google-map.module */ "./src/@shared/google-map/google-map.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");









var CarrierLocationFormsModule = (function () {
    function CarrierLocationFormsModule() {
    }
    CarrierLocationFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_7__["GoogleMapModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_location_form_component__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"]],
            exports: [_location_form_component__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"]],
        })
    ], CarrierLocationFormsModule);
    return CarrierLocationFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/address.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/carriers-catalog/address.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddressComponent = (function () {
    function AddressComponent() {
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.carrier = this.rowData.carrier;
    };
    AddressComponent.prototype.getStoreFullAddress = function (carrier) {
        var geoLocation = carrier.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    AddressComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "\n\t\t<strong\n\t\t\t>{{ carrier?.geoLocation.city }}\n\t\t\t<span *ngIf=\"carrier?.geoLocation.postcode\"\n\t\t\t\t>({{ carrier?.geoLocation.postcode }})</span\n\t\t\t>\n\t\t</strong>\n\t\t<span *ngIf=\"carrier\" class=\"address\">{{\n\t\t\tgetStoreFullAddress(carrier)\n\t\t}}</span>\n\t",
            styles: ["\n\t\t\th1 {\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\t.address {\n\t\t\t\tfont-style: italic;\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t"]
        })
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.ts ***!
  \*************************************************************************************/
/*! exports provided: CarriersCatalogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriersCatalogComponent", function() { return CarriersCatalogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-router.service */ "../common-angular/src/routers/carrier-router.service.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");
/* harmony import */ var _address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address.component */ "./src/pages/+carriers/add-carriers-popup/carriers-catalog/address.component.ts");
/* harmony import */ var _services_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");











var CarriersCatalogComponent = (function () {
    function CarriersCatalogComponent(carrierRouter, warehouseRouter, store, _sanitizer, _translateService) {
        this.carrierRouter = carrierRouter;
        this.warehouseRouter = warehouseRouter;
        this.store = store;
        this._sanitizer = _sanitizer;
        this._translateService = _translateService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_9__["LocalDataSource"]();
        this.hasChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
        this._loadSettingsSmartTable();
        this._loadDataSmartTable();
    }
    CarriersCatalogComponent.prototype.selectCarriersTmp = function (ev) {
        this.selecteCarriers = ev.selected;
        this.hasChanges.emit();
    };
    CarriersCatalogComponent.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.CARRIERS_CATALOG.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["forkJoin"])(getTranslate('NAME'), getTranslate('PHONE'), getTranslate('ADDRESS'), getTranslate('LOGO'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._ngDestroy$))
            .subscribe(function (_a) {
            var name = _a[0], phone = _a[1], address = _a[2], logo = _a[3];
            _this.settingsSmartTable = {
                actions: false,
                selectMode: 'multi',
                columns: {
                    name: { title: name },
                    phone: { title: phone },
                    address: {
                        title: address,
                        type: 'custom',
                        renderComponent: _address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"],
                    },
                    logo: {
                        title: logo,
                        type: 'html',
                        valuePrepareFunction: function (_, carrier) {
                            return _this._sanitizer.bypassSecurityTrustHtml("<div class='text-center'>\n\t\t\t\t\t\t\t\t<img src=\"" + carrier.logo + "\" alt=\"Product Image\" class='logo'\">\n\t\t\t\t\t\t\t<div>");
                        },
                        filter: false,
                    },
                },
                pager: {
                    display: true,
                    perPage: 3,
                },
            };
        });
    };
    CarriersCatalogComponent.prototype._loadDataSmartTable = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var warehouse, loadData;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.warehouseRouter
                            .get(this.store.warehouseId)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])())
                            .toPromise()];
                    case 1:
                        warehouse = _a.sent();
                        loadData = function (carriers) {
                            var carriersVM = carriers.map(function (c) {
                                return {
                                    name: c.firstName + ' ' + c.lastName,
                                    phone: c.phone,
                                    carrier: c,
                                    logo: c.logo,
                                    id: c.id,
                                };
                            });
                            _this.sourceSmartTable.load(carriersVM);
                        };
                        this.carrierRouter.getAllActive().subscribe(function (carriers) {
                            loadData(carriers.filter(function (c) { return !warehouse.usedCarriersIds.includes(c.id); }));
                        });
                        return [2];
                }
            });
        });
    };
    CarriersCatalogComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CarriersCatalogComponent.ctorParameters = function () { return [
        { type: _modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseRouter"] },
        { type: _services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"] }
    ]; };
    CarriersCatalogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carriers-catalog',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carriers-catalog.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/add-carriers-popup/carriers-catalog/carriers-catalog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_modules_client_common_angular2_routers_carrier_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierRouter"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_4__["WarehouseRouter"],
            _services_store_service__WEBPACK_IMPORTED_MODULE_6__["Store"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]])
    ], CarriersCatalogComponent);
    return CarriersCatalogComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CarrierAddrPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierAddrPopupPageModule", function() { return CarrierAddrPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carrier_addr_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-addr-popup */ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");







var CarrierAddrPopupPageModule = (function () {
    function CarrierAddrPopupPageModule() {
    }
    CarrierAddrPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carrier_addr_popup__WEBPACK_IMPORTED_MODULE_2__["CarrierAddrPopupPage"]],
            entryComponents: [_carrier_addr_popup__WEBPACK_IMPORTED_MODULE_2__["CarrierAddrPopupPage"]],
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ],
        })
    ], CarrierAddrPopupPageModule);
    return CarrierAddrPopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.scss":
/*!************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-addr-popup {\n  background-color: #fff;\n  height: 100%;\n  display: flex !important;\n  flex-direction: column;\n}\n\n.carrier-addr-popup .infoRow {\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  line-height: 25px;\n}\n\n.carrier-addr-popup .label,\n.carrier-addr-popup .info {\n  display: inline-block;\n  font-size: 1.2em;\n}\n\n.carrier-addr-popup .label {\n  width: 25%;\n  font-style: italic;\n}\n\n.carrier-addr-popup .info {\n  color: #0074d9 !important;\n  font-weight: bold;\n}\n\n.carrier-addr-popup .addrInfo {\n  margin: 0 auto;\n  width: 90%;\n}\n\n.carrier-addr-popup .map {\n  min-height: 50% !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1hZGRyLXBvcHVwL2NhcnJpZXItYWRkci1wb3B1cC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWFkZHItcG9wdXAvY2Fycmllci1hZGRyLXBvcHVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixzQkFBc0I7QUNDdkI7O0FETEE7RUFNRSxjQUFjO0VBRWQsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBaUI7QUNFbkI7O0FEWkE7O0VBZUUscUJBQXFCO0VBRXJCLGdCQUFnQjtBQ0NsQjs7QURsQkE7RUFvQkUsVUFBVTtFQUNWLGtCQUFrQjtBQ0VwQjs7QUR2QkE7RUF3QkUseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQ0duQjs7QUQ1QkE7RUE2QkUsY0FBYztFQUNkLFVBQVU7QUNHWjs7QURqQ0E7RUFrQ0UsMEJBQTBCO0FDRzVCIiwiZmlsZSI6InNyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1hZGRyLXBvcHVwL2NhcnJpZXItYWRkci1wb3B1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXItYWRkci1wb3B1cCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGhlaWdodDogMTAwJTtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHQuaW5mb1JvdyB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Ly8gd2lkdGg6ODAlO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDI1cHg7XG5cdH1cblxuXHQubGFiZWwsXG5cdC5pbmZvIHtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0Ly8gd2lkdGg6NDglO1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdH1cblx0LmxhYmVsIHtcblx0XHR3aWR0aDogMjUlO1xuXHRcdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0fVxuXHQuaW5mbyB7XG5cdFx0Y29sb3I6ICMwMDc0ZDkgIWltcG9ydGFudDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxuXG5cdC5hZGRySW5mbyB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0d2lkdGg6IDkwJTtcblx0fVxuXG5cdC5tYXAge1xuXHRcdG1pbi1oZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xuXHR9XG59XG4iLCIuY2Fycmllci1hZGRyLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYXJyaWVyLWFkZHItcG9wdXAgLmluZm9Sb3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uY2Fycmllci1hZGRyLXBvcHVwIC5sYWJlbCxcbi5jYXJyaWVyLWFkZHItcG9wdXAgLmluZm8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5jYXJyaWVyLWFkZHItcG9wdXAgLmxhYmVsIHtcbiAgd2lkdGg6IDI1JTtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2Fycmllci1hZGRyLXBvcHVwIC5pbmZvIHtcbiAgY29sb3I6ICMwMDc0ZDkgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJyaWVyLWFkZHItcG9wdXAgLmFkZHJJbmZvIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jYXJyaWVyLWFkZHItcG9wdXAgLm1hcCB7XG4gIG1pbi1oZWlnaHQ6IDUwJSAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.ts ***!
  \**********************************************************************/
/*! exports provided: CarrierAddrPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierAddrPopupPage", function() { return CarrierAddrPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");




var CarrierAddrPopupPage = (function () {
    function CarrierAddrPopupPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.myLatLng = { lat: 0, lng: 0 };
    }
    CarrierAddrPopupPage.prototype.ngOnInit = function () {
        var geoLocation = this.geoLocation;
        this.city = geoLocation.city;
        this.country = geoLocation.countryName;
        this.street = geoLocation.streetAddress;
        this.house = geoLocation.house;
        this.coordinates = [
            geoLocation.coordinates.lat,
            geoLocation.coordinates.lng,
        ];
        this.myLatLng.lat = this.coordinates[0];
        this.myLatLng.lng = this.coordinates[1];
        this.loadMap();
    };
    CarrierAddrPopupPage.prototype.loadMap = function () {
        var mapProp = {
            center: this.myLatLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
        var marker = new google.maps.Marker({
            position: this.myLatLng,
            map: this.map,
            title: 'Your Warehouse!',
        });
    };
    CarrierAddrPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierAddrPopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarrierAddrPopupPage.prototype, "gmapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], CarrierAddrPopupPage.prototype, "geoLocation", void 0);
    CarrierAddrPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-addr-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-addr-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-addr-popup.scss */ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
    ], CarrierAddrPopupPage);
    return CarrierAddrPopupPage;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CarrierDeliveriesPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierDeliveriesPopupPageModule", function() { return CarrierDeliveriesPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carrier_deliveries_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-deliveries-popup */ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _components_carrier_deliveries_table_customer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/customer */ "./src/components/carrier-deliveries-table/customer.ts");
/* harmony import */ var _components_carrier_deliveries_table_delivery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/delivery */ "./src/components/carrier-deliveries-table/delivery.ts");
/* harmony import */ var _components_carrier_deliveries_table_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/status */ "./src/components/carrier-deliveries-table/status.ts");
/* harmony import */ var _components_carrier_deliveries_table_warehouse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/warehouse */ "./src/components/carrier-deliveries-table/warehouse.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var COMPONENTS = [
    _carrier_deliveries_popup__WEBPACK_IMPORTED_MODULE_2__["CarrierDeliveriesPopupPage"],
    _components_carrier_deliveries_table_customer__WEBPACK_IMPORTED_MODULE_5__["CustomerComponent"],
    _components_carrier_deliveries_table_delivery__WEBPACK_IMPORTED_MODULE_6__["DeliveryComponent"],
    _components_carrier_deliveries_table_status__WEBPACK_IMPORTED_MODULE_7__["StatusComponent"],
    _components_carrier_deliveries_table_warehouse__WEBPACK_IMPORTED_MODULE_8__["WarehouseComponent"],
];
var CarrierDeliveriesPopupPageModule = (function () {
    function CarrierDeliveriesPopupPageModule() {
    }
    CarrierDeliveriesPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: COMPONENTS,
            imports: [
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(),
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ],
            entryComponents: COMPONENTS,
        })
    ], CarrierDeliveriesPopupPageModule);
    return CarrierDeliveriesPopupPageModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-deliveries-popup {\n  background-color: #fff;\n  height: 100%;\n  width: 100%;\n}\n\n.carrier-deliveries-popup .body {\n  overflow-y: scroll;\n  height: 78%;\n  position: relative;\n}\n\n.carrier-deliveries-popup .info {\n  color: #0074d9;\n  font-weight: bold;\n}\n\n.carrier-deliveries-popup table {\n  margin-top: 0 !important;\n}\n\n.carrier-deliveries-popup #basicInfo {\n  font-size: 1.1em;\n  min-height: 10%;\n  background: #eee;\n}\n\n.carrier-deliveries-popup #basicInfo span {\n  margin: auto;\n  text-transform: none !important;\n  font-style: italic;\n}\n\n.carrier-deliveries-popup .ng2-smart-pagination-nav li {\n  width: 50% !important;\n}\n\n.carrier-deliveries-popup .ng2-smart-titles {\n  height: 55px !important;\n}\n\n.carrier-deliveries-popup .pagination {\n  line-height: 1 !important;\n  position: absolute;\n  width: auto;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwL2NhcnJpZXItZGVsaXZlcmllcy1wb3B1cC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWRlbGl2ZXJpZXMtcG9wdXAvY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFdBQVc7QUNDWjs7QURKQTtFQU1FLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsa0JBQWtCO0FDRXBCOztBRFZBO0VBV0UsY0FBYztFQUNkLGlCQUFpQjtBQ0duQjs7QURmQTtFQWdCRSx3QkFBd0I7QUNHMUI7O0FEbkJBO0VBb0JFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0FDR2xCOztBRHpCQTtFQXdCRyxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLGtCQUFrQjtBQ0tyQjs7QUQvQkE7RUFnQ0cscUJBQXFCO0FDR3hCOztBRG5DQTtFQXFDRSx1QkFBdUI7QUNFekI7O0FEdkNBO0VBeUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxTQUFTO0VBS1QsMkJBQTJCO0FDRTdCIiwiZmlsZSI6InNyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwL2NhcnJpZXItZGVsaXZlcmllcy1wb3B1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXItZGVsaXZlcmllcy1wb3B1cCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cblx0LmJvZHkge1xuXHRcdG92ZXJmbG93LXk6IHNjcm9sbDtcblx0XHRoZWlnaHQ6IDc4JTtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblx0LmluZm8ge1xuXHRcdGNvbG9yOiAjMDA3NGQ5O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHR9XG5cblx0dGFibGUge1xuXHRcdG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcblx0fVxuXG5cdCNiYXNpY0luZm8ge1xuXHRcdGZvbnQtc2l6ZTogMS4xZW07XG5cdFx0bWluLWhlaWdodDogMTAlO1xuXHRcdGJhY2tncm91bmQ6ICNlZWU7XG5cdFx0c3BhbiB7XG5cdFx0XHRtYXJnaW46IGF1dG87XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuXHRcdFx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRcdH1cblx0fVxuXG5cdC5uZzItc21hcnQtcGFnaW5hdGlvbi1uYXYge1xuXHRcdGxpIHtcblx0XHRcdHdpZHRoOiA1MCUgIWltcG9ydGFudDtcblx0XHR9XG5cdH1cblxuXHQubmcyLXNtYXJ0LXRpdGxlcyB7XG5cdFx0aGVpZ2h0OiA1NXB4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQucGFnaW5hdGlvbiB7XG5cdFx0bGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IGF1dG87XG5cdFx0Ym90dG9tOiAwO1xuXHRcdGxlZnQ6IDUwJTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHQtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXHRcdC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG5cdH1cbn1cbiIsIi5jYXJyaWVyLWRlbGl2ZXJpZXMtcG9wdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwIC5ib2R5IHtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBoZWlnaHQ6IDc4JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwIC5pbmZvIHtcbiAgY29sb3I6ICMwMDc0ZDk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwIHRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuXG4uY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwICNiYXNpY0luZm8ge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtaW4taGVpZ2h0OiAxMCU7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG5cbi5jYXJyaWVyLWRlbGl2ZXJpZXMtcG9wdXAgI2Jhc2ljSW5mbyBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXJyaWVyLWRlbGl2ZXJpZXMtcG9wdXAgLm5nMi1zbWFydC1wYWdpbmF0aW9uLW5hdiBsaSB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItZGVsaXZlcmllcy1wb3B1cCAubmcyLXNtYXJ0LXRpdGxlcyB7XG4gIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fycmllci1kZWxpdmVyaWVzLXBvcHVwIC5wYWdpbmF0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogYXV0bztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiA1MCU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.ts ***!
  \**********************************************************************************/
/*! exports provided: CarrierDeliveriesPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierDeliveriesPopupPage", function() { return CarrierDeliveriesPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");
/* harmony import */ var _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/client.common.angular2/routers/carrier-orders-router.service */ "../common-angular/src/routers/carrier-orders-router.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _components_carrier_deliveries_table_customer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/customer */ "./src/components/carrier-deliveries-table/customer.ts");
/* harmony import */ var _components_carrier_deliveries_table_delivery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/delivery */ "./src/components/carrier-deliveries-table/delivery.ts");
/* harmony import */ var _components_carrier_deliveries_table_status__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/status */ "./src/components/carrier-deliveries-table/status.ts");
/* harmony import */ var _components_carrier_deliveries_table_warehouse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/carrier-deliveries-table/warehouse */ "./src/components/carrier-deliveries-table/warehouse.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");













var CarrierDeliveriesPopupPage = (function () {
    function CarrierDeliveriesPopupPage(modalCtrl, carrierOrdersRouter, translateService) {
        this.modalCtrl = modalCtrl;
        this.carrierOrdersRouter = carrierOrdersRouter;
        this.translateService = translateService;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["LocalDataSource"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._loadSettingsSmartTable();
    }
    CarrierDeliveriesPopupPage.prototype.getUserName = function (order) {
        var user = order.user;
        if (user.firstName) {
            if (user.lastName) {
                return user.firstName + ' ' + user.lastName;
            }
            return user.firstName;
        }
    };
    CarrierDeliveriesPopupPage.prototype.getStoreFullAddress = function (order) {
        var store = order.warehouse;
        var geoLocation = store.geoLocation;
        var fullAddress = geoLocation.city + ", " + geoLocation.streetAddress + " " + geoLocation.house;
        return fullAddress;
    };
    CarrierDeliveriesPopupPage.prototype.getTotalDeliveryTime = function (order) {
        var start = order.createdAt;
        var end = new Date(order.deliveryTime);
        var delta = Math.abs(start.getTime() - end.getTime()) / 1000;
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;
        var seconds = delta % 60;
        var secondsStr = seconds.toString();
        secondsStr = secondsStr.substring(0, secondsStr.indexOf('.'));
        var h = '0' + hours;
        h = h.substr(-2);
        var min = '0' + minutes;
        min = min.substr(-2);
        var sec = '0' + secondsStr;
        sec = sec.substr(-2);
        return (days !== 0 ? days + 'days ' : '') + "\n            " + hours + " : " + min + " : " + sec;
    };
    CarrierDeliveriesPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierDeliveriesPopupPage.prototype.ngOnInit = function () {
        var _this = this;
        var loadData = function (orders) {
            var dataVM = orders.map(function (o) {
                var status = o.isCompleted ? 'Completed' : '';
                status += o.isPaid ? 'Paid' : '';
                return {
                    customer: _this.getUserName(o),
                    status: status,
                    warehouse: o.warehouse['name'],
                    delivery: _this.getTotalDeliveryTime(o),
                    order: o,
                };
            });
            _this.sourceSmartTable.load(dataVM);
        };
        this.$orders = this.carrierOrdersRouter
            .get(this.carrier.id, {
            populateWarehouse: true,
            completion: 'completed',
        })
            .subscribe(function (orders) {
            _this.orders = orders;
            loadData(orders);
            if (_this.orders.length === 0) {
                _this.showNoDeliveryIcon = true;
            }
        });
    };
    CarrierDeliveriesPopupPage.prototype.ngOnDestroy = function () {
        if (this.$orders) {
            this.$orders.unsubscribe();
        }
    };
    CarrierDeliveriesPopupPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.DELIVERIES_POP_UP.';
        var getTranslate = function (name) {
            return _this.translateService.get(columnTitlePrefix + name);
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(getTranslate('CUSTOMER'), getTranslate('WAREHOUSE'), getTranslate('STATUS'), getTranslate('DELIVERY'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._ngDestroy$))
            .subscribe(function (_a) {
            var customer = _a[0], warehouse = _a[1], status = _a[2], delivery = _a[3];
            _this.settingsSmartTable = {
                actions: true,
                columns: {
                    customer: {
                        title: customer,
                        type: 'custom',
                        renderComponent: _components_carrier_deliveries_table_customer__WEBPACK_IMPORTED_MODULE_8__["CustomerComponent"],
                    },
                    warehouse: {
                        title: warehouse,
                        type: 'custom',
                        renderComponent: _components_carrier_deliveries_table_warehouse__WEBPACK_IMPORTED_MODULE_11__["WarehouseComponent"],
                    },
                    status: {
                        title: status,
                        type: 'custom',
                        renderComponent: _components_carrier_deliveries_table_status__WEBPACK_IMPORTED_MODULE_10__["StatusComponent"],
                    },
                    delivery: {
                        title: delivery,
                        type: 'custom',
                        renderComponent: _components_carrier_deliveries_table_delivery__WEBPACK_IMPORTED_MODULE_9__["DeliveryComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: 5,
                },
            };
        });
    };
    CarrierDeliveriesPopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"] },
        { type: _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierOrdersRouter"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], CarrierDeliveriesPopupPage.prototype, "carrier", void 0);
    CarrierDeliveriesPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-deliveries-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-deliveries-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-deliveries-popup.scss */ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__["ModalController"],
            _modules_client_common_angular2_routers_carrier_orders_router_service__WEBPACK_IMPORTED_MODULE_3__["CarrierOrdersRouter"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]])
    ], CarrierDeliveriesPopupPage);
    return CarrierDeliveriesPopupPage;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/account/account-form.component.scss":
/*!************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/account/account-form.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-carrier-account .items-end {\n  display: flex;\n  align-items: flex-end;\n}\n\n.edit-carrier-account .items-end ion-item {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2FjY291bnQvYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWVkaXQtcG9wdXAvYWNjb3VudC9hY2NvdW50LWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFhO0VBQ2IscUJBQXFCO0FDQXZCOztBREhBO0VBTUcsV0FBVztBQ0NkIiwiZmlsZSI6InNyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2FjY291bnQvYWNjb3VudC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVkaXQtY2Fycmllci1hY2NvdW50IHtcblx0Lml0ZW1zLWVuZCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRhbGlnbi1pdGVtczogZmxleC1lbmQ7XG5cblx0XHRpb24taXRlbSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdH1cbn1cbiIsIi5lZGl0LWNhcnJpZXItYWNjb3VudCAuaXRlbXMtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uZWRpdC1jYXJyaWVyLWFjY291bnQgLml0ZW1zLWVuZCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/account/account-form.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/account/account-form.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountFormComponent", function() { return AccountFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");




var AccountFormComponent = (function () {
    function AccountFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    AccountFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.repeatPassword = this.form.get('repeatPassword');
        this.$password = this.password.valueChanges.subscribe(function (res) {
            _this.repeatPassword.setValue('');
        });
        this.loadData();
    };
    AccountFormComponent.prototype.ngOnChanges = function () { };
    AccountFormComponent.prototype.buildForm = function (formBuilder) {
        var _this = this;
        this.form = formBuilder.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: [''],
            repeatPassword: [
                '',
                [
                    function (control) {
                        if (_this.password) {
                            return control.value === _this.password.value
                                ? null
                                : { validUrl: true };
                        }
                        else {
                            return null;
                        }
                    },
                ],
            ],
            isActive: [true, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            isSharedCarrier: [false],
        });
    };
    AccountFormComponent.prototype.bindFormControls = function () {
        this.userName = this.form.get('userName');
        this.password = this.form.get('password');
        this.repeatPassword = this.form.get('repeatPassword');
        this.isActive = this.form.get('isActive');
        this.isSharedCarrier = this.form.get('isSharedCarrier');
    };
    AccountFormComponent.prototype.ngOnDestroy = function () {
        if (this.$password) {
            this.$password.unsubscribe();
        }
    };
    AccountFormComponent.prototype.loadData = function () {
        if (this.carrier) {
            this.userName.setValue(this.carrier.username);
            this.isActive.setValue(this.carrier.isActive);
            this.isSharedCarrier.setValue(this.carrier.isSharedCarrier);
        }
    };
    AccountFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_3__["default"])
    ], AccountFormComponent.prototype, "carrier", void 0);
    AccountFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'account-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/account/account-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account-form.component.scss */ "./src/pages/+carriers/carrier-edit-popup/account/account-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AccountFormComponent);
    return AccountFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/account/account-form.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/account/account-form.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CarrierAccountFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierAccountFormsModule", function() { return CarrierAccountFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _account_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-form.component */ "./src/pages/+carriers/carrier-edit-popup/account/account-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");








var CarrierAccountFormsModule = (function () {
    function CarrierAccountFormsModule() {
    }
    CarrierAccountFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_account_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountFormComponent"]],
            exports: [_account_form_component__WEBPACK_IMPORTED_MODULE_6__["AccountFormComponent"]],
        })
    ], CarrierAccountFormsModule);
    return CarrierAccountFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".edit-carrier-basic-info .email-err-wrapper {\n  padding: 0 19px;\n  text-align: left;\n  font-size: 14px;\n}\n\n.edit-carrier-basic-info .validation-errors {\n  display: flex;\n  justify-content: flex-start;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n\n.edit-carrier-basic-info .validation-errors span {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2Jhc2ljLWluZm8vYmFzaWMtaW5mby1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWVkaXQtcG9wdXAvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7QUNBakI7O0FESkE7RUFRRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNBeEI7O0FEWEE7RUFhRyxVQUFVO0FDRWIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWVkaXQtcG9wdXAvYmFzaWMtaW5mby9iYXNpYy1pbmZvLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZWRpdC1jYXJyaWVyLWJhc2ljLWluZm8ge1xuXHQuZW1haWwtZXJyLXdyYXBwZXIge1xuXHRcdHBhZGRpbmc6IDAgMTlweDtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0fVxuXG5cdC52YWxpZGF0aW9uLWVycm9ycyB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0c3BhbiB7XG5cdFx0XHRjb2xvcjogcmVkO1xuXHRcdH1cblx0fVxufVxuIiwiLmVkaXQtY2Fycmllci1iYXNpYy1pbmZvIC5lbWFpbC1lcnItd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgMTlweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZWRpdC1jYXJyaWVyLWJhc2ljLWluZm8gLnZhbGlkYXRpb24tZXJyb3JzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5lZGl0LWNhcnJpZXItYmFzaWMtaW5mbyAudmFsaWRhdGlvbi1lcnJvcnMgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BasicInfoFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoFormComponent", function() { return BasicInfoFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");





var BasicInfoFormComponent = (function () {
    function BasicInfoFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buildForm(this.formBuilder);
    }
    BasicInfoFormComponent_1 = BasicInfoFormComponent;
    BasicInfoFormComponent.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    BasicInfoFormComponent.prototype.ngOnInit = function () {
        this.bindFormControls();
        this.loadData();
    };
    Object.defineProperty(BasicInfoFormComponent.prototype, "isFirstNameValid", {
        get: function () {
            return (this.firstName.errors &&
                (this.firstName.dirty || this.firstName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isLastNameValid", {
        get: function () {
            return (this.lastName.errors &&
                (this.lastName.dirty || this.lastName.touched));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isPhoneValid", {
        get: function () {
            return this.phone && (this.phone.dirty || this.phone.touched);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasicInfoFormComponent.prototype, "isEmailValid", {
        get: function () {
            return this.email && (this.email.dirty || this.email.touched);
        },
        enumerable: true,
        configurable: true
    });
    BasicInfoFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            firstName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            lastName: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(new RegExp("^[a-z ,.'-]+$", 'i')),
                ],
            ],
            phone: [
                '',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(BasicInfoFormComponent_1.phoneNumberRegex),
                ],
            ],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            logo: [''],
        });
    };
    BasicInfoFormComponent.prototype.bindFormControls = function () {
        this.firstName = this.form.get('firstName');
        this.lastName = this.form.get('lastName');
        this.logo = this.form.get('logo');
        this.email = this.form.get('email');
        this.phone = this.form.get('phone');
    };
    BasicInfoFormComponent.prototype.deleteImg = function () {
        this.logo.setValue('');
    };
    BasicInfoFormComponent.prototype.loadData = function () {
        if (this.carrier) {
            this.firstName.setValue(this.carrier.firstName);
            this.lastName.setValue(this.carrier.lastName);
            this.logo.setValue(this.carrier.logo);
            this.email.setValue(this.carrier.email);
            this.phone.setValue(this.carrier.phone);
        }
    };
    var BasicInfoFormComponent_1;
    BasicInfoFormComponent.phoneNumberRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9x]*$/;
    BasicInfoFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_4__["default"])
    ], BasicInfoFormComponent.prototype, "carrier", void 0);
    BasicInfoFormComponent = BasicInfoFormComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'basic-info-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-info-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-info-form.component.scss */ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], BasicInfoFormComponent);
    return BasicInfoFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.module.ts ***!
  \*************************************************************************************/
/*! exports provided: CarrierBasicFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierBasicFormsModule", function() { return CarrierBasicFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info-form.component */ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/file-uploader/file-uploader.module */ "./src/components/file-uploader/file-uploader.module.ts");








var CarrierBasicFormsModule = (function () {
    function CarrierBasicFormsModule() {
    }
    CarrierBasicFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                components_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_7__["FileUploaderModule"],
            ],
            declarations: [_basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
            exports: [_basic_info_form_component__WEBPACK_IMPORTED_MODULE_5__["BasicInfoFormComponent"]],
        })
    ], CarrierBasicFormsModule);
    return CarrierBasicFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CarrierEditPopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierEditPopupModule", function() { return CarrierEditPopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-wizard */ "../../node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _basic_info_basic_info_form_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basic-info/basic-info-form.module */ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.module.ts");
/* harmony import */ var _account_account_form_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account-form.module */ "./src/pages/+carriers/carrier-edit-popup/account/account-form.module.ts");
/* harmony import */ var _location_location_form_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./location/location-form.module */ "./src/pages/+carriers/carrier-edit-popup/location/location-form.module.ts");
/* harmony import */ var _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@shared/google-map/google-map.module */ "./src/@shared/google-map/google-map.module.ts");
/* harmony import */ var _carrier_edit_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./carrier-edit-popup */ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.ts");
/* harmony import */ var _services_carrier_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");















var CarrierEditPopupModule = (function () {
    function CarrierEditPopupModule() {
    }
    CarrierEditPopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carrier_edit_popup__WEBPACK_IMPORTED_MODULE_11__["CarrierEditPopupPage"]],
            entryComponents: [_carrier_edit_popup__WEBPACK_IMPORTED_MODULE_11__["CarrierEditPopupPage"]],
            imports: [
                angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _basic_info_basic_info_form_module__WEBPACK_IMPORTED_MODULE_7__["CarrierBasicFormsModule"],
                _account_account_form_module__WEBPACK_IMPORTED_MODULE_8__["CarrierAccountFormsModule"],
                _location_location_form_module__WEBPACK_IMPORTED_MODULE_9__["CarrierLocationFormsModule"],
                _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_10__["GoogleMapModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_14__["CommonModule"],
            ],
            providers: [_services_carrier_service__WEBPACK_IMPORTED_MODULE_12__["CarrierService"]],
        })
    ], CarrierEditPopupModule);
    return CarrierEditPopupModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.scss":
/*!************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-edit-wrapper {\n  display: flex !important;\n}\n\n.carrier-edit-wrapper .modal-wrapper {\n  width: 650px;\n  height: auto;\n  display: inline-table;\n  left: calc(50% - (650px / 2));\n  top: calc(50% - (600px / 2));\n}\n\n.carrier-edit-wrapper .modal-wrapper .ion-page {\n  display: contents;\n}\n\n.carrier-edit-wrapper .modal-wrapper .ion-page .carrier-edit {\n  background: #f3f3f3 !important;\n  padding: 0 15px;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  background: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.carrier-edit-wrapper .modal-wrapper .ion-page .carrier-edit .custom-title-popup {\n  width: 100% !important;\n}\n\n.carrier-edit-wrapper .modal-wrapper .ion-page .carrier-edit ion-button {\n  border: none;\n}\n\n.carrier-edit-wrapper .modal-wrapper .ion-page .carrier-edit ion-grid {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2NhcnJpZXItZWRpdC1wb3B1cC5zY3NzIiwic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWVkaXQtcG9wdXAvY2Fycmllci1lZGl0LXBvcHVwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBd0I7QUNDekI7O0FERkE7RUFHRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0FDRzlCOztBRFZBO0VBU0csaUJBQWlCO0FDS3BCOztBRGRBO0VBV0ksOEJBQThCO0VBQzlCLGVBQWU7RUFJZixzQ0FBc0M7RUFDdEMsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQ0lsQzs7QUQ1QkE7RUFjSyxzQkFBc0I7QUNrQjNCOztBRGhDQTtFQTJCSyxZQUFZO0FDU2pCOztBRHBDQTtFQStCSyxXQUFXO0FDU2hCIiwiZmlsZSI6InNyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2NhcnJpZXItZWRpdC1wb3B1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcnJpZXItZWRpdC13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHQubW9kYWwtd3JhcHBlciB7XG5cdFx0d2lkdGg6IDY1MHB4O1xuXHRcdGhlaWdodDogYXV0bztcblx0XHRkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG5cdFx0bGVmdDogY2FsYyg1MCUgLSAoNjUwcHggLyAyKSk7XG5cdFx0dG9wOiBjYWxjKDUwJSAtICg2MDBweCAvIDIpKTtcblx0XHQuaW9uLXBhZ2Uge1xuXHRcdFx0ZGlzcGxheTogY29udGVudHM7XG5cdFx0XHQuY2Fycmllci1lZGl0IHtcblx0XHRcdFx0YmFja2dyb3VuZDogI2YzZjNmMyAhaW1wb3J0YW50O1xuXHRcdFx0XHRwYWRkaW5nOiAwIDE1cHg7XG5cdFx0XHRcdC5jdXN0b20tdGl0bGUtcG9wdXAge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdFx0XHRpb24tYnV0dG9uIHtcblx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpb24tZ3JpZCB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsIi5jYXJyaWVyLWVkaXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItZWRpdC13cmFwcGVyIC5tb2RhbC13cmFwcGVyIHtcbiAgd2lkdGg6IDY1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgbGVmdDogY2FsYyg1MCUgLSAoNjUwcHggLyAyKSk7XG4gIHRvcDogY2FsYyg1MCUgLSAoNjAwcHggLyAyKSk7XG59XG5cbi5jYXJyaWVyLWVkaXQtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2Uge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuLmNhcnJpZXItZWRpdC13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY2Fycmllci1lZGl0IHtcbiAgYmFja2dyb3VuZDogI2YzZjNmMyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jYXJyaWVyLWVkaXQtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNhcnJpZXItZWRpdCAuY3VzdG9tLXRpdGxlLXBvcHVwIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItZWRpdC13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY2Fycmllci1lZGl0IGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXJyaWVyLWVkaXQtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNhcnJpZXItZWRpdCBpb24tZ3JpZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.ts ***!
  \**********************************************************************/
/*! exports provided: CarrierEditPopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierEditPopupPage", function() { return CarrierEditPopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic-info/basic-info-form.component */ "./src/pages/+carriers/carrier-edit-popup/basic-info/basic-info-form.component.ts");
/* harmony import */ var _account_account_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account-form.component */ "./src/pages/+carriers/carrier-edit-popup/account/account-form.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _location_location_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location/location-form.component */ "./src/pages/+carriers/carrier-edit-popup/location/location-form.component.ts");
/* harmony import */ var _services_carrier_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-carriers-router.service */ "../common-angular/src/routers/warehouse-carriers-router.service.ts");










var CarrierEditPopupPage = (function () {
    function CarrierEditPopupPage(modalCtrl, _carrierService, warehouseCarriersRouter) {
        this.modalCtrl = modalCtrl;
        this._carrierService = _carrierService;
        this.warehouseCarriersRouter = warehouseCarriersRouter;
        this.emptyLogo = false;
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.buttonClickEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onCompleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
        this.backToPrevPage = false;
    }
    CarrierEditPopupPage.prototype.ngOnInit = function () { };
    CarrierEditPopupPage.prototype.ngOnChanges = function () { };
    CarrierEditPopupPage.prototype._updateCarrier = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var basic, geoLocation, account, carrier, carrierCreateObj, id;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        basic = {
                            firstName: this.basicInfoForm.firstName.value,
                            lastName: this.basicInfoForm.lastName.value,
                            phone: this.basicInfoForm.phone.value,
                            logo: this.basicInfoForm.logo.value,
                            email: this.basicInfoForm.email.value,
                        };
                        geoLocation = {
                            countryId: Number(this.locationForm.country.value),
                            city: this.locationForm.city.value,
                            streetAddress: this.locationForm.street.value,
                            postcode: this.locationForm.postcode.value,
                            house: this.locationForm.house.value,
                            loc: {
                                type: 'Point',
                                coordinates: [
                                    Number(this.locationForm.lng.value),
                                    Number(this.locationForm.lat.value),
                                ],
                            },
                        };
                        account = {
                            isActive: this.accountForm.isActive.value,
                            isSharedCarrier: this.accountForm.isSharedCarrier.value,
                            username: this.accountForm.userName.value,
                            password: this.accountForm.password.value,
                            repeatPassword: this.accountForm.repeatPassword.value,
                        };
                        carrier = this.carrier;
                        carrierCreateObj = {
                            firstName: basic.firstName,
                            lastName: basic.lastName,
                            phone: basic.phone,
                            email: basic.email,
                            logo: basic.logo,
                            username: account.username,
                            isActive: account.isActive,
                            isSharedCarrier: account.isSharedCarrier,
                            geoLocation: geoLocation,
                        };
                        if (!account.password) return [3, 2];
                        return [4, this.warehouseCarriersRouter.updatePassword(carrier.id, account.password)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this._carrierService
                            .updateCarrier(carrier.id, carrierCreateObj)
                            .toPromise()];
                    case 3:
                        id = _a.sent();
                        this.cancelModal();
                        return [2];
                }
            });
        });
    };
    Object.defineProperty(CarrierEditPopupPage.prototype, "password", {
        get: function () {
            return this.accountForm.password.value;
        },
        enumerable: true,
        configurable: true
    });
    CarrierEditPopupPage.prototype.backToStep1 = function () {
        this.isNextStepOneAvailable = true;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.toStep2event = function ($event) {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.nextToStep2 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = true;
        this.isNextStepThreeAvailable = false;
    };
    CarrierEditPopupPage.prototype.nextToStep3 = function () {
        this.isNextStepOneAvailable = false;
        this.isNextStepTwoAvailable = false;
        this.isNextStepThreeAvailable = true;
    };
    CarrierEditPopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierEditPopupPage.prototype.clickPrevOrComplete = function (data) {
        var prevOrComplete = data;
        this.buttonClickEvent.emit(prevOrComplete);
    };
    CarrierEditPopupPage.prototype.onClickComplete = function (data) {
        this._updateCarrier();
    };
    CarrierEditPopupPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CarrierEditPopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
        { type: _services_carrier_service__WEBPACK_IMPORTED_MODULE_6__["CarrierService"] },
        { type: _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_9__["WarehouseCarriersRouter"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CarrierEditPopupPage.prototype, "buttonClickEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], CarrierEditPopupPage.prototype, "onCompleteEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], CarrierEditPopupPage.prototype, "isDone", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_8__["default"])
    ], CarrierEditPopupPage.prototype, "carrier", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('basicInfoForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _basic_info_basic_info_form_component__WEBPACK_IMPORTED_MODULE_2__["BasicInfoFormComponent"])
    ], CarrierEditPopupPage.prototype, "basicInfoForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accountForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _account_account_form_component__WEBPACK_IMPORTED_MODULE_3__["AccountFormComponent"])
    ], CarrierEditPopupPage.prototype, "accountForm", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('locationForm', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _location_location_form_component__WEBPACK_IMPORTED_MODULE_5__["LocationFormComponent"])
    ], CarrierEditPopupPage.prototype, "locationForm", void 0);
    CarrierEditPopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-edit-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-edit-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-edit-popup.scss */ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"],
            _services_carrier_service__WEBPACK_IMPORTED_MODULE_6__["CarrierService"],
            _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_9__["WarehouseCarriersRouter"]])
    ], CarrierEditPopupPage);
    return CarrierEditPopupPage;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/location/location-form.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/location/location-form.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-location-form .location-find {\n  padding-top: 0px !important;\n  margin-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  width: 70%;\n  margin: auto;\n}\n\n.carrier-location-form ion-button {\n  border: none;\n}\n\n.carrier-location-form ion-select {\n  padding: 0;\n  margin: 5px 0 6px 0;\n}\n\n.carrier-location-form .search-find ion-col.col div.input-wrapper ion-label.label.label-md {\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n}\n\n.carrier-location-form .search-find div.item-inner {\n  border-bottom: 0px !important;\n}\n\n.carrier-location-form .crete-carrier-location-title ion-col.col h5 {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.carrier-location-form ion-grid.buttons-back-done {\n  padding-top: 0px !important;\n  padding-bottom: 0px !important;\n  margin-bottom: 0px !important;\n  margin-top: 0px !important;\n}\n\n.carrier-location-form .g-map {\n  height: 190px !important;\n}\n\n.carrier-location-form .items-end {\n  display: flex;\n  align-items: flex-end;\n  padding-bottom: 5px;\n}\n\n.carrier-location-form .items-end ion-item {\n  width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci1lZGl0LXBvcHVwL2xvY2F0aW9uL2xvY2F0aW9uLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvK2NhcnJpZXJzL2NhcnJpZXItZWRpdC1wb3B1cC9sb2NhdGlvbi9sb2NhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0FDQWQ7O0FEUEE7RUFXRSxZQUFZO0FDQWQ7O0FEWEE7RUFlRSxVQUFVO0VBQ1YsbUJBQW1CO0FDQXJCOztBRGhCQTtFQXVCSyxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FDSHBCOztBRHZCQTtFQStCRyw2QkFBNkI7QUNKaEM7O0FEM0JBO0VBc0NJLDJCQUEyQjtFQUMzQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQ1A5Qjs7QURsQ0E7RUErQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FDVDVCOztBRHpDQTtFQXFERSx3QkFBd0I7QUNSMUI7O0FEN0NBO0VBeURFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FDUnJCOztBRG5EQTtFQTZERyxXQUFXO0FDTmQiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLWVkaXQtcG9wdXAvbG9jYXRpb24vbG9jYXRpb24tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJyaWVyLWxvY2F0aW9uLWZvcm0ge1xuXHQubG9jYXRpb24tZmluZCB7XG5cdFx0cGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuXHRcdG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuXHRcdHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0XHRtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0XHR3aWR0aDogNzAlO1xuXHRcdG1hcmdpbjogYXV0bztcblx0fVxuXG5cdGlvbi1idXR0b24ge1xuXHRcdGJvcmRlcjogbm9uZTtcblx0fVxuXG5cdGlvbi1zZWxlY3Qge1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiA1cHggMCA2cHggMDtcblx0fVxuXG5cdC5zZWFyY2gtZmluZCB7XG5cdFx0aW9uLWNvbC5jb2wge1xuXHRcdFx0ZGl2LmlucHV0LXdyYXBwZXIge1xuXHRcdFx0XHRpb24tbGFiZWwubGFiZWwubGFiZWwtbWQge1xuXHRcdFx0XHRcdHBhZGRpbmctdG9wOiAwcHg7XG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHg7XG5cdFx0XHRcdFx0bWFyZ2luLXRvcDogMHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRpdi5pdGVtLWlubmVyIHtcblx0XHRcdGJvcmRlci1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuXHRcdH1cblx0fVxuXG5cdC5jcmV0ZS1jYXJyaWVyLWxvY2F0aW9uLXRpdGxlIHtcblx0XHRpb24tY29sLmNvbCB7XG5cdFx0XHRoNSB7XG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0cGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcblx0XHRcdFx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aW9uLWdyaWQuYnV0dG9ucy1iYWNrLWRvbmUge1xuXHRcdHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcblx0XHRwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG5cdH1cblx0LmctbWFwIHtcblx0XHRoZWlnaHQ6IDE5MHB4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuaXRlbXMtZW5kIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdGlvbi1pdGVtIHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0fVxufVxuIiwiLmNhcnJpZXItbG9jYXRpb24tZm9ybSAubG9jYXRpb24tZmluZCB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmNhcnJpZXItbG9jYXRpb24tZm9ybSBpb24tYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDVweCAwIDZweCAwO1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIC5zZWFyY2gtZmluZCBpb24tY29sLmNvbCBkaXYuaW5wdXQtd3JhcHBlciBpb24tbGFiZWwubGFiZWwubGFiZWwtbWQge1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNhcnJpZXItbG9jYXRpb24tZm9ybSAuc2VhcmNoLWZpbmQgZGl2Lml0ZW0taW5uZXIge1xuICBib3JkZXItYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItbG9jYXRpb24tZm9ybSAuY3JldGUtY2Fycmllci1sb2NhdGlvbi10aXRsZSBpb24tY29sLmNvbCBoNSB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJyaWVyLWxvY2F0aW9uLWZvcm0gaW9uLWdyaWQuYnV0dG9ucy1iYWNrLWRvbmUge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIC5nLW1hcCB7XG4gIGhlaWdodDogMTkwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcnJpZXItbG9jYXRpb24tZm9ybSAuaXRlbXMtZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4uY2Fycmllci1sb2NhdGlvbi1mb3JtIC5pdGVtcy1lbmQgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/location/location-form.component.ts":
/*!************************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/location/location-form.component.ts ***!
  \************************************************************************************/
/*! exports provided: LocationFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationFormComponent", function() { return LocationFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @modules/server.common/entities/GeoLocation */ "../common/src/entities/GeoLocation.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");







var LocationFormComponent = (function () {
    function LocationFormComponent(formBuilder, translate) {
        this.formBuilder = formBuilder;
        this.translate = translate;
        this.buttonClickEventComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.backToStep2event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapCoordEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.mapGeometryEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showCoordinates = false;
        this.OK = 'OK';
        this.CANCEL = 'CANCEL';
        this.PREFIX = 'CARRIERS_VIEW.ADD_CARRIER.';
    }
    LocationFormComponent.prototype.ngOnInit = function () {
        this._initGoogleAutocompleteApi();
        this.buildForm(this.formBuilder);
        this.bindFormControls();
        this.loadData();
    };
    LocationFormComponent.prototype.ngOnChanges = function () { };
    Object.defineProperty(LocationFormComponent.prototype, "buttonOK", {
        get: function () {
            return this._translate(this.PREFIX + this.OK);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationFormComponent.prototype, "buttonCancel", {
        get: function () {
            return this._translate(this.PREFIX + this.CANCEL);
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.prototype.buildForm = function (formBuilder) {
        this.form = formBuilder.group({
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            house: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lat: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lng: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postcode: [''],
        });
    };
    LocationFormComponent.prototype.bindFormControls = function () {
        this.city = this.form.get('city');
        this.street = this.form.get('street');
        this.house = this.form.get('house');
        this.country = this.form.get('country');
        this.lng = this.form.get('lng');
        this.lat = this.form.get('lat');
        this.postcode = this.form.get('postcode');
    };
    Object.defineProperty(LocationFormComponent.prototype, "countries", {
        get: function () {
            return _modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["countriesIdsToNamesArray"];
        },
        enumerable: true,
        configurable: true
    });
    LocationFormComponent.prototype.toggleCoordinates = function () {
        this.showCoordinates = !this.showCoordinates;
        console.log('Toggle Cordinates');
    };
    LocationFormComponent.prototype.textInputChange = function (val, input) {
        if (input === 'lat' || input === 'lng') {
            this._tryFindNewCoordinates();
        }
        else {
            this._tryFindNewAddress();
        }
    };
    LocationFormComponent.prototype.toStep2 = function () {
        this.backToStep2event.emit();
    };
    LocationFormComponent.prototype.clickComplete = function () {
        console.log('send event to parent');
        this.buttonClickEventComplete.emit('complete');
    };
    LocationFormComponent.prototype._tryFindNewCoordinates = function () {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            location: new google.maps.LatLng(this.lat.value, this.lng.value),
        }, function (res, status) {
            if (status === google.maps.GeocoderStatus.OK) {
                var location_1 = res[0].geometry.location;
                _this.mapCoordEmitter.emit(location_1);
                var place = res[0];
                _this._applyNewPlaceOnTheMap(place);
            }
        });
    };
    LocationFormComponent.prototype._applyNewPlaceOnTheMap = function (locationResult) {
        if (locationResult.geometry === undefined ||
            locationResult.geometry === null) {
            return;
        }
        var loc = locationResult.geometry.location;
        this.lat.setValue(loc.lat());
        this.lng.setValue(loc.lng());
        this.mapCoordEmitter.emit(loc);
        this.mapGeometryEmitter.emit(locationResult.geometry);
        this._gatherAddressInformation(locationResult);
    };
    LocationFormComponent.prototype._gatherAddressInformation = function (locationResult) {
        var longName = 'long_name';
        var shortName = 'short_name';
        var neededAddressTypes = {
            country: shortName,
            locality: longName,
            route: longName,
            intersection: longName,
            street_number: longName,
            postal_code: longName,
            administrative_area_level_1: shortName,
            administrative_area_level_2: shortName,
            administrative_area_level_3: shortName,
            administrative_area_level_4: shortName,
            administrative_area_level_5: shortName,
        };
        var streetName = '';
        var streetNumber = '';
        var country = '';
        var postcode = '';
        var city = '';
        locationResult.address_components.forEach(function (address) {
            var addressType = address.types[0];
            var addressTypeKey = neededAddressTypes[addressType];
            var val = address[addressTypeKey];
            switch (addressType) {
                case 'country':
                    country = val;
                    break;
                case 'locality':
                case 'administrative_area_level_1':
                case 'administrative_area_level_2':
                case 'administrative_area_level_3':
                case 'administrative_area_level_4':
                case 'administrative_area_level_5':
                    if (city === '') {
                        city = val;
                    }
                    break;
                case 'route':
                case 'intersection':
                    if (streetName === '') {
                        streetName = val;
                    }
                    break;
                case 'street_number':
                    streetNumber = val;
                    break;
                case 'postal_code':
                    postcode = val;
                    break;
            }
        });
        this._setFormLocationValues(country, city, streetName, streetNumber, postcode);
    };
    LocationFormComponent.prototype._translate = function (key) {
        var translationResult = '';
        this.translate.get(key).subscribe(function (res) {
            translationResult = res;
        });
        return translationResult;
    };
    LocationFormComponent.prototype._setFormLocationValues = function (country, city, streetName, streetNumber, postcode) {
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(country)) {
            this.country.setValue(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["Country"][country].toString());
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(city)) {
            this.city.setValue(city);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(streetName)) {
            this.street.setValue(streetName);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(streetNumber)) {
            this.house.setValue(streetNumber);
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(postcode)) {
            this.postcode.setValue(postcode);
        }
    };
    LocationFormComponent.prototype._initGoogleAutocompleteApi = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var inputElement, autocomplete;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        autocomplete = new google.maps.places.Autocomplete(inputElement);
                        this._setupGoogleAutocompleteOptions(autocomplete);
                        this._listenForGoogleAutocompleteAddressChanges(autocomplete);
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype._setupGoogleAutocompleteOptions = function (autocomplete) {
        autocomplete.setComponentRestrictions({ country: ['us', 'bg', 'il'] });
        autocomplete['setFields'](['address_components', 'geometry']);
    };
    LocationFormComponent.prototype._listenForGoogleAutocompleteAddressChanges = function (autocomplete) {
        var _this = this;
        autocomplete.addListener('place_changed', function (_) {
            var place = autocomplete.getPlace();
            _this._applyNewPlaceOnTheMap(place);
        });
    };
    LocationFormComponent.prototype._tryFindNewAddress = function () {
        var _this = this;
        var house = this.house.value;
        var city = this.city.value;
        var streetAddress = this.street.value;
        var countryName = Object(_modules_server_common_entities_GeoLocation__WEBPACK_IMPORTED_MODULE_4__["getCountryName"])(+this.country.value);
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(streetAddress) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(house) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(city) ||
            Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isEmpty"])(countryName)) {
            return;
        }
        var newAddress = "" + house + streetAddress + city + countryName;
        if (newAddress !== this._lastUsedAddress) {
            this._lastUsedAddress = newAddress;
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                address: streetAddress + " " + house + ", " + city,
                componentRestrictions: { country: countryName },
            }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    var formattedAddress = results[0].formatted_address;
                    var place = results[0];
                    _this._applyNewPlaceOnTheMap(place);
                    _this._applyFormattedAddress(formattedAddress);
                }
            });
        }
    };
    LocationFormComponent.prototype._applyFormattedAddress = function (address) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var inputElement;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.searchElement) return [3, 2];
                        return [4, this.searchElement['getInputElement']()];
                    case 1:
                        inputElement = _a.sent();
                        inputElement.value = address;
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    LocationFormComponent.prototype.loadData = function () {
        if (this.carrier) {
            var carrierGeoLocation = this.carrier.geoLocation;
            this.city.setValue(carrierGeoLocation.city);
            this.street.setValue(carrierGeoLocation.streetAddress);
            this.house.setValue(carrierGeoLocation.house);
            this.lat.setValue(carrierGeoLocation.coordinates.lat);
            this.lng.setValue(carrierGeoLocation.coordinates.lng);
            this.country.setValue(carrierGeoLocation.countryId.toString());
            this._tryFindNewCoordinates();
        }
    };
    LocationFormComponent.prototype.ngOnDestroy = function () { };
    LocationFormComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('autocomplete', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], LocationFormComponent.prototype, "searchElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_6__["default"])
    ], LocationFormComponent.prototype, "carrier", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LocationFormComponent.prototype, "buttonClickEventComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], LocationFormComponent.prototype, "backToStep2event", void 0);
    LocationFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-location-form',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./location-form.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-edit-popup/location/location-form.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./location-form.component.scss */ "./src/pages/+carriers/carrier-edit-popup/location/location-form.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], LocationFormComponent);
    return LocationFormComponent;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-edit-popup/location/location-form.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-edit-popup/location/location-form.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CarrierLocationFormsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierLocationFormsModule", function() { return CarrierLocationFormsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _location_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-form.component */ "./src/pages/+carriers/carrier-edit-popup/location/location-form.component.ts");
/* harmony import */ var _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@shared/google-map/google-map.module */ "./src/@shared/google-map/google-map.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");









var CarrierLocationFormsModule = (function () {
    function CarrierLocationFormsModule() {
    }
    CarrierLocationFormsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["IonicModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploadModule"],
                _shared_google_map_google_map_module__WEBPACK_IMPORTED_MODULE_7__["GoogleMapModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            declarations: [_location_form_component__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"]],
            exports: [_location_form_component__WEBPACK_IMPORTED_MODULE_6__["LocationFormComponent"]],
        })
    ], CarrierLocationFormsModule);
    return CarrierLocationFormsModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-track-popup/carrier-track-popup.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CarrierTrackPopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTrackPopupModule", function() { return CarrierTrackPopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _carrier_track_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrier-track-popup */ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../src/services/warehouses.service */ "./src/services/warehouses.service.ts");








var CarrierTrackPopupModule = (function () {
    function CarrierTrackPopupModule() {
    }
    CarrierTrackPopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_carrier_track_popup__WEBPACK_IMPORTED_MODULE_2__["CarrierTrackPopup"]],
            entryComponents: [_carrier_track_popup__WEBPACK_IMPORTED_MODULE_2__["CarrierTrackPopup"]],
            imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild(), _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
            providers: [_src_services_carrier_service__WEBPACK_IMPORTED_MODULE_4__["CarrierService"], _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_7__["WarehousesService"]],
        })
    ], CarrierTrackPopupModule);
    return CarrierTrackPopupModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-track-popup/carrier-track-popup.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carrier-track-wrapper {\n  display: flex !important;\n}\n\n.carrier-track-wrapper .modal-wrapper {\n  width: 800px;\n  height: 570px;\n  left: calc(50% - (800px / 2));\n  top: calc(50% - (570px / 2));\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  background: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .map {\n  width: 65%;\n  height: 100%;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar {\n  width: 35%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar h2 {\n  text-align: center;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar .close-btn {\n  position: absolute;\n  right: 15px;\n  top: 25px;\n  cursor: pointer;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul {\n  list-style-type: none;\n  display: flex;\n  flex-direction: column;\n  padding: 0;\n  padding-top: 5px;\n  box-sizing: border-box;\n  margin: 0;\n  border-bottom: 1px solid #b9b9b9;\n  height: auto;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul:last-child {\n  border: none;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul div {\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  padding-left: 10px;\n  padding-right: 20px;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul div img {\n  width: 32px;\n  height: 32px;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul div h4 {\n  margin-left: 15px;\n  color: gray;\n  line-height: 0.4;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul h3 {\n  margin-left: 10px;\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul small {\n  font-size: 0.7em;\n  margin-left: 10px;\n  transform: translateY(-5px);\n}\n\n.carrier-track-wrapper .modal-wrapper carrier-track-popup .sidebar ul li {\n  padding: 0;\n  margin-left: 10px;\n}\n\n.carrier-track-carrier-info {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.carrier-track-carrier-info h3,\n.carrier-track-carrier-info ul,\n.carrier-track-carrier-info li {\n  margin: 0;\n  padding: 0;\n}\n\n.carrier-track-carrier-info h3 {\n  margin-bottom: 10px;\n}\n\n.carrier-track-carrier-info li {\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2Fycmllci10cmFjay1wb3B1cC9jYXJyaWVyLXRyYWNrLXBvcHVwLnNjc3MiLCJzcmMvcGFnZXMvK2NhcnJpZXJzL2NhcnJpZXItdHJhY2stcG9wdXAvY2Fycmllci10cmFjay1wb3B1cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Msd0JBQXdCO0FDRnpCOztBRENBO0VBSUUsWUFQTztFQVFQLGFBUE87RUFRUCw2QkFBNkI7RUFDN0IsNEJBQTRCO0FDRDlCOztBRE5BO0VBVUcsc0NBQXNDO0VBQ3RDLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUNBaEM7O0FEbEJBO0VBcUJJLFVBQVU7RUFDVixZQUFZO0FDQ2hCOztBRHZCQTtFQTBCSSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUNDMUI7O0FEOUJBO0VBK0JLLGtCQUFrQjtBQ0d2Qjs7QURsQ0E7RUFrQ0ssa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZUFBZTtBQ0lwQjs7QUR6Q0E7RUF3Q0sscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsU0FBUztFQUNULGdDQUEyQztFQUMzQyxZQUFZO0FDS2pCOztBRHJEQTtFQWtETSxZQUFZO0FDT2xCOztBRHpEQTtFQXNETSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FDT3pCOztBRGpFQTtFQTZETyxXQUFXO0VBQ1gsWUFBWTtBQ1FuQjs7QUR0RUE7RUFrRU8saUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUNRdkI7O0FENUVBO0VBeUVNLGlCQUFpQjtBQ092Qjs7QURoRkE7RUE4RU0sZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwyQkFBMkI7QUNNakM7O0FEdEZBO0VBb0ZNLFVBQVU7RUFDVixpQkFBaUI7QUNNdkI7O0FERUE7RUFDQyxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7QUNDVjs7QURQQTs7O0VBV0UsU0FBUztFQUNULFVBQVU7QUNFWjs7QURkQTtFQWdCRSxtQkFBbUI7QUNFckI7O0FEbEJBO0VBb0JFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUNFcEIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVyLXRyYWNrLXBvcHVwL2NhcnJpZXItdHJhY2stcG9wdXAuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR3OiA4MDBweDtcbiRoOiA1NzBweDtcblxuLmNhcnJpZXItdHJhY2std3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblxuXHQubW9kYWwtd3JhcHBlciB7XG5cdFx0d2lkdGg6ICR3O1xuXHRcdGhlaWdodDogJGg7XG5cdFx0bGVmdDogY2FsYyg1MCUgLSAoI3skd30gLyAyKSk7XG5cdFx0dG9wOiBjYWxjKDUwJSAtICgjeyRofSAvIDIpKTtcblxuXHRcdGNhcnJpZXItdHJhY2stcG9wdXAge1xuXHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cblx0XHRcdC5tYXAge1xuXHRcdFx0XHR3aWR0aDogNjUlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHR9XG5cblx0XHRcdC5zaWRlYmFyIHtcblx0XHRcdFx0d2lkdGg6IDM1JTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRoMiB7XG5cdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC5jbG9zZS1idG4ge1xuXHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRyaWdodDogMTVweDtcblx0XHRcdFx0XHR0b3A6IDI1cHg7XG5cdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHVsIHtcblx0XHRcdFx0XHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0cGFkZGluZy10b3A6IDVweDtcblx0XHRcdFx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE4NSwgMTg1LCAxODUpO1xuXHRcdFx0XHRcdGhlaWdodDogYXV0bztcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGRpdiB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXG5cdFx0XHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMzJweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMnB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRoNCB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxNXB4O1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDAuNDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoMyB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHRcdC8vbGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c21hbGwge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAwLjdlbTtcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGxpIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLmNhcnJpZXItdHJhY2stY2Fycmllci1pbmZvIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xuXG5cdGgzLFxuXHR1bCxcblx0bGkge1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cblx0aDMge1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdH1cblxuXHRsaSB7XG5cdFx0bWFyZ2luLWxlZnQ6IDVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAzcHg7XG5cdH1cbn1cbiIsIi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIge1xuICB3aWR0aDogODAwcHg7XG4gIGhlaWdodDogNTcwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gKDgwMHB4IC8gMikpO1xuICB0b3A6IGNhbGMoNTAlIC0gKDU3MHB4IC8gMikpO1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgY2Fycmllci10cmFjay1wb3B1cCAubWFwIHtcbiAgd2lkdGg6IDY1JTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAgLnNpZGViYXIge1xuICB3aWR0aDogMzUlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgY2Fycmllci10cmFjay1wb3B1cCAuc2lkZWJhciBoMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNhcnJpZXItdHJhY2std3JhcHBlciAubW9kYWwtd3JhcHBlciBjYXJyaWVyLXRyYWNrLXBvcHVwIC5zaWRlYmFyIC5jbG9zZS1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDI1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcnJpZXItdHJhY2std3JhcHBlciAubW9kYWwtd3JhcHBlciBjYXJyaWVyLXRyYWNrLXBvcHVwIC5zaWRlYmFyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYjliOWI5O1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgY2Fycmllci10cmFjay1wb3B1cCAuc2lkZWJhciB1bDpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAgLnNpZGViYXIgdWwgZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAgLnNpZGViYXIgdWwgZGl2IGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgY2Fycmllci10cmFjay1wb3B1cCAuc2lkZWJhciB1bCBkaXYgaDQge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgY29sb3I6IGdyYXk7XG4gIGxpbmUtaGVpZ2h0OiAwLjQ7XG59XG5cbi5jYXJyaWVyLXRyYWNrLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgY2Fycmllci10cmFjay1wb3B1cCAuc2lkZWJhciB1bCBoMyB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAgLnNpZGViYXIgdWwgc21hbGwge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4uY2Fycmllci10cmFjay13cmFwcGVyIC5tb2RhbC13cmFwcGVyIGNhcnJpZXItdHJhY2stcG9wdXAgLnNpZGViYXIgdWwgbGkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmNhcnJpZXItdHJhY2stY2Fycmllci1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY2Fycmllci10cmFjay1jYXJyaWVyLWluZm8gaDMsXG4uY2Fycmllci10cmFjay1jYXJyaWVyLWluZm8gdWwsXG4uY2Fycmllci10cmFjay1jYXJyaWVyLWluZm8gbGkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5jYXJyaWVyLXRyYWNrLWNhcnJpZXItaW5mbyBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5jYXJyaWVyLXRyYWNrLWNhcnJpZXItaW5mbyBsaSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.ts":
/*!************************************************************************!*\
  !*** ./src/pages/+carriers/carrier-track-popup/carrier-track-popup.ts ***!
  \************************************************************************/
/*! exports provided: CarrierTrackPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierTrackPopup", function() { return CarrierTrackPopup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/server.common/entities/Carrier */ "../common/src/entities/Carrier.ts");
/* harmony import */ var _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/services/carrier.service */ "./src/services/carrier.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/services/warehouses.service */ "./src/services/warehouses.service.ts");






var directionsDisplay = new google.maps.DirectionsRenderer();
var directionsService = new google.maps.DirectionsService();
var CarrierTrackPopup = (function () {
    function CarrierTrackPopup(modalCtrl, carriersService, warehouseService) {
        this.modalCtrl = modalCtrl;
        this.carriersService = carriersService;
        this.warehouseService = warehouseService;
        this.myLatLng = { lat: 0, lng: 0 };
        this.storeIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon21.png';
        this.userIcon = 'http://maps.google.com/mapfiles/kml/pal3/icon48.png';
        this.carrierIcon = 'http://maps.google.com/mapfiles/kml/pal4/icon54.png';
    }
    CarrierTrackPopup.prototype.ngOnInit = function () {
        var geoLocation = this.carrier.geoLocation;
        this.coordinates = [
            geoLocation.coordinates.lat,
            geoLocation.coordinates.lng,
        ];
        this.myLatLng.lat = this.coordinates[0];
        this.myLatLng.lng = this.coordinates[1];
        this.loadMap();
    };
    Object.defineProperty(CarrierTrackPopup.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CarrierTrackPopup.prototype.loadMap = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mapProp, carrierInfoContent, _a, carrierMarker_1, carrierInfoWindow_1, warehouseInfoContent, warehouseInfoWindow_1, warehouseMarker_1, order, carrierMarker_2, carrierInfoWindow_2, warehouseMarker_2, warehouseInfoContent, warehouseInfoWindow_2, userMarker_1, userInfoContent, userInfoWindow_1, start, end, request;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        mapProp = {
                            center: this.myLatLng,
                            zoom: 15,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                        };
                        this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
                        carrierInfoContent = "\n\t\t<div class=\"carrier-track-carrier-info\">\n\t\t\t<h3>  " + this.carrier.fullName + "</h3>\n\t\t\t<ul>\n\t\t\t\t<li>" + this.carrier.username + "</li>\n\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-phone\"></i>" + this.carrier.phone + "</li>\n\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-address-card\"></i>" + this.carrier.geoLocation.streetAddress + "</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t\t";
                        _a = this;
                        return [4, this.warehouseService
                                .getStoreById(this.warehouseId)
                                .toPromise()];
                    case 1:
                        _a.warehouse = _b.sent();
                        if (!(this.carrier.status !== 0)) return [3, 2];
                        carrierMarker_1 = this.addMarker(this.myLatLng, this.map, this.carrierIcon);
                        carrierInfoWindow_1 = new google.maps.InfoWindow({
                            content: carrierInfoContent,
                        });
                        carrierMarker_1.addListener('click', function () {
                            carrierInfoWindow_1.open(_this.map, carrierMarker_1);
                        });
                        warehouseInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + this.warehouse.name + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactEmail + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactPhone + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-address-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.geoLocation.streetAddress + "\n\t\t\t\t\t\t\t\t\t\t</li>\n                                    </ul>\n                                </div>\n\t\t\t\t\t\t\t\t\t";
                        warehouseInfoWindow_1 = new google.maps.InfoWindow({
                            content: warehouseInfoContent,
                        });
                        warehouseMarker_1 = this.addMarker({
                            lat: this.warehouse.geoLocation.loc.coordinates[1],
                            lng: this.warehouse.geoLocation.loc.coordinates[0],
                        }, this.map, this.storeIcon);
                        warehouseMarker_1.addListener('click', function () {
                            warehouseInfoWindow_1.open(_this.map, warehouseMarker_1);
                        });
                        return [3, 4];
                    case 2:
                        if (!(this.carrier.status === 0)) return [3, 4];
                        return [4, this.carriersService.getCarrierCurrentOrder(this.carrier.id)];
                    case 3:
                        order = _b.sent();
                        carrierMarker_2 = this.addMarker(this.myLatLng, this.map, this.carrierIcon);
                        carrierInfoWindow_2 = new google.maps.InfoWindow({
                            content: carrierInfoContent,
                        });
                        carrierMarker_2.addListener('click', function () {
                            carrierInfoWindow_2.open(_this.map, carrierMarker_2);
                        });
                        warehouseMarker_2 = this.addMarker({
                            lat: this.warehouse.geoLocation.loc.coordinates[1],
                            lng: this.warehouse.geoLocation.loc.coordinates[0],
                        }, this.map, this.storeIcon);
                        warehouseInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + this.warehouse.name + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactEmail + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-phone\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.contactPhone + "\n\t\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t\t<i style='margin-right:5px;' class=\"fa fa-address-card\"></i>\n\t\t\t\t\t\t\t\t\t\t\t" + this.warehouse.geoLocation.streetAddress + "\n\t\t\t\t\t\t\t\t\t\t</li>\n                                    </ul>\n                                </div>\n\t\t\t\t\t\t\t\t\t";
                        warehouseInfoWindow_2 = new google.maps.InfoWindow({
                            content: warehouseInfoContent,
                        });
                        warehouseMarker_2.addListener('click', function () {
                            warehouseInfoWindow_2.open(_this.map, warehouseMarker_2);
                        });
                        if (order) {
                            this.user = order.user;
                            userMarker_1 = this.addMarker({
                                lat: this.user.geoLocation.loc.coordinates[1],
                                lng: this.user.geoLocation.loc.coordinates[0],
                            }, this.map, this.userIcon);
                            userInfoContent = "\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t<h3>  " + (this.user.firstName + ' ' + this.user.lastName) + "</h3>\n\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-envelope-open\"></i>" + this.user.email + "</li>\n                                             <li><i style='margin-right:5px;' class=\"fa fa-phone\"></i>" + this.user.phone + "</li>\n\t\t\t\t\t\t\t\t\t\t<li><i style='margin-right:5px;' class=\"fa fa-address-card\"></i>" + this.user.geoLocation.streetAddress + "</li>\n                                    </ul>\n                                <div class=\"carrier-info\">\n\t\t\t\t\t\t\t\t\t";
                            userInfoWindow_1 = new google.maps.InfoWindow({
                                content: userInfoContent,
                            });
                            userMarker_1.addListener('click', function () {
                                userInfoWindow_1.open(_this.map, userMarker_1);
                            });
                            start = new google.maps.LatLng(this.user.geoLocation.loc.coordinates[1], this.user.geoLocation.loc.coordinates[0]);
                            end = new google.maps.LatLng(this.warehouse.geoLocation.loc.coordinates[1], this.warehouse.geoLocation.loc.coordinates[0]);
                            request = {
                                origin: start,
                                destination: end,
                                travelMode: 'DRIVING',
                            };
                            directionsService.route(request, function (res, stat) {
                                if (stat === 'OK') {
                                    directionsDisplay.setDirections(res);
                                }
                            });
                            directionsDisplay.setOptions({
                                suppressMarkers: true,
                            });
                            directionsDisplay.setMap(this.map);
                        }
                        _b.label = 4;
                    case 4: return [2];
                }
            });
        });
    };
    CarrierTrackPopup.prototype.addMarker = function (position, map, icon) {
        return new google.maps.Marker({
            position: position,
            map: map,
            icon: icon,
        });
    };
    CarrierTrackPopup.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    CarrierTrackPopup.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
        { type: _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_3__["CarrierService"] },
        { type: _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_5__["WarehousesService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('gmap', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CarrierTrackPopup.prototype, "gmapElement", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _modules_server_common_entities_Carrier__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], CarrierTrackPopup.prototype, "carrier", void 0);
    CarrierTrackPopup = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'carrier-track-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carrier-track-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carrier-track-popup/carrier-track-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carrier-track-popup.scss */ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _src_services_carrier_service__WEBPACK_IMPORTED_MODULE_3__["CarrierService"],
            _src_services_warehouses_service__WEBPACK_IMPORTED_MODULE_5__["WarehousesService"]])
    ], CarrierTrackPopup);
    return CarrierTrackPopup;
}());



/***/ }),

/***/ "./src/pages/+carriers/carriers.module.ts":
/*!************************************************!*\
  !*** ./src/pages/+carriers/carriers.module.ts ***!
  \************************************************/
/*! exports provided: CarrierssPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarrierssPageModule", function() { return CarrierssPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/client.common.angular2/pipes/pipes.module */ "../common-angular/src/pipes/pipes.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/components/components.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _carriers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carriers */ "./src/pages/+carriers/carriers.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-carriers-router.service */ "../common-angular/src/routers/warehouse-carriers-router.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _components_carriers_table_addresses__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/carriers-table/addresses */ "./src/components/carriers-table/addresses.ts");
/* harmony import */ var _components_carriers_table_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/carriers-table/status */ "./src/components/carriers-table/status.ts");
/* harmony import */ var _components_carriers_table_deliveries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/carriers-table/deliveries */ "./src/components/carriers-table/deliveries.ts");
/* harmony import */ var _components_carriers_table_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/carriers-table/image */ "./src/components/carriers-table/image.ts");
/* harmony import */ var _src_components_carriers_table_phone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/components/carriers-table/phone */ "./src/components/carriers-table/phone.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_carriers_popup_add_carriers_popup_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-carriers-popup/add-carriers-popup.module */ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.module.ts");
/* harmony import */ var _carrier_addr_popup_carrier_addr_popup_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./carrier-addr-popup/carrier-addr-popup.module */ "./src/pages/+carriers/carrier-addr-popup/carrier-addr-popup.module.ts");
/* harmony import */ var _carrier_deliveries_popup_carrier_deliveries_popup_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./carrier-deliveries-popup/carrier-deliveries-popup.module */ "./src/pages/+carriers/carrier-deliveries-popup/carrier-deliveries-popup.module.ts");
/* harmony import */ var _carrier_edit_popup_carrier_edit_popup_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./carrier-edit-popup/carrier-edit-popup.module */ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.module.ts");
/* harmony import */ var _carrier_track_popup_carrier_track_popup_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./carrier-track-popup/carrier-track-popup.module */ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.module.ts");
/* harmony import */ var components_confirm_delete_popup_confirm_delete_popup_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! components/confirm-delete-popup/confirm-delete-popup.module */ "./src/components/confirm-delete-popup/confirm-delete-popup.module.ts");























var routes = [
    {
        path: '',
        component: _carriers__WEBPACK_IMPORTED_MODULE_5__["CarriersPage"],
    },
];
var CarrierssPageModule = (function () {
    function CarrierssPageModule() {
    }
    CarrierssPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _carriers__WEBPACK_IMPORTED_MODULE_5__["CarriersPage"],
                _components_carriers_table_image__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"],
                _components_carriers_table_addresses__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"],
                _components_carriers_table_status__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"],
                _components_carriers_table_deliveries__WEBPACK_IMPORTED_MODULE_10__["DeliveriesComponent"],
            ],
            imports: [
                _modules_client_common_angular2_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_2__["PipesModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_7__["Ng2SmartTableModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_14__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(routes),
                _add_carriers_popup_add_carriers_popup_module__WEBPACK_IMPORTED_MODULE_17__["AddCarriersPopupPageModule"],
                _carrier_addr_popup_carrier_addr_popup_module__WEBPACK_IMPORTED_MODULE_18__["CarrierAddrPopupPageModule"],
                _carrier_deliveries_popup_carrier_deliveries_popup_module__WEBPACK_IMPORTED_MODULE_19__["CarrierDeliveriesPopupPageModule"],
                _carrier_edit_popup_carrier_edit_popup_module__WEBPACK_IMPORTED_MODULE_20__["CarrierEditPopupModule"],
                components_confirm_delete_popup_confirm_delete_popup_module__WEBPACK_IMPORTED_MODULE_22__["ConfirmDeletePopupModule"],
                _carrier_track_popup_carrier_track_popup_module__WEBPACK_IMPORTED_MODULE_21__["CarrierTrackPopupModule"],
            ],
            entryComponents: [
                _components_carriers_table_image__WEBPACK_IMPORTED_MODULE_11__["ImageComponent"],
                _components_carriers_table_addresses__WEBPACK_IMPORTED_MODULE_8__["AddressesComponent"],
                _components_carriers_table_status__WEBPACK_IMPORTED_MODULE_9__["StatusComponent"],
                _components_carriers_table_deliveries__WEBPACK_IMPORTED_MODULE_10__["DeliveriesComponent"],
                _src_components_carriers_table_phone__WEBPACK_IMPORTED_MODULE_12__["PhoneComponent"],
            ],
            providers: [_modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_6__["WarehouseCarriersRouter"]],
        })
    ], CarrierssPageModule);
    return CarrierssPageModule;
}());



/***/ }),

/***/ "./src/pages/+carriers/carriers.scss":
/*!*******************************************!*\
  !*** ./src/pages/+carriers/carriers.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-carriers {\n  background-color: white;\n  min-height: 100%;\n  overflow-y: scroll;\n}\n\n.page-carriers #contentWrapper {\n  margin-top: 45px;\n}\n\n.page-carriers a.button {\n  font-size: 0.8em;\n}\n\n.page-carriers .icon.button-icon.plus-navbar-button {\n  color: white;\n}\n\n.page-carriers .allowOverflow {\n  display: contents !important;\n  min-width: 130px !important;\n  width: auto !important;\n  position: absolute;\n  right: 10px !important;\n}\n\n.page-carriers .allowOverflow a {\n  width: auto;\n  overflow: unset !important;\n  padding: 0 !important;\n  border: 1px solid #242530 !important;\n}\n\n.page-carriers .scroll-content {\n  padding: 0 !important;\n  padding-top: 16px !important;\n}\n\n.page-carriers #customersTable {\n  display: block;\n  width: 100%;\n  text-align: left;\n}\n\n.page-carriers .grid {\n  padding: 0px !important;\n}\n\n.page-carriers .ordersCount {\n  background-color: #111111;\n  width: 40px;\n  text-align: center;\n  border-radius: 50px;\n  font-weight: bold;\n  color: #fff;\n}\n\n.page-carriers .call-icon {\n  margin-right: 7px;\n}\n\n.page-carriers .call-icon:before {\n  font-size: 1.3em;\n  cursor: pointer;\n  margin-left: 5px;\n  position: relative;\n  top: 3px;\n}\n\n.page-carriers .work {\n  color: green;\n}\n\n.page-carriers .notWork {\n  color: red;\n}\n\n.page-carriers ion-icon {\n  font-size: 24px;\n}\n\n.page-carriers ion-icon.call-icon.icon.icon-md.ion-md-call.can-call {\n  color: green !important;\n}\n\n.page-carriers .add-wrapper {\n  position: relative;\n}\n\n.page-carriers .add-carriers {\n  border-radius: 50%;\n  background: #ffb833;\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  right: 10px;\n  top: 10px;\n  -webkit-filter: drop-shadow(3px 3px 3px #b6b8b6);\n          filter: drop-shadow(3px 3px 3px #b6b8b6);\n}\n\n.page-carriers .add-carriers:hover {\n  background: #ffca69 !important;\n}\n\n.page-carriers .ng2-smart-pagination-nav li {\n  width: 50% !important;\n}\n\n.page-carriers .ng2-smart-titles {\n  height: 55px !important;\n}\n\n.page-carriers .pagination {\n  line-height: 1 !important;\n  margin: 0 10px !important;\n}\n\n.page-carriers table {\n  margin-bottom: 25px !important;\n}\n\n.page-carriers .button-text {\n  padding: 0 10px;\n}\n\n#headerRow {\n  font-weight: bolder;\n  text-align: left;\n  border-bottom: 1px solid #fff;\n  font-size: 1.1em;\n  padding-top: 15px;\n  padding-bottom: 5px;\n  padding-left: 15px;\n  padding-right: 15px;\n  background: #333;\n  color: white;\n}\n\n.ng2-smart-th.status input,\n.ng2-smart-th.deliveries input {\n  text-align: center;\n}\n\n.ng2-smart-actions-title a {\n  padding: 0 !important;\n}\n\n.ng2-smart-actions {\n  display: flex;\n  align-items: center;\n}\n\n.ng2-smart-actions {\n  display: flex;\n  justify-content: space-between;\n  height: 83px;\n  border-bottom: none !important;\n}\n\n.ng2-smart-actions i {\n  font-size: 1.4em;\n  padding: 0;\n  margin: 0;\n}\n\n.ng2-smart-actions a {\n  padding: 0 !important;\n  margin: 0;\n  height: 23px !important;\n  width: 23px !important;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.ng2-smart-actions ng2-st-tbody-custom {\n  width: calc(33% + 0.5%);\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n.ng2-smart-actions ng2-st-tbody-edit-delete {\n  width: calc(66% + 0.5%);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.ng2-smart-actions ng2-st-tbody-edit-delete a:nth-child(1) {\n  transform: translateY(1px);\n}\n\n.ng2-smart-actions ng2-st-tbody-edit-delete a:nth-child(1) i {\n  font-size: 1.55em;\n}\n\n.right-container {\n  position: absolute;\n  right: 0;\n  display: flex;\n  padding-right: 10px;\n}\n\n.track-btn {\n  transform: translateX(-130px);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9wYWdlcy8rY2FycmllcnMvY2FycmllcnMuc2NzcyIsInNyYy9wYWdlcy8rY2FycmllcnMvY2FycmllcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FDQ25COztBREpBO0VBTUUsZ0JBQWdCO0FDRWxCOztBRFJBO0VBU0UsZ0JBQWdCO0FDR2xCOztBRFpBO0VBWUUsWUFBWTtBQ0lkOztBRGhCQTtFQWVFLDRCQUE0QjtFQU81QiwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUNEeEI7O0FEeEJBO0VBaUJHLFdBQVc7RUFDWCwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLG9DQUFvQztBQ1d2Qzs7QUQvQkE7RUE2QkUscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQ005Qjs7QURwQ0E7RUFpQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxnQkFBZ0I7QUNPbEI7O0FEMUNBO0VBc0NFLHVCQUF1QjtBQ1F6Qjs7QUQ5Q0E7RUF5Q0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FDU2I7O0FEdkRBO0VBa0RFLGlCQUFpQjtBQ1NuQjs7QUQzREE7RUFvREcsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFFBQVE7QUNXWDs7QURuRUE7RUE2REUsWUFBWTtBQ1VkOztBRHZFQTtFQWlFRSxVQUFVO0FDVVo7O0FEM0VBO0VBcUVFLGVBQWU7QUNVakI7O0FEL0VBO0VBeUVFLHVCQUF1QjtBQ1V6Qjs7QURuRkE7RUE2RUUsa0JBQWtCO0FDVXBCOztBRHZGQTtFQWlGRSxrQkFBa0I7RUFDbEIsbUJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxTQUFTO0VBQ1QsZ0RBQW1EO1VBQW5ELHdDQUFtRDtBQ1VyRDs7QURsR0E7RUE0RkUsOEJBQXlDO0FDVTNDOztBRHRHQTtFQWlHRyxxQkFBcUI7QUNTeEI7O0FEMUdBO0VBc0dFLHVCQUF1QjtBQ1F6Qjs7QUQ5R0E7RUEwR0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtBQ1EzQjs7QURuSEE7RUErR0UsOEJBQThCO0FDUWhDOztBRHZIQTtFQW1IRSxlQUFlO0FDUWpCOztBREpBO0VBQ0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQ09iOztBREpBOztFQUVDLGtCQUFrQjtBQ09uQjs7QURKQTtFQUNDLHFCQUFxQjtBQ090Qjs7QURKQTtFQUNDLGFBQWE7RUFDYixtQkFBbUI7QUNPcEI7O0FESkE7RUFDQyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7RUFDWiw4QkFBOEI7QUNPL0I7O0FEWEE7RUFNRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFNBQVM7QUNTWDs7QURqQkE7RUFXRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUNVekI7O0FEM0JBO0VBb0JFLHVCQUF1QjtFQUN2Qix3QkFBd0I7RUFDeEIsOEJBQThCO0VBQzlCLGtDQUFrQztBQ1dwQzs7QURsQ0E7RUEwQkUsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FDWXJCOztBRHpDQTtFQStCRywwQkFBMEI7QUNjN0I7O0FEN0NBO0VBaUNJLGlCQUFpQjtBQ2dCckI7O0FEVkE7RUFDQyxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYixtQkFBbUI7QUNhcEI7O0FEVkE7RUFDQyw2QkFBNkI7QUNhOUIiLCJmaWxlIjoic3JjL3BhZ2VzLytjYXJyaWVycy9jYXJyaWVycy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtY2FycmllcnMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0bWluLWhlaWdodDogMTAwJTtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXG5cdCNjb250ZW50V3JhcHBlciB7XG5cdFx0bWFyZ2luLXRvcDogNDVweDtcblx0fVxuXHRhLmJ1dHRvbiB7XG5cdFx0Zm9udC1zaXplOiAwLjhlbTtcblx0fVxuXHQuaWNvbi5idXR0b24taWNvbi5wbHVzLW5hdmJhci1idXR0b24ge1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0fVxuXHQuYWxsb3dPdmVyZmxvdyB7XG5cdFx0ZGlzcGxheTogY29udGVudHMgIWltcG9ydGFudDtcblx0XHRhIHtcblx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0b3ZlcmZsb3c6IHVuc2V0ICFpbXBvcnRhbnQ7XG5cdFx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdFx0XHRib3JkZXI6IDFweCBzb2xpZCAjMjQyNTMwICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHRcdG1pbi13aWR0aDogMTMwcHggIWltcG9ydGFudDtcblx0XHR3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMTBweCAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnNjcm9sbC1jb250ZW50IHtcblx0XHRwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG5cdFx0cGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcblx0fVxuXHQjY3VzdG9tZXJzVGFibGUge1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdH1cblx0LmdyaWQge1xuXHRcdHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuXHR9XG5cdC5vcmRlcnNDb3VudCB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcblx0XHR3aWR0aDogNDBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXG5cdC5jYWxsLWljb24ge1xuXHRcdG1hcmdpbi1yaWdodDogN3B4O1xuXHRcdCY6YmVmb3JlIHtcblx0XHRcdGZvbnQtc2l6ZTogMS4zZW07XG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRtYXJnaW4tbGVmdDogNXB4O1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0dG9wOiAzcHg7XG5cdFx0fVxuXHR9XG5cblx0Lndvcmsge1xuXHRcdGNvbG9yOiBncmVlbjtcblx0fVxuXG5cdC5ub3RXb3JrIHtcblx0XHRjb2xvcjogcmVkO1xuXHR9XG5cblx0aW9uLWljb24ge1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0fVxuXG5cdGlvbi1pY29uLmNhbGwtaWNvbi5pY29uLmljb24tbWQuaW9uLW1kLWNhbGwuY2FuLWNhbGwge1xuXHRcdGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xuXHR9XG5cblx0LmFkZC13cmFwcGVyIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblxuXHQuYWRkLWNhcnJpZXJzIHtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMTg0LCA1MSk7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiA1MHB4O1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRyaWdodDogMTBweDtcblx0XHR0b3A6IDEwcHg7XG5cdFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygzcHggM3B4IDNweCByZ2IoMTgyLCAxODQsIDE4MikpO1xuXHR9XG5cblx0LmFkZC1jYXJyaWVyczpob3ZlciB7XG5cdFx0YmFja2dyb3VuZDogcmdiKDI1NSwgMjAyLCAxMDUpICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQubmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2IHtcblx0XHRsaSB7XG5cdFx0XHR3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG5cdFx0fVxuXHR9XG5cblx0Lm5nMi1zbWFydC10aXRsZXMge1xuXHRcdGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xuXHR9XG5cblx0LnBhZ2luYXRpb24ge1xuXHRcdGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luOiAwIDEwcHggIWltcG9ydGFudDtcblx0fVxuXG5cdHRhYmxlIHtcblx0XHRtYXJnaW4tYm90dG9tOiAyNXB4ICFpbXBvcnRhbnQ7XG5cdH1cblxuXHQuYnV0dG9uLXRleHQge1xuXHRcdHBhZGRpbmc6IDAgMTBweDtcblx0fVxufVxuXG4jaGVhZGVyUm93IHtcblx0Zm9udC13ZWlnaHQ6IGJvbGRlcjtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG5cdGZvbnQtc2l6ZTogMS4xZW07XG5cdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRwYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRwYWRkaW5nLWxlZnQ6IDE1cHg7XG5cdHBhZGRpbmctcmlnaHQ6IDE1cHg7XG5cdGJhY2tncm91bmQ6ICMzMzM7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5nMi1zbWFydC10aC5zdGF0dXMgaW5wdXQsXG4ubmcyLXNtYXJ0LXRoLmRlbGl2ZXJpZXMgaW5wdXQge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucy10aXRsZSBhIHtcblx0cGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGhlaWdodDogODNweDtcblx0Ym9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xuXHRpIHtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0bWFyZ2luOiAwO1xuXHR9XG5cdGEge1xuXHRcdHBhZGRpbmc6IDAgIWltcG9ydGFudDtcblx0XHRtYXJnaW46IDA7XG5cdFx0aGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG5cdFx0d2lkdGg6IDIzcHggIWltcG9ydGFudDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdH1cblx0bmcyLXN0LXRib2R5LWN1c3RvbSB7XG5cdFx0d2lkdGg6IGNhbGMoMzMlICsgMC41JSk7XG5cdFx0ZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuXHR9XG5cdG5nMi1zdC10Ym9keS1lZGl0LWRlbGV0ZSB7XG5cdFx0d2lkdGg6IGNhbGMoNjYlICsgMC41JSk7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGE6bnRoLWNoaWxkKDEpIHtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuXHRcdFx0aSB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMS41NWVtO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0ZGlzcGxheTogZmxleDtcblx0cGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnRyYWNrLWJ0biB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTMwcHgpO1xufVxuIiwiLnBhZ2UtY2FycmllcnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ucGFnZS1jYXJyaWVycyAjY29udGVudFdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiA0NXB4O1xufVxuXG4ucGFnZS1jYXJyaWVycyBhLmJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5wYWdlLWNhcnJpZXJzIC5pY29uLmJ1dHRvbi1pY29uLnBsdXMtbmF2YmFyLWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2UtY2FycmllcnMgLmFsbG93T3ZlcmZsb3cge1xuICBkaXNwbGF5OiBjb250ZW50cyAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLnBhZ2UtY2FycmllcnMgLmFsbG93T3ZlcmZsb3cgYSB7XG4gIHdpZHRoOiBhdXRvO1xuICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyNTMwICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLWNhcnJpZXJzIC5zY3JvbGwtY29udGVudCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDE2cHggIWltcG9ydGFudDtcbn1cblxuLnBhZ2UtY2FycmllcnMgI2N1c3RvbWVyc1RhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGFnZS1jYXJyaWVycyAuZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1jYXJyaWVycyAub3JkZXJzQ291bnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xuICB3aWR0aDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5wYWdlLWNhcnJpZXJzIC5jYWxsLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDdweDtcbn1cblxuLnBhZ2UtY2FycmllcnMgLmNhbGwtaWNvbjpiZWZvcmUge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG59XG5cbi5wYWdlLWNhcnJpZXJzIC53b3JrIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4ucGFnZS1jYXJyaWVycyAubm90V29yayB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5wYWdlLWNhcnJpZXJzIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ucGFnZS1jYXJyaWVycyBpb24taWNvbi5jYWxsLWljb24uaWNvbi5pY29uLW1kLmlvbi1tZC1jYWxsLmNhbi1jYWxsIHtcbiAgY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLWNhcnJpZXJzIC5hZGQtd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhZ2UtY2FycmllcnMgLmFkZC1jYXJyaWVycyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogI2ZmYjgzMztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDNweCAzcHggM3B4ICNiNmI4YjYpO1xufVxuXG4ucGFnZS1jYXJyaWVycyAuYWRkLWNhcnJpZXJzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmY2E2OSAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1jYXJyaWVycyAubmcyLXNtYXJ0LXBhZ2luYXRpb24tbmF2IGxpIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1jYXJyaWVycyAubmcyLXNtYXJ0LXRpdGxlcyB7XG4gIGhlaWdodDogNTVweCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1jYXJyaWVycyAucGFnaW5hdGlvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYWdlLWNhcnJpZXJzIHRhYmxlIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweCAhaW1wb3J0YW50O1xufVxuXG4ucGFnZS1jYXJyaWVycyAuYnV0dG9uLXRleHQge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5cbiNoZWFkZXJSb3cge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubmcyLXNtYXJ0LXRoLnN0YXR1cyBpbnB1dCxcbi5uZzItc21hcnQtdGguZGVsaXZlcmllcyBpbnB1dCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5nMi1zbWFydC1hY3Rpb25zLXRpdGxlIGEge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgaGVpZ2h0OiA4M3B4O1xuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyBpIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMgYSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwO1xuICBoZWlnaHQ6IDIzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDIzcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyBuZzItc3QtdGJvZHktY3VzdG9tIHtcbiAgd2lkdGg6IGNhbGMoMzMlICsgMC41JSk7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMgbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIHtcbiAgd2lkdGg6IGNhbGMoNjYlICsgMC41JSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmcyLXNtYXJ0LWFjdGlvbnMgbmcyLXN0LXRib2R5LWVkaXQtZGVsZXRlIGE6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XG59XG5cbi5uZzItc21hcnQtYWN0aW9ucyBuZzItc3QtdGJvZHktZWRpdC1kZWxldGUgYTpudGgtY2hpbGQoMSkgaSB7XG4gIGZvbnQtc2l6ZTogMS41NWVtO1xufVxuXG4ucmlnaHQtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLnRyYWNrLWJ0biB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTMwcHgpO1xufVxuIl19 */");

/***/ }),

/***/ "./src/pages/+carriers/carriers.ts":
/*!*****************************************!*\
  !*** ./src/pages/+carriers/carriers.ts ***!
  \*****************************************/
/*! exports provided: CarriersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarriersPage", function() { return CarriersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _components_carriers_table_phone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/carriers-table/phone */ "./src/components/carriers-table/phone.ts");
/* harmony import */ var _components_carriers_table_addresses__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/carriers-table/addresses */ "./src/components/carriers-table/addresses.ts");
/* harmony import */ var _components_carriers_table_status__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/carriers-table/status */ "./src/components/carriers-table/status.ts");
/* harmony import */ var _components_carriers_table_deliveries__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/carriers-table/deliveries */ "./src/components/carriers-table/deliveries.ts");
/* harmony import */ var _components_carriers_table_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/carriers-table/image */ "./src/components/carriers-table/image.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-carriers-router.service */ "../common-angular/src/routers/warehouse-carriers-router.service.ts");
/* harmony import */ var _src_services_store_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../src/services/store.service */ "./src/services/store.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _add_carriers_popup_add_carriers_popup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-carriers-popup/add-carriers-popup */ "./src/pages/+carriers/add-carriers-popup/add-carriers-popup.ts");
/* harmony import */ var _carrier_edit_popup_carrier_edit_popup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./carrier-edit-popup/carrier-edit-popup */ "./src/pages/+carriers/carrier-edit-popup/carrier-edit-popup.ts");
/* harmony import */ var _carrier_track_popup_carrier_track_popup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./carrier-track-popup/carrier-track-popup */ "./src/pages/+carriers/carrier-track-popup/carrier-track-popup.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var components_confirm_delete_popup_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! components/confirm-delete-popup/confirm-delete-popup */ "./src/components/confirm-delete-popup/confirm-delete-popup.ts");
/* harmony import */ var _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @modules/client.common.angular2/routers/warehouse-router.service */ "../common-angular/src/routers/warehouse-router.service.ts");




















var CarriersPage = (function () {
    function CarriersPage(router, modalCtrl, warehouseCarriersRouter, _translateService, store, warehouseRouter) {
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.warehouseCarriersRouter = warehouseCarriersRouter;
        this._translateService = _translateService;
        this.store = store;
        this.warehouseRouter = warehouseRouter;
        this.sourceSmartTable = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["LocalDataSource"]();
        this._ngDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(CarriersPage.prototype, "deviceId", {
        get: function () {
            return localStorage.getItem('_deviceId');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarriersPage.prototype, "warehouseId", {
        get: function () {
            return localStorage.getItem('_warehouseId');
        },
        enumerable: true,
        configurable: true
    });
    CarriersPage.prototype.ngOnInit = function () {
        this._loadCarriers();
        this._loadSettingsSmartTable();
    };
    CarriersPage.prototype.openAddCarriers = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var addCarriersPopupModal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: _add_carriers_popup_add_carriers_popup__WEBPACK_IMPORTED_MODULE_14__["AddCarriersPopupPage"],
                            cssClass: 'add-carriers-popup',
                        })];
                    case 1:
                        addCarriersPopupModal = _a.sent();
                        return [4, addCarriersPopupModal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarriersPage.prototype.trackCarrier = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: _carrier_track_popup_carrier_track_popup__WEBPACK_IMPORTED_MODULE_16__["CarrierTrackPopup"],
                            componentProps: { carrier: e.data.carrier },
                            cssClass: 'carrier-track-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarriersPage.prototype.deleteCarrier = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal, res, carrierId_1, id, merchant;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: components_confirm_delete_popup_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_18__["ConfirmDeletePopupPage"],
                            componentProps: { data: e.data },
                            cssClass: 'confirm-delete-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [4, modal.onDidDismiss()];
                    case 3:
                        res = _a.sent();
                        if (!res.data) return [3, 6];
                        carrierId_1 = e.data.carrier.id;
                        id = this.warehouseId;
                        return [4, this.warehouseRouter
                                .get(id)
                                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])())
                                .toPromise()];
                    case 4:
                        merchant = _a.sent();
                        merchant.usedCarriersIds = merchant.usedCarriersIds.filter(function (x) { return x !== carrierId_1; });
                        return [4, this.warehouseRouter.save(merchant)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2];
                }
            });
        });
    };
    CarriersPage.prototype.editCarrier = function (e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.modalCtrl.create({
                            component: _carrier_edit_popup_carrier_edit_popup__WEBPACK_IMPORTED_MODULE_15__["CarrierEditPopupPage"],
                            componentProps: { carrier: e.data.carrier },
                            cssClass: 'carrier-edit-wrapper',
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4, modal.present()];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CarriersPage.prototype._loadCarriers = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var loadData;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                loadData = function (carriers) {
                    var carriersVM = carriers.map(function (c) {
                        return {
                            image: c.logo,
                            name: c.firstName + ' ' + c.lastName,
                            phone: c.phone,
                            addresses: c.geoLocation.city,
                            status: c.status === 0 ? 'working' : 'not working',
                            carrier: c,
                        };
                    });
                    _this.sourceSmartTable.load(carriersVM);
                };
                this.warehouseCarriersRouter
                    .get(this.warehouseId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._ngDestroy$))
                    .subscribe(function (carriers) {
                    _this.carriers = carriers;
                    loadData(_this.carriers);
                    _this.carriers.length === 0
                        ? (_this.showNoDeliveryIcon = true)
                        : (_this.showNoDeliveryIcon = false);
                });
                return [2];
            });
        });
    };
    CarriersPage.prototype.goToTrackPage = function () {
        this.router.navigateByUrl('/track');
    };
    CarriersPage.prototype.ngOnDestroy = function () {
        this._ngDestroy$.next();
        this._ngDestroy$.complete();
    };
    CarriersPage.prototype._loadSettingsSmartTable = function () {
        var _this = this;
        var columnTitlePrefix = 'CARRIERS_VIEW.';
        var getTranslate = function (name) {
            return _this._translateService.get(columnTitlePrefix + name);
        };
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(getTranslate('IMAGE'), getTranslate('NAME'), getTranslate('PHONE_NUMBER'), getTranslate('ADDRESSES'), getTranslate('STATUS'), getTranslate('DELIVERIES'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this._ngDestroy$))
            .subscribe(function (_a) {
            var image = _a[0], name = _a[1], phone = _a[2], addresses = _a[3], status = _a[4], deliveries = _a[5];
            _this.settingsSmartTable = {
                mode: 'external',
                edit: {
                    editButtonContent: '<i class="fa fa-edit"></i>',
                    confirmEdit: true,
                },
                delete: {
                    deleteButtonContent: '<i class="fa fa-trash"></i>',
                    confirmDelete: true,
                },
                actions: {
                    custom: [
                        {
                            name: 'track',
                            title: '<i class="fa fa-map-marker"></i>',
                        },
                    ],
                },
                columns: {
                    image: {
                        title: image,
                        type: 'custom',
                        renderComponent: _components_carriers_table_image__WEBPACK_IMPORTED_MODULE_10__["ImageComponent"],
                        filter: false,
                    },
                    name: { title: name },
                    phone: {
                        title: phone,
                        type: 'custom',
                        renderComponent: _components_carriers_table_phone__WEBPACK_IMPORTED_MODULE_6__["PhoneComponent"],
                    },
                    addresses: {
                        title: addresses,
                        type: 'custom',
                        renderComponent: _components_carriers_table_addresses__WEBPACK_IMPORTED_MODULE_7__["AddressesComponent"],
                    },
                    status: {
                        title: status,
                        class: 'text-center',
                        type: 'custom',
                        renderComponent: _components_carriers_table_status__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                    },
                    deliveries: {
                        title: deliveries,
                        class: 'text-center',
                        filter: false,
                        type: 'custom',
                        renderComponent: _components_carriers_table_deliveries__WEBPACK_IMPORTED_MODULE_9__["DeliveriesComponent"],
                    },
                },
                pager: {
                    display: true,
                    perPage: 14,
                },
            };
        });
    };
    CarriersPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"] },
        { type: _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_11__["WarehouseCarriersRouter"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: _src_services_store_service__WEBPACK_IMPORTED_MODULE_12__["Store"] },
        { type: _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__["WarehouseRouter"] }
    ]; };
    CarriersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'page-carriers',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./carriers.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/pages/+carriers/carriers.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./carriers.scss */ "./src/pages/+carriers/carriers.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_17__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__["ModalController"],
            _modules_client_common_angular2_routers_warehouse_carriers_router_service__WEBPACK_IMPORTED_MODULE_11__["WarehouseCarriersRouter"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            _src_services_store_service__WEBPACK_IMPORTED_MODULE_12__["Store"],
            _modules_client_common_angular2_routers_warehouse_router_service__WEBPACK_IMPORTED_MODULE_19__["WarehouseRouter"]])
    ], CarriersPage);
    return CarriersPage;
}());



/***/ })

}]);
//# sourceMappingURL=carriers-carriers-module.js.map
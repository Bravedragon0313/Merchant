(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~carriers-carriers-module~customers-customers-module~settings-settings-module"],{

/***/ "../../node_modules/angular2-wizard/dist/index.js":
/*!****************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/angular2-wizard/dist/index.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var wizard_component_1 = __webpack_require__(/*! ./src/wizard.component */ "../../node_modules/angular2-wizard/dist/src/wizard.component.js");
var wizard_step_component_1 = __webpack_require__(/*! ./src/wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js");
__export(__webpack_require__(/*! ./src/wizard.component */ "../../node_modules/angular2-wizard/dist/src/wizard.component.js"));
__export(__webpack_require__(/*! ./src/wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js"));
var FormWizardModule = FormWizardModule_1 = (function () {
    function FormWizardModule() {
    }
    FormWizardModule.forRoot = function () {
        return {
            ngModule: FormWizardModule_1
        };
    };
    return FormWizardModule;
}());
FormWizardModule = FormWizardModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ],
        exports: [
            wizard_component_1.WizardComponent,
            wizard_step_component_1.WizardStepComponent
        ]
    })
], FormWizardModule);
exports.FormWizardModule = FormWizardModule;
var FormWizardModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js":
/*!************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/angular2-wizard/dist/src/wizard-step.component.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var WizardStepComponent = (function () {
    function WizardStepComponent() {
        this.hidden = false;
        this.isValid = true;
        this.showNext = true;
        this.showPrev = true;
        this.onNext = new core_1.EventEmitter();
        this.onPrev = new core_1.EventEmitter();
        this.onComplete = new core_1.EventEmitter();
        this._isActive = false;
        this.isDisabled = true;
    }
    Object.defineProperty(WizardStepComponent.prototype, "isActive", {
        get: function () {
            return this._isActive;
        },
        set: function (isActive) {
            this._isActive = isActive;
            this.isDisabled = false;
        },
        enumerable: true,
        configurable: true
    });
    return WizardStepComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], WizardStepComponent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "hidden", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "isValid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showNext", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], WizardStepComponent.prototype, "showPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onNext", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onPrev", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardStepComponent.prototype, "onComplete", void 0);
__decorate([
    core_1.Input('isActive'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], WizardStepComponent.prototype, "isActive", null);
WizardStepComponent = __decorate([
    core_1.Component({
        selector: 'wizard-step',
        template: "\n    <div [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], WizardStepComponent);
exports.WizardStepComponent = WizardStepComponent;
//# sourceMappingURL=wizard-step.component.js.map

/***/ }),

/***/ "../../node_modules/angular2-wizard/dist/src/wizard.component.js":
/*!*******************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/angular2-wizard/dist/src/wizard.component.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var wizard_step_component_1 = __webpack_require__(/*! ./wizard-step.component */ "../../node_modules/angular2-wizard/dist/src/wizard-step.component.js");
var WizardComponent = (function () {
    function WizardComponent() {
        this._steps = [];
        this._isCompleted = false;
        this.onStepChanged = new core_1.EventEmitter();
    }
    WizardComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.wizardSteps.forEach(function (step) { return _this._steps.push(step); });
        this.steps[0].isActive = true;
    };
    Object.defineProperty(WizardComponent.prototype, "steps", {
        get: function () {
            return this._steps.filter(function (step) { return !step.hidden; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "isCompleted", {
        get: function () {
            return this._isCompleted;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStep", {
        get: function () {
            return this.steps.find(function (step) { return step.isActive; });
        },
        set: function (step) {
            if (step !== this.activeStep && !step.isDisabled) {
                this.activeStep.isActive = false;
                step.isActive = true;
                this.onStepChanged.emit(step);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "activeStepIndex", {
        get: function () {
            return this.steps.indexOf(this.activeStep);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasNextStep", {
        get: function () {
            return this.activeStepIndex < this.steps.length - 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent.prototype, "hasPrevStep", {
        get: function () {
            return this.activeStepIndex > 0;
        },
        enumerable: true,
        configurable: true
    });
    WizardComponent.prototype.goToStep = function (step) {
        if (!this.isCompleted) {
            this.activeStep = step;
        }
    };
    WizardComponent.prototype.next = function () {
        if (this.hasNextStep) {
            var nextStep = this.steps[this.activeStepIndex + 1];
            this.activeStep.onNext.emit();
            nextStep.isDisabled = false;
            this.activeStep = nextStep;
        }
    };
    WizardComponent.prototype.previous = function () {
        if (this.hasPrevStep) {
            var prevStep = this.steps[this.activeStepIndex - 1];
            this.activeStep.onPrev.emit();
            prevStep.isDisabled = false;
            this.activeStep = prevStep;
        }
    };
    WizardComponent.prototype.complete = function () {
        this.activeStep.onComplete.emit();
        this._isCompleted = true;
    };
    return WizardComponent;
}());
__decorate([
    core_1.ContentChildren(wizard_step_component_1.WizardStepComponent),
    __metadata("design:type", core_1.QueryList)
], WizardComponent.prototype, "wizardSteps", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], WizardComponent.prototype, "onStepChanged", void 0);
WizardComponent = __decorate([
    core_1.Component({
        selector: 'form-wizard',
        template: "<div class=\"card\">\n    <div class=\"card-header\">\n      <ul class=\"nav nav-justified\">\n        <li class=\"nav-item\" *ngFor=\"let step of steps\" [ngClass]=\"{'active': step.isActive, 'enabled': !step.isDisabled, 'disabled': step.isDisabled, 'completed': isCompleted}\">\n          <a (click)=\"goToStep(step)\">{{step.title}}</a>\n        </li>\n      </ul>\n    </div>\n    <div class=\"card-block\">\n      <ng-content></ng-content>\n    </div>\n    <div class=\"card-footer\" [hidden]=\"isCompleted\">\n        <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"previous()\" [hidden]=\"!hasPrevStep || !activeStep.showPrev\">Previous</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"next()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"!hasNextStep || !activeStep.showNext\">Next</button>\n        <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"complete()\" [disabled]=\"!activeStep.isValid\" [hidden]=\"hasNextStep\">Done</button>\n    </div>\n  </div>",
        styles: [
            '.card { height: 100%; }',
            '.card-header { background-color: #fff; padding: 0; font-size: 1.25rem; }',
            '.card-block { overflow-y: auto; }',
            '.card-footer { background-color: #fff; border-top: 0 none; }',
            '.nav-item { padding: 1rem 0rem; border-bottom: 0.5rem solid #ccc; }',
            '.active { font-weight: bold; color: black; border-bottom-color: #1976D2 !important; }',
            '.enabled { cursor: pointer; border-bottom-color: rgb(88, 162, 234); }',
            '.disabled { color: #ccc; }',
            '.completed { cursor: default; }'
        ]
    }),
    __metadata("design:paramtypes", [])
], WizardComponent);
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=wizard.component.js.map

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html":
/*!*************************************************************************************************************************************************!*\
  !*** /home/itexpert/Documents/DolceGrocery/node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- TODO add translate -->\n<div class=\"confirm-delete\">\n\t<h4>\n\t\tAre you sure you want to {{ isRemove ? 'remvoe' : 'delete' }} the\n\t\tfollowing data?\n\t</h4>\n\t<div class=\"details\">\n\t\t<img src=\"{{ data?.image }}\" />\n\t\t<div class=\"text\">\n\t\t\t<div>{{ data?.name }}</div>\n\t\t\t<div\n\t\t\t\t[ngClass]=\"{\n\t\t\t\t\tgood: data?.status === 'working',\n\t\t\t\t\tbad: !(data?.status === 'working')\n\t\t\t\t}\"\n\t\t\t>\n\t\t\t\t{{ data?.status | titlecase }}\n\t\t\t</div>\n\t\t\t<div style=\"width: 100%; text-align: center;\">\n\t\t\t\t{{ data?.phone }}\n\t\t\t</div>\n\t\t\t<div>{{ data?.addresses }}</div>\n\t\t</div>\n\t</div>\n\t<div class=\"control\">\n\t\t<ion-button (click)=\"confirmDelete()\" color=\"danger\">\n\t\t\tConfirm\n\t\t</ion-button>\n\t\t<ion-button (click)=\"cancelModal()\" color=\"info\">Cancel</ion-button>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.module.ts":
/*!****************************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.module.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmDeletePopupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletePopupModule", function() { return ConfirmDeletePopupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-wizard */ "../../node_modules/angular2-wizard/dist/index.js");
/* harmony import */ var angular2_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/fesm5/ng2-smart-table.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/fesm5/ng2-file-upload.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./confirm-delete-popup */ "./src/components/confirm-delete-popup/confirm-delete-popup.ts");










var ConfirmDeletePopupModule = (function () {
    function ConfirmDeletePopupModule() {
    }
    ConfirmDeletePopupModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__["ConfirmDeletePopupPage"]],
            entryComponents: [_confirm_delete_popup__WEBPACK_IMPORTED_MODULE_9__["ConfirmDeletePopupPage"]],
            imports: [
                angular2_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizardModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_3__["Ng2SmartTableModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploadModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forChild(),
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
        })
    ], ConfirmDeletePopupModule);
    return ConfirmDeletePopupModule;
}());



/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.scss":
/*!***********************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".confirm-delete-wrapper {\n  display: flex !important;\n}\n\n.confirm-delete-wrapper .modal-wrapper {\n  border-radius: 5px;\n  width: 300px;\n  height: 300px;\n  left: calc(50% - (300px / 2));\n  top: calc(50% - (300px / 2));\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page {\n  border-radius: 5px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete {\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  background: white;\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete h4 {\n  width: 90%;\n  text-align: center;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .control {\n  display: flex;\n  justify-content: space-between;\n  width: 90%;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details {\n  display: flex;\n  align-items: center;\n  width: 90%;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: 4px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details img {\n  width: 128px;\n  height: 128px;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .good {\n  color: green;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .bad {\n  color: crimson;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page .confirm-delete .details .text {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.confirm-delete-wrapper .modal-wrapper .ion-page ion-button {\n  border: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2l0ZXhwZXJ0L0RvY3VtZW50cy9Eb2xjZUdyb2NlcnkvcGFja2FnZXMvbWVyY2hhbnQtdGFibGV0LWlvbmljL3NyYy9jb21wb25lbnRzL2NvbmZpcm0tZGVsZXRlLXBvcHVwL2NvbmZpcm0tZGVsZXRlLXBvcHVwLnNjc3MiLCJzcmMvY29tcG9uZW50cy9jb25maXJtLWRlbGV0ZS1wb3B1cC9jb25maXJtLWRlbGV0ZS1wb3B1cC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQXdCO0FDQ3pCOztBREZBO0VBR0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQ0c5Qjs7QURWQTtFQVNHLGtCQUFrQjtBQ0tyQjs7QURkQTtFQVdJLHNDQUFzQztFQUN0QyxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNkJBQTZCO0FDT2pDOztBRDFCQTtFQXFCSyxVQUFVO0VBQ1Ysa0JBQWtCO0FDU3ZCOztBRC9CQTtFQXlCSyxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFVBQVU7QUNVZjs7QURyQ0E7RUE4QkssYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1Ysc0NBQXNDO0VBQ3RDLGtCQUFrQjtBQ1d2Qjs7QUQ3Q0E7RUFvQ00sWUFBWTtFQUNaLGFBQWE7QUNhbkI7O0FEbERBO0VBd0NNLFlBQVk7QUNjbEI7O0FEdERBO0VBMkNNLGNBQWM7QUNlcEI7O0FEMURBO0VBOENNLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFdBQVc7QUNnQmpCOztBRGpFQTtFQXVESSxZQUFZO0FDY2hCIiwiZmlsZSI6InNyYy9jb21wb25lbnRzL2NvbmZpcm0tZGVsZXRlLXBvcHVwL2NvbmZpcm0tZGVsZXRlLXBvcHVwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1kZWxldGUtd3JhcHBlciB7XG5cdGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcblx0Lm1vZGFsLXdyYXBwZXIge1xuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHR3aWR0aDogMzAwcHg7XG5cdFx0aGVpZ2h0OiAzMDBweDtcblx0XHRsZWZ0OiBjYWxjKDUwJSAtICgzMDBweCAvIDIpKTtcblx0XHR0b3A6IGNhbGMoNTAlIC0gKDMwMHB4IC8gMikpO1xuXHRcdC5pb24tcGFnZSB7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdFx0XHQuY29uZmlybS1kZWxldGUge1xuXHRcdFx0XHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcblx0XHRcdFx0YmFja2dyb3VuZDogd2hpdGU7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDVweDtcblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHR3aWR0aDogOTAlO1xuXHRcdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHQuY29udHJvbCB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRcdFx0d2lkdGg6IDkwJTtcblx0XHRcdFx0fVxuXHRcdFx0XHQuZGV0YWlscyB7XG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0XHRcdHdpZHRoOiA5MCU7XG5cdFx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdGltZyB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTI4cHg7XG5cdFx0XHRcdFx0XHRoZWlnaHQ6IDEyOHB4O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQuZ29vZCB7XG5cdFx0XHRcdFx0XHRjb2xvcjogZ3JlZW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC5iYWQge1xuXHRcdFx0XHRcdFx0Y29sb3I6IGNyaW1zb247XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC50ZXh0IHtcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpb24tYnV0dG9uIHtcblx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIGxlZnQ6IGNhbGMoNTAlIC0gKDMwMHB4IC8gMikpO1xuICB0b3A6IGNhbGMoNTAlIC0gKDMwMHB4IC8gMikpO1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2Uge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgaDQge1xuICB3aWR0aDogOTAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgLmNvbnRyb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uY29uZmlybS1kZWxldGUtd3JhcHBlciAubW9kYWwtd3JhcHBlciAuaW9uLXBhZ2UgLmNvbmZpcm0tZGVsZXRlIC5kZXRhaWxzIGltZyB7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cblxuLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgLmlvbi1wYWdlIC5jb25maXJtLWRlbGV0ZSAuZGV0YWlscyAuZ29vZCB7XG4gIGNvbG9yOiBncmVlbjtcbn1cblxuLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgLmlvbi1wYWdlIC5jb25maXJtLWRlbGV0ZSAuZGV0YWlscyAuYmFkIHtcbiAgY29sb3I6IGNyaW1zb247XG59XG5cbi5jb25maXJtLWRlbGV0ZS13cmFwcGVyIC5tb2RhbC13cmFwcGVyIC5pb24tcGFnZSAuY29uZmlybS1kZWxldGUgLmRldGFpbHMgLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbmZpcm0tZGVsZXRlLXdyYXBwZXIgLm1vZGFsLXdyYXBwZXIgLmlvbi1wYWdlIGlvbi1idXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/components/confirm-delete-popup/confirm-delete-popup.ts":
/*!*********************************************************************!*\
  !*** ./src/components/confirm-delete-popup/confirm-delete-popup.ts ***!
  \*********************************************************************/
/*! exports provided: ConfirmDeletePopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeletePopupPage", function() { return ConfirmDeletePopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm5/ionic-angular.js");



var ConfirmDeletePopupPage = (function () {
    function ConfirmDeletePopupPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ConfirmDeletePopupPage.prototype.cancelModal = function () {
        this.modalCtrl.dismiss();
    };
    ConfirmDeletePopupPage.prototype.confirmDelete = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.modalCtrl.dismiss(true);
                return [2];
            });
        });
    };
    ConfirmDeletePopupPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], ConfirmDeletePopupPage.prototype, "data", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
    ], ConfirmDeletePopupPage.prototype, "isRemove", void 0);
    ConfirmDeletePopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'confirm-delete-popup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./confirm-delete-popup.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/components/confirm-delete-popup/confirm-delete-popup.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./confirm-delete-popup.scss */ "./src/components/confirm-delete-popup/confirm-delete-popup.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ConfirmDeletePopupPage);
    return ConfirmDeletePopupPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~carriers-carriers-module~customers-customers-module~settings-settings-module.js.map
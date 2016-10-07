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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
/* App Root */
var app_component_1 = require('./app.component');
/*
       { AppComponent }       from './app.component';
*/
var highlight_directive_1 = require('./highlight.directive');
var title_component_1 = require('./title.component');
var user_service_1 = require('./user.service');
/* Contact Imports */
var contact_component_1 = require('./contact/contact.component');
/*
       { ContactComponent }   from './contact/contact.component';
*/
var contact_service_1 = require('./contact/contact.service');
var awesome_pipe_1 = require('./contact/awesome.pipe');
var highlight_directive_2 = require('./contact/highlight.directive');
var forms_1 = require('@angular/forms');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [
                app_component_1.AppComponent, highlight_directive_1.HighlightDirective, title_component_1.TitleComponent,
                awesome_pipe_1.AwesomePipe, contact_component_1.ContactComponent, highlight_directive_2.HighlightDirective
            ],
            providers: [contact_service_1.ContactService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.module.js.map
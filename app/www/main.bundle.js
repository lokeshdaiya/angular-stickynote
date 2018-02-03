webpackJsonp([1,4],{

/***/ 131:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 131;


/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(138);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherise, log the boot error
}).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent(el) {
        this.el = el;
        this.notes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.notes = JSON.parse(localStorage.getItem('notes')) || [{ id: 0, content: '' }];
    };
    AppComponent.prototype.addNote = function () {
        this.notes.push({ id: this.notes.length + 1, content: '' });
        // sort the array
        this.notes = this.notes.sort(function (a, b) { return b.id - a.id; });
        localStorage.setItem('notes', JSON.stringify(this.notes));
    };
    ;
    AppComponent.prototype.saveNote = function (event) {
        var id = event.srcElement.parentElement.parentElement.getAttribute('id');
        var content = event.target.value;
        // event.target.innerText = content;
        var json = {
            'id': id,
            'content': content
        };
        this.updateNote(json);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        console.log("********* updating note *********");
    };
    AppComponent.prototype.updateNote = function (newValue) {
        var _this = this;
        this.notes.forEach(function (note, index) {
            if (note.id == newValue.id) {
                _this.notes[index].content = newValue.content;
            }
        });
    };
    AppComponent.prototype.deleteNote = function (event) {
        var _this = this;
        var id = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id');
        this.notes.forEach(function (note, index) {
            if (note.id == id) {
                _this.notes.splice(index, 1);
                localStorage.setItem('notes', JSON.stringify(_this.notes));
                console.log("********* deleting note *********");
                return;
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'my-app',
        template: __webpack_require__(143),
        styles: [__webpack_require__(141)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_note_component__ = __webpack_require__(139);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_4__note_note_component__["a" /* NoteComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoteComponent = (function () {
    function NoteComponent(el) {
        var _this = this;
        this.el = el;
        this.dismiss = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.focusout = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* EventEmitter */]();
        this.recognition = new SpeechRecognition();
        this.recognition.onresult = function (event) {
            _this.el.nativeElement.querySelector(".content").value += " " + event.results[0][0].transcript;
            document.getElementById('toolbar').focus();
        };
    }
    NoteComponent.prototype.onDismiss = function (event) {
        this.dismiss.emit(event);
    };
    NoteComponent.prototype.onFocusOut = function (event) {
        this.focusout.emit(event);
    };
    NoteComponent.prototype.record = function (event) {
        this.recognition.start();
    };
    return NoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Input */])(),
    __metadata("design:type", String)
], NoteComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NoteComponent.prototype, "dismiss", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Output */])(),
    __metadata("design:type", Object)
], NoteComponent.prototype, "focusout", void 0);
NoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Component */])({
        selector: 'app-note',
        template: __webpack_require__(144),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object])
], NoteComponent);

var _a;
// export interface IWindow extends Window {
//   webkitSpeechRecognition: any;
// } 
//# sourceMappingURL=note.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "\n  .app {\n    overflow: auto;\n    margin-bottom: 50px;\n  }\n  .toolbar {\n    cursor: pointer;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    height:55px;\n    text-align: center;\n    position: fixed;\n    width: 100%;\n    background-color: gold;\n    border: 10px solid gray;\n    border-bottom: 0;\n    color: gray;\n    font-size: -webkit-xxx-large;\n    font-weight: bold;\n}\n\nbutton {\n    cursor: pointer;\n    background: transparent;\n    border: none;\n    padding: 10px;\n    font-size: xx-large;\n    outline: none;\n}\n.record {\n  float: right;\n}\n\n.add {\n  /* float: left */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, ".note {\r\n    background-color: rgb(255, 240, 70);\r\n    position: relative;\r\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5); \r\n    margin-bottom: 1em;\r\n    border-radius: 10px 10px 0px 0px;\r\n}\r\n\r\n.note_toolbar {\r\n    background: #7f6c04;\r\n    border-radius: 8px 8px 0px 0px;\r\n}\r\n\r\n.close {\r\n    top: 5px;\r\n    cursor:pointer;\r\n    color: white;\r\n    position: relative;\r\n}\r\n\r\n.content {\r\n    padding: 5px;\r\n    outline: none;\r\n    height: 150px;\r\n    background: transparent;\r\n    border: none;\r\n    resize: none;\r\n    width:150px;\r\n    overflow-y: auto;\r\n}\r\n\r\n.footer{\r\n  text-align: center\r\n}\r\nbutton {\r\n    cursor: pointer;\r\n    background: transparent;\r\n    border: none;\r\n    font-size: x-large;\r\n    outline: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports) {

module.exports = "<div class=\"app\">\n\t<app-note *ngFor=\"let note of notes\" (dismiss)=\"deleteNote($event)\" \n\t(focusout)=\"saveNote($event)\" id=\"{{note.id}}\" [content]=\"note.content\"></app-note>\n</div>\n<div  class=\"toolbar\" id=\"toolbar\" (click)=\"addNote()\" tabindex=\"0\">\n\t<button class=\"add material-icons\">\n  note_add\n\t</button>\n</div>"

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

module.exports = "<div class=\"note\">\r\n  <div class=\"note_toolbar\">\r\n\t  <span class=\"close material-icons\" (click)=\"onDismiss($event)\">close</span>\r\n  </div>\r\n\t<!--<div class=\"content\" contenteditable=\"true\" (blur)=\"onFocusOut($event)\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>-->\r\n\t<textarea class=\"content\" (keydown)=\"onFocusOut($event)\">{{content}}</textarea>\r\n  <div class=\"footer\">\r\n\t  <button class=\"material-icons\" (click)=\"record($event)\">settings_voice</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(132);


/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/


/** ALL Firefox browsers require the following to support `@angular/animation`. **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`. 
//# sourceMappingURL=polyfills.js.map

/***/ })

},[174]);
//# sourceMappingURL=main.bundle.js.map
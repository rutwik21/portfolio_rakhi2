"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/Testimonials.jsx":
/*!*********************************************!*\
  !*** ./src/app/components/Testimonials.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MaxWidthWrapper */ \"(app-pages-browser)/./src/app/components/MaxWidthWrapper.jsx\");\n/* harmony import */ var _components_ui_compare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ui/compare */ \"(app-pages-browser)/./src/app/components/ui/compare.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nfunction Testimonials() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MaxWidthWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_compare__WEBPACK_IMPORTED_MODULE_3__.Compare, {\n                firstImage: \"beforeLinkdin.jpg\",\n                secondImage: \"afterLinkdin.jpg\",\n                firstImageClassName: \"object-cover object-left-top\",\n                secondImageClassname: \"object-cover object-left-top\",\n                className: \"h-[250px] w-[200px] md:h-[500px] md:w-[500px]\",\n                slideMode: \"hover\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\portfolio_rakhi\\\\portfolio_rakhi2\\\\src\\\\app\\\\components\\\\Testimonials.jsx\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\portfolio_rakhi\\\\portfolio_rakhi2\\\\src\\\\app\\\\components\\\\Testimonials.jsx\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\portfolio_rakhi\\\\portfolio_rakhi2\\\\src\\\\app\\\\components\\\\Testimonials.jsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = Testimonials;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Testimonials);\nvar _c;\n$RefreshReg$(_c, \"Testimonials\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9UZXN0aW1vbmlhbHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDc0I7QUFDRztBQUduRCxTQUFTRztJQUNQLHFCQUNFLDhEQUFDRix3REFBZUE7a0JBQ1osNEVBQUNHO1lBQUlDLFdBQVU7c0JBQ1gsNEVBQUNILDJEQUFPQTtnQkFDSkksWUFBVztnQkFDWEMsYUFBWTtnQkFDWkMscUJBQW9CO2dCQUNwQkMsc0JBQXFCO2dCQUNyQkosV0FBVTtnQkFDVkssV0FBVTs7Ozs7Ozs7Ozs7Ozs7OztBQUsxQjtLQWZTUDtBQWlCVCwrREFBZUEsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvVGVzdGltb25pYWxzLmpzeD80NjNmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTWF4V2lkdGhXcmFwcGVyIGZyb20gJy4vTWF4V2lkdGhXcmFwcGVyJztcclxuaW1wb3J0IHsgQ29tcGFyZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL3VpL2NvbXBhcmVcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBUZXN0aW1vbmlhbHMoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYXhXaWR0aFdyYXBwZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyIHJvdW5kZWQtM3hsIGRhcms6YmctbmV1dHJhbC05MDAgYmctbmV1dHJhbC0xMDAgIGJvcmRlci1uZXV0cmFsLTIwMCBkYXJrOmJvcmRlci1uZXV0cmFsLTgwMCBweC00XCI+XHJcbiAgICAgICAgICAgIDxDb21wYXJlXHJcbiAgICAgICAgICAgICAgICBmaXJzdEltYWdlPVwiYmVmb3JlTGlua2Rpbi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgc2Vjb25kSW1hZ2U9XCJhZnRlckxpbmtkaW4uanBnXCJcclxuICAgICAgICAgICAgICAgIGZpcnN0SW1hZ2VDbGFzc05hbWU9XCJvYmplY3QtY292ZXIgb2JqZWN0LWxlZnQtdG9wXCJcclxuICAgICAgICAgICAgICAgIHNlY29uZEltYWdlQ2xhc3NuYW1lPVwib2JqZWN0LWNvdmVyIG9iamVjdC1sZWZ0LXRvcFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLVsyNTBweF0gdy1bMjAwcHhdIG1kOmgtWzUwMHB4XSBtZDp3LVs1MDBweF1cIlxyXG4gICAgICAgICAgICAgICAgc2xpZGVNb2RlPVwiaG92ZXJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9NYXhXaWR0aFdyYXBwZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHMiXSwibmFtZXMiOlsiUmVhY3QiLCJNYXhXaWR0aFdyYXBwZXIiLCJDb21wYXJlIiwiVGVzdGltb25pYWxzIiwiZGl2IiwiY2xhc3NOYW1lIiwiZmlyc3RJbWFnZSIsInNlY29uZEltYWdlIiwiZmlyc3RJbWFnZUNsYXNzTmFtZSIsInNlY29uZEltYWdlQ2xhc3NuYW1lIiwic2xpZGVNb2RlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/Testimonials.jsx\n"));

/***/ })

});
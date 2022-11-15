;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  System.register(['../index.110d239b-legacy.js', '../preload-helper.8628f229-legacy.js', '../jsx-dev-runtime.10b3778c-legacy.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.innerHTML = "/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\t-moz-box-sizing: border-box;\n\t     box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n\n.tw-italic {\n\tfont-style: italic;\n}\n\nhtml,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n}\n\nbody {\r\n  font-size: 16px;\r\n}\n\n/* -------------------- pc -------------------- */\n\nhtml[is-mobile='false'] #app {\r\n    min-width: 1300px;\r\n    max-width: 1920px;\r\n  }\n\n/* ------------------ mobile ------------------ */\n\nhtml[is-mobile='true'] #app {\r\n    min-width: 0px;\r\n    max-width: 750px;\r\n  }\n\n#app {\r\n  margin: 0 auto;\r\n}\n\n[hidden] {\r\n  display: none !important;\r\n}\n\ni {\r\n  display: inline-block;\r\n}\n\n@-webkit-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\n\n@-moz-keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    -moz-transform: rotate(0);\r\n         transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    -moz-transform: rotate(359deg);\r\n         transform: rotate(359deg);\r\n  }\r\n}\n\n@keyframes spin {\r\n  0% {\r\n    -webkit-transform: rotate(0);\r\n    -moz-transform: rotate(0);\r\n      -o-transform: rotate(0);\r\n         transform: rotate(0);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    -moz-transform: rotate(359deg);\r\n      -o-transform: rotate(359deg);\r\n         transform: rotate(359deg);\r\n  }\r\n}\n\n@-webkit-keyframes slide-up-enter {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-up-enter {\r\n  from {\r\n    -moz-transform: translate3d(0, 100%, 0);\r\n         transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@keyframes slide-up-enter {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n       -moz-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-up-leave {\r\n  to {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-up-leave {\r\n  to {\r\n    -moz-transform: translate3d(0, 100%, 0);\r\n         transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@keyframes slide-up-leave {\r\n  to {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n       -moz-transform: translate3d(0, 100%, 0);\r\n            transform: translate3d(0, 100%, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-down-enter {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-down-enter {\r\n  from {\r\n    -moz-transform: translate3d(0, -100%, 0);\r\n         transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@keyframes slide-down-enter {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n       -moz-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-down-leave {\r\n  to {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-down-leave {\r\n  to {\r\n    -moz-transform: translate3d(0, -100%, 0);\r\n         transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@keyframes slide-down-leave {\r\n  to {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n       -moz-transform: translate3d(0, -100%, 0);\r\n            transform: translate3d(0, -100%, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-left-enter {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-left-enter {\r\n  from {\r\n    -moz-transform: translate3d(-100%, 0, 0);\r\n         transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@keyframes slide-left-enter {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n       -moz-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-left-leave {\r\n  to {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-left-leave {\r\n  to {\r\n    -moz-transform: translate3d(-100%, 0, 0);\r\n         transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@keyframes slide-left-leave {\r\n  to {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n       -moz-transform: translate3d(-100%, 0, 0);\r\n            transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-right-enter {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-right-enter {\r\n  from {\r\n    -moz-transform: translate3d(100%, 0, 0);\r\n         transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@keyframes slide-right-enter {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n       -moz-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@-webkit-keyframes slide-right-leave {\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@-moz-keyframes slide-right-leave {\r\n  to {\r\n    -moz-transform: translate3d(100%, 0, 0);\r\n         transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@keyframes slide-right-leave {\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n       -moz-transform: translate3d(100%, 0, 0);\r\n            transform: translate3d(100%, 0, 0);\r\n  }\r\n}\n\n@-webkit-keyframes fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\n\n@-moz-keyframes fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\n\n@keyframes fade-in {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\n\n@-webkit-keyframes fade-out {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\n\n@-moz-keyframes fade-out {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\n\n@keyframes fade-out {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\n\n@-webkit-keyframes zoom-in {\r\n  from {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\n\n@-moz-keyframes zoom-in {\r\n  from {\r\n    -moz-transform: scale(0.8);\r\n         transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    -moz-transform: scale(1);\r\n         transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\n\n@keyframes zoom-in {\r\n  from {\r\n    -webkit-transform: scale(0.8);\r\n       -moz-transform: scale(0.8);\r\n         -o-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    -webkit-transform: scale(1);\r\n       -moz-transform: scale(1);\r\n         -o-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n}\n\n@-webkit-keyframes zoom-out {\r\n  from {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    -webkit-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n}\n\n@-moz-keyframes zoom-out {\r\n  from {\r\n    -moz-transform: scale(1);\r\n         transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    -moz-transform: scale(0.8);\r\n         transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n}\n\n@keyframes zoom-out {\r\n  from {\r\n    -webkit-transform: scale(1);\r\n       -moz-transform: scale(1);\r\n         -o-transform: scale(1);\r\n            transform: scale(1);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    -webkit-transform: scale(0.8);\r\n       -moz-transform: scale(0.8);\r\n         -o-transform: scale(0.8);\r\n            transform: scale(0.8);\r\n    opacity: 0;\r\n  }\r\n}\n\n@-webkit-keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\n\n@-moz-keyframes rotate {\r\n  from {\r\n    -moz-transform: rotate(0deg);\r\n         transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -moz-transform: rotate(360deg);\r\n         transform: rotate(360deg);\r\n  }\r\n}\n\n@keyframes rotate {\r\n  from {\r\n    -webkit-transform: rotate(0deg);\r\n       -moz-transform: rotate(0deg);\r\n         -o-transform: rotate(0deg);\r\n            transform: rotate(0deg);\r\n  }\r\n  to {\r\n    -webkit-transform: rotate(360deg);\r\n       -moz-transform: rotate(360deg);\r\n         -o-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n  }\r\n}\n\n.fade-in-enter-active,\r\n.fade-enter-active {\r\n  -webkit-animation: 0.3s fade-in both ease-out;\r\n     -moz-animation: 0.3s fade-in both ease-out;\r\n          animation: 0.3s fade-in both ease-out;\r\n}\n\n.fade-exit-active {\r\n  -webkit-animation: 0.3s fade-out both ease-in;\r\n     -moz-animation: 0.3s fade-out both ease-in;\r\n          animation: 0.3s fade-out both ease-in;\r\n}\n\n.slide-up-enter-active {\r\n  -webkit-animation: 0.3s slide-up-enter both ease-out;\r\n     -moz-animation: 0.3s slide-up-enter both ease-out;\r\n          animation: 0.3s slide-up-enter both ease-out;\r\n}\n\n.slide-up-exit-active {\r\n  -webkit-animation: 0.3s slide-up-leave both ease-in;\r\n     -moz-animation: 0.3s slide-up-leave both ease-in;\r\n          animation: 0.3s slide-up-leave both ease-in;\r\n}\n\n.slide-down-enter-active {\r\n  -webkit-animation: slide-down-enter 0.3s both ease-out;\r\n     -moz-animation: slide-down-enter 0.3s both ease-out;\r\n          animation: slide-down-enter 0.3s both ease-out;\r\n}\n\n.slide-down-exit-active {\r\n  -webkit-animation: slide-down-leave 0.3s both ease-in;\r\n     -moz-animation: slide-down-leave 0.3s both ease-in;\r\n          animation: slide-down-leave 0.3s both ease-in;\r\n}\n\n.slide-left-enter-active {\r\n  -webkit-animation: slide-left-enter 0.3s both ease-out;\r\n     -moz-animation: slide-left-enter 0.3s both ease-out;\r\n          animation: slide-left-enter 0.3s both ease-out;\r\n}\n\n.slide-left-exit-active {\r\n  -webkit-animation: slide-left-leave 0.3s both ease-in;\r\n     -moz-animation: slide-left-leave 0.3s both ease-in;\r\n          animation: slide-left-leave 0.3s both ease-in;\r\n}\n\n.slide-right-enter-active {\r\n  -webkit-animation: slide-right-enter 0.3s both ease-out;\r\n     -moz-animation: slide-right-enter 0.3s both ease-out;\r\n          animation: slide-right-enter 0.3s both ease-out;\r\n}\n\n.slide-right-exit-active {\r\n  -webkit-animation: slide-right-leave 0.3s both ease-in;\r\n     -moz-animation: slide-right-leave 0.3s both ease-in;\r\n          animation: slide-right-leave 0.3s both ease-in;\r\n}\n\n.zoom-enter-active {\r\n  -webkit-animation: 0.3s zoom-in both ease-out;\r\n     -moz-animation: 0.3s zoom-in both ease-out;\r\n          animation: 0.3s zoom-in both ease-out;\r\n}\n\n.zoom-exit-active {\r\n  -webkit-animation: 0.3s zoom-out both ease-in;\r\n     -moz-animation: 0.3s zoom-out both ease-in;\r\n          animation: 0.3s zoom-out both ease-in;\r\n}\r\n";
    document.head.appendChild(__vite_style__);
    var reactDom, __vitePreload, React, jsxDEV;
    return {
      setters: [function (module) {
        reactDom = module.r;
      }, function (module) {
        __vitePreload = module._;
      }, function (module) {
        React = module.R;
        jsxDEV = module.j;
      }],
      execute: function execute() {
        exports('render', render);
        var hydrateRoot;
        var m = reactDom.exports;
        {
          var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          hydrateRoot = function hydrateRoot(c, h, o) {
            i.usingClientEntryPoint = true;
            try {
              return m.hydrateRoot(c, h, o);
            } finally {
              i.usingClientEntryPoint = false;
            }
          };
        }
        var _jsxFileName$1 = "E:\\github\\vite-react-ssr-boilerplate\\renderer\\usePageContext.tsx";
        var Context = React.createContext(void 0);
        function PageContextProvider(_ref) {
          var pageContext = _ref.pageContext,
            children = _ref.children;
          return /* @__PURE__ */jsxDEV(Context.Provider, {
            value: pageContext,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName$1,
            lineNumber: 15,
            columnNumber: 10
          }, this);
        }
        var global = '';
        var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\renderer\\createApp.tsx";
        function createApp(_x) {
          return _createApp.apply(this, arguments);
        } // src/index.ts
        function _createApp() {
          _createApp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(pageContext) {
            var Page, pageProps, Layout, Tpl;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    Page = pageContext.Page, pageProps = pageContext.pageProps;
                    if (!(pageProps !== null && pageProps !== void 0 && pageProps.isMobile)) {
                      _context.next = 7;
                      break;
                    }
                    _context.next = 4;
                    return __vitePreload(function () {
                      return module["import"]('../index.0a3ee2ce-legacy.js');
                    }, false ? "__VITE_PRELOAD__" : void 0);
                  case 4:
                    Layout = _context.sent.MobileLayout;
                    _context.next = 10;
                    break;
                  case 7:
                    _context.next = 9;
                    return __vitePreload(function () {
                      return module["import"]('../index.a541a18e-legacy.js');
                    }, false ? "__VITE_PRELOAD__" : void 0);
                  case 9:
                    Layout = _context.sent.PCLayout;
                  case 10:
                    Tpl = Layout;
                    return _context.abrupt("return", /* @__PURE__ */jsxDEV(PageContextProvider, {
                      pageContext: pageContext,
                      children: /* @__PURE__ */jsxDEV(Tpl, {
                        children: /* @__PURE__ */jsxDEV(Page, _objectSpread({}, pageProps), void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 20,
                          columnNumber: 9
                        }, this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 19,
                        columnNumber: 7
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 18,
                      columnNumber: 5
                    }, this));
                  case 12:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
          return _createApp.apply(this, arguments);
        }
        var uppercasePattern = /([A-Z])/g;
        var msPattern = /^ms-/;
        function hyphenateStyleName(name) {
          return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
        }
        function typeName(value) {
          var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
          var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          return type;
        }
        function testStringCoercion(value) {
          return "".concat(value);
        }
        function willCoercionThrow(value) {
          try {
            testStringCoercion(value);
            return false;
          } catch (e) {
            return true;
          }
        }
        function checkCSSPropertyStringCoercion(value, propName) {
          if (willCoercionThrow(value)) {
            console.error("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", propName, typeName(value));
            return testStringCoercion(value);
          }
        }
        var isUnitlessNumber = {
          animationIterationCount: true,
          aspectRatio: true,
          borderImageOutset: true,
          borderImageSlice: true,
          borderImageWidth: true,
          boxFlex: true,
          boxFlexGroup: true,
          boxOrdinalGroup: true,
          columnCount: true,
          columns: true,
          flex: true,
          flexGrow: true,
          flexPositive: true,
          flexShrink: true,
          flexNegative: true,
          flexOrder: true,
          gridArea: true,
          gridRow: true,
          gridRowEnd: true,
          gridRowSpan: true,
          gridRowStart: true,
          gridColumn: true,
          gridColumnEnd: true,
          gridColumnSpan: true,
          gridColumnStart: true,
          fontWeight: true,
          lineClamp: true,
          lineHeight: true,
          opacity: true,
          order: true,
          orphans: true,
          tabSize: true,
          widows: true,
          zIndex: true,
          zoom: true,
          fillOpacity: true,
          floodOpacity: true,
          stopOpacity: true,
          strokeDasharray: true,
          strokeDashoffset: true,
          strokeMiterlimit: true,
          strokeOpacity: true,
          strokeWidth: true
        };
        function dangerousStyleValue(name, value, isCustomProperty) {
          var isEmpty = value == null || typeof value === "boolean" || value === "";
          if (isEmpty) {
            return "";
          }
          if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
            return "".concat(value, "px");
          }
          checkCSSPropertyStringCoercion(value, name);
          return "".concat(value).trim();
        }
        function createDangerousStringForStyles(styles) {
          var serialized = "";
          var delimiter = "";
          for (var styleName in styles) {
            if (!styles.hasOwnProperty(styleName)) {
              continue;
            }
            var styleValue = styles[styleName];
            if (styleValue != null) {
              var isCustomProperty = styleName.indexOf("--") === 0;
              serialized += "".concat(delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName)), ":");
              serialized += dangerousStyleValue(styleName, styleValue, isCustomProperty);
              delimiter = ";";
            }
          }
          return serialized || null;
        }
        function styleObjectToString(style) {
          return createDangerousStringForStyles(style);
        }
        function logClientInfo() {
          var colors = {
            blue: "#3B82F6",
            red: "#EF4444",
            green: "#10B981",
            gray: "#6B7280"
          };
          function log(title, value) {
            var nameStyle = {
              background: "#FF9800",
              borderRadius: "4px",
              padding: "2px 4px",
              marginRight: "4px",
              fontWeight: "700"
            };
            var defaultTitleStyle = {
              color: "#fff",
              paddingLeft: "6px",
              borderRadius: "4px 0 0 4px",
              background: "#9CA3AF"
            };
            var defaultValueStyle = {
              color: "#fff",
              paddingRight: "6px",
              borderRadius: "0 4px 4px 0",
              background: "#3B82F6"
            };
            console.log("%cvite-ssr%c".concat(title.text, " %c ").concat(value.text), "".concat(styleObjectToString(nameStyle)), "".concat(styleObjectToString(_objectSpread(_objectSpread({}, defaultTitleStyle), title.style))), "".concat(styleObjectToString(_objectSpread(_objectSpread({}, defaultValueStyle), value.style))));
          }
          log({
            text: "Build Date"
          }, {
            text: {
              "lastBuildTime": "2022-11-15 22:26:03"
            }.lastBuildTime
          });
          var envStyle = function envStyle() {
            return {
              background: colors.blue
            };
          };
          log({
            text: "Env"
          }, {
            text: "test",
            style: envStyle()
          });
        }
        function onClientInit() {
          logClientInfo();
        }
        function render(_x2) {
          return _render.apply(this, arguments);
        }
        function _render() {
          _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageContext) {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.t0 = hydrateRoot;
                    _context2.t1 = document.getElementById("app");
                    _context2.next = 4;
                    return createApp(pageContext);
                  case 4:
                    _context2.t2 = _context2.sent;
                    (0, _context2.t0)(_context2.t1, _context2.t2);
                    onClientInit();
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _render.apply(this, arguments);
        }
      }
    };
  });
})();

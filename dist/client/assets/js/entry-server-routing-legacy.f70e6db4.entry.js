;
(function () {
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  System.register(['./assertRenderHook.06a94f78-legacy.js', './preload-helper.8628f229-legacy.js'], function (exports, module) {
    'use strict';

    var __vite_glob_2_0, __vite_glob_3_0, __vite_glob_3_1, __vite_glob_4_0, __vite_glob_4_1, setPageFiles, assert, releasePageContextCommon, getCurrentUrl, getPageContextSerializedInHtml, objectAssign, assertUsage, getPageFilesAll, loadPageFilesClientSide, assertWarning, assertRenderHook, assertHook, __vitePreload;
    return {
      setters: [function (module) {
        __vite_glob_2_0 = module._;
        __vite_glob_3_0 = module.g;
        __vite_glob_3_1 = module.j;
        __vite_glob_4_0 = module.k;
        __vite_glob_4_1 = module.l;
        setPageFiles = module.n;
        assert = module.a;
        releasePageContextCommon = module.w;
        getCurrentUrl = module.u;
        getPageContextSerializedInHtml = module.x;
        objectAssign = module.o;
        assertUsage = module.c;
        getPageFilesAll = module.D;
        loadPageFilesClientSide = module.y;
        assertWarning = module.e;
        assertRenderHook = module.J;
        assertHook = module.I;
      }, function (module) {
        __vitePreload = module._;
      }],
      execute: function execute() {
        var pageFilesLazy = {};
        var pageFilesEager = {};
        var pageFilesExportNamesLazy = {};
        var pageFilesExportNamesEager = {};
        var neverLoaded = {};
        var isGeneratedFile = true;
        var pageFilesLazyIsomorph1 = /* #__PURE__ */Object.assign({
          "/renderer/_error.page.tsx": function renderer_errorPageTsx() {
            return __vitePreload(function () {
              return module["import"]('./renderer/_error.page-legacy.23eb305b.entry.js');
            }, false ? "__VITE_PRELOAD__" : void 0);
          },
          "/src/pages/a/index.page.tsx": function srcPagesAIndexPageTsx() {
            return __vitePreload(function () {
              return module["import"]('./src/pages/a/index.page-legacy.ddeddb33.entry.js');
            }, false ? "__VITE_PRELOAD__" : void 0);
          }
        });
        var pageFilesLazyIsomorph = _objectSpread({}, pageFilesLazyIsomorph1);
        pageFilesLazy['.page'] = pageFilesLazyIsomorph;
        var pageFilesLazyClient1 = /* #__PURE__ */Object.assign({
          "/renderer/_default.page.client.tsx": function renderer_defaultPageClientTsx() {
            return __vitePreload(function () {
              return module["import"]('./renderer/_default.page.client-legacy.337703c8.entry.js');
            }, false ? "__VITE_PRELOAD__" : void 0);
          }
        });
        var pageFilesLazyClient = _objectSpread({}, pageFilesLazyClient1);
        pageFilesLazy['.page.client'] = pageFilesLazyClient;
        var pageFilesExportNamesEagerClient1 = /* #__PURE__ */Object.assign({
          "/renderer/_default.page.client.tsx": __vite_glob_2_0
        });
        var pageFilesExportNamesEagerClient = _objectSpread({}, pageFilesExportNamesEagerClient1);
        pageFilesExportNamesEager['.page.client'] = pageFilesExportNamesEagerClient;
        var pageFilesExportNamesEagerServer1 = /* #__PURE__ */Object.assign({
          "/renderer/_default.page.server.tsx": __vite_glob_3_0,
          "/src/pages/a/index.page.server.ts": __vite_glob_3_1
        });
        var pageFilesExportNamesEagerServer = _objectSpread({}, pageFilesExportNamesEagerServer1);
        pageFilesExportNamesEager['.page.server'] = pageFilesExportNamesEagerServer;
        var pageFilesExportNamesEagerIsomorph1 = /* #__PURE__ */Object.assign({
          "/renderer/_error.page.tsx": __vite_glob_4_0,
          "/src/pages/a/index.page.tsx": __vite_glob_4_1
        });
        var pageFilesExportNamesEagerIsomorph = _objectSpread({}, pageFilesExportNamesEagerIsomorph1);
        pageFilesExportNamesEager['.page'] = pageFilesExportNamesEagerIsomorph;
        var pageFilesExports = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          pageFilesLazy: pageFilesLazy,
          pageFilesEager: pageFilesEager,
          pageFilesExportNamesLazy: pageFilesExportNamesLazy,
          pageFilesExportNamesEager: pageFilesExportNamesEager,
          neverLoaded: neverLoaded,
          isGeneratedFile: isGeneratedFile
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        setPageFiles(pageFilesExports);
        function releasePageContext(pageContext) {
          assert(pageContext.isHydration === true);
          assert(pageContext.isBackwardNavigation === null);
          return releasePageContextCommon(pageContext);
        }
        var urlFirst = getCurrentUrl({
          withoutHash: true
        });
        function getPageContext() {
          return _getPageContext.apply(this, arguments);
        }
        function _getPageContext() {
          _getPageContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var pageContext, pageContextReadyForRelease;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    pageContext = getPageContextSerializedInHtml();
                    objectAssign(pageContext, {
                      isHydration: true,
                      isBackwardNavigation: null
                    });
                    _context.t0 = objectAssign;
                    _context.t1 = pageContext;
                    _context.next = 6;
                    return loadPageFilesClient(pageContext._pageId);
                  case 6:
                    _context.t2 = _context.sent;
                    (0, _context.t0)(_context.t1, _context.t2);
                    assertPristineUrl();
                    pageContextReadyForRelease = releasePageContext(pageContext);
                    return _context.abrupt("return", pageContextReadyForRelease);
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
          return _getPageContext.apply(this, arguments);
        }
        function assertPristineUrl() {
          var urlCurrent = getCurrentUrl({
            withoutHash: true
          });
          assertUsage(urlFirst === urlCurrent, "URL manipulated before hydration finished (`".concat(urlFirst, "` to `").concat(urlCurrent, "`). Ensure the hydration finishes with `onHydrationEnd()` before manipulating the URL."));
        }
        function loadPageFilesClient(_x) {
          return _loadPageFilesClient.apply(this, arguments);
        }
        function _loadPageFilesClient() {
          _loadPageFilesClient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pageId) {
            var pageContextAddendum, _yield$getPageFilesAl, pageFilesAll;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    pageContextAddendum = {};
                    _context2.next = 3;
                    return getPageFilesAll(true);
                  case 3:
                    _yield$getPageFilesAl = _context2.sent;
                    pageFilesAll = _yield$getPageFilesAl.pageFilesAll;
                    objectAssign(pageContextAddendum, {
                      _pageFilesAll: pageFilesAll
                    });
                    _context2.t0 = objectAssign;
                    _context2.t1 = pageContextAddendum;
                    _context2.next = 10;
                    return loadPageFilesClientSide(pageFilesAll, pageId);
                  case 10:
                    _context2.t2 = _context2.sent;
                    (0, _context2.t0)(_context2.t1, _context2.t2);
                    pageFilesAll.filter(function (p) {
                      return p.fileType !== '.page.server';
                    }).forEach(function (p) {
                      var _a;
                      assertWarning(!((_a = p.fileExports) === null || _a === void 0 ? void 0 : _a.onBeforeRender), "`export { onBeforeRender }` of ".concat(p.filePath, " is loaded in the browser but never executed (because you are using Server-side Routing). In order to reduce the size of you browser-side JavaScript, define `onBeforeRender()` in `.page.server.js` instead. See https://vite-plugin-ssr.com/onBeforeRender-isomorphic#server-routing"), {
                        onlyOnce: true
                      });
                    });
                    return _context2.abrupt("return", pageContextAddendum);
                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
          return _loadPageFilesClient.apply(this, arguments);
        }
        hydrate();
        function hydrate() {
          return _hydrate.apply(this, arguments);
        }
        function _hydrate() {
          _hydrate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _a, _b, pageContext;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return getPageContext();
                  case 2:
                    pageContext = _context3.sent;
                    assertRenderHook(pageContext);
                    _context3.next = 6;
                    return pageContext.exports.render(pageContext);
                  case 6:
                    assertHook(pageContext, 'onHydrationEnd');
                    _context3.next = 9;
                    return (_b = (_a = pageContext.exports).onHydrationEnd) === null || _b === void 0 ? void 0 : _b.call(_a, pageContext);
                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return _hydrate.apply(this, arguments);
        }
      }
    };
  });
})();

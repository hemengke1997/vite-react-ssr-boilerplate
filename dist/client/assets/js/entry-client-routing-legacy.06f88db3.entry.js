;
(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  System.register(['./assertRenderHook.06a94f78-legacy.js', './preload-helper.8628f229-legacy.js'], function (exports, module) {
    'use strict';

    var isCallable, higherFirst, assert, slice, isErrorPageId, assertUsage, hasProp, assertWarning, parseUrl, makeFirst, isObject, objectAssign, __vite_glob_2_0, __vite_glob_3_0, __vite_glob_3_1, __vite_glob_4_0, __vite_glob_4_1, setPageFiles, errorPrefix, getProjectError, getGlobalObject, getCurrentUrl, getAllPageIdFilesServerSide, releasePageContextCommon, getPageContextSerializedInHtml, loadPageFilesClientSide, getErrorPageId, getHook, parse, assertBaseUrl, getPageFilesAll, getPageFilesClientSide, isParsable, assertInfo, isErrorFetchingStaticAssets, assertHook, assertRenderHook, __vitePreload;
    return {
      setters: [function (module) {
        isCallable = module.i;
        higherFirst = module.h;
        assert = module.a;
        slice = module.s;
        isErrorPageId = module.b;
        assertUsage = module.c;
        hasProp = module.d;
        assertWarning = module.e;
        parseUrl = module.p;
        makeFirst = module.m;
        isObject = module.f;
        objectAssign = module.o;
        __vite_glob_2_0 = module._;
        __vite_glob_3_0 = module.g;
        __vite_glob_3_1 = module.j;
        __vite_glob_4_0 = module.k;
        __vite_glob_4_1 = module.l;
        setPageFiles = module.n;
        errorPrefix = module.q;
        getProjectError = module.r;
        getGlobalObject = module.t;
        getCurrentUrl = module.u;
        getAllPageIdFilesServerSide = module.v;
        releasePageContextCommon = module.w;
        getPageContextSerializedInHtml = module.x;
        loadPageFilesClientSide = module.y;
        getErrorPageId = module.z;
        getHook = module.A;
        parse = module.B;
        assertBaseUrl = module.C;
        getPageFilesAll = module.D;
        getPageFilesClientSide = module.E;
        isParsable = module.F;
        assertInfo = module.G;
        isErrorFetchingStaticAssets = module.H;
        assertHook = module.I;
        assertRenderHook = module.J;
      }, function (module) {
        __vitePreload = module._;
      }],
      execute: function execute() {
        function isPlainObject(value) {
          if (_typeof(value) !== 'object' || value === null) {
            return false;
          }
          // Support `Object.create(null)`
          if (Object.getPrototypeOf(value) === null) {
            return true;
          }
          return (
            /* Doesn't work in Cloudlfare Pages workers
            value.constructor === Object
            */
            value.constructor.name === 'Object'
          );
        }
        function stringifyStringArray(stringList) {
          return '[' + stringList.map(function (str) {
            return "'" + str + "'";
          }).join(', ') + ']';
        }
        function hasPropertyGetter(obj, prop) {
          var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
          return !!descriptor && !('value' in descriptor) && !!descriptor.get;
        }
        function isObjectWithKeys(obj, keys) {
          if (!isPlainObject(obj)) {
            return false;
          }
          for (var _i = 0, _Object$keys = Object.keys(obj); _i < _Object$keys.length; _i++) {
            var key = _Object$keys[_i];
            if (!keys.includes(key)) {
              return false;
            }
          }
          return true;
        }
        function isPromise(val) {
          return _typeof(val) === 'object' && val !== null && 'then' in val && isCallable(val.then);
        }
        function deduceRouteStringFromFilesystemPath(pageId, filesystemRoots) {
          // Handle Filesystem Routing Root
          var filesystemRootsMatch = filesystemRoots.filter(function (_ref) {
            var filesystemRoot = _ref.filesystemRoot;
            return pageId.startsWith(filesystemRoot);
          }).sort(higherFirst(function (_ref2) {
            var filesystemRoot = _ref2.filesystemRoot;
            return filesystemRoot.length;
          }));
          var fsRoot = filesystemRootsMatch[0];
          var filesystemRoute;
          if (fsRoot) {
            // Example values:
            //  - `{"pageId":"/pages/index","filesystemRoot":"/","routeRoot":"/client_portal"}`
            var filesystemRoot = fsRoot.filesystemRoot,
              routeRoot = fsRoot.routeRoot;
            var debugInfo = {
              pageId: pageId,
              filesystemRoot: filesystemRoot,
              routeRoot: routeRoot
            };
            assert(routeRoot.startsWith('/') && pageId.startsWith('/') && filesystemRoot.startsWith('/'), debugInfo);
            assert(pageId.startsWith(filesystemRoot), debugInfo);
            if (filesystemRoot !== '/') {
              assert(!filesystemRoot.endsWith('/'), debugInfo);
              filesystemRoute = slice(pageId, filesystemRoot.length, 0);
            } else {
              filesystemRoute = pageId;
            }
            assert(filesystemRoute.startsWith('/'), debugInfo);
            filesystemRoute = routeRoot + (routeRoot.endsWith('/') ? '' : '/') + slice(filesystemRoute, 1, 0);
          } else {
            filesystemRoute = pageId;
          }
          assert(filesystemRoute.startsWith('/'));
          // Remove `pages/`, `index/, and `src/`, directories
          filesystemRoute = filesystemRoute.split('/').filter(function (dir) {
            return dir !== 'pages' && dir !== 'src' && dir !== 'index';
          }).join('/');
          // Hanlde `/index.page.*` suffix
          assert(!filesystemRoute.includes('.page.'));
          assert(!filesystemRoute.endsWith('.'));
          if (filesystemRoute.endsWith('/index')) {
            filesystemRoute = slice(filesystemRoute, 0, -'/index'.length);
          }
          if (filesystemRoute === '') {
            filesystemRoute = '/';
          }
          assert(filesystemRoute.startsWith('/'));
          assert(!filesystemRoute.endsWith('/') || filesystemRoute === '/');
          return filesystemRoute;
        }
        function loadPageRoutes(_x) {
          return _loadPageRoutes.apply(this, arguments);
        }
        function _loadPageRoutes() {
          _loadPageRoutes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(pageContext) {
            var _getGlobalHooks, onBeforeRouteHook, filesystemRoots, pageRoutes;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return Promise.all(pageContext._pageFilesAll.filter(function (p) {
                      return p.fileType === '.page.route';
                    }).map(function (p) {
                      var _a;
                      return (_a = p.loadFile) === null || _a === void 0 ? void 0 : _a.call(p);
                    }));
                  case 2:
                    _getGlobalHooks = getGlobalHooks(pageContext), onBeforeRouteHook = _getGlobalHooks.onBeforeRouteHook, filesystemRoots = _getGlobalHooks.filesystemRoots;
                    pageRoutes = getPageRoutes(filesystemRoots, pageContext);
                    return _context8.abrupt("return", {
                      pageRoutes: pageRoutes,
                      onBeforeRouteHook: onBeforeRouteHook
                    });
                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));
          return _loadPageRoutes.apply(this, arguments);
        }
        function getPageRoutes(filesystemRoots, pageContext) {
          var pageRoutes = [];
          pageContext._allPageIds.filter(function (pageId) {
            return !isErrorPageId(pageId);
          }).forEach(function (pageId) {
            var pageRouteFile = findPageRouteFile(pageId, pageContext._pageFilesAll);
            if (!pageRouteFile) {
              var routeString = deduceRouteStringFromFilesystemPath(pageId, filesystemRoots);
              assert(routeString.startsWith('/'));
              assert(!routeString.endsWith('/') || routeString === '/');
              pageRoutes.push({
                pageId: pageId,
                routeString: routeString,
                pageRouteFilePath: null,
                routeType: 'FILESYSTEM'
              });
            } else {
              var filePath = pageRouteFile.filePath,
                fileExports = pageRouteFile.fileExports;
              assert(fileExports);
              assertUsage('default' in fileExports, "".concat(filePath, " should have a default export."));
              if (hasProp(fileExports, 'default', 'string')) {
                var _routeString = fileExports["default"];
                assertUsage(_routeString.startsWith('/'), "A Route String should start with a leading `/` but `".concat(filePath, "` has `export default '").concat(_routeString, "'`. Make sure to `export default '/").concat(_routeString, "'` instead."));
                pageRoutes.push({
                  pageId: pageId,
                  routeString: _routeString,
                  pageRouteFilePath: filePath,
                  routeType: 'STRING'
                });
                return;
              }
              if (hasProp(fileExports, 'default', 'function')) {
                var routeFunction = fileExports["default"];
                var allowAsync = false;
                var allowKey = 'iKnowThePerformanceRisksOfAsyncRouteFunctions';
                if (allowKey in fileExports) {
                  assertUsage(hasProp(fileExports, allowKey, 'boolean'), "The export `".concat(allowKey, "` of ").concat(filePath, " should be a boolean."));
                  allowAsync = fileExports[allowKey];
                }
                pageRoutes.push({
                  pageId: pageId,
                  routeFunction: routeFunction,
                  pageRouteFilePath: filePath,
                  allowAsync: allowAsync,
                  routeType: 'FUNCTION'
                });
                return;
              }
              assertUsage(false, "The default export of ".concat(filePath, " should be a string or a function."));
            }
          });
          return pageRoutes;
        }
        function getGlobalHooks(pageContext) {
          var onBeforeRouteHook = null;
          var filesystemRoots = [];
          pageContext._pageFilesAll.filter(function (p) {
            return p.fileType === '.page.route' && p.isDefaultPageFile;
          }).forEach(function (_ref3) {
            var filePath = _ref3.filePath,
              fileExports = _ref3.fileExports;
            assert(fileExports);
            if ('onBeforeRoute' in fileExports) {
              assertUsage(hasProp(fileExports, 'onBeforeRoute', 'function'), "`export { onBeforeRoute }` of ".concat(filePath, " should be a function."));
              var onBeforeRoute = fileExports.onBeforeRoute;
              onBeforeRouteHook = {
                filePath: filePath,
                onBeforeRoute: onBeforeRoute
              };
            }
            if ('filesystemRoutingRoot' in fileExports) {
              assertUsage(hasProp(fileExports, 'filesystemRoutingRoot', 'string'), "`export { filesystemRoutingRoot }` of ".concat(filePath, " should be a string."));
              assertUsage(hasProp(fileExports, 'filesystemRoutingRoot', 'string'), "`export { filesystemRoutingRoot }` of ".concat(filePath, " is `'").concat(fileExports.filesystemRoutingRoot, "'` but it should start with a leading slash `/`."));
              filesystemRoots.push({
                filesystemRoot: dirname(filePath),
                routeRoot: fileExports.filesystemRoutingRoot
              });
            }
          });
          return {
            onBeforeRouteHook: onBeforeRouteHook,
            filesystemRoots: filesystemRoots
          };
        }
        function findPageRouteFile(pageId, pageFilesAll) {
          return pageFilesAll.find(function (p) {
            return p.pageId === pageId && p.fileType === '.page.route';
          });
        }
        function dirname(filePath) {
          assert(filePath.startsWith('/'));
          assert(!filePath.endsWith('/'));
          var paths = filePath.split('/');
          var dirPath = slice(paths, 0, -1).join('/') || '/';
          assert(dirPath.startsWith('/'));
          assert(!dirPath.endsWith('/') || dirPath === '/');
          return dirPath;
        }
        function addComputedUrlProps(pageContext) {
          assert(pageContext.urlOriginal);
          if ('urlPathname' in pageContext) {
            assert(hasPropertyGetter(pageContext, 'urlPathname'));
          } else {
            Object.defineProperty(pageContext, 'urlPathname', {
              get: urlPathnameGetter,
              enumerable: true,
              configurable: true
            });
          }
          if ('url' in pageContext) {
            assert(hasPropertyGetter(pageContext, 'url'));
          } else {
            Object.defineProperty(pageContext, 'url', {
              get: urlGetter,
              enumerable: false,
              configurable: true
            });
          }
          if ('urlParsed' in pageContext) {
            assert(hasPropertyGetter(pageContext, 'urlParsed'));
          } else {
            Object.defineProperty(pageContext, 'urlParsed', {
              get: urlParsedGetter,
              enumerable: true,
              configurable: true
            });
          }
        }
        function getUrlParsed(pageContext) {
          var url = pageContext.urlOriginal;
          var baseUrl = pageContext._baseUrl,
            urlProcessor = pageContext._urlProcessor;
          assert(baseUrl.startsWith('/'));
          assert(urlProcessor === null || isCallable(urlProcessor));
          if (urlProcessor !== null) {
            url = urlProcessor(url);
          }
          return parseUrl(url, baseUrl);
        }
        function urlPathnameGetter() {
          var _getUrlParsed = getUrlParsed(this),
            pathname = _getUrlParsed.pathname;
          var urlPathname = pathname;
          assert(urlPathname.startsWith('/'));
          return urlPathname;
        }
        function urlGetter() {
          assertWarning(false, '`pageContext.url` is outdated. Use `pageContext.urlPathname`, `pageContext.urlParsed`, or `pageContext.urlOriginal` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)', {
            onlyOnce: true,
            showStackTrace: true
          });
          return urlPathnameGetter.call(this);
        }
        function urlParsedGetter() {
          var urlParsedOriginal = getUrlParsed(this);
          var origin = urlParsedOriginal.origin,
            pathname = urlParsedOriginal.pathname,
            pathnameOriginal = urlParsedOriginal.pathnameOriginal,
            search = urlParsedOriginal.search,
            searchAll = urlParsedOriginal.searchAll,
            searchOriginal = urlParsedOriginal.searchOriginal,
            hash = urlParsedOriginal.hash,
            hashOriginal = urlParsedOriginal.hashOriginal;
          var urlParsed = {
            origin: origin,
            pathname: pathname,
            pathnameOriginal: pathnameOriginal,
            search: search,
            searchAll: searchAll,
            searchOriginal: searchOriginal,
            hash: hash,
            hashOriginal: hashOriginal,
            get hashString() {
              assertWarning(false, '`pageContext.urlParsed.hashString` has been renamed to `pageContext.urlParsed.hashOriginal`', {
                onlyOnce: true,
                showStackTrace: true
              });
              return hashOriginal;
            },
            get searchString() {
              assertWarning(false, '`pageContext.urlParsed.searchString` has been renamed to `pageContext.urlParsed.searchOriginal`', {
                onlyOnce: true,
                showStackTrace: true
              });
              return searchOriginal;
            }
          };
          makeNonEnumerable(urlParsed, 'hashString');
          makeNonEnumerable(urlParsed, 'searchString');
          return urlParsed;
        }
        function makeNonEnumerable(obj, prop) {
          var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
          Object.defineProperty(obj, prop, _objectSpread(_objectSpread({}, descriptor), {}, {
            enumerable: false
          }));
        }
        function assertURLs(pageContext) {
          assert(typeof pageContext.urlOriginal === 'string');
          assert(typeof pageContext.urlPathname === 'string');
          assert(isPlainObject(pageContext.urlParsed));
          assert(pageContext.urlPathname === pageContext.urlParsed.pathname);
        }
        var PARAM_TOKEN_NEW = '@';
        var PARAM_TOKEN_OLD = ':';
        function resolveRouteString(routeString, urlPathname) {
          assertUsage(routeString === '*' || routeString.startsWith('/'), "Invalid route string `".concat(routeString, "`").concat(routeString === '' ? ' (empty string)' : '', ": route strings should start with a leading slash `/` (or be `*`)."));
          assert(urlPathname.startsWith('/'));
          var routeSegments = routeString.split('/');
          var urlSegments = urlPathname.split('/');
          var routeParams = {};
          assertGlob(routeString);
          if (routeString === '*') {
            routeString = '/*';
          }
          //console.log(routeString, urlPathname)
          for (var i = 0; i < Math.max(routeSegments.length, urlSegments.length); i++) {
            var routeSegment = routeSegments[i];
            var urlSegment = urlSegments[i];
            if (routeSegment === '*') {
              routeParams['*'] = urlSegments.slice(Math.max(1, i)).join('/');
              return {
                routeParams: routeParams
              };
            } else if (routeSegment && isParam(routeSegment)) {
              assertWarning(!routeSegment.startsWith(PARAM_TOKEN_OLD), "Outdated route string `".concat(routeString, "`, use `").concat(routeString.split(PARAM_TOKEN_OLD).join(PARAM_TOKEN_NEW), "` instead."), {
                onlyOnce: true
              });
              if (!urlSegment) {
                return null;
              }
              routeParams[routeSegment.slice(1)] = urlSegment;
            } else {
              if ((routeSegment || '') !== (urlSegment || '')) {
                return null;
              }
            }
          }
          return {
            routeParams: routeParams
          };
        }
        function assertGlob(routeString) {
          var numberOfGlobChars = routeString.split('*').length - 1;
          assertUsage(numberOfGlobChars <= 1, "Invalid route string `".concat(routeString, "`: route strings are not allowed to contain more than one glob character `*`."));
          assertUsage(numberOfGlobChars === 0 || numberOfGlobChars === 1 && routeString.endsWith('*'), "Invalid route string `".concat(routeString, "`: make sure your route string ends with the glob character `*`."));
        }
        function analyzeRouteString(routeString) {
          var routeSegments = routeString.split('/').filter(function (routeSegment) {
            return routeSegment !== '' && routeSegment !== '*';
          });
          var numberOfStaticSegmentsBeginning = 0;
          var _iterator = _createForOfIteratorHelper(routeSegments),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var routeSegment = _step.value;
              if (isParam(routeSegment)) {
                break;
              }
              numberOfStaticSegmentsBeginning++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          var numberOfStaticSegements = routeSegments.filter(function (s) {
            return !isParam(s);
          }).length;
          var numberOfParameterSegments = routeSegments.filter(function (s) {
            return isParam(s);
          }).length;
          var isCatchAll = routeString.endsWith('*');
          return {
            numberOfParameterSegments: numberOfParameterSegments,
            numberOfStaticSegmentsBeginning: numberOfStaticSegmentsBeginning,
            numberOfStaticSegements: numberOfStaticSegements,
            isCatchAll: isCatchAll
          };
        }
        function isParam(routeSegment) {
          return routeSegment.startsWith(PARAM_TOKEN_NEW) || routeSegment.startsWith(PARAM_TOKEN_OLD);
        }
        function isStaticRouteString(routeString) {
          var url = routeString;
          var match = resolveRouteString(routeString, url);
          assert(match);
          return Object.keys(match.routeParams).length === 0;
        }

        // See https://vite-plugin-ssr.com/route-function#precedence
        function resolvePrecendence(routeMatches) {
          // prettier-ignore
          routeMatches.sort(sortMatches).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'FUNCTION' && !!routeMatch.precedence && routeMatch.precedence < 0;
          })).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'STRING' && isStaticRouteString(routeMatch.routeString) === false;
          })).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'FUNCTION' && !routeMatch.precedence;
          })).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'STRING' && isStaticRouteString(routeMatch.routeString) === true;
          })).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'FILESYSTEM';
          })).sort(makeFirst(function (routeMatch) {
            return routeMatch.routeType === 'FUNCTION' && !!routeMatch.precedence && routeMatch.precedence > 0;
          }));
        }
        // -1 => routeMatch1 higher precedence
        // +1 => routeMatch2 higher precedence
        function sortMatches(routeMatch1, routeMatch2) {
          var _a, _b;
          {
            var precedence1 = (_a = routeMatch1.precedence) !== null && _a !== void 0 ? _a : 0;
            var precedence2 = (_b = routeMatch2.precedence) !== null && _b !== void 0 ? _b : 0;
            if (precedence1 !== precedence2) {
              return precedence1 > precedence2 ? -1 : 1;
            }
          }
          if (!routeMatch2.routeString) {
            return 0;
          }
          if (!routeMatch1.routeString) {
            return 0;
          }
          // Return route with highest number of static path segments at beginning first
          {
            var getValue = function getValue(routeString) {
              return analyzeRouteString(routeString).numberOfStaticSegmentsBeginning;
            };
            var result = higherFirst(getValue)(routeMatch1.routeString, routeMatch2.routeString);
            if (result !== 0) {
              return result;
            }
          }
          // Return route with highest number of static path segments in total first
          {
            var _getValue = function _getValue(routeString) {
              return analyzeRouteString(routeString).numberOfStaticSegements;
            };
            var _result = higherFirst(_getValue)(routeMatch1.routeString, routeMatch2.routeString);
            if (_result !== 0) {
              return _result;
            }
          }
          // Return route with most parameter segements first
          {
            var _getValue2 = function _getValue2(routeString) {
              return analyzeRouteString(routeString).numberOfParameterSegments;
            };
            var _result2 = higherFirst(_getValue2)(routeMatch1.routeString, routeMatch2.routeString);
            if (_result2 !== 0) {
              return _result2;
            }
          }
          // Return catch-all routes last
          {
            if (analyzeRouteString(routeMatch2.routeString).isCatchAll) {
              return -1;
            }
            if (analyzeRouteString(routeMatch1.routeString).isCatchAll) {
              return 1;
            }
          }
          return 0;
        }
        function resolveRouteFunction(_x2, _x3, _x4, _x5) {
          return _resolveRouteFunction.apply(this, arguments);
        }
        function _resolveRouteFunction() {
          _resolveRouteFunction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(routeFunction, allowAsync, pageContext, pageRouteFilePath) {
            var result, _result3, match, precedence, routeParams;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    assertURLs(pageContext);
                    result = routeFunction(pageContext);
                    assertUsage(!isPromise(result) || allowAsync, "The Route Function ".concat(pageRouteFilePath, " returned a promise; async route functions are opt-in, see https://vite-plugin-ssr.com/route-function#async"));
                    _context9.next = 5;
                    return result;
                  case 5:
                    result = _context9.sent;
                    if (!(result === false)) {
                      _context9.next = 8;
                      break;
                    }
                    return _context9.abrupt("return", null);
                  case 8:
                    if (result === true) {
                      result = {};
                    }
                    assertUsage(isPlainObject(result), "The Route Function ".concat(pageRouteFilePath, " should return a boolean or a plain JavaScript object, instead it returns `").concat(hasProp(result, 'constructor') ? result.constructor : result, "`."));
                    if (!('match' in result)) {
                      _context9.next = 15;
                      break;
                    }
                    _result3 = result, match = _result3.match;
                    assertUsage(typeof match === 'boolean', "The `match` value returned by the Route Function ".concat(pageRouteFilePath, " should be a boolean."));
                    if (match) {
                      _context9.next = 15;
                      break;
                    }
                    return _context9.abrupt("return", null);
                  case 15:
                    precedence = null;
                    if ('precedence' in result) {
                      precedence = result.precedence;
                      assertUsage(typeof precedence === 'number', "The `precedence` value returned by the Route Function ".concat(pageRouteFilePath, " should be a number."));
                    }
                    assertRouteParams(result, "The `routeParams` object returned by the Route Function ".concat(pageRouteFilePath, " should"));
                    routeParams = result.routeParams || {};
                    assertUsage(!('pageContext' in result), 'Providing `pageContext` in Route Functions is forbidden, see https://vite-plugin-ssr.com/route-function#async');
                    assert(isPlainObject(routeParams));
                    Object.keys(result).forEach(function (key) {
                      assertUsage(key === 'match' || key === 'routeParams' || key === 'precedence', "The Route Function ".concat(pageRouteFilePath, " returned an object with an unknown key `{ ").concat(key, " }`. Allowed keys: ['match', 'routeParams', 'precedence']."));
                    });
                    return _context9.abrupt("return", {
                      precedence: precedence,
                      routeParams: routeParams
                    });
                  case 23:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9);
          }));
          return _resolveRouteFunction.apply(this, arguments);
        }
        function assertRouteParams(result, errPrefix) {
          assert(errPrefix.endsWith(' should'));
          if (!hasProp(result, 'routeParams')) {
            return;
          }
          assertUsage(isPlainObject(result.routeParams), "".concat(errPrefix, " be a plain JavaScript object."));
          assertUsage(Object.values(result.routeParams).every(function (val) {
            return typeof val === 'string';
          }), "".concat(errPrefix, " only hold string values."));
        }
        function assertPageContextProvidedByUser(pageContextProvidedByUser, _ref4) {
          var hook = _ref4.hook,
            errorMessagePrefix = _ref4.errorMessagePrefix;
          if (!errorMessagePrefix) {
            assert(hook);
            var hookName = hook.hookName,
              hookFilePath = hook.hookFilePath;
            assert(hookFilePath.startsWith('/'));
            assert(!hookName.endsWith(')'));
            errorMessagePrefix = "The `pageContext` provided by the `export { ".concat(hookName, " }` of ").concat(hookFilePath);
          }
          assertUsage(isObject(pageContextProvidedByUser), "".concat(errorMessagePrefix, " should be an object."));
          assertUsage(!('_objectCreatedByVitePluginSsr' in pageContextProvidedByUser), "".concat(errorMessagePrefix, " should not be the whole `pageContext` object, see https://vite-plugin-ssr.com/pageContext-manipulation#do-not-return-entire-pagecontext"));
          // In principle, it's possible to use `onBeforeRoute()` to override and define the whole routing.
          // Is that a good idea to allow users to do this? Beyond deep integration with Vue Router or React Router, is there a use case for this?
          assertWarning(!('_pageId' in pageContextProvidedByUser), 'You are using `onBeforeRoute()` to override vite-plugin-ssr routing. This is experimental: make sure to contact a vite-plugin-ssr maintainer before using this.', {
            onlyOnce: true
          });
        }
        function callOnBeforeRouteHook(_x6, _x7) {
          return _callOnBeforeRouteHook.apply(this, arguments);
        }
        function _callOnBeforeRouteHook() {
          _callOnBeforeRouteHook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(onBeforeRouteHook, pageContext) {
            var hookReturn, errPrefix, errPrefix2, pageContextAddendumHook;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return onBeforeRouteHook.onBeforeRoute(pageContext);
                  case 2:
                    hookReturn = _context10.sent;
                    errPrefix = "The `onBeforeRoute()` hook exported by ".concat(onBeforeRouteHook.filePath);
                    assertUsage(hookReturn === null || hookReturn === undefined || isObjectWithKeys(hookReturn, ['pageContext']) && hasProp(hookReturn, 'pageContext'), "".concat(errPrefix, " should return `null`, `undefined`, or a plain JavaScript object `{ pageContext: { /* ... */ } }`."));
                    if (!(hookReturn === null || hookReturn === undefined)) {
                      _context10.next = 7;
                      break;
                    }
                    return _context10.abrupt("return", null);
                  case 7:
                    assertUsage(hasProp(hookReturn, 'pageContext', 'object'), "".concat(errPrefix, " returned `{ pageContext }` but `pageContext` should be a plain JavaScript object."));
                    if (hasProp(hookReturn.pageContext, '_pageId') && !hasProp(hookReturn.pageContext, '_pageId', 'null')) {
                      errPrefix2 = "".concat(errPrefix, " returned `{ pageContext: { _pageId } }` but `_pageId` should be");
                      assertUsage(hasProp(hookReturn.pageContext, '_pageId', 'string'), "".concat(errPrefix2, " a string or `null`"));
                      assertUsage(pageContext._allPageIds.includes(hookReturn.pageContext._pageId), "".concat(errPrefix2, " one of following values: `[").concat(pageContext._allPageIds.map(function (s) {
                        return "'".concat(s, "'");
                      }).join(', '), "]`."));
                    }
                    if (hasProp(hookReturn.pageContext, 'routeParams')) {
                      assertRouteParams(hookReturn.pageContext, "".concat(errPrefix, " returned `{ pageContext: { routeParams } }` but `routeParams` should"));
                    }
                    pageContextAddendumHook = {};
                    if (hasProp(hookReturn.pageContext, 'url')) {
                      assertWarning(false, "".concat(errPrefix, " returned `{ pageContext: { url } }` but `pageContext.url` has been renamed to `pageContext.urlOriginal`. Return `{ pageContext: { urlOriginal } }` instead. (See https://vite-plugin-ssr.com/migration/0.4.23 for more information.)"), {
                        onlyOnce: true
                      });
                      hookReturn.pageContext.urlOriginal = hookReturn.pageContext.url;
                      delete hookReturn.pageContext.url;
                    }
                    if (hasProp(hookReturn.pageContext, 'urlOriginal')) {
                      assertUsage(hasProp(hookReturn.pageContext, 'urlOriginal', 'string'), "".concat(errPrefix, " returned `{ pageContext: { urlOriginal } }` but `urlOriginal` should be a string"));
                      objectAssign(pageContextAddendumHook, {
                        _urlPristine: pageContext.urlOriginal
                      });
                    }
                    assertPageContextProvidedByUser(hookReturn.pageContext, {
                      hook: {
                        hookFilePath: onBeforeRouteHook.filePath,
                        hookName: 'onBeforeRoute'
                      }
                    });
                    objectAssign(pageContextAddendumHook, hookReturn.pageContext);
                    return _context10.abrupt("return", pageContextAddendumHook);
                  case 16:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));
          return _callOnBeforeRouteHook.apply(this, arguments);
        }
        var _debug;
        function debug() {
          var _a, _b;
          if (!_debug) {
            // We use this trick instead of `import { createDebugger } from '../../utils/debug` in order to ensure that the `debug` mechanism is only loaded on the server-side
            _debug = (_b = (_a = globalThis).__brillout_debug_createDebugger) === null || _b === void 0 ? void 0 : _b.call(_a, 'vps:routing');
          }
          if (_debug) {
            _debug.apply(void 0, arguments);
          }
        }
        function route(_x8) {
          return _route.apply(this, arguments);
        }
        function _route() {
          _route = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(pageContext) {
            var _yield$loadPageRoutes, pageRoutes, onBeforeRouteHook, pageContextAddendum, pageContextAddendumHook, allPageIds, urlPathname, routeMatches, winner, routeParams;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    addComputedUrlProps(pageContext);
                    _context12.next = 3;
                    return loadPageRoutes(pageContext);
                  case 3:
                    _yield$loadPageRoutes = _context12.sent;
                    pageRoutes = _yield$loadPageRoutes.pageRoutes;
                    onBeforeRouteHook = _yield$loadPageRoutes.onBeforeRouteHook;
                    debug('Pages routes:', pageRoutes);
                    pageContextAddendum = {};
                    if (!onBeforeRouteHook) {
                      _context12.next = 19;
                      break;
                    }
                    _context12.next = 11;
                    return callOnBeforeRouteHook(onBeforeRouteHook, pageContext);
                  case 11:
                    pageContextAddendumHook = _context12.sent;
                    if (!pageContextAddendumHook) {
                      _context12.next = 19;
                      break;
                    }
                    objectAssign(pageContextAddendum, pageContextAddendumHook);
                    if (!(hasProp(pageContextAddendum, '_pageId', 'string') || hasProp(pageContextAddendum, '_pageId', 'null'))) {
                      _context12.next = 18;
                      break;
                    }
                    // We bypass `vite-plugin-ssr`'s routing
                    if (!hasProp(pageContextAddendum, 'routeParams')) {
                      objectAssign(pageContextAddendum, {
                        routeParams: {}
                      });
                    } else {
                      assert(hasProp(pageContextAddendum, 'routeParams', 'object'));
                    }
                    objectAssign(pageContextAddendum, {
                      _routingProvidedByOnBeforeRouteHook: true,
                      _routeMatches: 'CUSTOM_ROUTE'
                    });
                    return _context12.abrupt("return", {
                      pageContextAddendum: pageContextAddendum
                    });
                  case 18:
                    // We already assign so that `pageContext.urlOriginal === pageContextAddendum.urlOriginal`; enabling the `onBeforeRoute()` hook to mutate `pageContext.urlOriginal` before routing.
                    objectAssign(pageContext, pageContextAddendum);
                  case 19:
                    objectAssign(pageContextAddendum, {
                      _routingProvidedByOnBeforeRouteHook: false
                    });
                    // `vite-plugin-ssr`'s routing
                    allPageIds = pageContext._allPageIds;
                    assert(allPageIds.length >= 0);
                    assertUsage(pageContext._pageFilesAll.length > 0, 'No *.page.js file found. You must create at least one *.page.js file.');
                    assertUsage(allPageIds.length > 0, "You must create at least one *.page.js file that isn't _default.page.*");
                    urlPathname = pageContext.urlPathname;
                    assert(urlPathname.startsWith('/'));
                    routeMatches = [];
                    _context12.next = 29;
                    return Promise.all(pageRoutes.map( /*#__PURE__*/function () {
                      var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(pageRoute) {
                        var pageId, routeType, routeString, match, routeParams, _routeString2, _match, _routeParams, routeFunction, allowAsync, pageRouteFilePath, _match2, _routeParams2, precedence;
                        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                pageId = pageRoute.pageId, routeType = pageRoute.routeType; // Filesytem Routing
                                if (!(pageRoute.routeType === 'FILESYSTEM')) {
                                  _context11.next = 6;
                                  break;
                                }
                                routeString = pageRoute.routeString;
                                match = resolveRouteString(routeString, urlPathname);
                                if (match) {
                                  routeParams = match.routeParams;
                                  routeMatches.push({
                                    pageId: pageId,
                                    routeParams: routeParams,
                                    routeString: routeString,
                                    routeType: routeType
                                  });
                                }
                                return _context11.abrupt("return");
                              case 6:
                                if (!(pageRoute.routeType === 'STRING')) {
                                  _context11.next = 11;
                                  break;
                                }
                                _routeString2 = pageRoute.routeString;
                                _match = resolveRouteString(_routeString2, urlPathname);
                                if (_match) {
                                  _routeParams = _match.routeParams;
                                  assert(routeType === 'STRING');
                                  routeMatches.push({
                                    pageId: pageId,
                                    routeString: _routeString2,
                                    routeParams: _routeParams,
                                    routeType: routeType
                                  });
                                }
                                return _context11.abrupt("return");
                              case 11:
                                if (!(pageRoute.routeType === 'FUNCTION')) {
                                  _context11.next = 18;
                                  break;
                                }
                                routeFunction = pageRoute.routeFunction, allowAsync = pageRoute.allowAsync, pageRouteFilePath = pageRoute.pageRouteFilePath;
                                _context11.next = 15;
                                return resolveRouteFunction(routeFunction, allowAsync, pageContext, pageRouteFilePath);
                              case 15:
                                _match2 = _context11.sent;
                                if (_match2) {
                                  _routeParams2 = _match2.routeParams, precedence = _match2.precedence;
                                  routeMatches.push({
                                    pageId: pageId,
                                    precedence: precedence,
                                    routeParams: _routeParams2,
                                    routeType: routeType
                                  });
                                }
                                return _context11.abrupt("return");
                              case 18:
                                assert(false);
                              case 19:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11);
                      }));
                      return function (_x28) {
                        return _ref16.apply(this, arguments);
                      };
                    }()));
                  case 29:
                    resolvePrecendence(routeMatches);
                    winner = routeMatches[0];
                    debug("Route matches for URL `".concat(urlPathname, "` (in precedence order):"), routeMatches);
                    objectAssign(pageContextAddendum, {
                      _routeMatches: routeMatches
                    });
                    if (winner) {
                      _context12.next = 36;
                      break;
                    }
                    objectAssign(pageContextAddendum, {
                      _pageId: null,
                      routeParams: {}
                    });
                    return _context12.abrupt("return", {
                      pageContextAddendum: pageContextAddendum
                    });
                  case 36:
                    routeParams = winner.routeParams;
                    assert(isPlainObject(routeParams));
                    objectAssign(pageContextAddendum, {
                      _pageId: winner.pageId,
                      routeParams: winner.routeParams
                    });
                    return _context12.abrupt("return", {
                      pageContextAddendum: pageContextAddendum
                    });
                  case 40:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));
          return _route.apply(this, arguments);
        }
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
        var pageFilesEagerRoute1 = /* #__PURE__ */Object.assign({});
        var pageFilesEagerRoute = _objectSpread({}, pageFilesEagerRoute1);
        pageFilesEager['.page.route'] = pageFilesEagerRoute;
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
        function isBaseAssets(base) {
          if (base.startsWith('http')) {
            return true;
          }
          return false;
        }
        function isExternalLink(url) {
          return !url.startsWith('/') && !url.startsWith('.') && !url.startsWith('?') && url !== '';
        }
        function throttle(func, waitTime) {
          var isQueued = false;
          return function () {
            if (!isQueued) {
              isQueued = true;
              setTimeout(function () {
                isQueued = false;
                func();
              }, waitTime);
            }
          };
        }
        function getUrlPathname(url) {
          var urlPathname = parseUrl(url, '/').pathname;
          return urlPathname;
        }
        function serverSideRouteTo(url) {
          window.location.href = url;
        }

        // There doesn't seem to be a reliable way to detect React:
        //  - https://stackoverflow.com/questions/73156433/detect-with-javascript-whether-the-website-is-using-react
        function isReact() {
          var _a, _b, _c, _d;
          // Heursitic using values set by React (Dev Tools)
          // - `window.__REACT_DEVTOOLS_GLOBAL_HOOK__` is an internal API for React Dev Tools
          //   - https://stackoverflow.com/questions/46807826/how-does-react-developer-tools-determine-that-the-webpage-is-using-react/46808361#46808361
          //   - In principle, `window.__REACT_DEVTOOLS_GLOBAL_HOOK__` should exist only if React Dev Tools is installed. (Although it seems that it's sometimes defined even when React Dev Tools isn't installed; I don't know why.)
          // - We use `isReact1`/`isReact2` merely to validate `isReact3` and `isReact4`. Beacuse `isReact1`/`isReact2` can be false negatives:
          //   - React populates `__REACT_DEVTOOLS_GLOBAL_HOOK__.renderers` fairly late => false negative early in the rendering phase
          //   - `window.__REACT_DEVTOOLS_GLOBAL_HOOK__` is `undefined` if React Dev Tools isn't installed => false negative
          var isReact1 = !!((_b = (_a = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || _a === void 0 ? void 0 : _a.renderers) === null || _b === void 0 ? void 0 : _b.size);
          var isReact2 = !!((_d = (_c = window.__REACT_DEVTOOLS_GLOBAL_HOOK__) === null || _c === void 0 ? void 0 : _c.rendererInterfaces) === null || _d === void 0 ? void 0 : _d.size);
          // Heursitic using values set by `@vitejs/plugin-react`
          var isReact3 = !!window.__vite_plugin_react_preamble_installed__;
          /* Also set by Preact Vite plugin `@preact/preset-vite`
          const isReact4 = !!(window as any).$RefreshReg$
          */
          // console.log({ isReact1, isReact2, isReact3 })
          return isReact1 || isReact2 || isReact3;
        }
        function isSameErrorMessage(err1, err2) {
          return (err1 === null || err1 === void 0 ? void 0 : err1.message) === (err2 === null || err2 === void 0 ? void 0 : err2.message);
        }
        function sleep(milliseconds) {
          return new Promise(function (r) {
            return setTimeout(r, milliseconds);
          });
        }
        function humanizeTime(milliseconds) {
          var seconds = milliseconds / 1000;
          if (seconds < 120) {
            var n = round(seconds);
            return "".concat(n, " second").concat(plural(n));
          }
          {
            var minutes = seconds / 60;
            var _n = round(minutes);
            return "".concat(_n, " minute").concat(plural(_n));
          }
        }
        function round(n) {
          var rounded = n.toFixed(1);
          if (rounded.endsWith('.0')) rounded = rounded.slice(0, -2);
          return rounded;
        }
        function plural(n) {
          return n === '1' ? '' : 's';
        }
        function callHookWithTimeout(call, hookName, hookFilePath) {
          var _getTimeouts = getTimeouts(hookName),
            timeoutErr = _getTimeouts.timeoutErr,
            timeoutWarn = _getTimeouts.timeoutWarn;
          var resolve;
          var reject;
          var promise = new Promise(function (resolve_, reject_) {
            resolve = function resolve(ret) {
              clearTimeouts();
              resolve_(ret);
            };
            reject = function reject(err) {
              clearTimeouts();
              reject_(err);
            };
          });
          var clearTimeouts = function clearTimeouts() {
            clearTimeout(t1);
            clearTimeout(t2);
          };
          var t1 = setTimeout(function () {
            var msg = "".concat(errorPrefix, "[Warning] The ").concat(hookName, "() hook of ").concat(hookFilePath, " is taking more than ").concat(humanizeTime(timeoutWarn));
            console.warn(msg);
          }, timeoutWarn);
          var t2 = setTimeout(function () {
            var err = getProjectError("Hook timeout: the ".concat(hookName, "() hook of ").concat(hookFilePath, " didn't finish after ").concat(humanizeTime(timeoutErr)));
            reject(err);
          }, timeoutErr);
          _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var ret;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return call();
                  case 3:
                    ret = _context.sent;
                    resolve(ret);
                    _context.next = 10;
                    break;
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    reject(_context.t0);
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[0, 7]]);
          }))();
          return promise;
        }
        function getTimeouts(hookName) {
          var timeoutErr = 20 * 1000;
          var timeoutWarn = 4 * 1000;
          if (hookName === 'onBeforeRoute') {
            timeoutErr = 5 * 1000;
            timeoutWarn = 1 * 1000;
          }
          if (hookName === 'onBeforePrerender') {
            timeoutErr = 60 * 1000;
            timeoutWarn = 30 * 1000;
          }
          return {
            timeoutErr: timeoutErr,
            timeoutWarn: timeoutWarn
          };
        }
        var globalObject$3 = getGlobalObject('navigationState.ts', {});
        var urlFirst = getCurrentUrl();
        var navigationState = {
          markNavigationChange: function markNavigationChange() {
            globalObject$3.navigationChanged = true;
          },
          get noNavigationChangeYet() {
            return !globalObject$3.navigationChanged && this.isFirstUrl(getCurrentUrl());
          },
          isFirstUrl: function isFirstUrl(url) {
            return url === urlFirst;
          }
        };
        function getPageFilesServerSide(pageFilesAll, pageId) {
          return getAllPageIdFilesServerSide(pageFilesAll, pageId);
        }
        function analyzePageServerSide(_x9, _x10) {
          return _analyzePageServerSide.apply(this, arguments);
        }
        function _analyzePageServerSide() {
          _analyzePageServerSide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(pageFilesAll, pageId) {
            var pageFilesServerSide, pageFilesServerSideOnly, hasOnBeforeRenderServerSideOnlyHook;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
                    pageFilesServerSideOnly = pageFilesServerSide.filter(function (p) {
                      return p.fileType === '.page.server';
                    });
                    _context14.next = 4;
                    return Promise.all(pageFilesServerSideOnly.map( /*#__PURE__*/function () {
                      var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(p) {
                        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                if (!p.exportNames) {
                                  _context13.next = 2;
                                  break;
                                }
                                return _context13.abrupt("return");
                              case 2:
                                assert(p.loadExportNames, pageId);
                                _context13.next = 5;
                                return p.loadExportNames();
                              case 5:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13);
                      }));
                      return function (_x29) {
                        return _ref17.apply(this, arguments);
                      };
                    }()));
                  case 4:
                    hasOnBeforeRenderServerSideOnlyHook = pageFilesServerSideOnly.some(function (_ref18) {
                      var exportNames = _ref18.exportNames;
                      assert(exportNames);
                      return exportNames.includes('onBeforeRender');
                    });
                    return _context14.abrupt("return", {
                      hasOnBeforeRenderServerSideOnlyHook: hasOnBeforeRenderServerSideOnlyHook
                    });
                  case 6:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14);
          }));
          return _analyzePageServerSide.apply(this, arguments);
        }
        function assertHookResult(hookResult, hookName, hookResultKeys, hookFile) {
          assert(!hookName.endsWith(')'));
          var errPrefix = "The `export { ".concat(hookName, " }` of ").concat(hookFile);
          assertUsage(hookResult === null || hookResult === undefined || isPlainObject(hookResult), "".concat(errPrefix, " should return `null`, `undefined`, or a plain JavaScript object."));
          if (hookResult === undefined || hookResult === null) {
            return;
          }
          assertObjectKeys(hookResult, hookResultKeys, errPrefix);
          if ('pageContext' in hookResult) {
            assertPageContextProvidedByUser(hookResult['pageContext'], {
              hook: {
                hookName: hookName,
                hookFilePath: hookFile
              }
            });
          }
        }
        function assertObjectKeys(obj, keysExpected, errPrefix) {
          var keysUnknown = [];
          var keys = Object.keys(obj);
          for (var _i2 = 0, _keys = keys; _i2 < _keys.length; _i2++) {
            var key = _keys[_i2];
            if (!keysExpected.includes(key)) {
              keysUnknown.push(key);
            }
          }
          assertUsage(keysUnknown.length === 0, [errPrefix, 'returned an object with unknown keys', stringifyStringArray(keysUnknown) + '.', 'Only following keys are allowed:', stringifyStringArray(keysExpected) + '.'].join(' '));
        }
        function releasePageContext(pageContext) {
          assert([true, false].includes(pageContext.isHydration));
          assert([true, false, null].includes(pageContext.isBackwardNavigation));
          return releasePageContextCommon(pageContext);
        }
        var BUILT_IN_CLIENT_ROUTER = ['urlPathname', 'urlParsed'];
        var BUILT_IN_CLIENT = ['Page', 'pageExports', 'exports'];
        function removeBuiltInOverrides(pageContext) {
          var alreadySet = [].concat(BUILT_IN_CLIENT, BUILT_IN_CLIENT_ROUTER);
          alreadySet.forEach(function (prop) {
            if (prop in pageContext) {
              // We need to cast `BUILT_IN_CLIENT` to `string[]`
              //  - https://stackoverflow.com/questions/56565528/typescript-const-assertions-how-to-use-array-prototype-includes
              //  - https://stackoverflow.com/questions/57646355/check-if-string-is-included-in-readonlyarray-in-typescript
              if (BUILT_IN_CLIENT_ROUTER.includes(prop)) {
                assert(prop.startsWith('url'));
                assertWarning(false, "`pageContext.".concat(prop, "` is already available in the browser when using Client Routing; including `").concat(prop, "` in `passToClient` has no effect."), {
                  onlyOnce: true
                });
              } else {
                assertWarning(false, "`pageContext.".concat(prop, "` is a built-in that cannot be overriden; including `").concat(prop, "` in `passToClient` has no effect."), {
                  onlyOnce: true
                });
              }
              delete pageContext[prop];
            }
          });
        }

        // - When doing a `.pageContext.json` HTTP request, the base URL should be preserved. (The server-side will handle the base URL.)
        // - While prerendering there is no base URL
        var baseUrl = '/';
        function urlToFile(url, fileExtension, doNotCreateExtraDirectory) {
          var _parseUrl = parseUrl(url, baseUrl),
            pathnameOriginal = _parseUrl.pathnameOriginal,
            searchOriginal = _parseUrl.searchOriginal,
            hashOriginal = _parseUrl.hashOriginal;
          if (url.startsWith('/')) {
            assert(url === "".concat(pathnameOriginal).concat(searchOriginal || '').concat(hashOriginal || ''), {
              url: url
            });
          }
          var hasTrailingSlash = pathnameOriginal.endsWith('/');
          var pathnameModified;
          if (doNotCreateExtraDirectory && pathnameOriginal !== '/') {
            if (hasTrailingSlash) {
              pathnameModified = slice(pathnameOriginal, 0, -1);
            } else {
              pathnameModified = pathnameOriginal;
            }
            assert(!pathnameModified.endsWith('/'), {
              url: url
            });
            assert(pathnameModified !== '');
          } else {
            pathnameModified = pathnameOriginal + (hasTrailingSlash ? '' : '/') + 'index';
          }
          assert(pathnameModified);
          pathnameModified = pathnameModified + fileExtension;
          var fileUrl = "".concat(pathnameModified).concat(searchOriginal || '').concat(hashOriginal || '');
          return fileUrl;
        }
        var fileExtension = '.pageContext.json';
        // `/some-base-url/index.pageContext.json` instead of `/some-base-url.pageContext.json` in order to comply to common reverse proxy setups, see https://github.com/brillout/vite-plugin-ssr/issues/443
        var doNotCreateExtraDirectory = false;
        // See node/renderPage/handlePageContextRequestUrl.ts
        function getPageContextRequestUrl(url) {
          var pageContextRequestUrl = urlToFile(url, fileExtension, doNotCreateExtraDirectory);
          return pageContextRequestUrl;
        }
        function getPageContext(_x11) {
          return _getPageContext.apply(this, arguments);
        }
        function _getPageContext() {
          _getPageContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(pageContext) {
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    if (!(pageContext._isFirstRenderAttempt && navigationState.isFirstUrl(pageContext.urlOriginal))) {
                      _context15.next = 5;
                      break;
                    }
                    assert(hasProp(pageContext, '_isFirstRenderAttempt', 'true'));
                    return _context15.abrupt("return", getPageContextFirstRender(pageContext));
                  case 5:
                    assert(hasProp(pageContext, '_isFirstRenderAttempt', 'false'));
                    return _context15.abrupt("return", getPageContextUponNavigation(pageContext));
                  case 7:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15);
          }));
          return _getPageContext.apply(this, arguments);
        }
        function getPageContextFirstRender(_x12) {
          return _getPageContextFirstRender.apply(this, arguments);
        }
        function _getPageContextFirstRender() {
          _getPageContextFirstRender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(pageContext) {
            var pageContextAddendum;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    pageContextAddendum = getPageContextSerializedInHtml();
                    removeBuiltInOverrides(pageContextAddendum);
                    objectAssign(pageContextAddendum, {
                      isHydration: true,
                      _comesDirectlyFromServer: true
                    });
                    _context16.t0 = objectAssign;
                    _context16.t1 = pageContextAddendum;
                    _context16.next = 7;
                    return loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId);
                  case 7:
                    _context16.t2 = _context16.sent;
                    (0, _context16.t0)(_context16.t1, _context16.t2);
                    return _context16.abrupt("return", pageContextAddendum);
                  case 10:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16);
          }));
          return _getPageContextFirstRender.apply(this, arguments);
        }
        function getPageContextErrorPage(_x13) {
          return _getPageContextErrorPage.apply(this, arguments);
        }
        function _getPageContextErrorPage() {
          _getPageContextErrorPage = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(pageContext) {
            var errorPageId, pageContextAddendum;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    errorPageId = getErrorPageId(pageContext._allPageIds);
                    if (errorPageId) {
                      _context17.next = 3;
                      break;
                    }
                    throw new Error('No error page');
                  case 3:
                    pageContextAddendum = {
                      isHydration: false,
                      _pageId: errorPageId,
                      _pageContextRetrievedFromServer: null,
                      _comesDirectlyFromServer: false
                    };
                    _context17.t0 = objectAssign;
                    _context17.t1 = pageContextAddendum;
                    _context17.next = 8;
                    return loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId);
                  case 8:
                    _context17.t2 = _context17.sent;
                    (0, _context17.t0)(_context17.t1, _context17.t2);
                    return _context17.abrupt("return", pageContextAddendum);
                  case 11:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17);
          }));
          return _getPageContextErrorPage.apply(this, arguments);
        }
        function getPageContextUponNavigation(_x14) {
          return _getPageContextUponNavigation.apply(this, arguments);
        }
        function _getPageContextUponNavigation() {
          _getPageContextUponNavigation = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(pageContext) {
            var pageContextAddendum, pageContextFromHook, errorPageId;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    pageContextAddendum = {};
                    objectAssign(pageContextAddendum, {
                      isHydration: false
                    });
                    _context18.t0 = objectAssign;
                    _context18.t1 = pageContextAddendum;
                    _context18.next = 6;
                    return getPageContextFromRoute(pageContext);
                  case 6:
                    _context18.t2 = _context18.sent;
                    (0, _context18.t0)(_context18.t1, _context18.t2);
                    _context18.t3 = objectAssign;
                    _context18.t4 = pageContextAddendum;
                    _context18.next = 12;
                    return loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId);
                  case 12:
                    _context18.t5 = _context18.sent;
                    (0, _context18.t3)(_context18.t4, _context18.t5);
                    _context18.next = 16;
                    return onBeforeRenderExecute(_objectSpread(_objectSpread({}, pageContext), pageContextAddendum));
                  case 16:
                    pageContextFromHook = _context18.sent;
                    assert([true, false].includes(pageContextFromHook._comesDirectlyFromServer));
                    if (pageContextFromHook['_isError']) {
                      _context18.next = 23;
                      break;
                    }
                    objectAssign(pageContextAddendum, pageContextFromHook);
                    return _context18.abrupt("return", pageContextAddendum);
                  case 23:
                    pageContextAddendum = {};
                    assert(pageContextFromHook._comesDirectlyFromServer === true);
                    assert(hasProp(pageContextFromHook, 'is404', 'boolean'));
                    assert(hasProp(pageContextFromHook, 'pageProps', 'object'));
                    assert(hasProp(pageContextFromHook.pageProps, 'is404', 'boolean'));
                    // When the user hasn't define a `_error.page.js` file: the mechanism with `serverSideError: true` is used instead
                    assert(!('serverSideError' in pageContextFromHook));
                    errorPageId = getErrorPageId(pageContext._allPageIds);
                    assert(errorPageId);
                    objectAssign(pageContextAddendum, {
                      isHydration: false,
                      _pageId: errorPageId
                    });
                    objectAssign(pageContextAddendum, pageContextFromHook);
                    _context18.t6 = objectAssign;
                    _context18.t7 = pageContextAddendum;
                    _context18.next = 37;
                    return loadPageFilesClientSide(pageContext._pageFilesAll, pageContextAddendum._pageId);
                  case 37:
                    _context18.t8 = _context18.sent;
                    (0, _context18.t6)(_context18.t7, _context18.t8);
                    return _context18.abrupt("return", pageContextAddendum);
                  case 40:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18);
          }));
          return _getPageContextUponNavigation.apply(this, arguments);
        }
        function onBeforeRenderExecute(_x15) {
          return _onBeforeRenderExecute.apply(this, arguments);
        }
        function _onBeforeRenderExecute() {
          _onBeforeRenderExecute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(pageContext) {
            var hook, onBeforeRender, _pageContextAddendum, pageContextReadyForRelease, hookResult, pageContextFromHook, pageContextFromServer, _pageContextAddendum2, pageContextAddendum;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    // `export { onBeforeRender }` defined in `.page.client.js` or `.page.js`
                    hook = getHook(pageContext, 'onBeforeRender');
                    if (!hook) {
                      _context19.next = 14;
                      break;
                    }
                    onBeforeRender = hook.hook;
                    _pageContextAddendum = {
                      _comesDirectlyFromServer: false,
                      _pageContextRetrievedFromServer: null
                    };
                    pageContextReadyForRelease = releasePageContext(_objectSpread(_objectSpread({}, pageContext), _pageContextAddendum));
                    _context19.next = 7;
                    return callHookWithTimeout(function () {
                      return onBeforeRender(pageContextReadyForRelease);
                    }, 'onBeforeRender', hook.filePath);
                  case 7:
                    hookResult = _context19.sent;
                    assertHookResult(hookResult, 'onBeforeRender', ['pageContext'], hook.filePath);
                    pageContextFromHook = hookResult === null || hookResult === void 0 ? void 0 : hookResult.pageContext;
                    objectAssign(_pageContextAddendum, pageContextFromHook);
                    return _context19.abrupt("return", _pageContextAddendum);
                  case 14:
                    _context19.next = 16;
                    return analyzePageServerSide(pageContext._pageFilesAll, pageContext._pageId);
                  case 16:
                    if (!_context19.sent.hasOnBeforeRenderServerSideOnlyHook) {
                      _context19.next = 24;
                      break;
                    }
                    _context19.next = 19;
                    return retrievePageContextFromServer(pageContext);
                  case 19:
                    pageContextFromServer = _context19.sent;
                    _pageContextAddendum2 = {};
                    Object.assign(_pageContextAddendum2, pageContextFromServer);
                    objectAssign(_pageContextAddendum2, {
                      _comesDirectlyFromServer: true,
                      _pageContextRetrievedFromServer: pageContextFromServer
                    });
                    return _context19.abrupt("return", _pageContextAddendum2);
                  case 24:
                    // No `export { onBeforeRender }` defined
                    pageContextAddendum = {
                      _comesDirectlyFromServer: false,
                      _pageContextRetrievedFromServer: null
                    };
                    return _context19.abrupt("return", pageContextAddendum);
                  case 26:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19);
          }));
          return _onBeforeRenderExecute.apply(this, arguments);
        }
        function getPageContextFromRoute(_x16) {
          return _getPageContextFromRoute.apply(this, arguments);
        }
        function _getPageContextFromRoute() {
          _getPageContextFromRoute = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(pageContext) {
            var routeResult, pageContextFromRoute;
            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return route(pageContext);
                  case 2:
                    routeResult = _context20.sent;
                    pageContextFromRoute = routeResult.pageContextAddendum;
                    if (pageContextFromRoute._pageId) {
                      _context20.next = 6;
                      break;
                    }
                    throw new Error('No routing match');
                  case 6:
                    assert(hasProp(pageContextFromRoute, '_pageId', 'string'));
                    return _context20.abrupt("return", pageContextFromRoute);
                  case 8:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20);
          }));
          return _getPageContextFromRoute.apply(this, arguments);
        }
        function retrievePageContextFromServer(_x17) {
          return _retrievePageContextFromServer.apply(this, arguments);
        }
        function _retrievePageContextFromServer() {
          _retrievePageContextFromServer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(pageContext) {
            var _a, pageContextUrl, response, contentType, isRightContentType, err, responseText, responseObject, pageContextFromServer;
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    pageContextUrl = getPageContextRequestUrl((_a = pageContext._urlPristine) !== null && _a !== void 0 ? _a : pageContext.urlOriginal);
                    _context21.next = 3;
                    return fetch(pageContextUrl);
                  case 3:
                    response = _context21.sent;
                    contentType = response.headers.get('content-type');
                    isRightContentType = contentType && contentType.includes('application/json'); // Static hosts + page doesn't exist
                    if (!(!isRightContentType && response.status === 404)) {
                      _context21.next = 11;
                      break;
                    }
                    serverSideRouteTo(pageContext.urlOriginal);
                    err = new Error("Page doesn't exist");
                    Object.assign(err, {
                      _abortRendering: true
                    });
                    throw err;
                  case 11:
                    assertUsage(isRightContentType, "Wrong HTTP Response Header `content-type` value for URL ".concat(pageContextUrl, " (it should be `application/json` but we got `").concat(contentType, "`). Make sure to use `pageContext.httpResponse.contentType`, see https://github.com/brillout/vite-plugin-ssr/issues/191"));
                    _context21.next = 14;
                    return response.text();
                  case 14:
                    responseText = _context21.sent;
                    responseObject = parse(responseText);
                    if (!('serverSideError' in responseObject)) {
                      _context21.next = 18;
                      break;
                    }
                    throw getProjectError('`pageContext` could not be fetched from the server as an error occurred on the server; check your server logs.');
                  case 18:
                    assert(hasProp(responseObject, 'pageContext'));
                    pageContextFromServer = responseObject.pageContext;
                    assert(isPlainObject(pageContextFromServer));
                    assert(hasProp(pageContextFromServer, '_pageId', 'string'));
                    removeBuiltInOverrides(pageContextFromServer);
                    return _context21.abrupt("return", pageContextFromServer);
                  case 24:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21);
          }));
          return _retrievePageContextFromServer.apply(this, arguments);
        }
        function getBaseUrl() {
          var baseUrl = "/base-url/";
          if (isBaseAssets(baseUrl)) {
            return '/';
          }
          return baseUrl;
        }
        var globalObject$2 = getGlobalObject('getGlobalContext.ts', {});
        function getGlobalContext() {
          return _getGlobalContext.apply(this, arguments);
        }
        function _getGlobalContext() {
          _getGlobalContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
            return _regeneratorRuntime().wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    if (globalObject$2.globalContext) {
                      _context22.next = 4;
                      break;
                    }
                    _context22.next = 3;
                    return retrieveGlobalContext();
                  case 3:
                    globalObject$2.globalContext = _context22.sent;
                  case 4:
                    return _context22.abrupt("return", globalObject$2.globalContext);
                  case 5:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22);
          }));
          return _getGlobalContext.apply(this, arguments);
        }
        function retrieveGlobalContext() {
          return _retrieveGlobalContext.apply(this, arguments);
        }
        function _retrieveGlobalContext() {
          _retrieveGlobalContext = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            var baseUrl, globalContext, _yield$getPageFilesAl, pageFilesAll, allPageIds;
            return _regeneratorRuntime().wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    baseUrl = getBaseUrl();
                    assertBaseUrl(baseUrl);
                    globalContext = {
                      _urlProcessor: null,
                      _baseUrl: baseUrl,
                      _objectCreatedByVitePluginSsr: true,
                      _isProduction: false
                    };
                    _context23.next = 5;
                    return getPageFilesAll(true);
                  case 5:
                    _yield$getPageFilesAl = _context23.sent;
                    pageFilesAll = _yield$getPageFilesAl.pageFilesAll;
                    allPageIds = _yield$getPageFilesAl.allPageIds;
                    objectAssign(globalContext, {
                      _pageFilesAll: pageFilesAll,
                      _allPageIds: allPageIds
                    });
                    return _context23.abrupt("return", globalContext);
                  case 10:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23);
          }));
          return _retrieveGlobalContext.apply(this, arguments);
        }
        function getPageId(_x18) {
          return _getPageId.apply(this, arguments);
        }
        function _getPageId() {
          _getPageId = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(url) {
            var globalContext, pageContext, pageFilesAll, routeContext, pageId;
            return _regeneratorRuntime().wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    _context24.next = 2;
                    return getGlobalContext();
                  case 2:
                    globalContext = _context24.sent;
                    pageContext = _objectSpread({
                      urlOriginal: url
                    }, globalContext);
                    pageFilesAll = globalContext._pageFilesAll;
                    addComputedUrlProps(pageContext);
                    _context24.next = 8;
                    return route(pageContext);
                  case 8:
                    routeContext = _context24.sent;
                    if ('pageContextAddendum' in routeContext) {
                      _context24.next = 11;
                      break;
                    }
                    return _context24.abrupt("return", {
                      pageId: null,
                      pageFilesAll: pageFilesAll
                    });
                  case 11:
                    pageId = routeContext.pageContextAddendum._pageId;
                    if (pageId) {
                      _context24.next = 14;
                      break;
                    }
                    return _context24.abrupt("return", {
                      pageId: null,
                      pageFilesAll: pageFilesAll
                    });
                  case 14:
                    return _context24.abrupt("return", {
                      pageId: pageId,
                      pageFilesAll: pageFilesAll
                    });
                  case 15:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24);
          }));
          return _getPageId.apply(this, arguments);
        }
        function getExportNames(p) {
          if (p.exportNames) {
            return p.exportNames;
          }
          assert(p.fileExports, p.pageId);
          var exportNames = Object.keys(p.fileExports);
          return exportNames;
        }
        function analyzeExports(_ref6) {
          var pageFilesClientSide = _ref6.pageFilesClientSide,
            pageFilesServerSide = _ref6.pageFilesServerSide,
            pageId = _ref6.pageId;
          return {
            isHtmlOnly: isHtmlOnly(),
            isClientRouting: isClientRouting()
          };
          function isHtmlOnly() {
            {
              var hasPageIdIsmrphFile = pageFilesServerSide.some(function (p) {
                return p.pageId === pageId && p.fileType === '.page';
              });
              if (hasPageIdIsmrphFile) {
                assertClientSideRenderHook();
                return false;
              }
            }
            {
              var hasPageIdServerFile = pageFilesServerSide.some(function (p) {
                return p.pageId === pageId && p.fileType === '.page.server';
              });
              if (!hasPageIdServerFile) {
                return false;
              }
            }
            {
              var definesClientRenderer = pageFilesClientSide.some(function (p) {
                return p.pageId === pageId && p.fileType === '.page.client' && getExportNames(p).includes('render');
              });
              if (definesClientRenderer) {
                return false;
              }
            }
            return true;
          }
          function assertClientSideRenderHook() {
            var hasClientSideRenderHook = pageFilesClientSide.some(function (p) {
              return getExportNames(p).includes('render');
            });
            assertUsage(hasClientSideRenderHook, ['No client-side `render()` hook found.', 'See https://vite-plugin-ssr.com/render-modes for more information.', ['Loaded client-side page files (none of them `export { render }`):'].concat(_toConsumableArray(pageFilesClientSide.map(function (p, i) {
              return " (".concat(i + 1, "): ").concat(p.filePath);
            }))).join('\n')].join(' '));
          }
          function isClientRouting() {
            var hasClientRoutingExport = pageFilesClientSide.some(function (p) {
              return getExportNames(p).includes('clientRouting');
            });
            return hasClientRoutingExport;
          }
        }
        function determineClientEntry(_ref7) {
          var pageFilesClientSide = _ref7.pageFilesClientSide,
            pageFilesServerSide = _ref7.pageFilesServerSide,
            isHtmlOnly = _ref7.isHtmlOnly,
            isClientRouting = _ref7.isClientRouting;
          var clientEntries = [];
          var pageFilesServerSideOnly = pageFilesServerSide.filter(function (p) {
            return !pageFilesClientSide.includes(p);
          });
          var clientDependencies = [];
          clientDependencies.push.apply(clientDependencies, _toConsumableArray(pageFilesClientSide.map(function (p) {
            return {
              id: p.filePath,
              onlyAssets: false
            };
          })));
          clientDependencies.push.apply(clientDependencies, _toConsumableArray(pageFilesServerSideOnly.map(function (p) {
            return {
              id: p.filePath,
              onlyAssets: true
            };
          }))); // CSS & assets
          // Handle SPA & SSR pages.
          if (isHtmlOnly) {
            clientEntries = pageFilesClientSide.map(function (p) {
              return p.filePath;
            });
          } else {
            // Add the vps client entry
            var clientEntry = isClientRouting ?
            // $userRoot/dist/client/entry-client-routing.js
            '@@vite-plugin-ssr/dist/esm/client/router/entry.js' :
            // $userRoot/dist/client/entry-server-routing.js
            '@@vite-plugin-ssr/dist/esm/client/entry.js';
            clientDependencies.push({
              id: clientEntry,
              onlyAssets: false
            });
            clientEntries = [clientEntry];
          }
          // console.log(pageFilesClientSide, pageFilesServerSide, clientDependencies, clientEntry)
          return {
            clientEntries: clientEntries,
            clientDependencies: clientDependencies
          };
        }
        function analyzePageClientSide(pageFilesAll, pageId) {
          var pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
          var pageFilesServerSide = getPageFilesServerSide(pageFilesAll, pageId);
          var _analyzeExports = analyzeExports({
              pageFilesClientSide: pageFilesClientSide,
              pageFilesServerSide: pageFilesServerSide,
              pageId: pageId
            }),
            isHtmlOnly = _analyzeExports.isHtmlOnly,
            isClientRouting = _analyzeExports.isClientRouting;
          if (isHtmlOnly) {
            // HTML-only pages don't need any client-side `render()` hook. For apps that have both HTML-only and SSR/SPA pages, we skip the `.page.client.js` file that defines `render()` for HTML-only pages.
            pageFilesClientSide = pageFilesClientSide.filter(function (p) {
              return p.fileType === '.page.client' && !getExportNames(p).includes('render');
            });
            pageFilesClientSide = removeOverridenPageFiles(pageFilesClientSide);
          }
          var _determineClientEntry = determineClientEntry({
              pageFilesClientSide: pageFilesClientSide,
              pageFilesServerSide: pageFilesServerSide,
              isHtmlOnly: isHtmlOnly,
              isClientRouting: isClientRouting
            }),
            clientEntries = _determineClientEntry.clientEntries,
            clientDependencies = _determineClientEntry.clientDependencies;
          return {
            isHtmlOnly: isHtmlOnly,
            isClientRouting: isClientRouting,
            clientEntries: clientEntries,
            clientDependencies: clientDependencies,
            pageFilesClientSide: pageFilesClientSide,
            pageFilesServerSide: pageFilesServerSide
          };
        }
        function analyzePageClientSideInit(_x19, _x20, _x21) {
          return _analyzePageClientSideInit.apply(this, arguments);
        } // [WIP] Just an experiment needed by https://vite-plugin-ssr.com/banner
        //  - Not sure I want to make something like a public API: the CSS of `_default.page.server.js` are still loaded -> weird DX.
        function _analyzePageClientSideInit() {
          _analyzePageClientSideInit = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee26(pageFilesAll, pageId, _ref8) {
            var sharedPageFilesAlreadyLoaded, pageFilesClientSide;
            return _regeneratorRuntime().wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    sharedPageFilesAlreadyLoaded = _ref8.sharedPageFilesAlreadyLoaded;
                    pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
                    _context26.next = 4;
                    return Promise.all(pageFilesClientSide.map( /*#__PURE__*/function () {
                      var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(p) {
                        var _a;
                        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
                          while (1) {
                            switch (_context25.prev = _context25.next) {
                              case 0:
                                assert(p.fileType === '.page' || p.fileType === '.page.client');
                                if (!(sharedPageFilesAlreadyLoaded && p.fileType === '.page')) {
                                  _context25.next = 3;
                                  break;
                                }
                                return _context25.abrupt("return");
                              case 3:
                                _context25.next = 5;
                                return (_a = p.loadExportNames) === null || _a === void 0 ? void 0 : _a.call(p);
                              case 5:
                              case "end":
                                return _context25.stop();
                            }
                          }
                        }, _callee25);
                      }));
                      return function (_x30) {
                        return _ref19.apply(this, arguments);
                      };
                    }()));
                  case 4:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26);
          }));
          return _analyzePageClientSideInit.apply(this, arguments);
        }
        function removeOverridenPageFiles(pageFilesClientSide) {
          var pageFilesClientSide_ = [];
          var _iterator2 = _createForOfIteratorHelper(pageFilesClientSide),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var p = _step2.value;
              pageFilesClientSide_.push(p);
              if (getExportNames(p).includes('overrideDefaultPages')) {
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return pageFilesClientSide_;
        }
        function isClientSideRenderable(_x22) {
          return _isClientSideRenderable.apply(this, arguments);
        }
        function _isClientSideRenderable() {
          _isClientSideRenderable = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee27(url) {
            var _yield$getPageId, pageId, pageFilesAll, _analyzePageClientSid, isHtmlOnly, isClientRouting;
            return _regeneratorRuntime().wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    _context27.next = 2;
                    return getPageId(url);
                  case 2:
                    _yield$getPageId = _context27.sent;
                    pageId = _yield$getPageId.pageId;
                    pageFilesAll = _yield$getPageId.pageFilesAll;
                    if (pageId) {
                      _context27.next = 7;
                      break;
                    }
                    return _context27.abrupt("return", false);
                  case 7:
                    _context27.next = 9;
                    return analyzePageClientSideInit(pageFilesAll, pageId, {
                      sharedPageFilesAlreadyLoaded: false
                    });
                  case 9:
                    _analyzePageClientSid = analyzePageClientSide(pageFilesAll, pageId), isHtmlOnly = _analyzePageClientSid.isHtmlOnly, isClientRouting = _analyzePageClientSid.isClientRouting;
                    return _context27.abrupt("return", !isHtmlOnly && isClientRouting);
                  case 11:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27);
          }));
          return _isClientSideRenderable.apply(this, arguments);
        }
        function skipLink(linkTag) {
          var url = linkTag.getAttribute('href');
          if (url === null) return true;
          if (url === '') return true;
          if (isExternalLink(url)) return true;
          if (isNewTabLink(linkTag)) return true;
          if (isHashUrl(url)) return true;
          if (!hasBaseUrl(url)) {
            return true;
          }
          if (!isParsable(url)) {
            return true;
          }
          return false;
        }
        function isNewTabLink(linkTag) {
          var target = linkTag.getAttribute('target');
          var rel = linkTag.getAttribute('rel');
          return target === '_blank' || target === '_external' || rel === 'external' || linkTag.hasAttribute('download');
        }
        function isHashUrl(url) {
          if (url.startsWith('#')) {
            return true;
          }
          var removeHash = function removeHash(url) {
            return url.split('#')[0];
          };
          if (url.includes('#') && removeHash(url) === removeHash(window.location.href)) {
            return true;
          }
          return false;
        }
        function hasBaseUrl(url) {
          var baseUrl = getBaseUrl();
          assertBaseUrl(baseUrl);
          var _parseUrl2 = parseUrl(url, baseUrl),
            hasBaseUrl = _parseUrl2.hasBaseUrl;
          return hasBaseUrl;
        }
        function getPrefetchConfig(pageContext, linkTag) {
          var prefetchStaticAssets = getStaticAssetsConfig(pageContext, linkTag);
          return {
            prefetchPageContext: false,
            prefetchStaticAssets: prefetchStaticAssets
          };
        }
        function getStaticAssetsConfig(pageContext, linkTag) {
          var prefetchAttribute = getPrefetchAttribute(linkTag);
          var prefetchStaticAssets = function () {
            if (prefetchAttribute !== null) {
              if (prefetchAttribute === true) {
                return {
                  when: 'VIEWPORT'
                };
              } else {
                return {
                  when: 'HOVER'
                };
              }
            }
            if ('prefetchLinks' in pageContext.exports) {
              assertUsage(prefetchAttribute === null, '`export { prefetchLinks }` is deprecated, use `export { prefetchStaticAssets }` instead.');
            }
            if ('prefetchStaticAssets' in pageContext.exports) {
              var _prefetchStaticAssets = pageContext.exports.prefetchStaticAssets;
              if (_prefetchStaticAssets === false) {
                return false;
              }
              var wrongUsageMsg = "`prefetchStaticAssets` should be either `false`, `{ when: 'VIEWPORT' }`, or `{ when: 'HOVER' }`";
              assertUsage(isPlainObject(_prefetchStaticAssets), wrongUsageMsg);
              var keys = Object.keys(_prefetchStaticAssets);
              assertUsage(keys.length === 1 && keys[0] === 'when', wrongUsageMsg);
              var when = _prefetchStaticAssets.when;
              if (when === 'HOVER' || when === 'VIEWPORT') {
                return {
                  when: when
                };
              }
              assertUsage(false, wrongUsageMsg);
            }
            return {
              when: 'HOVER'
            };
          }();
          if (prefetchStaticAssets && prefetchStaticAssets.when === 'VIEWPORT' && !pageContext._isProduction) {
            assertInfo(false, 'Viewport prefetching is disabled in development', {
              onlyOnce: true
            });
            prefetchStaticAssets = {
              when: 'HOVER'
            };
          }
          return prefetchStaticAssets;
        }
        function getPrefetchAttribute(linkTag) {
          var prefetchAttribute = linkTag.getAttribute('data-prefetch');
          assertWarning(prefetchAttribute === null, 'The `data-prefetch` attribute is outdated.', {
            onlyOnce: true
          });
          if (prefetchAttribute === null) return null;
          assert(typeof prefetchAttribute === 'string');
          if (prefetchAttribute === 'true') {
            return true;
          }
          if (prefetchAttribute === 'false') {
            return false;
          }
          assertUsage(false, "Wrong data-prefetch value: `\"".concat(prefetchAttribute, "\"`; it should be `\"true\"` or `\"false\"`."));
        }
        var linkAlreadyPrefetched = new Map();
        function isAlreadyPrefetched(url) {
          var prefetchUrl = getPrefetchUrl(url);
          return linkAlreadyPrefetched.has(prefetchUrl);
        }
        function markAsAlreadyPrefetched(url) {
          var prefetchUrl = getPrefetchUrl(url);
          linkAlreadyPrefetched.set(prefetchUrl, true);
        }
        function getPrefetchUrl(url) {
          return getUrlPathname(url);
        }
        var linkPrefetchHandlerAdded = new Map();
        function prefetch(_x23) {
          return _prefetch.apply(this, arguments);
        }
        function _prefetch() {
          _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee28(url) {
            var _yield$getPageId2, pageId, pageFilesAll;
            return _regeneratorRuntime().wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    assertUsage(!isExternalLink(url), "You are trying to prefetch ".concat(url, " which is an external URL. This doesn't make sense since vite-plugin-ssr cannot prefetch external links."));
                    if (!isAlreadyPrefetched(url)) {
                      _context28.next = 3;
                      break;
                    }
                    return _context28.abrupt("return");
                  case 3:
                    markAsAlreadyPrefetched(url);
                    _context28.next = 6;
                    return getPageId(url);
                  case 6:
                    _yield$getPageId2 = _context28.sent;
                    pageId = _yield$getPageId2.pageId;
                    pageFilesAll = _yield$getPageId2.pageFilesAll;
                    if (!pageId) {
                      _context28.next = 22;
                      break;
                    }
                    _context28.prev = 10;
                    _context28.next = 13;
                    return loadPageFilesClientSide(pageFilesAll, pageId);
                  case 13:
                    _context28.next = 22;
                    break;
                  case 15:
                    _context28.prev = 15;
                    _context28.t0 = _context28["catch"](10);
                    if (!isErrorFetchingStaticAssets(_context28.t0)) {
                      _context28.next = 21;
                      break;
                    }
                    disableClientRouting();
                    _context28.next = 22;
                    break;
                  case 21:
                    throw _context28.t0;
                  case 22:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, null, [[10, 15]]);
          }));
          return _prefetch.apply(this, arguments);
        }
        function addLinkPrefetchHandlers(pageContext) {
          // Current URL is already prefetched
          markAsAlreadyPrefetched(pageContext.urlOriginal);
          var linkTags = _toConsumableArray(document.getElementsByTagName('A'));
          linkTags.forEach( /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(linkTag) {
              var url, prefetchConfig, observer;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!linkPrefetchHandlerAdded.has(linkTag)) {
                        _context2.next = 2;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 2:
                      linkPrefetchHandlerAdded.set(linkTag, true);
                      url = linkTag.getAttribute('href');
                      if (!skipLink(linkTag)) {
                        _context2.next = 6;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 6:
                      assert(url);
                      _context2.next = 9;
                      return isClientSideRenderable(url);
                    case 9:
                      if (_context2.sent) {
                        _context2.next = 11;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 11:
                      if (!isAlreadyPrefetched(url)) {
                        _context2.next = 13;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 13:
                      prefetchConfig = getPrefetchConfig(pageContext, linkTag);
                      if (prefetchConfig.prefetchStaticAssets) {
                        _context2.next = 18;
                        break;
                      }
                      return _context2.abrupt("return");
                    case 18:
                      if (prefetchConfig.prefetchStaticAssets.when === 'HOVER') {
                        linkTag.addEventListener('mouseover', function () {
                          return prefetch(url);
                        });
                        linkTag.addEventListener('touchstart', function () {
                          return prefetch(url);
                        }, {
                          passive: true
                        });
                      } else if (prefetchConfig.prefetchStaticAssets.when === 'VIEWPORT') {
                        observer = new IntersectionObserver(function (entries) {
                          entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                              prefetch(url);
                              observer.disconnect();
                            }
                          });
                        });
                        observer.observe(linkTag);
                      }
                    case 19:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
            return function (_x24) {
              return _ref9.apply(this, arguments);
            };
          }());
        }

        // Fill missing state information.
        //  - The very first render => `history.state` is uninitialized (`null`).
        //  - The vite-plugin-ssr app runs `location.hash = '#section'` => `history.state` is uninitialized (`null`).
        //  - The user clicks on an anchor link `<a href="#section">Section</a>` => `history.state` is uninitialized (`null`).
        //  - `history.state` set by an old vite-plugin-ssr version => state information may be incomplete. (E.g. `state.timestamp` was introduced for `pageContext.isBackwardNavigation` in `0.4.19`.)
        function initHistoryState() {
          var state = window.history.state;
          if (!state) {
            state = {};
          }
          var hasModifications = false;
          if (!('timestamp' in state)) {
            hasModifications = true;
            state.timestamp = getTimestamp();
          }
          if (!('scrollPosition' in state)) {
            hasModifications = true;
            state.scrollPosition = getScrollPosition();
          }
          assertState(state);
          if (hasModifications) {
            replaceHistoryState(state);
          }
        }
        function getHistoryState() {
          var state = window.history.state || {};
          assertState(state);
          return state;
        }
        function getScrollPosition() {
          var scrollPosition = {
            x: window.scrollX,
            y: window.scrollY
          };
          return scrollPosition;
        }
        function getTimestamp() {
          return new Date().getTime();
        }
        function saveScrollPosition() {
          var scrollPosition = getScrollPosition();
          var state = getHistoryState();
          replaceHistoryState(_objectSpread(_objectSpread({}, state), {}, {
            scrollPosition: scrollPosition
          }));
        }
        function pushHistory(url, overwriteLastHistoryEntry) {
          if (!overwriteLastHistoryEntry) {
            var timestamp = getTimestamp();
            pushHistoryState({
              timestamp: timestamp,
              scrollPosition: null
            }, url);
          } else {
            replaceHistoryState(getHistoryState(), url);
          }
        }
        function assertState(state) {
          assert(isObject(state));
          if ('timestamp' in state) {
            var timestamp = state.timestamp;
            assert(typeof timestamp === 'number');
          }
          if ('scrollPosition' in state) {
            var scrollPosition = state.scrollPosition;
            if (scrollPosition !== null) {
              assert(hasProp(scrollPosition, 'x', 'number') && hasProp(scrollPosition, 'y', 'number'));
            }
          }
        }
        function replaceHistoryState(state, url) {
          window.history.replaceState(state, '', url !== null && url !== void 0 ? url : null);
        }
        function pushHistoryState(state, url) {
          window.history.pushState(state, '', url);
        }
        var globalObject$1 = getGlobalObject('navigate.ts', {});
        function defineNavigate(navigate_) {
          globalObject$1.navigate = navigate_;
        }
        var globalObject = getGlobalObject('useClientRouter.ts', {
          previousState: getState()
        });
        setupNativeScrollRestoration();
        initHistoryState();
        function disableClientRouting() {
          globalObject.clientRoutingIsDisabled = true;
          assertInfo(false, "New deployed frontend detected. The next page navigation will use Server Routing instead of Client Routing.", {
            onlyOnce: true
          });
        }
        function useClientRouter() {
          autoSaveScrollPosition();
          onLinkClick(function (url, _ref10) {
            var keepScrollPosition = _ref10.keepScrollPosition;
            var scrollTarget = keepScrollPosition ? 'preserve-scroll' : 'scroll-to-top-or-hash';
            fetchAndRender({
              scrollTarget: scrollTarget,
              url: url,
              isBackwardNavigation: false,
              checkClientSideRenderable: true
            });
          });
          onBrowserHistoryNavigation(function (scrollTarget, isBackwardNavigation) {
            fetchAndRender({
              scrollTarget: scrollTarget,
              isBackwardNavigation: isBackwardNavigation
            });
          });
          defineNavigate( /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
              var _ref12,
                _ref12$keepScrollPosi,
                keepScrollPosition,
                _ref12$overwriteLastH,
                overwriteLastHistoryEntry,
                scrollTarget,
                _args3 = arguments;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _ref12 = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {}, _ref12$keepScrollPosi = _ref12.keepScrollPosition, keepScrollPosition = _ref12$keepScrollPosi === void 0 ? false : _ref12$keepScrollPosi, _ref12$overwriteLastH = _ref12.overwriteLastHistoryEntry, overwriteLastHistoryEntry = _ref12$overwriteLastH === void 0 ? false : _ref12$overwriteLastH;
                      scrollTarget = keepScrollPosition ? 'preserve-scroll' : 'scroll-to-top-or-hash';
                      _context3.next = 4;
                      return fetchAndRender({
                        scrollTarget: scrollTarget,
                        url: url,
                        overwriteLastHistoryEntry: overwriteLastHistoryEntry,
                        isBackwardNavigation: false,
                        checkClientSideRenderable: true
                      });
                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
            return function (_x25) {
              return _ref11.apply(this, arguments);
            };
          }());
          var renderingCounter = 0;
          var renderPromise;
          var isTransitioning = false;
          fetchAndRender({
            scrollTarget: 'preserve-scroll',
            isBackwardNavigation: null
          });
          return;
          function fetchAndRender(_x26) {
            return _fetchAndRender.apply(this, arguments);
          }
          function _fetchAndRender() {
            _fetchAndRender = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(_ref13) {
              var scrollTarget, _ref13$url, url, _ref13$overwriteLastH, overwriteLastHistoryEntry, isBackwardNavigation, checkClientSideRenderable, _a, pageContext, renderingNumber, hydrationCanBeAborted, shouldAbort, globalContext, isFirstRenderAttempt, pageContextAddendum, onHydrationEnd, hookFilePath;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      scrollTarget = _ref13.scrollTarget, _ref13$url = _ref13.url, url = _ref13$url === void 0 ? getCurrentUrl() : _ref13$url, _ref13$overwriteLastH = _ref13.overwriteLastHistoryEntry, overwriteLastHistoryEntry = _ref13$overwriteLastH === void 0 ? false : _ref13$overwriteLastH, isBackwardNavigation = _ref13.isBackwardNavigation, checkClientSideRenderable = _ref13.checkClientSideRenderable;
                      if (!globalObject.clientRoutingIsDisabled) {
                        _context5.next = 4;
                        break;
                      }
                      serverSideRouteTo(url);
                      return _context5.abrupt("return");
                    case 4:
                      _context5.t0 = checkClientSideRenderable;
                      if (!_context5.t0) {
                        _context5.next = 9;
                        break;
                      }
                      _context5.next = 8;
                      return isClientSideRenderable(url);
                    case 8:
                      _context5.t0 = !_context5.sent;
                    case 9:
                      if (!_context5.t0) {
                        _context5.next = 12;
                        break;
                      }
                      serverSideRouteTo(url);
                      return _context5.abrupt("return");
                    case 12:
                      pageContext = {
                        urlOriginal: url,
                        isBackwardNavigation: isBackwardNavigation
                      };
                      renderingNumber = ++renderingCounter;
                      assert(renderingNumber >= 1);
                      // Start transition before any await's
                      if (renderingNumber > 1) {
                        if (isTransitioning === false) {
                          (_a = globalObject.onPageTransitionStart) === null || _a === void 0 ? void 0 : _a.call(globalObject, pageContext);
                          isTransitioning = true;
                        }
                      }
                      hydrationCanBeAborted = false;
                      shouldAbort = function shouldAbort() {
                        {
                          // We should never abort the hydration if `hydrationCanBeAborted` isn't `true`
                          var isHydration = renderingNumber === 1;
                          if (isHydration && hydrationCanBeAborted === false) {
                            return false;
                          }
                        }
                        // If there is a newer rendering, we should abort all previous renderings
                        if (renderingNumber !== renderingCounter) {
                          return true;
                        }
                        return false;
                      };
                      _context5.next = 20;
                      return getGlobalContext();
                    case 20:
                      globalContext = _context5.sent;
                      if (!shouldAbort()) {
                        _context5.next = 23;
                        break;
                      }
                      return _context5.abrupt("return");
                    case 23:
                      isFirstRenderAttempt = renderingNumber === 1;
                      objectAssign(pageContext, {
                        _isFirstRenderAttempt: isFirstRenderAttempt
                      });
                      objectAssign(pageContext, globalContext);
                      addComputedUrlProps(pageContext);
                      _context5.prev = 27;
                      _context5.next = 30;
                      return getPageContext(pageContext);
                    case 30:
                      pageContextAddendum = _context5.sent;
                      _context5.next = 54;
                      break;
                    case 33:
                      _context5.prev = 33;
                      _context5.t1 = _context5["catch"](27);
                      if (!checkIfAbort(_context5.t1, pageContext)) {
                        _context5.next = 37;
                        break;
                      }
                      return _context5.abrupt("return");
                    case 37:
                      console.error(_context5.t1);
                      _context5.prev = 38;
                      _context5.next = 41;
                      return getPageContextErrorPage(pageContext);
                    case 41:
                      pageContextAddendum = _context5.sent;
                      _context5.next = 54;
                      break;
                    case 44:
                      _context5.prev = 44;
                      _context5.t2 = _context5["catch"](38);
                      if (!checkIfAbort(_context5.t2, pageContext)) {
                        _context5.next = 48;
                        break;
                      }
                      return _context5.abrupt("return");
                    case 48:
                      if (!isFirstRenderAttempt) {
                        setTimeout(function () {
                          // We let the server show the 404 page
                          window.location.pathname = url;
                        }, 0);
                      }
                      if (isSameErrorMessage(_context5.t1, _context5.t2)) {
                        _context5.next = 53;
                        break;
                      }
                      throw _context5.t2;
                    case 53:
                      return _context5.abrupt("return");
                    case 54:
                      objectAssign(pageContext, pageContextAddendum);
                      assertHook(pageContext, 'onPageTransitionStart');
                      globalObject.onPageTransitionStart = pageContext.exports.onPageTransitionStart;
                      if (pageContext.exports.hydrationCanBeAborted) {
                        hydrationCanBeAborted = true;
                      } else {
                        assertWarning(!isReact(), 'You seem to be using React; we recommend setting `hydrationCanBeAborted` to `true`, see https://vite-plugin-ssr.com/clientRouting', {
                          onlyOnce: true
                        });
                      }
                      if (!shouldAbort()) {
                        _context5.next = 60;
                        break;
                      }
                      return _context5.abrupt("return");
                    case 60:
                      if (!renderPromise) {
                        _context5.next = 63;
                        break;
                      }
                      _context5.next = 63;
                      return renderPromise;
                    case 63:
                      if (!shouldAbort()) {
                        _context5.next = 65;
                        break;
                      }
                      return _context5.abrupt("return");
                    case 65:
                      changeUrl(url, overwriteLastHistoryEntry);
                      navigationState.markNavigationChange();
                      assert(renderPromise === undefined);
                      renderPromise = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var pageContextReadyForRelease, hookFilePath, hookResult;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                pageContextReadyForRelease = releasePageContext(pageContext);
                                assertRenderHook(pageContext);
                                hookFilePath = pageContext.exportsAll.render[0].filePath;
                                assert(hookFilePath);
                                // We don't use a try-catch wrapper because rendering errors are usually handled by the UI framework. (E.g. React's Error Boundaries.)
                                _context4.next = 6;
                                return callHookWithTimeout(function () {
                                  return pageContext.exports.render(pageContextReadyForRelease);
                                }, 'render', hookFilePath);
                              case 6:
                                hookResult = _context4.sent;
                                assertUsage(hookResult === undefined, "The render() hook of ".concat(hookFilePath, " isn't allowed to return a value"));
                                addLinkPrefetchHandlers(pageContext);
                              case 9:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4);
                      }))();
                      _context5.next = 71;
                      return renderPromise;
                    case 71:
                      renderPromise = undefined;
                      if (!pageContext._isFirstRenderAttempt) {
                        _context5.next = 82;
                        break;
                      }
                      assertHook(pageContext, 'onHydrationEnd');
                      onHydrationEnd = pageContext.exports.onHydrationEnd;
                      if (!onHydrationEnd) {
                        _context5.next = 80;
                        break;
                      }
                      hookFilePath = pageContext.exportsAll.onHydrationEnd[0].filePath;
                      assert(hookFilePath);
                      _context5.next = 80;
                      return callHookWithTimeout(function () {
                        return onHydrationEnd(pageContext);
                      }, 'onHydrationEnd', hookFilePath);
                    case 80:
                      _context5.next = 83;
                      break;
                    case 82:
                      if (renderingNumber === renderingCounter) {
                        if (pageContext.exports.onPageTransitionEnd) {
                          assertHook(pageContext, 'onPageTransitionEnd');
                          pageContext.exports.onPageTransitionEnd(pageContext);
                        }
                        isTransitioning = false;
                      }
                    case 83:
                      setScrollPosition(scrollTarget);
                      browserNativeScrollRestoration_disable();
                      globalObject.initialRenderIsDone = true;
                    case 86:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, null, [[27, 33], [38, 44]]);
            }));
            return _fetchAndRender.apply(this, arguments);
          }
        }
        function onLinkClick(callback) {
          document.addEventListener('click', onClick);
          return;
          // Code adapted from https://github.com/HenrikJoreteg/internal-nav-helper/blob/5199ec5448d0b0db7ec63cf76d88fa6cad878b7d/src/index.js#L11-L29
          function onClick(_x27) {
            return _onClick.apply(this, arguments);
          }
          function _onClick() {
            _onClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ev) {
              var linkTag, url, keepScrollPosition;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (isNormalLeftClick(ev)) {
                        _context6.next = 2;
                        break;
                      }
                      return _context6.abrupt("return");
                    case 2:
                      linkTag = findLinkTag(ev.target);
                      if (linkTag) {
                        _context6.next = 5;
                        break;
                      }
                      return _context6.abrupt("return");
                    case 5:
                      url = linkTag.getAttribute('href');
                      if (!skipLink(linkTag)) {
                        _context6.next = 8;
                        break;
                      }
                      return _context6.abrupt("return");
                    case 8:
                      assert(url);
                      ev.preventDefault();
                      keepScrollPosition = ![null, 'false'].includes(linkTag.getAttribute('keep-scroll-position'));
                      callback(url, {
                        keepScrollPosition: keepScrollPosition
                      });
                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
            return _onClick.apply(this, arguments);
          }
          function isNormalLeftClick(ev) {
            return ev.button === 0 && !ev.ctrlKey && !ev.shiftKey && !ev.altKey && !ev.metaKey;
          }
          function findLinkTag(target) {
            while (target.tagName !== 'A') {
              var _target = target,
                parentNode = _target.parentNode;
              if (!parentNode) {
                return null;
              }
              target = parentNode;
            }
            return target;
          }
        }
        function onBrowserHistoryNavigation(callback) {
          // The `event` of `window.addEventListener('popstate', (event) => /*...*/)` is useless:
          //  - The History API doesn't provide the previous state (the popped state): https://stackoverflow.com/questions/48055323/is-history-state-always-the-same-as-popstate-event-state
          window.addEventListener('popstate', function () {
            var currentState = getState();
            var scrollTarget = currentState.historyState.scrollPosition || 'scroll-to-top-or-hash';
            var isHashNavigation = currentState.urlWithoutHash === globalObject.previousState.urlWithoutHash;
            var isBackwardNavigation = !currentState.historyState.timestamp || !globalObject.previousState.historyState.timestamp ? null : currentState.historyState.timestamp < globalObject.previousState.historyState.timestamp;
            globalObject.previousState = currentState;
            if (isHashNavigation) {
              // - `history.state` is uninitialized (`null`) when:
              //   - The vite-plugin-ssr app runs `window.location.hash = '#section'`.
              //   - The user clicks on an anchor link `<a href="#section">Section</a>`. (Because vite-plugin-ssr's `onLinkClick()` handler skips hash links.)
              // - `history.state` is `null` when uninitialized: https://developer.mozilla.org/en-US/docs/Web/API/History/state
              // - Alternatively, we completely take over hash navigation and reproduce the browser's native behavior upon hash navigation.
              //   - Problem: we cannot intercept `window.location.hash = '#section'`. (Or maybe we can with the `hashchange` event?)
              //   - Other potential problem: would there be a conflict when the user wants to override the browser's default behavior? E.g. for smooth scrolling, or when using hashes for saving states of some fancy animations.
              // - Another alternative: we use the browser's scroll restoration mechanism (see `browserNativeScrollRestoration_enable()` below).
              //   - Problem: not clear when to call `browserNativeScrollRestoration_disable()`/`browserNativeScrollRestoration_enable()`
              //   - Other potential problem are inconsistencies between browsers: specification says that setting `window.history.scrollRestoration` only affects the current entry in the session history. But this seems to contradict what folks saying.
              //     - Specification: https://html.spec.whatwg.org/multipage/history.html#the-history-interface
              //     - https://stackoverflow.com/questions/70188241/history-scrollrestoration-manual-doesnt-prevent-safari-from-restoring-scrol
              if (window.history.state === null) {
                // The browser already scrolled to `#${hash}` => the current scroll position is the right one => we save it with `initHistoryState()`.
                initHistoryState();
                globalObject.previousState = getState();
              } else {
                // If `history.state !== null` then it means that `popstate` was triggered by the user clicking on his browser's forward/backward history button.
                setScrollPosition(scrollTarget);
              }
            } else {
              // Fetch & render new page
              callback(scrollTarget, isBackwardNavigation);
            }
          });
        }
        function changeUrl(url, overwriteLastHistoryEntry) {
          if (getCurrentUrl() === url) return;
          browserNativeScrollRestoration_disable();
          pushHistory(url, overwriteLastHistoryEntry);
          globalObject.previousState = getState();
        }
        function getState() {
          return {
            urlWithoutHash: getCurrentUrl({
              withoutHash: true
            }),
            historyState: getHistoryState()
          };
        }
        function setScrollPosition(scrollTarget) {
          if (scrollTarget === 'preserve-scroll') {
            return;
          }
          var scrollPosition;
          if (scrollTarget === 'scroll-to-top-or-hash') {
            var hash = getUrlHash();
            // We replicate the browser's native behavior
            if (hash && hash !== 'top') {
              var hashTarget = document.getElementById(hash) || document.getElementsByName(hash)[0];
              if (hashTarget) {
                hashTarget.scrollIntoView();
                return;
              }
            }
            scrollPosition = {
              x: 0,
              y: 0
            };
          } else {
            assert('x' in scrollTarget && 'y' in scrollTarget);
            scrollPosition = scrollTarget;
          }
          setScroll(scrollPosition);
        }
        /** Change the browser's scoll position, in a way that works during a repaint. */
        function setScroll(scrollPosition) {
          var scroll = function scroll() {
            return window.scrollTo(scrollPosition.x, scrollPosition.y);
          };
          var done = function done() {
            return window.scrollX === scrollPosition.x && window.scrollY === scrollPosition.y;
          };
          // In principle, this `done()` call should force the repaint to be finished. But that doesn't seem to be the case with `Firefox 97.0.1`.
          if (done()) return;
          scroll();
          // Because `done()` doesn't seem to always force the repaint to be finished, we potentially need to retry again.
          if (done()) return;
          requestAnimationFrame(function () {
            scroll();
            if (done()) return;
            setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var start, millisecondsElapsed;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      scroll();
                      if (!done()) {
                        _context7.next = 3;
                        break;
                      }
                      return _context7.abrupt("return");
                    case 3:
                      // In principle, `requestAnimationFrame() -> setTimeout(, 0)` should be enough.
                      //  - https://stackoverflow.com/questions/61281139/waiting-for-repaint-in-javascript
                      //  - But it's not enough for `Firefox 97.0.1`.
                      //  - The following strategy is very agressive. It doesn't need to be that aggressive for Firefox. But we do it to be safe.
                      start = new Date().getTime();
                    case 4:
                      if (!true) {
                        _context7.next = 15;
                        break;
                      }
                      _context7.next = 7;
                      return sleep(10);
                    case 7:
                      scroll();
                      if (!done()) {
                        _context7.next = 10;
                        break;
                      }
                      return _context7.abrupt("return");
                    case 10:
                      millisecondsElapsed = new Date().getTime() - start;
                      if (!(millisecondsElapsed > 100)) {
                        _context7.next = 13;
                        break;
                      }
                      return _context7.abrupt("return");
                    case 13:
                      _context7.next = 4;
                      break;
                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            })), 0);
          });
        }
        function autoSaveScrollPosition() {
          // Safari cannot handle more than 100 `history.replaceState()` calls within 30 seconds (https://github.com/brillout/vite-plugin-ssr/issues/46)
          window.addEventListener('scroll', throttle(saveScrollPosition, Math.ceil(1000 / 3)), {
            passive: true
          });
          onPageHide(saveScrollPosition);
        }
        function getUrlHash() {
          var hash = window.location.hash;
          if (hash === '') return null;
          assert(hash.startsWith('#'));
          hash = hash.slice(1);
          return hash;
        }
        // We use the browser's native scroll restoration mechanism only for the first render
        function setupNativeScrollRestoration() {
          browserNativeScrollRestoration_enable();
          onPageHide(browserNativeScrollRestoration_enable);
          onPageShow(function () {
            return globalObject.initialRenderIsDone && browserNativeScrollRestoration_disable();
          });
        }
        function browserNativeScrollRestoration_disable() {
          if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
          }
        }
        function browserNativeScrollRestoration_enable() {
          if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'auto';
          }
        }
        function onPageHide(listener) {
          window.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') {
              listener();
            }
          });
        }
        function onPageShow(listener) {
          window.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'visible') {
              listener();
            }
          });
        }
        function checkIfAbort(err, pageContext) {
          if (err === null || err === void 0 ? void 0 : err._abortRendering) return true;
          if (handleErrorFetchingStaticAssets(err, pageContext)) {
            return true;
          }
          return false;
        }
        function handleErrorFetchingStaticAssets(err, pageContext) {
          if (!isErrorFetchingStaticAssets(err)) {
            return false;
          }
          disableClientRouting();
          if (pageContext._isFirstRenderAttempt) {
            // This may happen if the frontend was newly deployed during hydration.
            // Ideally: re-try a couple of times by reloading the page (not entirely trivial to implement since `localStorage` is needed.)
            throw err;
          }
          serverSideRouteTo(pageContext.urlOriginal);
          return true;
        }
        useClientRouter();
      }
    };
  });
})();

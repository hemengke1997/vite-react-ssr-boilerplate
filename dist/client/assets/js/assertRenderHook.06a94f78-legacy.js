;
(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
  function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
  function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        exports({
          A: getHook,
          B: parse,
          C: assertBaseUrl,
          D: getPageFilesAll,
          E: getPageFilesClientSide,
          F: isParsable,
          G: assertInfo,
          H: isErrorFetchingStaticAssets,
          I: assertHook,
          J: assertRenderHook,
          a: assert,
          b: isErrorPageId,
          c: assertUsage,
          d: hasProp,
          e: assertWarning,
          f: isObject,
          h: higherFirst,
          i: isCallable,
          m: makeFirst,
          n: setPageFiles,
          o: objectAssign,
          p: parseUrl,
          r: getProjectError,
          s: slice,
          t: getGlobalObject,
          u: getCurrentUrl,
          v: getAllPageIdFilesServerSide,
          w: releasePageContextCommon,
          x: getPageContextSerializedInHtml,
          y: loadPageFilesClientSide,
          z: getErrorPageId
        });
        function createErrorWithCleanStackTrace(errorMessage, numberOfStackTraceLinesToRemove) {
          var err;
          {
            var stackTraceLimit__original = Error.stackTraceLimit;
            Error.stackTraceLimit = Infinity;
            err = new Error(errorMessage);
            Error.stackTraceLimit = stackTraceLimit__original;
          }
          err.stack = clean(err.stack, numberOfStackTraceLinesToRemove);
          return err;
        }
        function clean(errStack, numberOfStackTraceLinesToRemove) {
          if (!errStack) {
            return errStack;
          }
          var stackLines = splitByLine(errStack);
          var linesRemoved = 0;
          var stackLine__cleaned = stackLines.filter(function (line) {
            // Remove internal stack traces
            if (line.includes(' (internal/') || line.includes(' (node:internal')) {
              return false;
            }
            if (linesRemoved < numberOfStackTraceLinesToRemove && isStackTraceLine(line)) {
              linesRemoved++;
              return false;
            }
            return true;
          }).join('\n');
          return stackLine__cleaned;
        }
        function isStackTraceLine(line) {
          return line.startsWith('    at ');
        }
        function splitByLine(str) {
          // https://stackoverflow.com/questions/21895233/how-in-node-to-split-string-by-newline-n
          return str.split(/\r?\n/);
        }
        function getGlobalObject(
        // We use the filename as key; each `getGlobalObject()` call should live in a unique filename.
        key, defaultValue) {
          var allGlobalObjects = globalThis.__vite_plugin_ssr = globalThis.__vite_plugin_ssr || {};
          var globalObject = allGlobalObjects[key] = allGlobalObjects[key] || defaultValue;
          return globalObject;
        }
        function unique(arr) {
          return Array.from(new Set(arr));
        }
        var globalObject$2 = getGlobalObject('assertPackageInstances.ts', {
          instances: []
        });
        function assertSingleVersion() {
          var versions = unique(globalObject$2.instances);
          if (versions.length > 1) {
            throw new Error("Multiple versions `vite-plugin-ssr@".concat(versions[0], "` and `vite-plugin-ssr@").concat(versions[1], "` loaded. Make sure only one version is loaded."));
          }
        }
        function assertBundle() {
          if (!globalObject$2.checkBundle) {
            return;
          }
          if (globalObject$2.instances.length <= 1) {
            return;
          }
          throw new Error("vite-plugin-ssr is included twice in your bundle. Make sure it's inlcuded only once. (To reduce bundle size.)");
        }
        function addPackageInstance(projectVersion) {
          globalObject$2.instances.push(projectVersion);
          assertSingleVersion();
          assertBundle();
        }
        var PROJECT_VERSION = '0.4.48';
        var projectInfo = {
          projectName: 'vite-plugin-ssr',
          projectVersion: PROJECT_VERSION,
          npmPackageName: 'vite-plugin-ssr',
          githubRepository: 'https://github.com/brillout/vite-plugin-ssr',
          discordInviteToolChannel: 'https://discord.com/invite/qTq92FQzKb'
        };
        // Trick: since `utils/asserts.ts` depends on this file (`utils/projectInfo.ts`), we can have confidence that this file is always instantiated. So that we don't have to initialize this code snippet at every possible entry. (There are a *lot* of entries: `client/router/`, `client/`, `node/`, `node/plugin/`, `node/cli`, etc.)
        addPackageInstance(projectInfo.projectVersion);
        var errorPrefix = exports('q', "[".concat(projectInfo.npmPackageName, "@").concat(projectInfo.projectVersion, "]"));
        var internalErrorPrefix = "".concat(errorPrefix, "[Bug]");
        var usageErrorPrefix = "".concat(errorPrefix, "[Wrong Usage]");
        var warningPrefix = "".concat(errorPrefix, "[Warning]");
        var infoPrefix = "".concat(errorPrefix, "[Info]");
        var numberOfStackTraceLinesToRemove = 2;
        function assert(condition, debugInfo) {
          if (condition) {
            return;
          }
          var debugStr = function () {
            if (!debugInfo) {
              return '';
            }
            var debugInfoSerialized = typeof debugInfo === 'string' ? debugInfo : '`' + JSON.stringify(debugInfo) + '`';
            return "Debug info (this is for the ".concat(projectInfo.projectName, " maintainers; you can ignore this): ").concat(debugInfoSerialized, ".");
          }();
          var internalError = createErrorWithCleanStackTrace(["".concat(internalErrorPrefix, " You stumbled upon a bug in ").concat(projectInfo.projectName, "'s source code."), "Reach out at ".concat(projectInfo.githubRepository, "/issues/new or ").concat(projectInfo.discordInviteToolChannel, " and include this error stack (the error stack is usually enough to fix the problem)."), 'A maintainer will fix the bug (usually under 24 hours).', "Don't hesitate to reach out as it makes ".concat(projectInfo.projectName, " more robust."), debugStr].join(' '), numberOfStackTraceLinesToRemove);
          throw internalError;
        }
        function assertUsage(condition, errorMessage) {
          if (condition) {
            return;
          }
          var whiteSpace = errorMessage.startsWith('[') ? '' : ' ';
          var usageError = createErrorWithCleanStackTrace("".concat(usageErrorPrefix).concat(whiteSpace).concat(errorMessage), numberOfStackTraceLinesToRemove);
          throw usageError;
        }
        function getProjectError(errorMessage) {
          var sep = errorMessage.startsWith('[') ? '' : ' ';
          var pluginError = createErrorWithCleanStackTrace("".concat(errorPrefix).concat(sep).concat(errorMessage), numberOfStackTraceLinesToRemove);
          return pluginError;
        }
        var globalObject$1 = getGlobalObject('assert.ts', {
          alreadyLogged: new Set()
        });
        function assertWarning(condition, errorMessage, _ref) {
          var onlyOnce = _ref.onlyOnce,
            showStackTrace = _ref.showStackTrace;
          if (condition) {
            return;
          }
          var msg = "".concat(warningPrefix, " ").concat(errorMessage);
          if (onlyOnce) {
            var alreadyLogged = globalObject$1.alreadyLogged;
            var key = onlyOnce === true ? msg : onlyOnce;
            if (alreadyLogged.has(key)) {
              return;
            } else {
              alreadyLogged.add(key);
            }
          }
          if (showStackTrace) {
            console.warn(new Error(msg));
          } else {
            console.warn(msg);
          }
        }
        function assertInfo(condition, errorMessage, _ref2) {
          var onlyOnce = _ref2.onlyOnce;
          if (condition) {
            return;
          }
          var msg = "".concat(infoPrefix, " ").concat(errorMessage);
          if (onlyOnce) {
            var alreadyLogged = globalObject$1.alreadyLogged;
            var key = msg;
            if (alreadyLogged.has(key)) {
              return;
            } else {
              alreadyLogged.add(key);
            }
          }
          console.log(msg);
        }
        function slice(thing, from, to) {
          if (typeof thing === 'string') {
            return sliceArray(thing.split(''), from, to).join('');
          } else {
            return sliceArray(thing, from, to);
          }
        }
        function sliceArray(list, from, to) {
          var listSlice = [];
          var start = from >= 0 ? from : list.length + from;
          assert(start >= 0 && start <= list.length);
          var end = to >= 0 ? to : list.length + to;
          assert(end >= 0 && end <= list.length);
          while (true) {
            if (start === end) {
              break;
            }
            if (start === list.length) {
              start = 0;
            }
            if (start === end) {
              break;
            }
            var el = list[start];
            assert(el !== undefined);
            listSlice.push(el);
            start++;
          }
          return listSlice;
        }
        function isParsable(url) {
          // `parseUrl()` works with these URLs
          return url.startsWith('/') || url.startsWith('http') || url.startsWith('.') || url.startsWith('?') || url.startsWith('#') || url === '';
        }
        function parseUrl(url, baseUrl) {
          assert(isParsable(url), {
            url: url
          });
          assert(baseUrl.startsWith('/'), {
            url: url,
            baseUrl: baseUrl
          });
          // Hash
          var _url$split = url.split('#'),
            _url$split2 = _toArray(_url$split),
            urlWithoutHash = _url$split2[0],
            hashList = _url$split2.slice(1);
          assert(urlWithoutHash !== undefined);
          var hashOriginal = [''].concat(_toConsumableArray(hashList)).join('#') || null;
          assert(hashOriginal === null || hashOriginal.startsWith('#'));
          var hash = hashOriginal === null ? '' : decodeSafe(hashOriginal.slice(1));
          // Search
          var _urlWithoutHash$split = urlWithoutHash.split('?'),
            _urlWithoutHash$split2 = _toArray(_urlWithoutHash$split),
            urlWithoutSearch = _urlWithoutHash$split2[0],
            searchList = _urlWithoutHash$split2.slice(1);
          assert(urlWithoutSearch !== undefined);
          var searchOriginal = [''].concat(_toConsumableArray(searchList)).join('?') || null;
          assert(searchOriginal === null || searchOriginal.startsWith('?'), {
            url: url,
            searchOriginal: searchOriginal
          });
          var search = {};
          var searchAll = {};
          Array.from(new URLSearchParams(searchOriginal || '')).forEach(function (_ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
              key = _ref4[0],
              val = _ref4[1];
            search[key] = val;
            searchAll[key] = [].concat(_toConsumableArray(searchAll[key] || []), [val]);
          });
          // Origin + pathname
          var _parseWithNewUrl = parseWithNewUrl(urlWithoutSearch, baseUrl),
            origin = _parseWithNewUrl.origin,
            pathnameResolved = _parseWithNewUrl.pathnameResolved;
          assert(origin === null || origin === decodeSafe(origin), {
            origin: origin
          }); // AFAICT decoding the origin is useless
          assert(pathnameResolved.startsWith('/'), {
            url: url,
            pathnameResolved: pathnameResolved
          });
          assert(origin === null || url.startsWith(origin), {
            url: url,
            origin: origin
          });
          // `pathnameOriginal`
          var pathnameOriginal = urlWithoutSearch.slice((origin || '').length);
          {
            var urlRecreated = "".concat(origin || '').concat(pathnameOriginal).concat(searchOriginal || '').concat(hashOriginal || '');
            assert(url === urlRecreated, {
              url: url,
              urlRecreated: urlRecreated
            });
          }
          // Base URL
          var _analyzeBaseUrl = analyzeBaseUrl(pathnameResolved, baseUrl),
            pathname = _analyzeBaseUrl.pathname,
            hasBaseUrl = _analyzeBaseUrl.hasBaseUrl;
          pathname = decodePathname(pathname);
          assert(pathname.startsWith('/'));
          return {
            origin: origin,
            pathname: pathname,
            pathnameOriginal: pathnameOriginal,
            hasBaseUrl: hasBaseUrl,
            search: search,
            searchAll: searchAll,
            searchOriginal: searchOriginal,
            hash: hash,
            hashOriginal: hashOriginal
          };
        }
        function decodeSafe(urlComponent) {
          try {
            return decodeURIComponent(urlComponent);
          } catch (_unused) {}
          try {
            return decodeURI(urlComponent);
          } catch (_unused2) {}
          return urlComponent;
        }
        function decodePathname(urlPathname) {
          return urlPathname.split('/').map(function (dir) {
            return decodeSafe(dir).split('/').join('%2F');
          }).join('/');
        }
        function parseWithNewUrl(urlWithoutSearch, baseUrl) {
          var _a;
          // `new URL('//', 'https://example.org')` throws `ERR_INVALID_URL`
          if (urlWithoutSearch.startsWith('//')) {
            return {
              origin: null,
              pathnameResolved: urlWithoutSearch
            };
          }
          var origin;
          var pathnameResolved;
          try {
            // `new URL(url)` throws an error if `url` doesn't have an origin
            var urlParsed = new URL(urlWithoutSearch);
            origin = urlParsed.origin;
            pathnameResolved = urlParsed.pathname;
          } catch (err) {
            // `url` has no origin
            origin = null;
            // In the browser, this is the Base URL of the current URL
            var base = typeof window !== 'undefined' && (
            // We need to access safely in case the user sets `window` in Node.js
            (_a = window === null || window === void 0 ? void 0 : window.document) === null || _a === void 0 ? void 0 : _a.baseURI);
            base = base || 'http://fake.example.org' + baseUrl;
            // `new Url()` supports:
            //  - `url === '/absolute/path'`
            //  - `url === './relative/path'`
            //  - `url === '?queryWithoutPath'`
            //  - `url === '''`
            // `base` in `new URL(url, base)` is used for resolving relative paths (`new URL()` doesn't remove `base` from `pathname`)
            var _urlParsed = new URL(urlWithoutSearch, base);
            pathnameResolved = _urlParsed.pathname;
          }
          assert(pathnameResolved.startsWith('/'), {
            urlWithoutSearch: urlWithoutSearch,
            pathnameResolved: pathnameResolved
          });
          // The URL pathname should be the URL without origin, query string, and hash.
          //  - https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname
          assert(pathnameResolved === pathnameResolved.split('?')[0].split('#')[0]);
          return {
            origin: origin,
            pathnameResolved: pathnameResolved
          };
        }
        function assertBaseUrl(baseUrl) {
          assert(baseUrl.startsWith('/'));
        }
        function assertUrlPathname(urlPathname) {
          assert(urlPathname.startsWith('/'));
          assert(!urlPathname.includes('?'));
          assert(!urlPathname.includes('#'));
        }
        function analyzeBaseUrl(urlPathnameWithBase, baseUrl) {
          assertUrlPathname(urlPathnameWithBase);
          assertBaseUrl(baseUrl);
          // Mutable
          var urlPathname = urlPathnameWithBase;
          assert(urlPathname.startsWith('/'));
          assert(baseUrl.startsWith('/'));
          if (baseUrl === '/') {
            var pathname = urlPathnameWithBase;
            return {
              pathname: pathname,
              hasBaseUrl: true
            };
          }
          // Support `url === '/some-base-url' && baseUrl === '/some-base-url/'`
          var baseUrlNormalized = baseUrl;
          if (baseUrl.endsWith('/') && urlPathname === slice(baseUrl, 0, -1)) {
            baseUrlNormalized = slice(baseUrl, 0, -1);
            assert(urlPathname === baseUrlNormalized);
          }
          if (!urlPathname.startsWith(baseUrlNormalized)) {
            var _pathname = urlPathnameWithBase;
            return {
              pathname: _pathname,
              hasBaseUrl: false
            };
          }
          assert(urlPathname.startsWith('/') || urlPathname.startsWith('http'));
          assert(urlPathname.startsWith(baseUrlNormalized));
          urlPathname = urlPathname.slice(baseUrlNormalized.length);
          if (!urlPathname.startsWith('/')) urlPathname = '/' + urlPathname;
          assert(urlPathname.startsWith('/'));
          return {
            pathname: urlPathname,
            hasBaseUrl: true
          };
        }

        // Same as `Object.assign()` but with type inference
        function objectAssign(obj, objAddendum) {
          Object.assign(obj, objAddendum);
        }
        function isCallable(thing) {
          return thing instanceof Function || typeof thing === 'function';
        }
        function isObject(value) {
          return _typeof(value) === 'object' && value !== null;
        }

        // -1 => element1 first
        // +1 => element2 first
        function higherFirst(getValue) {
          return function (element1, element2) {
            var val1 = getValue(element1);
            var val2 = getValue(element2);
            if (val1 === val2) {
              return 0;
            }
            return val1 > val2 ? -1 : 1;
          };
        }
        function makeFirst(getValue) {
          return function (element1, element2) {
            var val1 = getValue(element1);
            var val2 = getValue(element2);
            assert([true, false, null].includes(val1));
            assert([true, false, null].includes(val2));
            if (val1 === val2) {
              return 0;
            }
            if (val1 === true || val2 === false) {
              return -1; // element1 first
            }

            if (val2 === true || val1 === false) {
              return 1; // element2 first
            }

            assert(false);
          };
        }
        function makeLast(getValue) {
          return makeFirst(function (element) {
            var val = getValue(element);
            if (val === null) {
              return null;
            } else {
              return !val;
            }
          });
        }
        function isBrowser() {
          // Using `typeof window !== 'undefined'` alone is not enough because some users use https://www.npmjs.com/package/ssr-window
          return typeof window !== 'undefined' && typeof window.scrollY === 'number';
        }

        // prettier-ignore
        function hasProp(obj, prop) {
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'unknown';
          var propExists = _typeof(obj) === 'object' && obj !== null && prop in obj;
          if (!propExists) {
            return type === 'undefined';
          }
          if (type === 'unknown') {
            return true;
          }
          var propValue = obj[prop];
          if (type === 'array') {
            return Array.isArray(propValue);
          }
          if (type === 'string[]') {
            return Array.isArray(propValue) && propValue.every(function (el) {
              return typeof el === 'string';
            });
          }
          if (type === 'function') {
            return isCallable(propValue);
          }
          if (Array.isArray(type)) {
            return typeof propValue === 'string' && type.includes(propValue);
          }
          if (type === 'null') {
            return propValue === null;
          }
          if (type === 'undefined') {
            return propValue === undefined;
          }
          if (type === 'true') {
            return propValue === true;
          }
          if (type === 'false') {
            return propValue === false;
          }
          return _typeof(propValue) === type;
        }
        // Resources:
        //  - https://2ality.com/2020/06/type-guards-assertion-functions-typescript.html
        //  - https://www.typescriptlang.org/play?#code/GYVwdgxgLglg9mABDAzgFQJ4AcCmdgAUAbgIYA2IOAXIiWBgDSJTbWIDkARnHGTnewCUNUhRzIUibr35gA3AFgAUKEiwEEzLnzFylGnUbNWNdmBABbTjgBOQkXvGpE5q7cUrw0eElRa8hKL6tPRMLLimKFA2MGAA5vaIQU6SUTHxHqreGn6sOskGocYRHOAA1mBwAO5gickSiOWVNZle6r7oeYGOhUbhbGmxcYgAvKVgFdW1wlI8fHSIAN7KiMiExeIjW+OTNeyIgksrq4g2OFAgNkjRlMcAvsdnF1cb+EmOo9v9Hg9KyhAIKK0GhNKajRAAFgATMplCQUChbFACLltIQSEwzJZrHZBIJ-oCZAA6MhwOIEEj4v6eNQ+WgIpEEAFgAAmMHaIImzTAM3hiJsUEkzLZ7SOShOa0QTIQIp8hyelzAx1WUAAFjZqi4cFVEABRGwamwEdgAQQZArpADESDAyEJlHcgA

        function compareString(str1, str2) {
          if (str1.toLowerCase() < str2.toLowerCase()) return -1;
          if (str1.toLowerCase() > str2.toLowerCase()) return 1;
          return 0;
        }
        var isNotNullish = function isNotNullish(p) {
          return p !== null && p !== undefined;
        };
        var sepWin32 = '\\';
        function assertPosixPath(path) {
          assert(path && !path.includes(sepWin32), "Wrongly formatted path: ".concat(path));
        }

        // Also see `./isScriptFile.ts`
        function isJavaScriptFile(filePath) {
          // `.mjs`
          // `.cjs`
          // `.js`
          // `.tsx`
          // ...
          return /\.(c|m)?(j|t)sx?$/.test(filePath);
        }
        var enforceTrue = ['clientRouting'];
        function assertExportValues(pageFile) {
          enforceTrue.forEach(function (exportName) {
            assert(pageFile.fileExports);
            if (!(exportName in pageFile.fileExports)) return;
            var explainer = "The value of `".concat(exportName, "` is only allowed to be `true`.");
            assertUsage(pageFile.fileExports[exportName] !== false, "".concat(pageFile.filePath, " has `export { ").concat(exportName, " }` with the value `false` which is forbidden: remove `export { ").concat(exportName, " }` instead. (").concat(explainer, ")"));
            assertUsage(pageFile.fileExports[exportName] === true, "".concat(pageFile.filePath, " has `export { ").concat(exportName, " }` with a forbidden value. ").concat(explainer));
          });
        }
        // Forbid exports such as `export default { render }`, because only `export { render }` can be statically analyzed by `es-module-lexer`.
        var forbiddenDefaultExports = ['render', 'clientRouting', 'prerender', 'doNotPrerender'];
        function assertDefaultExports(defaultExportName, filePath) {
          assertUsage(!forbiddenDefaultExports.includes(defaultExportName), "".concat(filePath, " has `export default { ").concat(defaultExportName, " }` which is forbidden, use `export { ").concat(defaultExportName, " }` instead."));
        }
        function getExports(pageFiles) {
          var exportsAll = {};
          pageFiles.forEach(function (pageFile) {
            var exportValues = getExportValues(pageFile);
            exportValues.forEach(function (_ref5) {
              var exportName = _ref5.exportName,
                exportValue = _ref5.exportValue,
                isFromDefaultExport = _ref5.isFromDefaultExport;
              var _a;
              assert(exportName !== 'default');
              exportsAll[exportName] = (_a = exportsAll[exportName]) !== null && _a !== void 0 ? _a : [];
              exportsAll[exportName].push({
                exportValue: exportValue,
                filePath: pageFile.filePath,
                // @ts-expect-error
                _filePath: pageFile.filePath,
                _fileType: pageFile.fileType,
                _isFromDefaultExport: isFromDefaultExport
              });
            });
          });
          var pageExports = createObjectWithDeprecationWarning();
          var exports$1 = {};
          Object.entries(exportsAll).forEach(function (_ref6) {
            var _ref7 = _slicedToArray(_ref6, 2),
              exportName = _ref7[0],
              values = _ref7[1];
            values.forEach(function (_ref8) {
              var exportValue = _ref8.exportValue,
                _fileType = _ref8._fileType,
                _isFromDefaultExport = _ref8._isFromDefaultExport;
              var _a;
              exports$1[exportName] = (_a = exports$1[exportName]) !== null && _a !== void 0 ? _a : exportValue;
              // Legacy `pageContext.pageExports`
              if (_fileType === '.page' && !_isFromDefaultExport) {
                if (!(exportName in pageExports)) {
                  pageExports[exportName] = exportValue;
                }
              }
            });
          });
          assert(!('default' in exports$1));
          assert(!('default' in exportsAll));
          return {
            exports: exports$1,
            exportsAll: exportsAll,
            pageExports: pageExports
          };
        }
        function getExportValues(pageFile) {
          var filePath = pageFile.filePath,
            fileExports = pageFile.fileExports;
          assert(fileExports); // assume pageFile.loadFile() was called
          var exportValues = [];
          Object.entries(fileExports).sort(makeLast(function (_ref9) {
            var _ref10 = _slicedToArray(_ref9, 1),
              exportName = _ref10[0];
            return exportName === 'default';
          })) // `export { bla }` should override `export default { bla }`
          .forEach(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
              exportName = _ref12[0],
              exportValue = _ref12[1];
            var isFromDefaultExport = exportName === 'default';
            if (isFromDefaultExport) {
              if (!isJavaScriptFile(filePath)) {
                // `.vue` and `.md` files
                exportName = 'Page';
              } else {
                assertUsage(isObject(exportValue), "The `export default` of ".concat(filePath, " should be an object."));
                Object.entries(exportValue).forEach(function (_ref13) {
                  var _ref14 = _slicedToArray(_ref13, 2),
                    defaultExportName = _ref14[0],
                    defaultExportValue = _ref14[1];
                  assertDefaultExports(defaultExportName, filePath);
                  exportValues.push({
                    exportName: defaultExportName,
                    exportValue: defaultExportValue,
                    isFromDefaultExport: isFromDefaultExport
                  });
                });
                return;
              }
            }
            exportValues.push({
              exportName: exportName,
              exportValue: exportValue,
              isFromDefaultExport: isFromDefaultExport
            });
          });
          exportValues.forEach(function (_ref15) {
            var exportName = _ref15.exportName,
              isFromDefaultExport = _ref15.isFromDefaultExport;
            assert(!(isFromDefaultExport && forbiddenDefaultExports.includes(exportName)));
          });
          return exportValues;
        }
        function createObjectWithDeprecationWarning() {
          return new Proxy({}, {
            get: function get() {
              // We only show the warning in Node.js because when using Client Routing Vue integration uses `Object.assign(pageContextReactive, pageContext)` which will wrongully trigger the warning. There is no cross-browser way to catch whether the property accessor was initiated by an `Object.assign()` call.
              if (!isBrowser()) {
                assertWarning(false, '`pageContext.pageExports` is outdated. Use `pageContext.exports` instead, see https://vite-plugin-ssr.com/exports', {
                  onlyOnce: true,
                  showStackTrace: true
                });
              }
              return Reflect.get.apply(Reflect, arguments);
            }
          });
        }
        function determinePageId(filePath) {
          var pageSuffix = '.page.';
          var pageId = slice(filePath.split(pageSuffix), 0, -1).join(pageSuffix);
          assert(!pageId.includes('\\'));
          return pageId;
        }
        function getErrorPageId(allPageIds) {
          var errorPageIds = allPageIds.filter(function (pageId) {
            return isErrorPageId(pageId);
          });
          assertUsage(errorPageIds.length <= 1, "Only one `_error.page.js` is allowed. Found several: ".concat(errorPageIds.join(' ')));
          if (errorPageIds.length > 0) {
            var errorPageId = errorPageIds[0];
            assert(errorPageId);
            return errorPageId;
          }
          return null;
        }
        function isErrorPageId(pageId) {
          assert(!pageId.includes('\\'));
          return pageId.includes('/_error');
        }
        function getPageFileObject(filePath) {
          var isRelevant = function isRelevant(pageId) {
            return pageFile.pageId === pageId || pageFile.isDefaultPageFile && (pageFile.isRendererPageFile || isAncestorDefaultPage(pageId, pageFile.filePath));
          };
          var fileType = determineFileType(filePath);
          var pageFile = {
            filePath: filePath,
            fileType: fileType,
            isRelevant: isRelevant,
            isDefaultPageFile: isDefaultFilePath(filePath),
            isRendererPageFile: isDefaultFilePath(filePath) && isRendererFilePath(filePath),
            isErrorPageFile: isErrorPageId(filePath),
            pageId: determinePageId(filePath)
          };
          return pageFile;
        }
        function determineFileType(filePath) {
          assertPosixPath(filePath);
          var fileName = filePath.split('/').slice(-1)[0];
          var fileNameSegments = fileName.split('.');
          var suffix1 = fileNameSegments.slice(-3)[0];
          var suffix2 = fileNameSegments.slice(-2)[0];
          if (suffix2 === 'page') {
            return '.page';
          }
          assert(suffix1 === 'page', {
            filePath: filePath
          });
          if (suffix2 === 'server') {
            return '.page.server';
          }
          if (suffix2 === 'client') {
            return '.page.client';
          }
          if (suffix2 === 'route') {
            return '.page.route';
          }
          assert(false, {
            filePath: filePath
          });
        }
        function isDefaultFilePath(filePath) {
          assertPosixPath(filePath);
          assert(filePath.startsWith('/'));
          if (isErrorPageId(filePath)) {
            return false;
          }
          return filePath.includes('/_default');
        }
        function isRendererFilePath(filePath) {
          assertPosixPath(filePath);
          assert(filePath.startsWith('/'));
          return filePath.includes('/renderer/');
        }
        function isAncestorDefaultPage(pageId, defaultPageFilePath) {
          assertPosixPath(pageId);
          assertPosixPath(defaultPageFilePath);
          assert(pageId.startsWith('/'));
          assert(defaultPageFilePath.startsWith('/'));
          assert(!pageId.endsWith('/'));
          assert(!defaultPageFilePath.endsWith('/'));
          assert(isDefaultFilePath(defaultPageFilePath));
          var defaultPageDir = slice(defaultPageFilePath.split('/'), 0, -1).filter(function (filePathSegment) {
            return filePathSegment !== '_default';
          }).join('/');
          return pageId.startsWith(defaultPageDir);
        }
        var fileTypes = ['.page', '.page.server', '.page.route', '.page.client'];
        function parseGlobResults(pageFilesExports) {
          assert(hasProp(pageFilesExports, 'isGeneratedFile'), 'Missing `isGeneratedFile`.');
          assert(pageFilesExports.isGeneratedFile !== false, "vite-plugin-ssr was re-installed(/re-built). Restart your app.");
          assert(pageFilesExports.isGeneratedFile === true, "`isGeneratedFile === ".concat(pageFilesExports.isGeneratedFile, "`"));
          assert(hasProp(pageFilesExports, 'pageFilesLazy', 'object'));
          assert(hasProp(pageFilesExports, 'pageFilesEager', 'object'));
          assert(hasProp(pageFilesExports, 'pageFilesExportNamesLazy', 'object'));
          assert(hasProp(pageFilesExports, 'pageFilesExportNamesEager', 'object'));
          assert(hasProp(pageFilesExports.pageFilesLazy, '.page'));
          assert(hasProp(pageFilesExports.pageFilesLazy, '.page.client') || hasProp(pageFilesExports.pageFilesLazy, '.page.server'));
          var pageFilesMap = {};
          parseGlobResult(pageFilesExports.pageFilesLazy).forEach(function (_ref16) {
            var filePath = _ref16.filePath,
              pageFile = _ref16.pageFile,
              globValue = _ref16.globValue;
            var _a;
            pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
            var loadModule = globValue;
            assertLoadModule(loadModule);
            pageFile.loadFile = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if ('fileExports' in pageFile) {
                        _context.next = 5;
                        break;
                      }
                      _context.next = 3;
                      return loadModule();
                    case 3:
                      pageFile.fileExports = _context.sent;
                      assertExportValues(pageFile);
                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          });
          parseGlobResult(pageFilesExports.pageFilesExportNamesLazy).forEach(function (_ref18) {
            var filePath = _ref18.filePath,
              pageFile = _ref18.pageFile,
              globValue = _ref18.globValue;
            var _a;
            pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
            var loadModule = globValue;
            assertLoadModule(loadModule);
            pageFile.loadExportNames = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var moduleExports;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if ('exportNames' in pageFile) {
                        _context2.next = 7;
                        break;
                      }
                      _context2.next = 3;
                      return loadModule();
                    case 3:
                      moduleExports = _context2.sent;
                      // Vite 2 seems to choke following assertion: https://github.com/brillout/vite-plugin-ssr/issues/455
                      assertUsage('exportNames' in moduleExports, 'You seem to be using Vite 2 but the latest vite-plugin-ssr versions only work with Vite 3');
                      assert(hasProp(moduleExports, 'exportNames', 'string[]'), pageFile.filePath);
                      pageFile.exportNames = moduleExports.exportNames;
                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          });
          parseGlobResult(pageFilesExports.pageFilesEager).forEach(function (_ref20) {
            var filePath = _ref20.filePath,
              pageFile = _ref20.pageFile,
              globValue = _ref20.globValue;
            var _a;
            pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
            var moduleExports = globValue;
            assert(isObject(moduleExports));
            pageFile.fileExports = moduleExports;
          });
          parseGlobResult(pageFilesExports.pageFilesExportNamesEager).forEach(function (_ref21) {
            var filePath = _ref21.filePath,
              pageFile = _ref21.pageFile,
              globValue = _ref21.globValue;
            var _a;
            pageFile = pageFilesMap[filePath] = (_a = pageFilesMap[filePath]) !== null && _a !== void 0 ? _a : pageFile;
            var moduleExports = globValue;
            assert(isObject(moduleExports));
            assert(hasProp(moduleExports, 'exportNames', 'string[]'), pageFile.filePath);
            pageFile.exportNames = moduleExports.exportNames;
          });
          var pageFiles = Object.values(pageFilesMap);
          pageFiles.forEach(function (_ref22) {
            var filePath = _ref22.filePath;
            assert(!filePath.includes('\\'));
          });
          return pageFiles;
        }
        function parseGlobResult(globObject) {
          var ret = [];
          Object.entries(globObject).forEach(function (_ref23) {
            var _ref24 = _slicedToArray(_ref23, 2),
              fileType = _ref24[0],
              globFiles = _ref24[1];
            assert(fileTypes.includes(fileType));
            assert(isObject(globFiles));
            Object.entries(globFiles).forEach(function (_ref25) {
              var _ref26 = _slicedToArray(_ref25, 2),
                filePath = _ref26[0],
                globValue = _ref26[1];
              var pageFile = getPageFileObject(filePath);
              assert(pageFile.fileType === fileType);
              ret.push({
                filePath: filePath,
                pageFile: pageFile,
                globValue: globValue
              });
            });
          });
          return ret;
        }
        function assertLoadModule(globValue) {
          assert(isCallable(globValue));
        }
        var pageFiles = globalThis.__vite_plugin_ssr__pageFiles = globalThis.__vite_plugin_ssr__pageFiles || {
          pageFilesAll: undefined,
          pageFilesGetter: undefined
        };
        function setPageFiles(pageFilesExports) {
          pageFiles.pageFilesAll = parseGlobResults(pageFilesExports);
        }
        function getPageFilesAll(_x, _x2) {
          return _getPageFilesAll.apply(this, arguments);
        }
        function _getPageFilesAll() {
          _getPageFilesAll = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(isClientSide, isProduction) {
            var pageFilesAll, allPageIds;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!isClientSide) {
                      _context3.next = 5;
                      break;
                    }
                    assert(!pageFiles.pageFilesGetter);
                    assert(isProduction === undefined);
                    _context3.next = 10;
                    break;
                  case 5:
                    assert(pageFiles.pageFilesGetter);
                    assert(typeof isProduction === 'boolean');
                    if (!(!pageFiles.pageFilesAll ||
                    // We reload all glob imports in dev to make auto-reload work
                    !isProduction)) {
                      _context3.next = 10;
                      break;
                    }
                    _context3.next = 10;
                    return pageFiles.pageFilesGetter();
                  case 10:
                    assert(pageFiles.pageFilesAll);
                    pageFilesAll = pageFiles.pageFilesAll;
                    allPageIds = getAllPageIds(pageFilesAll);
                    return _context3.abrupt("return", {
                      pageFilesAll: pageFilesAll,
                      allPageIds: allPageIds
                    });
                  case 14:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return _getPageFilesAll.apply(this, arguments);
        }
        function getAllPageIds(allPageFiles) {
          var fileIds = allPageFiles.filter(function (_ref27) {
            var isDefaultPageFile = _ref27.isDefaultPageFile;
            return !isDefaultPageFile;
          }).map(function (_ref28) {
            var filePath = _ref28.filePath;
            return filePath;
          }).map(determinePageId);
          var allPageIds = unique(fileIds);
          return allPageIds;
        }
        function getAllPageIdFilesClientSide(pageFilesAll, pageId) {
          return determine(pageFilesAll, pageId, true);
        }
        function getAllPageIdFilesServerSide(pageFilesAll, pageId) {
          return determine(pageFilesAll, pageId, false);
        }
        function determine(pageFilesAll, pageId, forClientSide) {
          var fileTypeEnv = forClientSide ? '.page.client' : '.page.server';
          var sorter = defaultFilesSorter(fileTypeEnv, pageId);
          var pageFilesRelevant = pageFilesAll.filter(function (p) {
            return p.isRelevant(pageId);
          });
          var getRendererFile = function getRendererFile(fileType) {
            return pageFilesRelevant.filter(function (p) {
              return p.isRendererPageFile && p.fileType === fileType;
            }).sort(sorter)[0];
          };
          var getPageIdFile = function getPageIdFile(fileType) {
            var files = pageFilesRelevant.filter(function (p) {
              return p.pageId === pageId && p.fileType === fileType;
            });
            assertUsage(files.length <= 1, "Merge the following files into a single file: ".concat(files.map(function (p) {
              return p.filePath;
            }).join(' ')));
            var pageIdFile = files[0];
            assert(pageIdFile === undefined || !pageIdFile.isDefaultPageFile);
            return files[0];
          };
          // A page can load multiple `_defaut.page.*` files of the same `fileType`. In other words: non-renderer `_default.page.*` files are cumulative.
          // The exception being HTML-only pages because we pick a single page file as client entry. We handle that use case at `renderPage()`.
          var defaultFilesNonRenderer = pageFilesRelevant.filter(function (p) {
            return p.isDefaultPageFile && !p.isRendererPageFile && (p.fileType === fileTypeEnv || p.fileType === '.page');
          });
          defaultFilesNonRenderer.sort(sorter);
          // A page can have only one renderer. In other words: Multiple `renderer/` overwrite each other.
          var rendererFileEnv = getRendererFile(fileTypeEnv);
          var rendererFileIso = getRendererFile('.page');
          var pageIdFileEnv = getPageIdFile(fileTypeEnv);
          var pageIdFileIso = getPageIdFile('.page');
          // Ordered by `pageContext.exports` precendence
          var pageFiles = [pageIdFileEnv, pageIdFileIso].concat(_toConsumableArray(defaultFilesNonRenderer), [rendererFileEnv, rendererFileIso]).filter(isNotNullish);
          return pageFiles;
        }
        function defaultFilesSorter(fileTypeEnv, pageId) {
          var e1First = -1;
          var e2First = +1;
          var noOrder = 0;
          return function (e1, e2) {
            assert(e1.isDefaultPageFile && e2.isDefaultPageFile);
            // Non-renderer `_default.page.*` before `renderer/**/_default.page.*`
            {
              var e1_isRenderer = e1.isRendererPageFile;
              var e2_isRenderer = e2.isRendererPageFile;
              if (!e1_isRenderer && e2_isRenderer) {
                return e1First;
              }
              if (!e2_isRenderer && e1_isRenderer) {
                return e2First;
              }
              assert(e1_isRenderer === e2_isRenderer);
            }
            // Filesystem nearest first
            {
              var e1_distance = getPathDistance(pageId, e1.filePath);
              var e2_distance = getPathDistance(pageId, e2.filePath);
              if (e1_distance < e2_distance) {
                return e1First;
              }
              if (e2_distance < e1_distance) {
                return e2First;
              }
              assert(e1_distance === e2_distance);
            }
            // `.page.server.js`/`.page.client.js` before `.page.js`
            {
              if (e1.fileType === fileTypeEnv && e2.fileType !== fileTypeEnv) {
                return e1First;
              }
              if (e2.fileType === fileTypeEnv && e1.fileType !== fileTypeEnv) {
                return e2First;
              }
            }
            // Probably useless since `e1.fileType`/`e2.fileType` is always either `fileTypeEnv` or `.page.js`
            // But to be clear that `.page.js` always comes after `.page.server.js`/`.page.client.js`
            {
              if (e1.fileType === '.page' && e2.fileType !== '.page') {
                return e2First;
              }
              if (e2.fileType === '.page' && e1.fileType !== '.page') {
                return e1First;
              }
            }
            return noOrder;
          };
        }
        function getPathDistance(pathA, pathB) {
          assertPosixPath(pathA);
          assertPosixPath(pathB);
          assert(pathA.startsWith('/'));
          assert(pathB.startsWith('/'));
          // Index of first different character
          var idx = 0;
          for (; idx < pathA.length && idx < pathB.length; idx++) {
            if (pathA[idx] !== pathB[idx]) break;
          }
          var pathAWithoutCommon = pathA.slice(idx);
          var pathBWithoutCommon = pathB.slice(idx);
          var distanceA = pathAWithoutCommon.split('/').length;
          var distanceB = pathBWithoutCommon.split('/').length;
          var distance = distanceA + distanceB;
          return distance;
        }
        function getPageFilesClientSide(pageFilesAll, pageId) {
          return getAllPageIdFilesClientSide(pageFilesAll, pageId);
        }
        var exportNames$4 = ["render"];
        if (module.meta.hot) module.meta.hot.accept(function (mod) {
          exportNames$4.length = 0;
          exportNames$4.push.apply(exportNames$4, _toConsumableArray(mod.exportNames));
        });
        var __vite_glob_2_0 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          exportNames: exportNames$4
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports('_', __vite_glob_2_0);
        var exportNames$3 = ["passToClient", "render"];
        if (module.meta.hot) module.meta.hot.accept(function (mod) {
          exportNames$3.length = 0;
          exportNames$3.push.apply(exportNames$3, _toConsumableArray(mod.exportNames));
        });
        var __vite_glob_3_0 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          exportNames: exportNames$3
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports('g', __vite_glob_3_0);
        var exportNames$2 = ["onBeforeRender"];
        if (module.meta.hot) module.meta.hot.accept(function (mod) {
          exportNames$2.length = 0;
          exportNames$2.push.apply(exportNames$2, _toConsumableArray(mod.exportNames));
        });
        var __vite_glob_3_1 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          exportNames: exportNames$2
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports('j', __vite_glob_3_1);
        var exportNames$1 = ["Page"];
        if (module.meta.hot) module.meta.hot.accept(function (mod) {
          exportNames$1.length = 0;
          exportNames$1.push.apply(exportNames$1, _toConsumableArray(mod.exportNames));
        });
        var __vite_glob_4_0 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          exportNames: exportNames$1
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports('k', __vite_glob_4_0);
        var exportNames = ["Page"];
        if (module.meta.hot) module.meta.hot.accept(function (mod) {
          exportNames.length = 0;
          exportNames.push.apply(exportNames, _toConsumableArray(mod.exportNames));
        });
        var __vite_glob_4_1 = /*#__PURE__*/Object.freeze( /*#__PURE__*/Object.defineProperty({
          __proto__: null,
          exportNames: exportNames
        }, Symbol.toStringTag, {
          value: 'Module'
        }));
        exports('l', __vite_glob_4_1);
        function getCurrentUrl(options) {
          var url = window.location.href;
          var _parseUrl = parseUrl(url, '/'),
            origin = _parseUrl.origin,
            searchOriginal = _parseUrl.searchOriginal,
            hashOriginal = _parseUrl.hashOriginal,
            pathnameOriginal = _parseUrl.pathnameOriginal;
          var urlCurrent;
          if (options === null || options === void 0 ? void 0 : options.withoutHash) {
            urlCurrent = "".concat(pathnameOriginal).concat(searchOriginal || '');
            var urlRecreated = "".concat(origin || '').concat(urlCurrent).concat(hashOriginal || '');
            assert(url === urlRecreated, {
              url: url,
              urlRecreated: urlRecreated
            });
          } else {
            urlCurrent = "".concat(pathnameOriginal).concat(searchOriginal || '').concat(hashOriginal || '');
            var _urlRecreated = "".concat(origin || '').concat(urlCurrent);
            assert(url === _urlRecreated, {
              url: url,
              urlRecreated: _urlRecreated
            });
          }
          return urlCurrent;
        }
        var types = [ts({
          is: function is(val) {
            return val === undefined;
          },
          match: function match(str) {
            return str === '!undefined';
          },
          serialize: function serialize() {
            return '!undefined';
          },
          deserialize: function deserialize() {
            return undefined;
          }
        }), ts({
          is: function is(val) {
            return val === Infinity;
          },
          match: function match(str) {
            return str === '!Infinity';
          },
          serialize: function serialize() {
            return '!Infinity';
          },
          deserialize: function deserialize() {
            return Infinity;
          }
        }), ts({
          is: function is(val) {
            return val === -Infinity;
          },
          match: function match(str) {
            return str === '!-Infinity';
          },
          serialize: function serialize() {
            return '!-Infinity';
          },
          deserialize: function deserialize() {
            return -Infinity;
          }
        }), ts({
          is: function is(val) {
            return typeof val === 'number' && isNaN(val);
          },
          match: function match(str) {
            return str === '!NaN';
          },
          serialize: function serialize() {
            return '!NaN';
          },
          deserialize: function deserialize() {
            return NaN;
          }
        }), ts({
          is: function is(val) {
            return val instanceof Date;
          },
          match: function match(str) {
            return str.startsWith('!Date:');
          },
          serialize: function serialize(val) {
            return '!Date:' + val.toISOString();
          },
          deserialize: function deserialize(str) {
            return new Date(str.slice('!Date:'.length));
          }
        }), ts({
          is: function is(val) {
            return typeof val === 'bigint';
          },
          match: function match(str) {
            return str.startsWith('!BigInt:');
          },
          serialize: function serialize(val) {
            return '!BigInt:' + val.toString();
          },
          deserialize: function deserialize(str) {
            if (typeof BigInt === 'undefined') {
              throw new Error('Your JavaScript environement does not support BigInt. Consider adding a polyfill.');
            }
            return BigInt(str.slice('!BigInt:'.length));
          }
        }), ts({
          is: function is(val) {
            return val instanceof RegExp;
          },
          match: function match(str) {
            return str.startsWith('!RegExp:');
          },
          serialize: function serialize(val) {
            return '!RegExp:' + val.toString();
          },
          deserialize: function deserialize(str) {
            str = str.slice('!RegExp:'.length);
            // const args: string[] = str.match(/\/(.*?)\/([gimy])?$/)!
            var args = str.match(/\/(.*)\/(.*)?/);
            var pattern = args[1];
            var flags = args[2];
            return new RegExp(pattern, flags);
          }
        }), ts({
          is: function is(val) {
            return val instanceof Map;
          },
          match: function match(str) {
            return str.startsWith('!Map:');
          },
          serialize: function serialize(val, serializer) {
            return '!Map:' + serializer(Array.from(val.entries()));
          },
          deserialize: function deserialize(str, deserializer) {
            return new Map(deserializer(str.slice('!Map:'.length)));
          }
        }), ts({
          is: function is(val) {
            return val instanceof Set;
          },
          match: function match(str) {
            return str.startsWith('!Set:');
          },
          serialize: function serialize(val, serializer) {
            return '!Set:' + serializer(Array.from(val.values()));
          },
          deserialize: function deserialize(str, deserializer) {
            return new Set(deserializer(str.slice('!Set:'.length)));
          }
        }),
        // Avoid collisions with the special strings defined above
        ts({
          is: function is(val) {
            return typeof val === 'string' && val.startsWith('!');
          },
          match: function match(str) {
            return str.startsWith('!');
          },
          serialize: function serialize(val) {
            return '!' + val;
          },
          deserialize: function deserialize(str) {
            return str.slice(1);
          }
        })];
        // Type check
        function ts(t) {
          return t;
        }
        function parse(str) {
          // We don't use the reviver option in `JSON.parse(str, reviver)` because it doesn't support `undefined` values
          var value = JSON.parse(str);
          return modifier(value);
        }
        function modifier(value) {
          if (typeof value === 'string') {
            return reviver(value);
          }
          if (_typeof(value) === 'object' && value !== null) {
            Object.entries(value).forEach(function (_ref29) {
              var _ref30 = _slicedToArray(_ref29, 2),
                key = _ref30[0],
                val = _ref30[1];
              value[key] = modifier(val);
            });
          }
          return value;
        }
        function reviver(value) {
          var _iterator = _createForOfIteratorHelper(types),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _step.value,
                match = _step$value.match,
                deserialize = _step$value.deserialize;
              if (match(value)) {
                return deserialize(value, parse);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return value;
        }
        function getPageContextSerializedInHtml() {
          var _a;
          var pageContextJson = (_a = document.getElementById('vite-plugin-ssr_pageContext')) === null || _a === void 0 ? void 0 : _a.textContent;
          assert(pageContextJson);
          var parseResult = parse(pageContextJson);
          assert(hasProp(parseResult, 'pageContext', 'object'));
          var pageContext = parseResult.pageContext;
          assert(hasProp(pageContext, '_pageId', 'string'));
          /*
          if ('_serverSideErrorWhileStreaming' in pageContext) {
            const err = getProjectError(
              `An error occurred on the server while rendering/streaming to HTML. Check your server logs.`
            )
            throw err
          }
          */
          objectAssign(pageContext, {
            _pageContextRetrievedFromServer: _objectSpread({}, pageContext),
            _comesDirectlyFromServer: true
          });
          return pageContext;
        }
        function getHook(pageContext, hookName) {
          if (!(hookName in pageContext.exports)) {
            return null;
          }
          var hook = pageContext.exports[hookName];
          var file = pageContext.exportsAll[hookName][0];
          assert(file.exportValue === hook);
          var filePath = file.filePath;
          assert(filePath);
          assert(!hookName.endsWith(')'));
          assertUsage(isCallable(hook), "`export { ".concat(hookName, " }` of ").concat(filePath, " should be a function"));
          return {
            hook: hook,
            filePath: filePath
          };
        }
        function assertHook(pageContext, hookName) {
          getHook(pageContext, hookName);
        }

        // Sort `pageContext` keys alphabetically, in order to make reading `console.log(pageContext)` easier
        function sortPageContext(pageContext) {
          var entries = Object.entries(pageContext);
          for (var key in pageContext) {
            delete pageContext[key];
          }
          entries.sort(function (_ref31, _ref32) {
            var _ref33 = _slicedToArray(_ref31, 1),
              key1 = _ref33[0];
            var _ref34 = _slicedToArray(_ref32, 1),
              key2 = _ref34[0];
            return compareString(key1, key2);
          }).forEach(function (_ref35) {
            var _ref36 = _slicedToArray(_ref35, 2),
              key = _ref36[0],
              val = _ref36[1];
            pageContext[key] = val;
          });
        }
        var globalObject = getGlobalObject('releasePageContextCommon.ts', {});
        // Release `pageContext` for user consumption.
        //
        // This adds `assertPassToClient()`.
        //
        // With Vue support (when `pageContext` is made reactive with Vue).
        //
        // For Vue + Cient Routing, the `pageContext` needs to be made reactive:
        // ```js
        // import { reactive } from 'vue'
        // // See entire example at `/examples/vue-full/`
        // const pageContextReactive = reactive(pageContext)
        // ```
        function releasePageContextCommon(pageContext) {
          assert('exports' in pageContext);
          assert('exportsAll' in pageContext);
          assert('pageExports' in pageContext);
          assert(isObject(pageContext.pageExports));
          var Page = pageContext.exports.Page;
          objectAssign(pageContext, {
            Page: Page
          });
          // For Vue's reactivity
          resolveGetters(pageContext);
          // For prettier `console.log(pageContext)`
          sortPageContext(pageContext);
          assert([true, false].includes(pageContext._comesDirectlyFromServer));
          var pageContextReadyForRelease = !pageContext._comesDirectlyFromServer ?
          // Not possible to achieve `getAssertPassToClientProxy()` if some `onBeforeRender()` hook defined in `.page.js` was called. (We cannot infer what `pageContext` properties came from the server-side or from the client-side. Which is fine because the user will likely dig into why the property is missing in `const pageContext = await runOnBeforeRenderServerHooks()` anyways, which does support throwing the helpul `assertPassToClient()` error message.)
          pageContext : getProxy(pageContext);
          return pageContextReadyForRelease;
        }
        var JAVASCRIPT_BUILT_INS = ['then', 'toJSON' // Vue tries to access `toJSON`
        ];

        var PASS_TO_CLIENT_BUILT_INS = ['_pageId'
        // '_serverSideErrorWhileStreaming'
        ];
        // Hint the user to use `paassToClient` when accessing undefined `pageContext` props
        function getProxy(pageContext) {
          return new Proxy(pageContext, {
            get: get
          });
          function isMissing(prop) {
            if (prop in pageContext) return false;
            if (JAVASCRIPT_BUILT_INS.includes(prop)) return false;
            if (_typeof(prop) === 'symbol') return false; // Vue tries to access some symbols
            if (typeof prop !== 'string') return false;
            if (prop.startsWith('__v_')) return false; // Vue internals upon `reactive(pageContext)`
            return true;
          }
          function get(_, prop) {
            if (globalObject.disableAssertPassToClient !== prop) {
              assertPassToClient(pageContext._pageContextRetrievedFromServer, prop, isMissing(prop));
            }
            // We disable `assertPassToClient` for the next attempt to read `prop`, because of how Vue's reactivity work.
            // (When changing a reactive object, Vue tries to read it's old value first. This triggers a `assertPassToClient()` failure if e.g. `pageContextOldReactive.routeParams = pageContextNew.routeParams` and `pageContextOldReactive` has no `routeParams`.)
            globalObject.disableAssertPassToClient = prop;
            window.setTimeout(function () {
              globalObject.disableAssertPassToClient = undefined;
            }, 0);
            return pageContext[prop];
          }
        }
        function assertPassToClient(pageContextRetrievedFromServer, prop, isMissing) {
          if (!isMissing) {
            return;
          }
          if (pageContextRetrievedFromServer === null) {
            // We cannot determine `passToClientInferred` if we didn't receive any `pageContext` from the server
            return;
          }
          var passToClientInferred = Object.keys(pageContextRetrievedFromServer).filter(function (prop) {
            return !PASS_TO_CLIENT_BUILT_INS.includes(prop);
          });
          assertUsage(false, ["`pageContext.".concat(prop, "` is not available in the browser."), "Make sure that `passToClient.includes('".concat(prop, "')`."), "(Currently `passToClient` is `[".concat(passToClientInferred.map(function (prop) {
            return "'".concat(prop, "'");
          }).join(', '), "]`.)"), 'See https://vite-plugin-ssr.com/passToClient'].join(' '));
        }
        // Remove propery descriptor getters because they break Vue's reactivity.
        // E.g. resolve the `pageContext.urlPathname` getter.
        function resolveGetters(pageContext) {
          Object.entries(pageContext).forEach(function (_ref37) {
            var _ref38 = _slicedToArray(_ref37, 2),
              key = _ref38[0],
              val = _ref38[1];
            delete pageContext[key];
            pageContext[key] = val;
          });
        }
        var stamp = '__whileFetchingAssets';
        function loadPageFilesClientSide(_x3, _x4) {
          return _loadPageFilesClientSide.apply(this, arguments);
        }
        function _loadPageFilesClientSide() {
          _loadPageFilesClientSide = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(pageFilesAll, pageId) {
            var pageFilesClientSide, _getExports, exports$1, exportsAll, pageExports, pageContextAddendum;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    pageFilesClientSide = getPageFilesClientSide(pageFilesAll, pageId);
                    _context4.prev = 1;
                    _context4.next = 4;
                    return Promise.all(pageFilesClientSide.map(function (p) {
                      var _a;
                      return (_a = p.loadFile) === null || _a === void 0 ? void 0 : _a.call(p);
                    }));
                  case 4:
                    _context4.next = 10;
                    break;
                  case 6:
                    _context4.prev = 6;
                    _context4.t0 = _context4["catch"](1);
                    if (_context4.t0) {
                      Object.assign(_context4.t0, _defineProperty({}, stamp, true));
                    }
                    throw _context4.t0;
                  case 10:
                    _getExports = getExports(pageFilesClientSide), exports$1 = _getExports.exports, exportsAll = _getExports.exportsAll, pageExports = _getExports.pageExports;
                    pageContextAddendum = {
                      exports: exports$1,
                      exportsAll: exportsAll,
                      pageExports: pageExports,
                      _pageFilesLoaded: pageFilesClientSide
                    };
                    return _context4.abrupt("return", pageContextAddendum);
                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[1, 6]]);
          }));
          return _loadPageFilesClientSide.apply(this, arguments);
        }
        function isErrorFetchingStaticAssets(err) {
          if (!err) {
            return false;
          }
          return err[stamp] === true;
        }
        function assertRenderHook(pageContext) {
          var _a;
          if (hasProp(pageContext.exports, 'render')) {
            assertHook(pageContext, 'render');
          } else {
            var pageClientsFilesLoaded = pageContext._pageFilesLoaded.filter(function (p) {
              return p.fileType === '.page.client';
            });
            var errMsg;
            if (pageClientsFilesLoaded.length === 0) {
              var url = (_a = pageContext.urlOriginal) !== null && _a !== void 0 ? _a : window.location.href;
              errMsg = 'No file `*.page.client.*` found for URL ' + url;
            } else {
              errMsg = 'One of the following files should export a `render()` hook: ' + pageClientsFilesLoaded.map(function (p) {
                return p.filePath;
              }).join(' ');
            }
            assertUsage(false, errMsg);
          }
        }
      }
    };
  });
})();

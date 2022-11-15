;
(function () {
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
  System.register(['./jsx-dev-runtime.10b3778c-legacy.js', './index.110d239b-legacy.js'], function (exports, module) {
    'use strict';

    var React, react, jsxDEV, Fragment, ReactDOM;
    return {
      setters: [function (module) {
        React = module.R;
        react = module.r;
        jsxDEV = module.j;
        Fragment = module.F;
      }, function (module) {
        ReactDOM = module.R;
      }],
      execute: function execute() {
        exports({
          _: _objectSpread2,
          a: _extends$1,
          b: _defineProperty,
          d: _slicedToArray,
          e: useStyleRegister,
          f: _inherits,
          g: _createSuper,
          h: _classCallCheck,
          i: _assertThisInitialized,
          j: updateCSS,
          k: composeRef,
          l: _createClass,
          p: genComponentStyleHook,
          q: merge,
          s: supportRef,
          t: _typeof,
          u: useToken,
          v: _toConsumableArray,
          w: wrapperRaf,
          y: _objectWithoutProperties
        });
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr)) return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null) return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length) len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o) return;
          if (typeof o === "string") return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor) n = o.constructor.name;
          if (n === "Map" || n === "Set") return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _extends$1() {
          exports('a', _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          });
          return _extends$1.apply(this, arguments);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value: value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps);
          if (staticProps) _defineProperties(Constructor, staticProps);
          Object.defineProperty(Constructor, "prototype", {
            writable: false
          });
          return Constructor;
        }
        function _setPrototypeOf$1(o, p) {
          _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
          return _setPrototypeOf$1(o, p);
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(subClass, "prototype", {
            writable: false
          });
          if (superClass) _setPrototypeOf$1(subClass, superClass);
        }
        function _getPrototypeOf$1(o) {
          _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf$1(o);
        }
        function _isNativeReflectConstruct$1() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";

          return exports('t', _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
            return typeof obj;
          } : function (obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          }), _typeof(obj);
        }
        function _assertThisInitialized(self) {
          if (self === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self;
        }
        function _possibleConstructorReturn(self, call) {
          if (call && (_typeof(call) === "object" || typeof call === "function")) {
            return call;
          } else if (call !== void 0) {
            throw new TypeError("Derived constructors may only return object or undefined");
          }
          return _assertThisInitialized(self);
        }
        function _createSuper(Derived) {
          var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
          return function _createSuperInternal() {
            var Super = _getPrototypeOf$1(Derived),
              result;
            if (hasNativeReflectConstruct) {
              var NewTarget = _getPrototypeOf$1(this).constructor;
              result = Reflect.construct(Super, arguments, NewTarget);
            } else {
              result = Super.apply(this, arguments);
            }
            return _possibleConstructorReturn(this, result);
          };
        }
        var classnames = {
          exports: {}
        };

        /*!
        	Copyright (c) 2018 Jed Watson.
        	Licensed under the MIT License (MIT), see
        	http://jedwatson.github.io/classnames
        */

        (function (module) {
          /* global define */

          (function () {
            var hasOwn = {}.hasOwnProperty;
            function classNames() {
              var classes = [];
              for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg) continue;
                var argType = _typeof2(arg);
                if (argType === 'string' || argType === 'number') {
                  classes.push(arg);
                } else if (Array.isArray(arg)) {
                  if (arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                      classes.push(inner);
                    }
                  }
                } else if (argType === 'object') {
                  if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
                    classes.push(arg.toString());
                    continue;
                  }
                  for (var key in arg) {
                    if (hasOwn.call(arg, key) && arg[key]) {
                      classes.push(key);
                    }
                  }
                }
              }
              return classes.join(' ');
            }
            if (module.exports) {
              classNames["default"] = classNames;
              module.exports = classNames;
            } else {
              window.classNames = classNames;
            }
          })();
        })(classnames);
        var classNames = exports('c', classnames.exports);
        var reactIs = {
          exports: {}
        };
        var reactIs_development = {};

        /** @license React v16.13.1
         * react-is.development.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */

        {
          (function () {
            // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
            // nor polyfill, then a plain number is used for performance.
            var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
            var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
            var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
            var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
            var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
            var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
            var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
            var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
            // (unstable) APIs that have been removed. Can we remove the symbols?

            var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
            var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
            var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
            var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
            var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
            var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
            var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
            var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
            var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
            var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
            var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
            function isValidElementType(type) {
              return typeof type === 'string' || typeof type === 'function' ||
              // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
              type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof2(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
            }
            function typeOf(object) {
              if (_typeof2(object) === 'object' && object !== null) {
                var $$typeof = object.$$typeof;
                switch ($$typeof) {
                  case REACT_ELEMENT_TYPE:
                    var type = object.type;
                    switch (type) {
                      case REACT_ASYNC_MODE_TYPE:
                      case REACT_CONCURRENT_MODE_TYPE:
                      case REACT_FRAGMENT_TYPE:
                      case REACT_PROFILER_TYPE:
                      case REACT_STRICT_MODE_TYPE:
                      case REACT_SUSPENSE_TYPE:
                        return type;
                      default:
                        var $$typeofType = type && type.$$typeof;
                        switch ($$typeofType) {
                          case REACT_CONTEXT_TYPE:
                          case REACT_FORWARD_REF_TYPE:
                          case REACT_LAZY_TYPE:
                          case REACT_MEMO_TYPE:
                          case REACT_PROVIDER_TYPE:
                            return $$typeofType;
                          default:
                            return $$typeof;
                        }
                    }
                  case REACT_PORTAL_TYPE:
                    return $$typeof;
                }
              }
              return undefined;
            } // AsyncMode is deprecated along with isAsyncMode

            var AsyncMode = REACT_ASYNC_MODE_TYPE;
            var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
            var ContextConsumer = REACT_CONTEXT_TYPE;
            var ContextProvider = REACT_PROVIDER_TYPE;
            var Element = REACT_ELEMENT_TYPE;
            var ForwardRef = REACT_FORWARD_REF_TYPE;
            var Fragment = REACT_FRAGMENT_TYPE;
            var Lazy = REACT_LAZY_TYPE;
            var Memo = REACT_MEMO_TYPE;
            var Portal = REACT_PORTAL_TYPE;
            var Profiler = REACT_PROFILER_TYPE;
            var StrictMode = REACT_STRICT_MODE_TYPE;
            var Suspense = REACT_SUSPENSE_TYPE;
            var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

            function isAsyncMode(object) {
              {
                if (!hasWarnedAboutDeprecatedIsAsyncMode) {
                  hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

                  console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
                }
              }
              return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
            }
            function isConcurrentMode(object) {
              return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
            }
            function isContextConsumer(object) {
              return typeOf(object) === REACT_CONTEXT_TYPE;
            }
            function isContextProvider(object) {
              return typeOf(object) === REACT_PROVIDER_TYPE;
            }
            function isElement(object) {
              return _typeof2(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
            }
            function isForwardRef(object) {
              return typeOf(object) === REACT_FORWARD_REF_TYPE;
            }
            function isFragment(object) {
              return typeOf(object) === REACT_FRAGMENT_TYPE;
            }
            function isLazy(object) {
              return typeOf(object) === REACT_LAZY_TYPE;
            }
            function isMemo(object) {
              return typeOf(object) === REACT_MEMO_TYPE;
            }
            function isPortal(object) {
              return typeOf(object) === REACT_PORTAL_TYPE;
            }
            function isProfiler(object) {
              return typeOf(object) === REACT_PROFILER_TYPE;
            }
            function isStrictMode(object) {
              return typeOf(object) === REACT_STRICT_MODE_TYPE;
            }
            function isSuspense(object) {
              return typeOf(object) === REACT_SUSPENSE_TYPE;
            }
            reactIs_development.AsyncMode = AsyncMode;
            reactIs_development.ConcurrentMode = ConcurrentMode;
            reactIs_development.ContextConsumer = ContextConsumer;
            reactIs_development.ContextProvider = ContextProvider;
            reactIs_development.Element = Element;
            reactIs_development.ForwardRef = ForwardRef;
            reactIs_development.Fragment = Fragment;
            reactIs_development.Lazy = Lazy;
            reactIs_development.Memo = Memo;
            reactIs_development.Portal = Portal;
            reactIs_development.Profiler = Profiler;
            reactIs_development.StrictMode = StrictMode;
            reactIs_development.Suspense = Suspense;
            reactIs_development.isAsyncMode = isAsyncMode;
            reactIs_development.isConcurrentMode = isConcurrentMode;
            reactIs_development.isContextConsumer = isContextConsumer;
            reactIs_development.isContextProvider = isContextProvider;
            reactIs_development.isElement = isElement;
            reactIs_development.isForwardRef = isForwardRef;
            reactIs_development.isFragment = isFragment;
            reactIs_development.isLazy = isLazy;
            reactIs_development.isMemo = isMemo;
            reactIs_development.isPortal = isPortal;
            reactIs_development.isProfiler = isProfiler;
            reactIs_development.isStrictMode = isStrictMode;
            reactIs_development.isSuspense = isSuspense;
            reactIs_development.isValidElementType = isValidElementType;
            reactIs_development.typeOf = typeOf;
          })();
        }
        (function (module) {
          {
            module.exports = reactIs_development;
          }
        })(reactIs);
        function toArray$1(children) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var ret = [];
          React.Children.forEach(children, function (child) {
            if ((child === undefined || child === null) && !option.keepEmpty) {
              return;
            }
            if (Array.isArray(child)) {
              ret = ret.concat(toArray$1(child));
            } else if (reactIs.exports.isFragment(child) && child.props) {
              ret = ret.concat(toArray$1(child.props.children, option));
            } else {
              ret.push(child);
            }
          });
          return ret;
        }

        /* eslint-disable no-console */
        var warned = {};
        function warning$5(valid, message) {
          // Support uglify
          if (!valid && console !== undefined) {
            console.error("Warning: ".concat(message));
          }
        }
        function resetWarned() {
          warned = {};
        }
        function call(method, valid, message) {
          if (!valid && !warned[message]) {
            method(false, message);
            warned[message] = true;
          }
        }
        function warningOnce(valid, message) {
          call(warning$5, valid, message);
        }
        /* eslint-enable */

        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function useMemo(getValue, condition, shouldUpdate) {
          var cacheRef = react.exports.useRef({});
          if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
            cacheRef.current.value = getValue();
            cacheRef.current.condition = condition;
          }
          return cacheRef.current.value;
        }
        function fillRef(ref, node) {
          if (typeof ref === 'function') {
            ref(node);
          } else if (_typeof(ref) === 'object' && ref && 'current' in ref) {
            ref.current = node;
          }
        }
        /**
         * Merge refs into one ref function to support ref passing.
         */

        function composeRef() {
          for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
            refs[_key] = arguments[_key];
          }
          var refList = refs.filter(function (ref) {
            return ref;
          });
          if (refList.length <= 1) {
            return refList[0];
          }
          return function (node) {
            refs.forEach(function (ref) {
              fillRef(ref, node);
            });
          };
        }
        function supportRef(nodeOrComponent) {
          var _type$prototype, _nodeOrComponent$prot;
          var type = reactIs.exports.isMemo(nodeOrComponent) ? nodeOrComponent.type.type : nodeOrComponent.type; // Function component node

          if (typeof type === 'function' && !((_type$prototype = type.prototype) === null || _type$prototype === void 0 ? void 0 : _type$prototype.render)) {
            return false;
          } // Class component

          if (typeof nodeOrComponent === 'function' && !((_nodeOrComponent$prot = nodeOrComponent.prototype) === null || _nodeOrComponent$prot === void 0 ? void 0 : _nodeOrComponent$prot.render)) {
            return false;
          }
          return true;
        }
        /* eslint-enable */

        /**
         * Return if a node is a DOM node. Else will return by `findDOMNode`
         */

        function findDOMNode(node) {
          if (node instanceof HTMLElement) {
            return node;
          }
          return ReactDOM.findDOMNode(node);
        }
        function _arrayWithoutHoles(arr) {
          if (Array.isArray(arr)) return _arrayLikeToArray(arr);
        }
        function _iterableToArray(iter) {
          if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
        }
        function _nonIterableSpread() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _toConsumableArray(arr) {
          return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
        }
        function canUseDom() {
          return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
        }
        function contains(root, n) {
          if (!root) {
            return false;
          } // Use native if support

          if (root.contains) {
            return root.contains(n);
          } // `document.contains` not support with IE11

          var node = n;
          while (node) {
            if (node === root) {
              return true;
            }
            node = node.parentNode;
          }
          return false;
        }
        var APPEND_ORDER = 'data-rc-order';
        var MARK_KEY = "rc-util-key";
        var containerCache = new Map();
        function getMark() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mark = _ref.mark;
          if (mark) {
            return mark.startsWith('data-') ? mark : "data-".concat(mark);
          }
          return MARK_KEY;
        }
        function getContainer(option) {
          if (option.attachTo) {
            return option.attachTo;
          }
          var head = document.querySelector('head');
          return head || document.body;
        }
        function getOrder(prepend) {
          if (prepend === 'queue') {
            return 'prependQueue';
          }
          return prepend ? 'prepend' : 'append';
        }
        /**
         * Find style which inject by rc-util
         */

        function findStyles(container) {
          return Array.from((containerCache.get(container) || container).children).filter(function (node) {
            return node.tagName === 'STYLE';
          });
        }
        function injectCSS(css) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          if (!canUseDom()) {
            return null;
          }
          var csp = option.csp,
            prepend = option.prepend;
          var styleNode = document.createElement('style');
          styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
          if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
            styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
          }
          styleNode.innerHTML = css;
          var container = getContainer(option);
          var firstChild = container.firstChild;
          if (prepend) {
            // If is queue `prepend`, it will prepend first style and then append rest style
            if (prepend === 'queue') {
              var existStyle = findStyles(container).filter(function (node) {
                return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
              });
              if (existStyle.length) {
                container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
                return styleNode;
              }
            } // Use `insertBefore` as `prepend`

            container.insertBefore(styleNode, firstChild);
          } else {
            container.appendChild(styleNode);
          }
          return styleNode;
        }
        function findExistNode(key) {
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var container = getContainer(option);
          return findStyles(container).find(function (node) {
            return node.getAttribute(getMark(option)) === key;
          });
        }
        function removeCSS(key) {
          var _existNode$parentNode;
          var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var existNode = findExistNode(key, option);
          existNode === null || existNode === void 0 ? void 0 : (_existNode$parentNode = existNode.parentNode) === null || _existNode$parentNode === void 0 ? void 0 : _existNode$parentNode.removeChild(existNode);
        }
        /**
         * qiankun will inject `appendChild` to insert into other
         */

        function syncRealContainer(container, option) {
          var cachedRealContainer = containerCache.get(container); // Find real container when not cached or cached container removed

          if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
            var placeholderStyle = injectCSS('', option);
            var parentNode = placeholderStyle.parentNode;
            containerCache.set(container, parentNode);
            parentNode.removeChild(placeholderStyle);
          }
        }
        function updateCSS(css, key) {
          var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var container = getContainer(option); // Sync real parent

          syncRealContainer(container, option);
          var existNode = findExistNode(key, option);
          if (existNode) {
            var _option$csp, _option$csp2;
            if (((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
              var _option$csp3;
              existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
            }
            if (existNode.innerHTML !== css) {
              existNode.innerHTML = css;
            }
            return existNode;
          }
          var newNode = injectCSS(css, option);
          newNode.setAttribute(getMark(option), key);
          return newNode;
        }

        /* eslint-disable */
        // Inspired by https://github.com/garycourt/murmurhash-js
        // Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
        function murmur2(str) {
          // 'm' and 'r' are mixing constants generated offline.
          // They're not really 'magic', they just happen to work well.
          // const m = 0x5bd1e995;
          // const r = 24;
          // Initialize the hash
          var h = 0; // Mix 4 bytes at a time into the hash

          var k,
            i = 0,
            len = str.length;
          for (; len >= 4; ++i, len -= 4) {
            k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
            k = /* Math.imul(k, m): */
            (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
            k ^= /* k >>> r: */
            k >>> 24;
            h = /* Math.imul(k, m): */
            (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^ /* Math.imul(h, m): */
            (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          } // Handle the last few bytes of the input array

          switch (len) {
            case 3:
              h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
            case 2:
              h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
            case 1:
              h ^= str.charCodeAt(i) & 0xff;
              h = /* Math.imul(h, m): */
              (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          } // Do a few final mixes of the hash to ensure the last few
          // bytes are well-incorporated.

          h ^= h >>> 13;
          h = /* Math.imul(h, m): */
          (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
          return ((h ^ h >>> 15) >>> 0).toString(36);
        }
        var unitlessKeys = {
          animationIterationCount: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          // SVG-related properties
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1
        };
        var COMMENT = 'comm';
        var RULESET = 'rule';
        var DECLARATION = 'decl';
        var IMPORT = '@import';
        var KEYFRAMES = '@keyframes';

        /**
         * @param {number}
         * @return {number}
         */
        var abs = Math.abs;

        /**
         * @param {number}
         * @return {string}
         */
        var from = String.fromCharCode;

        /**
         * @param {string} value
         * @return {string}
         */
        function trim(value) {
          return value.trim();
        }

        /**
         * @param {string} value
         * @param {(string|RegExp)} pattern
         * @param {string} replacement
         * @return {string}
         */
        function replace(value, pattern, replacement) {
          return value.replace(pattern, replacement);
        }

        /**
         * @param {string} value
         * @param {string} search
         * @return {number}
         */
        function indexof(value, search) {
          return value.indexOf(search);
        }

        /**
         * @param {string} value
         * @param {number} index
         * @return {number}
         */
        function charat(value, index) {
          return value.charCodeAt(index) | 0;
        }

        /**
         * @param {string} value
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function substr(value, begin, end) {
          return value.slice(begin, end);
        }

        /**
         * @param {string} value
         * @return {number}
         */
        function strlen(value) {
          return value.length;
        }

        /**
         * @param {any[]} value
         * @return {number}
         */
        function sizeof(value) {
          return value.length;
        }

        /**
         * @param {any} value
         * @param {any[]} array
         * @return {any}
         */
        function append(value, array) {
          return array.push(value), value;
        }
        var line = 1;
        var column = 1;
        var length = 0;
        var position = 0;
        var character = 0;
        var characters = '';

        /**
         * @param {string} value
         * @param {object | null} root
         * @param {object | null} parent
         * @param {string} type
         * @param {string[] | string} props
         * @param {object[] | string} children
         * @param {number} length
         */
        function node(value, root, parent, type, props, children, length) {
          return {
            value: value,
            root: root,
            parent: parent,
            type: type,
            props: props,
            children: children,
            line: line,
            column: column,
            length: length,
            "return": ''
          };
        }

        /**
         * @return {number}
         */
        function _char() {
          return character;
        }

        /**
         * @return {number}
         */
        function prev() {
          character = position > 0 ? charat(characters, --position) : 0;
          if (column--, character === 10) column = 1, line--;
          return character;
        }

        /**
         * @return {number}
         */
        function next() {
          character = position < length ? charat(characters, position++) : 0;
          if (column++, character === 10) column = 1, line++;
          return character;
        }

        /**
         * @return {number}
         */
        function peek() {
          return charat(characters, position);
        }

        /**
         * @return {number}
         */
        function caret() {
          return position;
        }

        /**
         * @param {number} begin
         * @param {number} end
         * @return {string}
         */
        function slice(begin, end) {
          return substr(characters, begin, end);
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function token(type) {
          switch (type) {
            // \0 \t \n \r \s whitespace token
            case 0:
            case 9:
            case 10:
            case 13:
            case 32:
              return 5;
            // ! + , / > @ ~ isolate token
            case 33:
            case 43:
            case 44:
            case 47:
            case 62:
            case 64:
            case 126:
            // ; { } breakpoint token
            case 59:
            case 123:
            case 125:
              return 4;
            // : accompanied token
            case 58:
              return 3;
            // " ' ( [ opening delimit token
            case 34:
            case 39:
            case 40:
            case 91:
              return 2;
            // ) ] closing delimit token
            case 41:
            case 93:
              return 1;
          }
          return 0;
        }

        /**
         * @param {string} value
         * @return {any[]}
         */
        function alloc(value) {
          return line = column = 1, length = strlen(characters = value), position = 0, [];
        }

        /**
         * @param {any} value
         * @return {any}
         */
        function dealloc(value) {
          return characters = '', value;
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function delimit(type) {
          return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
        }

        /**
         * @param {number} type
         * @return {string}
         */
        function whitespace$1(type) {
          while (character = peek()) {
            if (character < 33) next();else break;
          }
          return token(type) > 2 || token(character) > 3 ? '' : ' ';
        }

        /**
         * @param {number} index
         * @param {number} count
         * @return {string}
         */
        function escaping(index, count) {
          while (--count && next()) {
            // not 0-9 A-F a-f
            if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;
          }
          return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
        }

        /**
         * @param {number} type
         * @return {number}
         */
        function delimiter(type) {
          while (next()) {
            switch (character) {
              // ] ) " '
              case type:
                return position;
              // " '
              case 34:
              case 39:
                if (type !== 34 && type !== 39) delimiter(character);
                break;
              // (
              case 40:
                if (type === 41) delimiter(type);
                break;
              // \
              case 92:
                next();
                break;
            }
          }
          return position;
        }

        /**
         * @param {number} type
         * @param {number} index
         * @return {number}
         */
        function commenter(type, index) {
          while (next()) {
            // //
            if (type + character === 47 + 10) break;
            // /*
            else if (type + character === 42 + 42 && peek() === 47) break;
          }
          return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
        }

        /**
         * @param {number} index
         * @return {string}
         */
        function identifier(index) {
          while (!token(peek())) {
            next();
          }
          return slice(index, position);
        }

        /**
         * @param {string} value
         * @return {object[]}
         */
        function compile(value) {
          return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {string[]} rule
         * @param {string[]} rules
         * @param {string[]} rulesets
         * @param {number[]} pseudo
         * @param {number[]} points
         * @param {string[]} declarations
         * @return {object}
         */
        function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
          var index = 0;
          var offset = 0;
          var length = pseudo;
          var atrule = 0;
          var property = 0;
          var previous = 0;
          var variable = 1;
          var scanning = 1;
          var ampersand = 1;
          var character = 0;
          var type = '';
          var props = rules;
          var children = rulesets;
          var reference = rule;
          var characters = type;
          while (scanning) {
            switch (previous = character, character = next()) {
              // (
              case 40:
                if (previous != 108 && charat(characters, length - 1) == 58) {
                  if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
                  break;
                }
              // " ' [
              case 34:
              case 39:
              case 91:
                characters += delimit(character);
                break;
              // \t \n \r \s
              case 9:
              case 10:
              case 13:
              case 32:
                characters += whitespace$1(previous);
                break;
              // \
              case 92:
                characters += escaping(caret() - 1, 7);
                continue;
              // /
              case 47:
                switch (peek()) {
                  case 42:
                  case 47:
                    append(comment(commenter(next(), caret()), root, parent), declarations);
                    break;
                  default:
                    characters += '/';
                }
                break;
              // {
              case 123 * variable:
                points[index++] = strlen(characters) * ampersand;
              // } ; \0
              case 125 * variable:
              case 59:
              case 0:
                switch (character) {
                  // \0 }
                  case 0:
                  case 125:
                    scanning = 0;
                  // ;
                  case 59 + offset:
                    if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
                    break;
                  // @ ;
                  case 59:
                    characters += ';';
                  // { rule/at-rule
                  default:
                    append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
                    if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule === 99 && charat(characters, 3) === 110 ? 100 : atrule) {
                      // d m s
                      case 100:
                      case 109:
                      case 115:
                        parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
                        break;
                      default:
                        parse(characters, reference, reference, reference, [''], children, 0, points, children);
                    }
                }
                index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
                break;
              // :
              case 58:
                length = 1 + strlen(characters), property = previous;
              default:
                if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;
                switch (characters += from(character), character * variable) {
                  // &
                  case 38:
                    ampersand = offset > 0 ? 1 : (characters += '\f', -1);
                    break;
                  // ,
                  case 44:
                    points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
                    break;
                  // @
                  case 64:
                    // -
                    if (peek() === 45) characters += delimit(next());
                    atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
                    break;
                  // -
                  case 45:
                    if (previous === 45 && strlen(characters) == 2) variable = 0;
                }
            }
          }
          return rulesets;
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} index
         * @param {number} offset
         * @param {string[]} rules
         * @param {number[]} points
         * @param {string} type
         * @param {string[]} props
         * @param {string[]} children
         * @param {number} length
         * @return {object}
         */
        function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
          var post = offset - 1;
          var rule = offset === 0 ? rules : [''];
          var size = sizeof(rule);
          for (var i = 0, j = 0, k = 0; i < index; ++i) {
            for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) {
              if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;
            }
          }
          return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
        }

        /**
         * @param {number} value
         * @param {object} root
         * @param {object?} parent
         * @return {object}
         */
        function comment(value, root, parent) {
          return node(value, root, parent, COMMENT, from(_char()), substr(value, 2, -2), 0);
        }

        /**
         * @param {string} value
         * @param {object} root
         * @param {object?} parent
         * @param {number} length
         * @return {object}
         */
        function declaration(value, root, parent, length) {
          return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
        }

        /**
         * @param {object[]} children
         * @param {function} callback
         * @return {string}
         */
        function serialize(children, callback) {
          var output = '';
          var length = sizeof(children);
          for (var i = 0; i < length; i++) {
            output += callback(children[i], i, children, callback) || '';
          }
          return output;
        }

        /**
         * @param {object} element
         * @param {number} index
         * @param {object[]} children
         * @param {function} callback
         * @return {string}
         */
        function stringify$1(element, index, children, callback) {
          switch (element.type) {
            case IMPORT:
            case DECLARATION:
              return element["return"] = element["return"] || element.value;
            case COMMENT:
              return '';
            case KEYFRAMES:
              return element["return"] = element.value + '{' + serialize(element.children, callback) + '}';
            case RULESET:
              element.value = element.props.join(',');
          }
          return strlen(children = serialize(element.children, callback)) ? element["return"] = element.value + '{' + children + '}' : '';
        }
        var Entity = /*#__PURE__*/function () {
          function Entity() {
            _classCallCheck(this, Entity);
            this.cache = new Map();
          }
          _createClass(Entity, [{
            key: "get",
            value: function get(keys) {
              return this.cache.get(keys.join('%')) || null;
            }
          }, {
            key: "update",
            value: function update(keys, valueFn) {
              var path = keys.join('%');
              var prevValue = this.cache.get(path);
              var nextValue = valueFn(prevValue);
              if (nextValue === null) {
                this.cache["delete"](path);
              } else {
                this.cache.set(path, nextValue);
              }
            }
          }]);
          return Entity;
        }();
        var ATTR_TOKEN = 'data-token-hash';
        var ATTR_MARK = 'data-css-hash';
        var ATTR_DEV_CACHE_PATH = 'data-dev-cache-path';
        // Mark css-in-js instance in style element
        var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
        var CSS_IN_JS_INSTANCE_ID = Math.random().toString(12).slice(2);
        function createCache() {
          if (typeof document !== 'undefined') {
            var styles = document.body.querySelectorAll("style[".concat(ATTR_MARK, "]"));
            var firstChild = document.head.firstChild;
            Array.from(styles).forEach(function (style) {
              style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || CSS_IN_JS_INSTANCE_ID;
              document.head.insertBefore(style, firstChild);
            });
            // Deduplicate of moved styles
            var styleHash = {};
            Array.from(document.querySelectorAll("style[".concat(ATTR_MARK, "]"))).forEach(function (style) {
              var hash = style.getAttribute(ATTR_MARK);
              if (styleHash[hash]) {
                if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
                  var _style$parentNode;
                  (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
                }
              } else {
                styleHash[hash] = true;
              }
            });
          }
          return new Entity();
        }
        var StyleContext = /*#__PURE__*/react.exports.createContext({
          hashPriority: 'low',
          cache: createCache(),
          defaultCache: true
        });
        var webpackHMR = false;
        function useDevHMR() {
          return webpackHMR;
        }
        var useHMR = useDevHMR;
        // Webpack `module.hot.accept` do not support any deps update trigger
        // We have to hack handler to force mark as HRM
        if (typeof module !== 'undefined' && module && module.hot) {
          var win = window;
          if (typeof win.webpackHotUpdate === 'function') {
            var originWebpackHotUpdate = win.webpackHotUpdate;
            win.webpackHotUpdate = function () {
              webpackHMR = true;
              setTimeout(function () {
                webpackHMR = false;
              }, 0);
              return originWebpackHotUpdate.apply(void 0, arguments);
            };
          }
        }
        function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
          var _React$useContext = react.exports.useContext(StyleContext),
            globalCache = _React$useContext.cache;
          var fullPath = [prefix].concat(_toConsumableArray(keyPath));
          var HMRUpdate = useHMR();
          // Create cache
          react.exports.useMemo(function () {
            globalCache.update(fullPath, function (prevCache) {
              var _ref = prevCache || [],
                _ref2 = _slicedToArray(_ref, 2),
                _ref2$ = _ref2[0],
                times = _ref2$ === void 0 ? 0 : _ref2$,
                cache = _ref2[1];
              // HMR should always ignore cache since developer may change it
              var tmpCache = cache;
              if (cache && HMRUpdate) {
                onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
                tmpCache = null;
              }
              var mergedCache = tmpCache || cacheFn();
              return [times + 1, mergedCache];
            });
          }, /* eslint-disable react-hooks/exhaustive-deps */
          [fullPath.join('_')]);
          // Remove if no need anymore
          react.exports.useEffect(function () {
            return function () {
              globalCache.update(fullPath, function (prevCache) {
                var _ref3 = prevCache || [],
                  _ref4 = _slicedToArray(_ref3, 2),
                  _ref4$ = _ref4[0],
                  times = _ref4$ === void 0 ? 0 : _ref4$,
                  cache = _ref4[1];
                var nextCount = times - 1;
                if (nextCount === 0) {
                  onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
                  return null;
                }
                return [times - 1, cache];
              });
            };
          }, fullPath);
          return globalCache.get(fullPath)[1];
        }
        function flattenToken(token) {
          var str = '';
          Object.keys(token).forEach(function (key) {
            var value = token[key];
            str += key;
            if (value && _typeof(value) === 'object') {
              str += flattenToken(value);
            } else {
              str += value;
            }
          });
          return str;
        }
        /**
         * Convert derivative token to key string
         */
        function token2key(token, slat) {
          return murmur2("".concat(slat, "_").concat(flattenToken(token)));
        }
        function warning$4(message, path) {
          warningOnce(false, "[Ant Design CSS-in-JS] ".concat(path ? "Error in '".concat(path, "': ") : '').concat(message));
        }
        var styleValidate = function styleValidate(key, value) {
          var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var path = info.path,
            hashId = info.hashId;
          switch (key) {
            case 'content':
              // From emotion: https://github.com/emotion-js/emotion/blob/main/packages/serialize/src/index.js#L63
              var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
              var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
              if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
                warning$4("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(value, "\"'`"), path);
              }
              return;
            case 'marginLeft':
            case 'marginRight':
            case 'paddingLeft':
            case 'paddingRight':
            case 'left':
            case 'right':
            case 'borderLeft':
            case 'borderLeftWidth':
            case 'borderLeftStyle':
            case 'borderLeftColor':
            case 'borderRight':
            case 'borderRightWidth':
            case 'borderRightStyle':
            case 'borderRightColor':
            case 'borderTopLeftRadius':
            case 'borderTopRightRadius':
            case 'borderBottomLeftRadius':
            case 'borderBottomRightRadius':
              warning$4("You seem to be using non-logical property '".concat(key, "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
              return;
            case 'margin':
            case 'padding':
            case 'borderWidth':
            case 'borderStyle':
              // case 'borderColor':
              if (typeof value === 'string') {
                var valueArr = value.split(' ').map(function (item) {
                  return item.trim();
                });
                if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
                  warning$4("You seem to be using '".concat(key, "' property with different left ").concat(key, " and right ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
                }
              }
              return;
            case 'clear':
            case 'textAlign':
              if (value === 'left' || value === 'right') {
                warning$4("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
              }
              return;
            case 'borderRadius':
              if (typeof value === 'string') {
                var radiusGroups = value.split('/').map(function (item) {
                  return item.trim();
                });
                var invalid = radiusGroups.reduce(function (result, group) {
                  if (result) {
                    return result;
                  }
                  var radiusArr = group.split(' ').map(function (item) {
                    return item.trim();
                  });
                  // borderRadius: '2px 4px'
                  if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
                    return true;
                  }
                  // borderRadius: '4px 4px 2px'
                  if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
                    return true;
                  }
                  // borderRadius: '4px 4px 2px 4px'
                  if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
                    return true;
                  }
                  return result;
                }, false);
                if (invalid) {
                  warning$4("You seem to be using non-logical value '".concat(value, "' of ").concat(key, ", which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."), path);
                }
              }
              return;
            case 'animation':
              if (hashId && value !== 'none') {
                warning$4("You seem to be using hashed animation '".concat(value, "', in which case 'animationName' with Keyframe as value is recommended."), path);
              }
            default:
              return;
          }
        };
        var layerKey = "layer-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, '');
        var layerWidth = '903px';
        function supportSelector(styleStr, handleElement) {
          if (canUseDom()) {
            var _ele$parentNode;
            updateCSS(styleStr, layerKey);
            var ele = document.createElement('div');
            ele.style.position = 'fixed';
            ele.style.left = '0';
            ele.style.top = '0';
            handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
            document.body.appendChild(ele);
            {
              ele.innerHTML = 'Test';
              ele.style.zIndex = '9999999';
            }
            var support = getComputedStyle(ele).width === layerWidth;
            (_ele$parentNode = ele.parentNode) === null || _ele$parentNode === void 0 ? void 0 : _ele$parentNode.removeChild(ele);
            removeCSS(layerKey);
            return support;
          }
          return false;
        }
        var canLayer = undefined;
        function supportLayer() {
          if (canLayer === undefined) {
            canLayer = supportSelector("@layer ".concat(layerKey, " { .").concat(layerKey, " { width: ").concat(layerWidth, "!important; } }"), function (ele) {
              ele.className = layerKey;
            });
          }
          return canLayer;
        }
        var _jsxFileName$c = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+cssinjs@0.0.0-alpha.60_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\cssinjs\\es\\hooks\\useStyleRegister.js";
        var isClientSide = canUseDom();
        var SKIP_CHECK = '_skip_check_';
        // ============================================================================
        // ==                                 Parser                                 ==
        // ============================================================================
        // Preprocessor style content to browser support one
        function normalizeStyle(styleStr) {
          var serialized = serialize(compile(styleStr), stringify$1);
          return serialized.replace(/\{%%%\:[^;];}/g, ';');
        }
        function isCompoundCSSProperty(value) {
          return _typeof(value) === 'object' && value && SKIP_CHECK in value;
        }
        var animationStatistics = {};
        // 注入 hash 值
        function injectSelectorHash(key, hashId, hashPriority) {
          if (!hashId) {
            return key;
          }
          var hashClassName = ".".concat(hashId);
          var hashSelector = hashPriority === 'low' ? ":where(".concat(hashClassName, ")") : hashClassName;
          // 注入 hashId
          var keys = key.split(',').map(function (k) {
            var _firstPath$match;
            var fullPath = k.trim().split(/\s+/);
            // 如果 Selector 第一个是 HTML Element，那我们就插到它的后面。反之，就插到最前面。
            var firstPath = fullPath[0] || '';
            var htmlElement = ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0 ? void 0 : _firstPath$match[0]) || '';
            firstPath = "".concat(htmlElement).concat(hashSelector).concat(firstPath.slice(htmlElement.length));
            return [firstPath].concat(_toConsumableArray(fullPath.slice(1))).join(' ');
          });
          return keys.join(',');
        }
        // Parse CSSObject to style content
        var parseStyle = function parseStyle(interpolation) {
          var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
              root: true
            },
            root = _ref.root,
            injectHash = _ref.injectHash;
          var hashId = config.hashId,
            layer = config.layer,
            path = config.path,
            hashPriority = config.hashPriority;
          var styleStr = '';
          function parseKeyframes(keyframes) {
            if (animationStatistics[keyframes.getName(hashId)]) {
              return '';
            }
            animationStatistics[keyframes.getName(hashId)] = true;
            return "@keyframes ".concat(keyframes.getName(hashId)).concat(parseStyle(keyframes.style, config, {
              root: false
            }));
          }
          function flattenList(list) {
            var fullList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
            list.forEach(function (item) {
              if (Array.isArray(item)) {
                flattenList(item, fullList);
              } else if (item) {
                fullList.push(item);
              }
            });
            return fullList;
          }
          var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
          flattenStyleList.forEach(function (originStyle) {
            // Only root level can use raw string
            var style = typeof originStyle === 'string' && !root ? {} : originStyle;
            if (typeof style === 'string') {
              styleStr += "".concat(style, "\n");
            } else if (style._keyframe) {
              // Keyframe
              styleStr += parseKeyframes(style);
            } else {
              // Normal CSSObject
              Object.keys(style).forEach(function (key) {
                var value = style[key];
                if (_typeof(value) === 'object' && value && (key !== 'animationName' || !value._keyframe) && !isCompoundCSSProperty(value)) {
                  var subInjectHash = false;
                  // 当成嵌套对象来处理
                  var mergedKey = key.trim();
                  // Whether treat child as root. In most case it is false.
                  var nextRoot = false;
                  // 拆分多个选择器
                  if ((root || injectHash) && hashId) {
                    if (mergedKey.startsWith('@')) {
                      // 略过媒体查询，交给子节点继续插入 hashId
                      subInjectHash = true;
                    } else {
                      // 注入 hashId
                      mergedKey = injectSelectorHash(key, hashId, hashPriority);
                    }
                  } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
                    // In case of `{ '&': { a: { color: 'red' } } }` or `{ '': { a: { color: 'red' } } }` without hashId,
                    // we will get `&{a:{color:red;}}` or `{a:{color:red;}}` string for stylis to compile.
                    // But it does not conform to stylis syntax,
                    // and finally we will get `{color:red;}` as css, which is wrong.
                    // So we need to remove key in root, and treat child `{ a: { color: 'red' } }` as root.
                    mergedKey = '';
                    nextRoot = true;
                  }
                  styleStr += "".concat(mergedKey).concat(parseStyle(value, _objectSpread2(_objectSpread2({}, config), {}, {
                    path: "".concat(path, " -> ").concat(mergedKey)
                  }), {
                    root: nextRoot,
                    injectHash: subInjectHash
                  }));
                } else {
                  var _value$value;
                  var actualValue = (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null && _value$value !== void 0 ? _value$value : value;
                  if (_typeof(value) !== 'object' || !(value === null || value === void 0 ? void 0 : value[SKIP_CHECK])) {
                    styleValidate(key, actualValue, {
                      path: path,
                      hashId: hashId
                    });
                  }
                  // 如果是样式则直接插入
                  var styleName = key.replace(/[A-Z]/g, function (match) {
                    return "-".concat(match.toLowerCase());
                  });
                  // Auto suffix with px
                  var formatValue = actualValue;
                  if (!unitlessKeys[key] && typeof formatValue === 'number' && formatValue !== 0) {
                    formatValue = "".concat(formatValue, "px");
                  }
                  // handle animationName & Keyframe value
                  if (key === 'animationName' && (value === null || value === void 0 ? void 0 : value._keyframe)) {
                    styleStr += parseKeyframes(value);
                    formatValue = value.getName(hashId);
                  }
                  styleStr += "".concat(styleName, ":").concat(formatValue, ";");
                }
              });
            }
          });
          if (!root) {
            styleStr = "{".concat(styleStr, "}");
          } else if (layer && supportLayer()) {
            var layerCells = layer.split(',');
            var layerName = layerCells[layerCells.length - 1].trim();
            styleStr = "@layer ".concat(layerName, " {").concat(styleStr, "}");
            // Order of layer if needed
            if (layerCells.length > 1) {
              // zombieJ: stylis do not support layer order, so we need to handle it manually.
              styleStr = "@layer ".concat(layer, "{%%%:%}").concat(styleStr);
            }
          }
          return styleStr;
        };
        // ============================================================================
        // ==                                Register                                ==
        // ============================================================================
        function uniqueHash(path, styleStr) {
          return murmur2("".concat(path.join('%')).concat(styleStr));
        }
        function Empty() {
          return null;
        }
        /**
         * Register a style to the global style sheet.
         */
        function useStyleRegister(info, styleFn) {
          var token = info.token,
            path = info.path,
            hashId = info.hashId,
            layer = info.layer;
          var _React$useContext = react.exports.useContext(StyleContext),
            autoClear = _React$useContext.autoClear,
            mock = _React$useContext.mock,
            defaultCache = _React$useContext.defaultCache,
            hashPriority = _React$useContext.hashPriority;
          var tokenKey = token._tokenKey;
          var fullPath = [tokenKey].concat(_toConsumableArray(path));
          // Check if need insert style
          var isMergedClientSide = isClientSide;
          if (mock !== undefined) {
            isMergedClientSide = mock === 'client';
          }
          var _useGlobalCache = useClientCache('style', fullPath,
            // Create cache if needed
            function () {
              var styleObj = styleFn();
              var styleStr = normalizeStyle(parseStyle(styleObj, {
                hashId: hashId,
                hashPriority: hashPriority,
                layer: layer,
                path: path.join('-')
              }));
              var styleId = uniqueHash(fullPath, styleStr);
              // Clear animation statistics
              animationStatistics = {};
              if (isMergedClientSide) {
                var style = updateCSS(styleStr, styleId, {
                  mark: ATTR_MARK,
                  prepend: 'queue'
                });
                style[CSS_IN_JS_INSTANCE] = CSS_IN_JS_INSTANCE_ID;
                // Used for `useCacheToken` to remove on batch when token removed
                style.setAttribute(ATTR_TOKEN, tokenKey);
                // Dev usage to find which cache path made this easily
                {
                  style.setAttribute(ATTR_DEV_CACHE_PATH, fullPath.join('|'));
                }
              }
              return [styleStr, tokenKey, styleId];
            },
            // Remove cache if no need
            function (_ref2, fromHMR) {
              var _ref3 = _slicedToArray(_ref2, 3),
                styleId = _ref3[2];
              if ((fromHMR || autoClear) && isClientSide) {
                removeCSS(styleId, {
                  mark: ATTR_MARK
                });
              }
            }),
            _useGlobalCache2 = _slicedToArray(_useGlobalCache, 3),
            cachedStyleStr = _useGlobalCache2[0],
            cachedTokenKey = _useGlobalCache2[1],
            cachedStyleId = _useGlobalCache2[2];
          return function (node) {
            var styleNode;
            if (isMergedClientSide || !defaultCache) {
              styleNode = /*#__PURE__*/
              /*#__PURE__*/
              jsxDEV(Empty, {}, void 0, false, {
                fileName: _jsxFileName$c,
                lineNumber: 241,
                columnNumber: 32
              }, this);
            } else {
              var _objectSpread2$1;
              styleNode = /*#__PURE__*/
              /*#__PURE__*/
              jsxDEV("style", _objectSpread({}, _objectSpread2(_objectSpread2({}, (_objectSpread2$1 = {}, _defineProperty(_objectSpread2$1, ATTR_TOKEN, cachedTokenKey), _defineProperty(_objectSpread2$1, ATTR_MARK, cachedStyleId), _objectSpread2$1)), {}, {
                dangerouslySetInnerHTML: {
                  __html: cachedStyleStr
                }
              })), void 0, false, {
                fileName: _jsxFileName$c,
                lineNumber: 244,
                columnNumber: 32
              }, this);
            }
            return /*#__PURE__*/(
              /*#__PURE__*/
              jsxDEV(Fragment, {
                children: [styleNode, node]
              }, void 0, true)
            );
          };
        }
        var EMPTY_OVERRIDE = {};
        // Generate different prefix to make user selector break in production env.
        // This helps developer not to do style override directly on the hash id.
        var hashPrefix = 'css-dev-only-do-not-override';
        var tokenKeys = new Map();
        function recordCleanToken(tokenKey) {
          tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
        }
        function removeStyleTags(key) {
          if (typeof document !== 'undefined') {
            var styles = document.querySelectorAll("style[".concat(ATTR_TOKEN, "=\"").concat(key, "\"]"));
            styles.forEach(function (style) {
              if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
                var _style$parentNode;
                (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0 ? void 0 : _style$parentNode.removeChild(style);
              }
            });
          }
        }
        // Remove will check current keys first
        function cleanTokenStyle(tokenKey) {
          tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
          var tokenKeyList = Array.from(tokenKeys.keys());
          var cleanableKeyList = tokenKeyList.filter(function (key) {
            var count = tokenKeys.get(key) || 0;
            return count <= 0;
          });
          if (cleanableKeyList.length < tokenKeyList.length) {
            cleanableKeyList.forEach(function (key) {
              removeStyleTags(key);
              tokenKeys["delete"](key);
            });
          }
        }
        /**
         * Cache theme derivative token as global shared one
         * @param theme Theme entity
         * @param tokens List of tokens, used for cache. Please do not dynamic generate object directly
         * @param option Additional config
         * @returns Call Theme.getDerivativeToken(tokenObject) to get token
         */
        function useCacheToken(theme, tokens) {
          var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var _option$salt = option.salt,
            salt = _option$salt === void 0 ? '' : _option$salt,
            _option$override = option.override,
            override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
            formatToken = option.formatToken;
          // Basic - We do basic cache here
          var mergedToken = react.exports.useMemo(function () {
            return Object.assign.apply(Object, [{}].concat(_toConsumableArray(tokens)));
          }, [tokens]);
          var tokenStr = react.exports.useMemo(function () {
            return flattenToken(mergedToken);
          }, [mergedToken]);
          var overrideTokenStr = react.exports.useMemo(function () {
            return flattenToken(override);
          }, [override]);
          var cachedToken = useClientCache('token', [salt, theme.id, tokenStr, overrideTokenStr], function () {
            var derivativeToken = theme.getDerivativeToken(mergedToken);
            // Merge with override
            var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), override);
            // Format if needed
            if (formatToken) {
              mergedDerivativeToken = formatToken(mergedDerivativeToken);
            }
            // Optimize for `useStyleRegister` performance
            var tokenKey = token2key(mergedDerivativeToken, salt);
            mergedDerivativeToken._tokenKey = tokenKey;
            recordCleanToken(tokenKey);
            var hashId = "".concat(hashPrefix, "-").concat(murmur2(tokenKey));
            mergedDerivativeToken._hashId = hashId; // Not used
            return [mergedDerivativeToken, hashId];
          }, function (cache) {
            // Remove token will remove all related style
            cleanTokenStyle(cache[0]._tokenKey);
          });
          return cachedToken;
        }
        var Keyframe = exports('K', /*#__PURE__*/function () {
          function Keyframe(name, style) {
            _classCallCheck(this, Keyframe);
            this.name = void 0;
            this.style = void 0;
            this._keyframe = true;
            this.name = name;
            this.style = style;
          }
          _createClass(Keyframe, [{
            key: "getName",
            value: function getName() {
              var hashId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
              return hashId ? "".concat(hashId, "-").concat(this.name) : this.name;
            }
          }]);
          return Keyframe;
        }());
        function sameDerivativeOption(left, right) {
          if (left.length !== right.length) {
            return false;
          }
          for (var i = 0; i < left.length; i++) {
            if (left[i] !== right[i]) {
              return false;
            }
          }
          return true;
        }
        var ThemeCache = /*#__PURE__*/function () {
          function ThemeCache() {
            _classCallCheck(this, ThemeCache);
            this.cache = void 0;
            this.keys = void 0;
            this.cacheCallTimes = void 0;
            this.cache = new Map();
            this.keys = [];
            this.cacheCallTimes = 0;
          }
          _createClass(ThemeCache, [{
            key: "size",
            value: function size() {
              return this.keys.length;
            }
          }, {
            key: "internalGet",
            value: function internalGet(derivativeOption) {
              var _cache2, _cache3;
              var updateCallTimes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
              var cache = {
                map: this.cache
              };
              derivativeOption.forEach(function (derivative) {
                if (!cache) {
                  cache = undefined;
                } else {
                  var _cache, _cache$map;
                  cache = (_cache = cache) === null || _cache === void 0 ? void 0 : (_cache$map = _cache.map) === null || _cache$map === void 0 ? void 0 : _cache$map.get(derivative);
                }
              });
              if (((_cache2 = cache) === null || _cache2 === void 0 ? void 0 : _cache2.value) && updateCallTimes) {
                cache.value[1] = this.cacheCallTimes++;
              }
              return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
            }
          }, {
            key: "get",
            value: function get(derivativeOption) {
              var _this$internalGet;
              return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0 ? void 0 : _this$internalGet[0];
            }
          }, {
            key: "has",
            value: function has(derivativeOption) {
              return !!this.internalGet(derivativeOption);
            }
          }, {
            key: "set",
            value: function set(derivativeOption, value) {
              var _this = this;
              // New cache
              if (!this.has(derivativeOption)) {
                if (this.size() + 1 > ThemeCache.MAX_CACHE_SIZE + ThemeCache.MAX_CACHE_OFFSET) {
                  var _this$keys$reduce = this.keys.reduce(function (result, key) {
                      var _result = _slicedToArray(result, 2),
                        callTimes = _result[1];
                      if (_this.internalGet(key)[1] < callTimes) {
                        return [key, _this.internalGet(key)[1]];
                      }
                      return result;
                    }, [this.keys[0], this.cacheCallTimes]),
                    _this$keys$reduce2 = _slicedToArray(_this$keys$reduce, 1),
                    targetKey = _this$keys$reduce2[0];
                  this["delete"](targetKey);
                }
                this.keys.push(derivativeOption);
              }
              var cache = this.cache;
              derivativeOption.forEach(function (derivative, index) {
                if (index === derivativeOption.length - 1) {
                  cache.set(derivative, {
                    value: [value, _this.cacheCallTimes++]
                  });
                } else {
                  var cacheValue = cache.get(derivative);
                  if (!cacheValue) {
                    cache.set(derivative, {
                      map: new Map()
                    });
                  } else if (!cacheValue.map) {
                    cacheValue.map = new Map();
                  }
                  cache = cache.get(derivative).map;
                }
              });
            }
          }, {
            key: "deleteByPath",
            value: function deleteByPath(currentCache, derivatives) {
              var cache = currentCache.get(derivatives[0]);
              if (derivatives.length === 1) {
                var _cache$value;
                if (!cache.map) {
                  currentCache["delete"](derivatives[0]);
                } else {
                  currentCache.set(derivatives[0], {
                    map: cache.map
                  });
                }
                return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
              }
              var result = this.deleteByPath(cache.map, derivatives.slice(1));
              if ((!cache.map || cache.map.size === 0) && !cache.value) {
                currentCache["delete"](derivatives[0]);
              }
              return result;
            }
          }, {
            key: "delete",
            value: function _delete(derivativeOption) {
              // If cache exists
              if (this.has(derivativeOption)) {
                this.keys = this.keys.filter(function (item) {
                  return !sameDerivativeOption(item, derivativeOption);
                });
                return this.deleteByPath(this.cache, derivativeOption);
              }
              return undefined;
            }
          }]);
          return ThemeCache;
        }();
        ThemeCache.MAX_CACHE_SIZE = 20;
        ThemeCache.MAX_CACHE_OFFSET = 5;
        var uuid = 0;
        /**
         * Theme with algorithms to derive tokens from design tokens.
         * Use `createTheme` first which will help to manage the theme instance cache.
         */
        var Theme = /*#__PURE__*/function () {
          function Theme(derivatives) {
            _classCallCheck(this, Theme);
            this.derivatives = void 0;
            this.id = void 0;
            this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
            this.id = uuid;
            if (derivatives.length === 0) {
              warning$5(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
            }
            uuid += 1;
          }
          _createClass(Theme, [{
            key: "getDerivativeToken",
            value: function getDerivativeToken(token) {
              return this.derivatives.reduce(function (result, derivative) {
                return derivative(token, result);
              }, undefined);
            }
          }]);
          return Theme;
        }();
        var cacheThemes = new ThemeCache();
        /**
         * Same as new Theme, but will always return same one if `derivative` not changed.
         */
        function createTheme(derivatives) {
          var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
          // Create new theme if not exist
          if (!cacheThemes.has(derivativeArr)) {
            cacheThemes.set(derivativeArr, new Theme(derivativeArr));
          }
          // Get theme from cache and return
          return cacheThemes.get(derivativeArr);
        }
        var IconContext = /*#__PURE__*/react.exports.createContext({});
        var Context$1 = IconContext;
        function _objectWithoutPropertiesLoose(source, excluded) {
          if (source == null) return {};
          var target = {};
          var sourceKeys = Object.keys(source);
          var key, i;
          for (i = 0; i < sourceKeys.length; i++) {
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
          }
          return target;
        }
        function _objectWithoutProperties(source, excluded) {
          if (source == null) return {};
          var target = _objectWithoutPropertiesLoose(source, excluded);
          var key, i;
          if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for (i = 0; i < sourceSymbolKeys.length; i++) {
              key = sourceSymbolKeys[i];
              if (excluded.indexOf(key) >= 0) continue;
              if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
              target[key] = source[key];
            }
          }
          return target;
        }
        var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var warningFunc = function warningFunc() {
          warningOnce(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
        };
        var Context = /*#__PURE__*/react.exports.createContext({
          getFieldValue: warningFunc,
          getFieldsValue: warningFunc,
          getFieldError: warningFunc,
          getFieldWarning: warningFunc,
          getFieldsError: warningFunc,
          isFieldsTouched: warningFunc,
          isFieldTouched: warningFunc,
          isFieldValidating: warningFunc,
          isFieldsValidating: warningFunc,
          resetFields: warningFunc,
          setFields: warningFunc,
          setFieldValue: warningFunc,
          setFieldsValue: warningFunc,
          validateFields: warningFunc,
          submit: warningFunc,
          getInternalHooks: function getInternalHooks() {
            warningFunc();
            return {
              dispatch: warningFunc,
              initEntityValue: warningFunc,
              registerField: warningFunc,
              useSubscribe: warningFunc,
              setInitialValues: warningFunc,
              destroyForm: warningFunc,
              setCallbacks: warningFunc,
              registerWatch: warningFunc,
              getFields: warningFunc,
              setValidateMessages: warningFunc,
              setPreserve: warningFunc,
              getInitialValue: warningFunc
            };
          }
        });
        function toArray(value) {
          if (value === undefined || value === null) {
            return [];
          }
          return Array.isArray(value) ? value : [value];
        }
        function _regeneratorRuntime() {
          _regeneratorRuntime = function _regeneratorRuntime() {
            return exports;
          };
          var exports = {},
            Op = Object.prototype,
            hasOwn = Op.hasOwnProperty,
            defineProperty = Object.defineProperty || function (obj, key, desc) {
              obj[key] = desc.value;
            },
            $Symbol = "function" == typeof Symbol ? Symbol : {},
            iteratorSymbol = $Symbol.iterator || "@@iterator",
            asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
            toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
          function define(obj, key, value) {
            return Object.defineProperty(obj, key, {
              value: value,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), obj[key];
          }
          try {
            define({}, "");
          } catch (err) {
            define = function define(obj, key, value) {
              return obj[key] = value;
            };
          }
          function wrap(innerFn, outerFn, self, tryLocsList) {
            var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
              generator = Object.create(protoGenerator.prototype),
              context = new Context(tryLocsList || []);
            return defineProperty(generator, "_invoke", {
              value: makeInvokeMethod(innerFn, self, context)
            }), generator;
          }
          function tryCatch(fn, obj, arg) {
            try {
              return {
                type: "normal",
                arg: fn.call(obj, arg)
              };
            } catch (err) {
              return {
                type: "throw",
                arg: err
              };
            }
          }
          exports.wrap = wrap;
          var ContinueSentinel = {};
          function Generator() {}
          function GeneratorFunction() {}
          function GeneratorFunctionPrototype() {}
          var IteratorPrototype = {};
          define(IteratorPrototype, iteratorSymbol, function () {
            return this;
          });
          var getProto = Object.getPrototypeOf,
            NativeIteratorPrototype = getProto && getProto(getProto(values([])));
          NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
          var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
          function defineIteratorMethods(prototype) {
            ["next", "throw", "return"].forEach(function (method) {
              define(prototype, method, function (arg) {
                return this._invoke(method, arg);
              });
            });
          }
          function AsyncIterator(generator, PromiseImpl) {
            function invoke(method, arg, resolve, reject) {
              var record = tryCatch(generator[method], generator, arg);
              if ("throw" !== record.type) {
                var result = record.arg,
                  value = result.value;
                return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                }) : PromiseImpl.resolve(value).then(function (unwrapped) {
                  result.value = unwrapped, resolve(result);
                }, function (error) {
                  return invoke("throw", error, resolve, reject);
                });
              }
              reject(record.arg);
            }
            var previousPromise;
            defineProperty(this, "_invoke", {
              value: function value(method, arg) {
                function callInvokeWithMethodAndArg() {
                  return new PromiseImpl(function (resolve, reject) {
                    invoke(method, arg, resolve, reject);
                  });
                }
                return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
              }
            });
          }
          function makeInvokeMethod(innerFn, self, context) {
            var state = "suspendedStart";
            return function (method, arg) {
              if ("executing" === state) throw new Error("Generator is already running");
              if ("completed" === state) {
                if ("throw" === method) throw arg;
                return doneResult();
              }
              for (context.method = method, context.arg = arg;;) {
                var delegate = context.delegate;
                if (delegate) {
                  var delegateResult = maybeInvokeDelegate(delegate, context);
                  if (delegateResult) {
                    if (delegateResult === ContinueSentinel) continue;
                    return delegateResult;
                  }
                }
                if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
                  if ("suspendedStart" === state) throw state = "completed", context.arg;
                  context.dispatchException(context.arg);
                } else "return" === context.method && context.abrupt("return", context.arg);
                state = "executing";
                var record = tryCatch(innerFn, self, context);
                if ("normal" === record.type) {
                  if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
                  return {
                    value: record.arg,
                    done: context.done
                  };
                }
                "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
              }
            };
          }
          function maybeInvokeDelegate(delegate, context) {
            var method = delegate.iterator[context.method];
            if (undefined === method) {
              if (context.delegate = null, "throw" === context.method) {
                if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
                context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
              }
              return ContinueSentinel;
            }
            var record = tryCatch(method, delegate.iterator, context.arg);
            if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
            var info = record.arg;
            return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
          }
          function pushTryEntry(locs) {
            var entry = {
              tryLoc: locs[0]
            };
            1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
          }
          function resetTryEntry(entry) {
            var record = entry.completion || {};
            record.type = "normal", delete record.arg, entry.completion = record;
          }
          function Context(tryLocsList) {
            this.tryEntries = [{
              tryLoc: "root"
            }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
          }
          function values(iterable) {
            if (iterable) {
              var iteratorMethod = iterable[iteratorSymbol];
              if (iteratorMethod) return iteratorMethod.call(iterable);
              if ("function" == typeof iterable.next) return iterable;
              if (!isNaN(iterable.length)) {
                var i = -1,
                  next = function next() {
                    for (; ++i < iterable.length;) {
                      if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
                    }
                    return next.value = undefined, next.done = !0, next;
                  };
                return next.next = next;
              }
            }
            return {
              next: doneResult
            };
          }
          function doneResult() {
            return {
              value: undefined,
              done: !0
            };
          }
          return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
            value: GeneratorFunctionPrototype,
            configurable: !0
          }), defineProperty(GeneratorFunctionPrototype, "constructor", {
            value: GeneratorFunction,
            configurable: !0
          }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
            var ctor = "function" == typeof genFun && genFun.constructor;
            return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
          }, exports.mark = function (genFun) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
          }, exports.awrap = function (arg) {
            return {
              __await: arg
            };
          }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
            return this;
          }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
            void 0 === PromiseImpl && (PromiseImpl = Promise);
            var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
            return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
          }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
            return this;
          }), define(Gp, "toString", function () {
            return "[object Generator]";
          }), exports.keys = function (val) {
            var object = Object(val),
              keys = [];
            for (var key in object) {
              keys.push(key);
            }
            return keys.reverse(), function next() {
              for (; keys.length;) {
                var key = keys.pop();
                if (key in object) return next.value = key, next.done = !1, next;
              }
              return next.done = !0, next;
            };
          }, exports.values = values, Context.prototype = {
            constructor: Context,
            reset: function reset(skipTempReset) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
                "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
              }
            },
            stop: function stop() {
              this.done = !0;
              var rootRecord = this.tryEntries[0].completion;
              if ("throw" === rootRecord.type) throw rootRecord.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(exception) {
              if (this.done) throw exception;
              var context = this;
              function handle(loc, caught) {
                return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
              }
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i],
                  record = entry.completion;
                if ("root" === entry.tryLoc) return handle("end");
                if (entry.tryLoc <= this.prev) {
                  var hasCatch = hasOwn.call(entry, "catchLoc"),
                    hasFinally = hasOwn.call(entry, "finallyLoc");
                  if (hasCatch && hasFinally) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  } else if (hasCatch) {
                    if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
                  } else {
                    if (!hasFinally) throw new Error("try statement without catch or finally");
                    if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(type, arg) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                  var finallyEntry = entry;
                  break;
                }
              }
              finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
              var record = finallyEntry ? finallyEntry.completion : {};
              return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
            },
            complete: function complete(record, afterLoc) {
              if ("throw" === record.type) throw record.arg;
              return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
            },
            finish: function finish(finallyLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
              }
            },
            "catch": function _catch(tryLoc) {
              for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                  var record = entry.completion;
                  if ("throw" === record.type) {
                    var thrown = record.arg;
                    resetTryEntry(entry);
                  }
                  return thrown;
                }
              }
              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(iterable, resultName, nextLoc) {
              return this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
              }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
            }
          }, exports;
        }
        function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }
          if (info.done) {
            resolve(value);
          } else {
            Promise.resolve(value).then(_next, _throw);
          }
        }
        function _asyncToGenerator(fn) {
          return function () {
            var self = this,
              args = arguments;
            return new Promise(function (resolve, reject) {
              var gen = fn.apply(self, args);
              function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
              }
              function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
              }
              _next(undefined);
            });
          };
        }
        function _extends() {
          _extends = Object.assign ? Object.assign.bind() : function (target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
          return _getPrototypeOf(o);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
          return _setPrototypeOf(o, p);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct) return false;
          if (Reflect.construct.sham) return false;
          if (typeof Proxy === "function") return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct.bind();
          } else {
            _construct = function _construct(Parent, args, Class) {
              var a = [null];
              a.push.apply(a, args);
              var Constructor = Function.bind.apply(Parent, a);
              var instance = new Constructor();
              if (Class) _setPrototypeOf(instance, Class.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : undefined;
          _wrapNativeSuper = function _wrapNativeSuper(Class) {
            if (Class === null || !_isNativeFunction(Class)) return Class;
            if (typeof Class !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class)) return _cache.get(Class);
              _cache.set(Class, Wrapper);
            }
            function Wrapper() {
              return _construct(Class, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class.prototype, {
              constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
              }
            });
            return _setPrototypeOf(Wrapper, Class);
          };
          return _wrapNativeSuper(Class);
        }

        /* eslint no-console:0 */
        var formatRegExp = /%[sdj%]/g;
        var warning$3 = function warning() {}; // don't print warning message when in production env or node runtime

        if (typeof process !== 'undefined' && {
          "ACSvcPort": "17532",
          "ALLUSERSPROFILE": "C:\\ProgramData",
          "APPDATA": "C:\\Users\\HeMengke\\AppData\\Roaming",
          "asl.log": "Destination=file",
          "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_22408_UIUOORFMNQRCNSEM",
          "COLOR": "1",
          "COLORTERM": "truecolor",
          "CommonProgramFiles": "C:\\Program Files\\Common Files",
          "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files",
          "CommonProgramW6432": "C:\\Program Files\\Common Files",
          "COMPUTERNAME": "DESKTOP-LS9DGQV",
          "ComSpec": "C:\\Windows\\system32\\cmd.exe",
          "CONDA_PROMPT_MODIFIER": "False",
          "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData",
          "EDITOR": "notepad.exe",
          "envContainerTelemetryApiCmdLine": "-st \"C:\\Program Files\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll\"",
          "envContainerTelemetryApiCmdLineX86": "-st \"C:\\Program Files (x86)\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll\"",
          "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer",
          "FPS_BROWSER_USER_PROFILE_STRING": "Default",
          "GIT_ASKPASS": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh",
          "GOPATH": "C:\\Users\\HeMengke\\go",
          "HOME": "C:\\Users\\HeMengke",
          "HOMEDRIVE": "C:",
          "HOMEPATH": "\\Users\\HeMengke",
          "INIT_CWD": "E:\\github\\vite-react-ssr-boilerplate",
          "LANG": "zh_CN.UTF-8",
          "LOCALAPPDATA": "C:\\Users\\HeMengke\\AppData\\Local",
          "LOGONSERVER": "\\\\DESKTOP-LS9DGQV",
          "NODE": "C:\\Program Files\\nodejs\\node.exe",
          "NODE_ENV": "test",
          "NODE_EXE": "C:\\Program Files\\nodejs\\\\node.exe",
          "NODE_PATH": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\node_modules;E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\node_modules",
          "NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
          "npm_command": "run-script",
          "npm_config_auto_install_peers": "",
          "npm_config_cache": "C:\\Users\\HeMengke\\AppData\\Local\\npm-cache",
          "npm_config_globalconfig": "C:\\Program Files\\nodejs\\etc\\npmrc",
          "npm_config_global_prefix": "C:\\Program Files\\nodejs",
          "npm_config_init_module": "C:\\Users\\HeMengke\\.npm-init.js",
          "npm_config_local_prefix": "E:\\github\\vite-react-ssr-boilerplate",
          "npm_config_metrics_registry": "https://registry.npm.taobao.org/",
          "npm_config_node_gyp": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js",
          "npm_config_noproxy": "",
          "npm_config_prefix": "C:\\Program Files\\nodejs",
          "npm_config_registry": "https://registry.npm.taobao.org/",
          "npm_config_strict_peer_dependencies": "",
          "npm_config_userconfig": "C:\\Users\\HeMengke\\.npmrc",
          "npm_config_user_agent": "npm/8.12.1 node/v18.5.0 win32 x64 workspaces/false",
          "npm_execpath": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\bin\\npm-cli.js",
          "npm_lifecycle_event": "build:test",
          "npm_lifecycle_script": "cross-env NODE_ENV=test vite build --mode test && vite build --ssr --mode test",
          "npm_node_execpath": "C:\\Program Files\\nodejs\\node.exe",
          "npm_package_engines_node": ">=16.14.2",
          "npm_package_json": "E:\\github\\vite-react-ssr-boilerplate\\package.json",
          "npm_package_name": "vite-react-ssr-boilerplate",
          "npm_package_version": "0.0.0",
          "NPM_PREFIX_NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js",
          "NUMBER_OF_PROCESSORS": "20",
          "NVM_HOME": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm",
          "NVM_SYMLINK": "C:\\Program Files\\nodejs",
          "OneDrive": "C:\\Users\\HeMengke\\OneDrive",
          "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined",
          "OS": "Windows_NT",
          "Path": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.bin;E:\\github\\node_modules\\.bin;E:\\node_modules\\.bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\WindowsApps\\Microsoft.PowerShell_7.2.5.0_x64__8wekyb3d8bbwe;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\Git\\cmd;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files (x86)\\NetSarang\\Xshell 7\\;C:\\Program Files\\Go\\bin;C:\\Program Files (x86)\\dotnet\\;C:\\Users\\HeMengke\\AppData\\Local\\pnpm;C:\\Users\\HeMengke\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Microsoft VS Code\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\npm;C:\\Users\\HeMengke\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\bin;C:\\Users\\HeMengke\\go\\bin",
          "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL",
          "PNPM_HOME": "C:\\Users\\HeMengke\\AppData\\Local\\pnpm",
          "POSH_GIT_ENABLED": "False",
          "POSH_THEME": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes\\dracula.omp.json",
          "POSH_THEMES_PATH": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes",
          "POWERLINE_COMMAND": "oh-my-posh",
          "PROCESSOR_ARCHITECTURE": "AMD64",
          "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel",
          "PROCESSOR_LEVEL": "6",
          "PROCESSOR_REVISION": "9702",
          "ProgramData": "C:\\ProgramData",
          "ProgramFiles": "C:\\Program Files",
          "ProgramFiles(x86)": "C:\\Program Files (x86)",
          "ProgramW6432": "C:\\Program Files",
          "PROMPT": "$P$G",
          "PSModulePath": "C:\\Users\\HeMengke\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\windowsapps\\microsoft.powershell_7.2.5.0_x64__8wekyb3d8bbwe\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules",
          "PUBLIC": "C:\\Users\\Public",
          "RlsSvcPort": "22112",
          "SESSIONNAME": "Console",
          "SystemDrive": "C:",
          "SystemRoot": "C:\\Windows",
          "TEMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp",
          "TERM_PROGRAM": "vscode",
          "TERM_PROGRAM_VERSION": "1.70.1",
          "TMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp",
          "USERDOMAIN": "DESKTOP-LS9DGQV",
          "USERDOMAIN_ROAMINGPROFILE": "DESKTOP-LS9DGQV",
          "USERNAME": "HeMengke",
          "USERPROFILE": "C:\\Users\\HeMengke",
          "VITE_APIPREFIX": "/proxyPrefix",
          "VITE_APIURL": "http://localhost:9527",
          "VITE_HOST": "localhost",
          "VITE_PROXY": "/proxyPrefix",
          "VITE_USER_NODE_ENV": "test",
          "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node",
          "VSCODE_GIT_ASKPASS_MAIN": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js",
          "VSCODE_GIT_ASKPASS_NODE": "D:\\Microsoft VS Code\\Code.exe",
          "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-56a6092ff0-sock",
          "VSCODE_INJECTION": "1",
          "windir": "C:\\Windows"
        } && "test" !== 'production' && typeof window !== 'undefined' && typeof document !== 'undefined') {
          warning$3 = function warning(type, errors) {
            if (typeof console !== 'undefined' && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING === 'undefined') {
              if (errors.every(function (e) {
                return typeof e === 'string';
              })) {
                console.warn(type, errors);
              }
            }
          };
        }
        function convertFieldsError(errors) {
          if (!errors || !errors.length) return null;
          var fields = {};
          errors.forEach(function (error) {
            var field = error.field;
            fields[field] = fields[field] || [];
            fields[field].push(error);
          });
          return fields;
        }
        function format(template) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          var i = 0;
          var len = args.length;
          if (typeof template === 'function') {
            return template.apply(null, args);
          }
          if (typeof template === 'string') {
            var str = template.replace(formatRegExp, function (x) {
              if (x === '%%') {
                return '%';
              }
              if (i >= len) {
                return x;
              }
              switch (x) {
                case '%s':
                  return String(args[i++]);
                case '%d':
                  return Number(args[i++]);
                case '%j':
                  try {
                    return JSON.stringify(args[i++]);
                  } catch (_) {
                    return '[Circular]';
                  }
                  break;
                default:
                  return x;
              }
            });
            return str;
          }
          return template;
        }
        function isNativeStringType(type) {
          return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'date' || type === 'pattern';
        }
        function isEmptyValue(value, type) {
          if (value === undefined || value === null) {
            return true;
          }
          if (type === 'array' && Array.isArray(value) && !value.length) {
            return true;
          }
          if (isNativeStringType(type) && typeof value === 'string' && !value) {
            return true;
          }
          return false;
        }
        function asyncParallelArray(arr, func, callback) {
          var results = [];
          var total = 0;
          var arrLength = arr.length;
          function count(errors) {
            results.push.apply(results, errors || []);
            total++;
            if (total === arrLength) {
              callback(results);
            }
          }
          arr.forEach(function (a) {
            func(a, count);
          });
        }
        function asyncSerialArray(arr, func, callback) {
          var index = 0;
          var arrLength = arr.length;
          function next(errors) {
            if (errors && errors.length) {
              callback(errors);
              return;
            }
            var original = index;
            index = index + 1;
            if (original < arrLength) {
              func(arr[original], next);
            } else {
              callback([]);
            }
          }
          next([]);
        }
        function flattenObjArr(objArr) {
          var ret = [];
          Object.keys(objArr).forEach(function (k) {
            ret.push.apply(ret, objArr[k] || []);
          });
          return ret;
        }
        var AsyncValidationError = /*#__PURE__*/function (_Error) {
          _inheritsLoose(AsyncValidationError, _Error);
          function AsyncValidationError(errors, fields) {
            var _this;
            _this = _Error.call(this, 'Async Validation Error') || this;
            _this.errors = errors;
            _this.fields = fields;
            return _this;
          }
          return AsyncValidationError;
        }( /*#__PURE__*/_wrapNativeSuper(Error));
        function asyncMap(objArr, option, func, callback, source) {
          if (option.first) {
            var _pending = new Promise(function (resolve, reject) {
              var next = function next(errors) {
                callback(errors);
                return errors.length ? reject(new AsyncValidationError(errors, convertFieldsError(errors))) : resolve(source);
              };
              var flattenArr = flattenObjArr(objArr);
              asyncSerialArray(flattenArr, func, next);
            });
            _pending["catch"](function (e) {
              return e;
            });
            return _pending;
          }
          var firstFields = option.firstFields === true ? Object.keys(objArr) : option.firstFields || [];
          var objArrKeys = Object.keys(objArr);
          var objArrLength = objArrKeys.length;
          var total = 0;
          var results = [];
          var pending = new Promise(function (resolve, reject) {
            var next = function next(errors) {
              results.push.apply(results, errors);
              total++;
              if (total === objArrLength) {
                callback(results);
                return results.length ? reject(new AsyncValidationError(results, convertFieldsError(results))) : resolve(source);
              }
            };
            if (!objArrKeys.length) {
              callback(results);
              resolve(source);
            }
            objArrKeys.forEach(function (key) {
              var arr = objArr[key];
              if (firstFields.indexOf(key) !== -1) {
                asyncSerialArray(arr, func, next);
              } else {
                asyncParallelArray(arr, func, next);
              }
            });
          });
          pending["catch"](function (e) {
            return e;
          });
          return pending;
        }
        function isErrorObj(obj) {
          return !!(obj && obj.message !== undefined);
        }
        function getValue$2(value, path) {
          var v = value;
          for (var i = 0; i < path.length; i++) {
            if (v == undefined) {
              return v;
            }
            v = v[path[i]];
          }
          return v;
        }
        function complementError(rule, source) {
          return function (oe) {
            var fieldValue;
            if (rule.fullFields) {
              fieldValue = getValue$2(source, rule.fullFields);
            } else {
              fieldValue = source[oe.field || rule.fullField];
            }
            if (isErrorObj(oe)) {
              oe.field = oe.field || rule.fullField;
              oe.fieldValue = fieldValue;
              return oe;
            }
            return {
              message: typeof oe === 'function' ? oe() : oe,
              fieldValue: fieldValue,
              field: oe.field || rule.fullField
            };
          };
        }
        function deepMerge(target, source) {
          if (source) {
            for (var s in source) {
              if (source.hasOwnProperty(s)) {
                var value = source[s];
                if (_typeof2(value) === 'object' && _typeof2(target[s]) === 'object') {
                  target[s] = _extends({}, target[s], value);
                } else {
                  target[s] = value;
                }
              }
            }
          }
          return target;
        }
        var required$1 = function required(rule, value, source, errors, options, type) {
          if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
            errors.push(format(options.messages.required, rule.fullField));
          }
        };

        /**
         *  Rule for validating whitespace.
         *
         *  @param rule The validation rule.
         *  @param value The value of the field on the source object.
         *  @param source The source object being validated.
         *  @param errors An array of errors that this rule may add
         *  validation errors to.
         *  @param options The validation options.
         *  @param options.messages The validation messages.
         */

        var whitespace = function whitespace(rule, value, source, errors, options) {
          if (/^\s+$/.test(value) || value === '') {
            errors.push(format(options.messages.whitespace, rule.fullField));
          }
        };

        // https://github.com/kevva/url-regex/blob/master/index.js
        var urlReg;
        var getUrlRegex = function getUrlRegex() {
          if (urlReg) {
            return urlReg;
          }
          var word = '[a-fA-F\\d:]';
          var b = function b(options) {
            return options && options.includeBoundaries ? "(?:(?<=\\s|^)(?=" + word + ")|(?<=" + word + ")(?=\\s|$))" : '';
          };
          var v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';
          var v6seg = '[a-fA-F\\d]{1,4}';
          var v6 = ("\n(?:\n(?:" + v6seg + ":){7}(?:" + v6seg + "|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:" + v6seg + ":){6}(?:" + v4 + "|:" + v6seg + "|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:" + v6seg + ":){5}(?::" + v4 + "|(?::" + v6seg + "){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:" + v6seg + ":){4}(?:(?::" + v6seg + "){0,1}:" + v4 + "|(?::" + v6seg + "){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:" + v6seg + ":){3}(?:(?::" + v6seg + "){0,2}:" + v4 + "|(?::" + v6seg + "){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:" + v6seg + ":){2}(?:(?::" + v6seg + "){0,3}:" + v4 + "|(?::" + v6seg + "){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:" + v6seg + ":){1}(?:(?::" + v6seg + "){0,4}:" + v4 + "|(?::" + v6seg + "){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::" + v6seg + "){0,5}:" + v4 + "|(?::" + v6seg + "){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim(); // Pre-compile only the exact regexes because adding a global flag make regexes stateful

          var v46Exact = new RegExp("(?:^" + v4 + "$)|(?:^" + v6 + "$)");
          var v4exact = new RegExp("^" + v4 + "$");
          var v6exact = new RegExp("^" + v6 + "$");
          var ip = function ip(options) {
            return options && options.exact ? v46Exact : new RegExp("(?:" + b(options) + v4 + b(options) + ")|(?:" + b(options) + v6 + b(options) + ")", 'g');
          };
          ip.v4 = function (options) {
            return options && options.exact ? v4exact : new RegExp("" + b(options) + v4 + b(options), 'g');
          };
          ip.v6 = function (options) {
            return options && options.exact ? v6exact : new RegExp("" + b(options) + v6 + b(options), 'g');
          };
          var protocol = "(?:(?:[a-z]+:)?//)";
          var auth = '(?:\\S+(?::\\S*)?@)?';
          var ipv4 = ip.v4().source;
          var ipv6 = ip.v6().source;
          var host = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)";
          var domain = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*";
          var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";
          var port = '(?::\\d{2,5})?';
          var path = '(?:[/?#][^\\s"]*)?';
          var regex = "(?:" + protocol + "|www\\.)" + auth + "(?:localhost|" + ipv4 + "|" + ipv6 + "|" + host + domain + tld + ")" + port + path;
          urlReg = new RegExp("(?:^" + regex + "$)", 'i');
          return urlReg;
        };

        /* eslint max-len:0 */

        var pattern$2 = {
          // http://emailregex.com/
          email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
          // url: new RegExp(
          //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
          //   'i',
          // ),
          hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
        };
        var types = {
          integer: function integer(value) {
            return types.number(value) && parseInt(value, 10) === value;
          },
          "float": function _float(value) {
            return types.number(value) && !types.integer(value);
          },
          array: function array(value) {
            return Array.isArray(value);
          },
          regexp: function regexp(value) {
            if (value instanceof RegExp) {
              return true;
            }
            try {
              return !!new RegExp(value);
            } catch (e) {
              return false;
            }
          },
          date: function date(value) {
            return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear === 'function' && !isNaN(value.getTime());
          },
          number: function number(value) {
            if (isNaN(value)) {
              return false;
            }
            return typeof value === 'number';
          },
          object: function object(value) {
            return _typeof2(value) === 'object' && !types.array(value);
          },
          method: function method(value) {
            return typeof value === 'function';
          },
          email: function email(value) {
            return typeof value === 'string' && value.length <= 320 && !!value.match(pattern$2.email);
          },
          url: function url(value) {
            return typeof value === 'string' && value.length <= 2048 && !!value.match(getUrlRegex());
          },
          hex: function hex(value) {
            return typeof value === 'string' && !!value.match(pattern$2.hex);
          }
        };
        var type$1 = function type(rule, value, source, errors, options) {
          if (rule.required && value === undefined) {
            required$1(rule, value, source, errors, options);
            return;
          }
          var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
          var ruleType = rule.type;
          if (custom.indexOf(ruleType) > -1) {
            if (!types[ruleType](value)) {
              errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
            } // straight typeof check
          } else if (ruleType && _typeof2(value) !== rule.type) {
            errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
          }
        };
        var range = function range(rule, value, source, errors, options) {
          var len = typeof rule.len === 'number';
          var min = typeof rule.min === 'number';
          var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

          var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
          var val = value;
          var key = null;
          var num = typeof value === 'number';
          var str = typeof value === 'string';
          var arr = Array.isArray(value);
          if (num) {
            key = 'number';
          } else if (str) {
            key = 'string';
          } else if (arr) {
            key = 'array';
          } // if the value is not of a supported type for range validation
          // the validation rule rule should use the
          // type property to also test for a particular type

          if (!key) {
            return false;
          }
          if (arr) {
            val = value.length;
          }
          if (str) {
            // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
            val = value.replace(spRegexp, '_').length;
          }
          if (len) {
            if (val !== rule.len) {
              errors.push(format(options.messages[key].len, rule.fullField, rule.len));
            }
          } else if (min && !max && val < rule.min) {
            errors.push(format(options.messages[key].min, rule.fullField, rule.min));
          } else if (max && !min && val > rule.max) {
            errors.push(format(options.messages[key].max, rule.fullField, rule.max));
          } else if (min && max && (val < rule.min || val > rule.max)) {
            errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
          }
        };
        var ENUM$1 = 'enum';
        var enumerable$1 = function enumerable(rule, value, source, errors, options) {
          rule[ENUM$1] = Array.isArray(rule[ENUM$1]) ? rule[ENUM$1] : [];
          if (rule[ENUM$1].indexOf(value) === -1) {
            errors.push(format(options.messages[ENUM$1], rule.fullField, rule[ENUM$1].join(', ')));
          }
        };
        var pattern$1 = function pattern(rule, value, source, errors, options) {
          if (rule.pattern) {
            if (rule.pattern instanceof RegExp) {
              // if a RegExp instance is passed, reset `lastIndex` in case its `global`
              // flag is accidentally set to `true`, which in a validation scenario
              // is not necessary and the result might be misleading
              rule.pattern.lastIndex = 0;
              if (!rule.pattern.test(value)) {
                errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
              }
            } else if (typeof rule.pattern === 'string') {
              var _pattern = new RegExp(rule.pattern);
              if (!_pattern.test(value)) {
                errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
              }
            }
          }
        };
        var rules = {
          required: required$1,
          whitespace: whitespace,
          type: type$1,
          range: range,
          "enum": enumerable$1,
          pattern: pattern$1
        };
        var string = function string(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, 'string') && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, 'string');
            if (!isEmptyValue(value, 'string')) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
              rules.pattern(rule, value, source, errors, options);
              if (rule.whitespace === true) {
                rules.whitespace(rule, value, source, errors, options);
              }
            }
          }
          callback(errors);
        };
        var method = function method(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var number = function number(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (value === '') {
              value = undefined;
            }
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var _boolean = function _boolean(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var regexp = function regexp(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value)) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var integer = function integer(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var floatFn = function floatFn(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var array = function array(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if ((value === undefined || value === null) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, 'array');
            if (value !== undefined && value !== null) {
              rules.type(rule, value, source, errors, options);
              rules.range(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var object = function object(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var ENUM = 'enum';
        var enumerable = function enumerable(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (value !== undefined) {
              rules[ENUM](rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var pattern = function pattern(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, 'string') && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value, 'string')) {
              rules.pattern(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var date = function date(rule, value, callback, source, options) {
          // console.log('integer rule called %j', rule);
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field); // console.log('validate on %s value', value);

          if (validate) {
            if (isEmptyValue(value, 'date') && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
            if (!isEmptyValue(value, 'date')) {
              var dateObject;
              if (value instanceof Date) {
                dateObject = value;
              } else {
                dateObject = new Date(value);
              }
              rules.type(rule, dateObject, source, errors, options);
              if (dateObject) {
                rules.range(rule, dateObject.getTime(), source, errors, options);
              }
            }
          }
          callback(errors);
        };
        var required = function required(rule, value, callback, source, options) {
          var errors = [];
          var type = Array.isArray(value) ? 'array' : _typeof2(value);
          rules.required(rule, value, source, errors, options, type);
          callback(errors);
        };
        var type = function type(rule, value, callback, source, options) {
          var ruleType = rule.type;
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value, ruleType) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options, ruleType);
            if (!isEmptyValue(value, ruleType)) {
              rules.type(rule, value, source, errors, options);
            }
          }
          callback(errors);
        };
        var any = function any(rule, value, callback, source, options) {
          var errors = [];
          var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);
          if (validate) {
            if (isEmptyValue(value) && !rule.required) {
              return callback();
            }
            rules.required(rule, value, source, errors, options);
          }
          callback(errors);
        };
        var validators = {
          string: string,
          method: method,
          number: number,
          "boolean": _boolean,
          regexp: regexp,
          integer: integer,
          "float": floatFn,
          array: array,
          object: object,
          "enum": enumerable,
          pattern: pattern,
          date: date,
          url: type,
          hex: type,
          email: type,
          required: required,
          any: any
        };
        function newMessages() {
          return {
            "default": 'Validation error on field %s',
            required: '%s is required',
            "enum": '%s must be one of %s',
            whitespace: '%s cannot be empty',
            date: {
              format: '%s date %s is invalid for format %s',
              parse: '%s date could not be parsed, %s is invalid ',
              invalid: '%s date %s is invalid'
            },
            types: {
              string: '%s is not a %s',
              method: '%s is not a %s (function)',
              array: '%s is not an %s',
              object: '%s is not an %s',
              number: '%s is not a %s',
              date: '%s is not a %s',
              "boolean": '%s is not a %s',
              integer: '%s is not an %s',
              "float": '%s is not a %s',
              regexp: '%s is not a valid %s',
              email: '%s is not a valid %s',
              url: '%s is not a valid %s',
              hex: '%s is not a valid %s'
            },
            string: {
              len: '%s must be exactly %s characters',
              min: '%s must be at least %s characters',
              max: '%s cannot be longer than %s characters',
              range: '%s must be between %s and %s characters'
            },
            number: {
              len: '%s must equal %s',
              min: '%s cannot be less than %s',
              max: '%s cannot be greater than %s',
              range: '%s must be between %s and %s'
            },
            array: {
              len: '%s must be exactly %s in length',
              min: '%s cannot be less than %s in length',
              max: '%s cannot be greater than %s in length',
              range: '%s must be between %s and %s in length'
            },
            pattern: {
              mismatch: '%s value %s does not match pattern %s'
            },
            clone: function clone() {
              var cloned = JSON.parse(JSON.stringify(this));
              cloned.clone = this.clone;
              return cloned;
            }
          };
        }
        var messages = newMessages();

        /**
         *  Encapsulates a validation schema.
         *
         *  @param descriptor An object declaring validation rules
         *  for this schema.
         */

        var Schema = /*#__PURE__*/function () {
          // ========================= Static =========================
          // ======================== Instance ========================
          function Schema(descriptor) {
            this.rules = null;
            this._messages = messages;
            this.define(descriptor);
          }
          var _proto = Schema.prototype;
          _proto.define = function define(rules) {
            var _this = this;
            if (!rules) {
              throw new Error('Cannot configure a schema with no rules');
            }
            if (_typeof2(rules) !== 'object' || Array.isArray(rules)) {
              throw new Error('Rules must be an object');
            }
            this.rules = {};
            Object.keys(rules).forEach(function (name) {
              var item = rules[name];
              _this.rules[name] = Array.isArray(item) ? item : [item];
            });
          };
          _proto.messages = function messages(_messages) {
            if (_messages) {
              this._messages = deepMerge(newMessages(), _messages);
            }
            return this._messages;
          };
          _proto.validate = function validate(source_, o, oc) {
            var _this2 = this;
            if (o === void 0) {
              o = {};
            }
            if (oc === void 0) {
              oc = function oc() {};
            }
            var source = source_;
            var options = o;
            var callback = oc;
            if (typeof options === 'function') {
              callback = options;
              options = {};
            }
            if (!this.rules || Object.keys(this.rules).length === 0) {
              if (callback) {
                callback(null, source);
              }
              return Promise.resolve(source);
            }
            function complete(results) {
              var errors = [];
              var fields = {};
              function add(e) {
                if (Array.isArray(e)) {
                  var _errors;
                  errors = (_errors = errors).concat.apply(_errors, e);
                } else {
                  errors.push(e);
                }
              }
              for (var i = 0; i < results.length; i++) {
                add(results[i]);
              }
              if (!errors.length) {
                callback(null, source);
              } else {
                fields = convertFieldsError(errors);
                callback(errors, fields);
              }
            }
            if (options.messages) {
              var messages$1 = this.messages();
              if (messages$1 === messages) {
                messages$1 = newMessages();
              }
              deepMerge(messages$1, options.messages);
              options.messages = messages$1;
            } else {
              options.messages = this.messages();
            }
            var series = {};
            var keys = options.keys || Object.keys(this.rules);
            keys.forEach(function (z) {
              var arr = _this2.rules[z];
              var value = source[z];
              arr.forEach(function (r) {
                var rule = r;
                if (typeof rule.transform === 'function') {
                  if (source === source_) {
                    source = _extends({}, source);
                  }
                  value = source[z] = rule.transform(value);
                }
                if (typeof rule === 'function') {
                  rule = {
                    validator: rule
                  };
                } else {
                  rule = _extends({}, rule);
                } // Fill validator. Skip if nothing need to validate

                rule.validator = _this2.getValidationMethod(rule);
                if (!rule.validator) {
                  return;
                }
                rule.field = z;
                rule.fullField = rule.fullField || z;
                rule.type = _this2.getType(rule);
                series[z] = series[z] || [];
                series[z].push({
                  rule: rule,
                  value: value,
                  source: source,
                  field: z
                });
              });
            });
            var errorFields = {};
            return asyncMap(series, options, function (data, doIt) {
              var rule = data.rule;
              var deep = (rule.type === 'object' || rule.type === 'array') && (_typeof2(rule.fields) === 'object' || _typeof2(rule.defaultField) === 'object');
              deep = deep && (rule.required || !rule.required && data.value);
              rule.field = data.field;
              function addFullField(key, schema) {
                return _extends({}, schema, {
                  fullField: rule.fullField + "." + key,
                  fullFields: rule.fullFields ? [].concat(rule.fullFields, [key]) : [key]
                });
              }
              function cb(e) {
                if (e === void 0) {
                  e = [];
                }
                var errorList = Array.isArray(e) ? e : [e];
                if (!options.suppressWarning && errorList.length) {
                  Schema.warning('async-validator:', errorList);
                }
                if (errorList.length && rule.message !== undefined) {
                  errorList = [].concat(rule.message);
                } // Fill error info

                var filledErrors = errorList.map(complementError(rule, source));
                if (options.first && filledErrors.length) {
                  errorFields[rule.field] = 1;
                  return doIt(filledErrors);
                }
                if (!deep) {
                  doIt(filledErrors);
                } else {
                  // if rule is required but the target object
                  // does not exist fail at the rule level and don't
                  // go deeper
                  if (rule.required && !data.value) {
                    if (rule.message !== undefined) {
                      filledErrors = [].concat(rule.message).map(complementError(rule, source));
                    } else if (options.error) {
                      filledErrors = [options.error(rule, format(options.messages.required, rule.field))];
                    }
                    return doIt(filledErrors);
                  }
                  var fieldsSchema = {};
                  if (rule.defaultField) {
                    Object.keys(data.value).map(function (key) {
                      fieldsSchema[key] = rule.defaultField;
                    });
                  }
                  fieldsSchema = _extends({}, fieldsSchema, data.rule.fields);
                  var paredFieldsSchema = {};
                  Object.keys(fieldsSchema).forEach(function (field) {
                    var fieldSchema = fieldsSchema[field];
                    var fieldSchemaList = Array.isArray(fieldSchema) ? fieldSchema : [fieldSchema];
                    paredFieldsSchema[field] = fieldSchemaList.map(addFullField.bind(null, field));
                  });
                  var schema = new Schema(paredFieldsSchema);
                  schema.messages(options.messages);
                  if (data.rule.options) {
                    data.rule.options.messages = options.messages;
                    data.rule.options.error = options.error;
                  }
                  schema.validate(data.value, data.rule.options || options, function (errs) {
                    var finalErrors = [];
                    if (filledErrors && filledErrors.length) {
                      finalErrors.push.apply(finalErrors, filledErrors);
                    }
                    if (errs && errs.length) {
                      finalErrors.push.apply(finalErrors, errs);
                    }
                    doIt(finalErrors.length ? finalErrors : null);
                  });
                }
              }
              var res;
              if (rule.asyncValidator) {
                res = rule.asyncValidator(rule, data.value, cb, data.source, options);
              } else if (rule.validator) {
                try {
                  res = rule.validator(rule, data.value, cb, data.source, options);
                } catch (error) {
                  console.error == null ? void 0 : console.error(error); // rethrow to report error

                  if (!options.suppressValidatorError) {
                    setTimeout(function () {
                      throw error;
                    }, 0);
                  }
                  cb(error.message);
                }
                if (res === true) {
                  cb();
                } else if (res === false) {
                  cb(typeof rule.message === 'function' ? rule.message(rule.fullField || rule.field) : rule.message || (rule.fullField || rule.field) + " fails");
                } else if (res instanceof Array) {
                  cb(res);
                } else if (res instanceof Error) {
                  cb(res.message);
                }
              }
              if (res && res.then) {
                res.then(function () {
                  return cb();
                }, function (e) {
                  return cb(e);
                });
              }
            }, function (results) {
              complete(results);
            }, source);
          };
          _proto.getType = function getType(rule) {
            if (rule.type === undefined && rule.pattern instanceof RegExp) {
              rule.type = 'pattern';
            }
            if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
              throw new Error(format('Unknown rule type %s', rule.type));
            }
            return rule.type || 'string';
          };
          _proto.getValidationMethod = function getValidationMethod(rule) {
            if (typeof rule.validator === 'function') {
              return rule.validator;
            }
            var keys = Object.keys(rule);
            var messageIndex = keys.indexOf('message');
            if (messageIndex !== -1) {
              keys.splice(messageIndex, 1);
            }
            if (keys.length === 1 && keys[0] === 'required') {
              return validators.required;
            }
            return validators[this.getType(rule)] || undefined;
          };
          return Schema;
        }();
        Schema.register = function register(type, validator) {
          if (typeof validator !== 'function') {
            throw new Error('Cannot register a validator by type, validator is not a function');
          }
          validators[type] = validator;
        };
        Schema.warning = warning$3;
        Schema.messages = messages;
        Schema.validators = validators;
        var typeTemplate$1 = "'${name}' is not a valid ${type}";
        var defaultValidateMessages = {
          "default": "Validation error on field '${name}'",
          required: "'${name}' is required",
          "enum": "'${name}' must be one of [${enum}]",
          whitespace: "'${name}' cannot be empty",
          date: {
            format: "'${name}' is invalid for format date",
            parse: "'${name}' could not be parsed as date",
            invalid: "'${name}' is invalid date"
          },
          types: {
            string: typeTemplate$1,
            method: typeTemplate$1,
            array: typeTemplate$1,
            object: typeTemplate$1,
            number: typeTemplate$1,
            date: typeTemplate$1,
            "boolean": typeTemplate$1,
            integer: typeTemplate$1,
            "float": typeTemplate$1,
            regexp: typeTemplate$1,
            email: typeTemplate$1,
            url: typeTemplate$1,
            hex: typeTemplate$1
          },
          string: {
            len: "'${name}' must be exactly ${len} characters",
            min: "'${name}' must be at least ${min} characters",
            max: "'${name}' cannot be longer than ${max} characters",
            range: "'${name}' must be between ${min} and ${max} characters"
          },
          number: {
            len: "'${name}' must equal ${len}",
            min: "'${name}' cannot be less than ${min}",
            max: "'${name}' cannot be greater than ${max}",
            range: "'${name}' must be between ${min} and ${max}"
          },
          array: {
            len: "'${name}' must be exactly ${len} in length",
            min: "'${name}' cannot be less than ${min} in length",
            max: "'${name}' cannot be greater than ${max} in length",
            range: "'${name}' must be between ${min} and ${max} in length"
          },
          pattern: {
            mismatch: "'${name}' does not match pattern ${pattern}"
          }
        };
        function get(entity, path) {
          var current = entity;
          for (var i = 0; i < path.length; i += 1) {
            if (current === null || current === undefined) {
              return undefined;
            }
            current = current[path[i]];
          }
          return current;
        }
        function _toArray(arr) {
          return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();
        }
        function internalSet(entity, paths, value, removeIfUndefined) {
          if (!paths.length) {
            return value;
          }
          var _paths = _toArray(paths),
            path = _paths[0],
            restPath = _paths.slice(1);
          var clone;
          if (!entity && typeof path === 'number') {
            clone = [];
          } else if (Array.isArray(entity)) {
            clone = _toConsumableArray(entity);
          } else {
            clone = _objectSpread2({}, entity);
          } // Delete prop if `removeIfUndefined` and value is undefined

          if (removeIfUndefined && value === undefined && restPath.length === 1) {
            delete clone[path][restPath[0]];
          } else {
            clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
          }
          return clone;
        }
        function set(entity, paths, value) {
          var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          // Do nothing if `removeIfUndefined` and parent object not exist
          if (paths.length && removeIfUndefined && value === undefined && !get(entity, paths.slice(0, -1))) {
            return entity;
          }
          return internalSet(entity, paths, value, removeIfUndefined);
        }
        function cloneDeep(val) {
          if (Array.isArray(val)) {
            return cloneArrayDeep(val);
          } else if (_typeof(val) === 'object' && val !== null) {
            return cloneObjectDeep(val);
          }
          return val;
        }
        function cloneObjectDeep(val) {
          if (Object.getPrototypeOf(val) === Object.prototype) {
            var res = {};
            for (var key in val) {
              res[key] = cloneDeep(val[key]);
            }
            return res;
          }
          return val;
        }
        function cloneArrayDeep(val) {
          return val.map(function (item) {
            return cloneDeep(item);
          });
        }

        /**
         * Convert name to internal supported format.
         * This function should keep since we still thinking if need support like `a.b.c` format.
         * 'a' => ['a']
         * 123 => [123]
         * ['a', 123] => ['a', 123]
         */
        function getNamePath(path) {
          return toArray(path);
        }
        function getValue$1(store, namePath) {
          var value = get(store, namePath);
          return value;
        }
        function setValue(store, namePath, value) {
          var removeIfUndefined = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
          var newStore = set(store, namePath, value, removeIfUndefined);
          return newStore;
        }
        function cloneByNamePathList(store, namePathList) {
          var newStore = {};
          namePathList.forEach(function (namePath) {
            var value = getValue$1(store, namePath);
            newStore = setValue(newStore, namePath, value);
          });
          return newStore;
        }
        function containsNamePath(namePathList, namePath) {
          return namePathList && namePathList.some(function (path) {
            return matchNamePath(path, namePath);
          });
        }
        function isObject(obj) {
          return _typeof(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
        }
        /**
         * Copy values into store and return a new values object
         * ({ a: 1, b: { c: 2 } }, { a: 4, b: { d: 5 } }) => { a: 4, b: { c: 2, d: 5 } }
         */
        function internalSetValues(store, values) {
          var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread2({}, store);
          if (!values) {
            return newStore;
          }
          Object.keys(values).forEach(function (key) {
            var prevValue = newStore[key];
            var value = values[key];
            // If both are object (but target is not array), we use recursion to set deep value
            var recursive = isObject(prevValue) && isObject(value);
            newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : cloneDeep(value); // Clone deep for arrays
          });

          return newStore;
        }
        function setValues(store) {
          for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            restValues[_key - 1] = arguments[_key];
          }
          return restValues.reduce(function (current, newStore) {
            return internalSetValues(current, newStore);
          }, store);
        }
        function matchNamePath(namePath, changedNamePath) {
          if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
            return false;
          }
          return namePath.every(function (nameUnit, i) {
            return changedNamePath[i] === nameUnit;
          });
        }
        function isSimilar(source, target) {
          if (source === target) {
            return true;
          }
          if (!source && target || source && !target) {
            return false;
          }
          if (!source || !target || _typeof(source) !== 'object' || _typeof(target) !== 'object') {
            return false;
          }
          var sourceKeys = Object.keys(source);
          var targetKeys = Object.keys(target);
          var keys = new Set([].concat(sourceKeys, targetKeys));
          return _toConsumableArray(keys).every(function (key) {
            var sourceValue = source[key];
            var targetValue = target[key];
            if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
              return true;
            }
            return sourceValue === targetValue;
          });
        }
        function defaultGetValueFromEvent(valuePropName) {
          var event = arguments.length <= 1 ? undefined : arguments[1];
          if (event && event.target && _typeof(event.target) === 'object' && valuePropName in event.target) {
            return event.target[valuePropName];
          }
          return event;
        }
        /**
         * Moves an array item from one position in an array to another.
         *
         * Note: This is a pure function so a new array will be returned, instead
         * of altering the array argument.
         *
         * @param array         Array in which to move an item.         (required)
         * @param moveIndex     The index of the item to move.          (required)
         * @param toIndex       The index to move item at moveIndex to. (required)
         */
        function move(array, moveIndex, toIndex) {
          var length = array.length;
          if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
            return array;
          }
          var item = array[moveIndex];
          var diff = moveIndex - toIndex;
          if (diff > 0) {
            // move left
            return [].concat(_toConsumableArray(array.slice(0, toIndex)), [item], _toConsumableArray(array.slice(toIndex, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, length)));
          }
          if (diff < 0) {
            // move right
            return [].concat(_toConsumableArray(array.slice(0, moveIndex)), _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)), [item], _toConsumableArray(array.slice(toIndex + 1, length)));
          }
          return array;
        }

        // Remove incorrect original ts define
        var AsyncValidator = Schema;
        /**
         * Replace with template.
         *   `I'm ${name}` + { name: 'bamboo' } = I'm bamboo
         */
        function replaceMessage(template, kv) {
          return template.replace(/\$\{\w+\}/g, function (str) {
            var key = str.slice(2, -1);
            return kv[key];
          });
        }
        var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
        function validateRule(_x, _x2, _x3, _x4, _x5) {
          return _validateRule.apply(this, arguments);
        }
        /**
         * We use `async-validator` to validate the value.
         * But only check one value in a time to avoid namePath validate issue.
         */
        function _validateRule() {
          _validateRule = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
            var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    cloneRule = _objectSpread2({}, rule); // Bug of `async-validator`
                    // https://github.com/react-component/field-form/issues/316
                    // https://github.com/react-component/field-form/issues/313
                    delete cloneRule.ruleIndex;
                    if (cloneRule.validator) {
                      originValidator = cloneRule.validator;
                      cloneRule.validator = function () {
                        try {
                          return originValidator.apply(void 0, arguments);
                        } catch (error) {
                          console.error(error);
                          return Promise.reject(CODE_LOGIC_ERROR);
                        }
                      };
                    }
                    // We should special handle array validate
                    subRuleField = null;
                    if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
                      subRuleField = cloneRule.defaultField;
                      delete cloneRule.defaultField;
                    }
                    validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
                    messages = setValues({}, defaultValidateMessages, options.validateMessages);
                    validator.messages(messages);
                    result = [];
                    _context2.prev = 9;
                    _context2.next = 12;
                    return Promise.resolve(validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options)));
                  case 12:
                    _context2.next = 17;
                    break;
                  case 14:
                    _context2.prev = 14;
                    _context2.t0 = _context2["catch"](9);
                    if (_context2.t0.errors) {
                      result = _context2.t0.errors.map(function (_ref4, index) {
                        var message = _ref4.message;
                        var mergedMessage = message === CODE_LOGIC_ERROR ? messages["default"] : message;
                        return /*#__PURE__*/react.exports.isValidElement(mergedMessage) ? /*#__PURE__*/
                        // Wrap ReactNode with `key`
                        react.exports.cloneElement(mergedMessage, {
                          key: "error_".concat(index)
                        }) : mergedMessage;
                      });
                    }
                  case 17:
                    if (!(!result.length && subRuleField)) {
                      _context2.next = 22;
                      break;
                    }
                    _context2.next = 20;
                    return Promise.all(value.map(function (subValue, i) {
                      return validateRule("".concat(name, ".").concat(i), subValue, subRuleField, options, messageVariables);
                    }));
                  case 20:
                    subResults = _context2.sent;
                    return _context2.abrupt("return", subResults.reduce(function (prev, errors) {
                      return [].concat(_toConsumableArray(prev), _toConsumableArray(errors));
                    }, []));
                  case 22:
                    // Replace message with variables
                    kv = _objectSpread2(_objectSpread2({}, rule), {}, {
                      name: name,
                      "enum": (rule["enum"] || []).join(', ')
                    }, messageVariables);
                    fillVariableResult = result.map(function (error) {
                      if (typeof error === 'string') {
                        return replaceMessage(error, kv);
                      }
                      return error;
                    });
                    return _context2.abrupt("return", fillVariableResult);
                  case 25:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[9, 14]]);
          }));
          return _validateRule.apply(this, arguments);
        }
        function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
          var name = namePath.join('.');
          // Fill rule with context
          var filledRules = rules.map(function (currentRule, ruleIndex) {
            var originValidatorFunc = currentRule.validator;
            var cloneRule = _objectSpread2(_objectSpread2({}, currentRule), {}, {
              ruleIndex: ruleIndex
            });
            // Replace validator if needed
            if (originValidatorFunc) {
              cloneRule.validator = function (rule, val, callback) {
                var hasPromise = false;
                // Wrap callback only accept when promise not provided
                var wrappedCallback = function wrappedCallback() {
                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }
                  // Wait a tick to make sure return type is a promise
                  Promise.resolve().then(function () {
                    warningOnce(!hasPromise, 'Your validator function has already return a promise. `callback` will be ignored.');
                    if (!hasPromise) {
                      callback.apply(void 0, args);
                    }
                  });
                };
                // Get promise
                var promise = originValidatorFunc(rule, val, wrappedCallback);
                hasPromise = promise && typeof promise.then === 'function' && typeof promise["catch"] === 'function';
                /**
                 * 1. Use promise as the first priority.
                 * 2. If promise not exist, use callback with warning instead
                 */
                warningOnce(hasPromise, '`callback` is deprecated. Please return a promise instead.');
                if (hasPromise) {
                  promise.then(function () {
                    callback();
                  })["catch"](function (err) {
                    callback(err || ' ');
                  });
                }
              };
            }
            return cloneRule;
          }).sort(function (_ref, _ref2) {
            var w1 = _ref.warningOnly,
              i1 = _ref.ruleIndex;
            var w2 = _ref2.warningOnly,
              i2 = _ref2.ruleIndex;
            if (!!w1 === !!w2) {
              // Let keep origin order
              return i1 - i2;
            }
            if (w1) {
              return 1;
            }
            return -1;
          });
          // Do validate rules
          var summaryPromise;
          if (validateFirst === true) {
            // >>>>> Validate by serialization
            summaryPromise = new Promise( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                var i, rule, errors;
                return _regeneratorRuntime().wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        i = 0;
                      case 1:
                        if (!(i < filledRules.length)) {
                          _context.next = 12;
                          break;
                        }
                        rule = filledRules[i];
                        _context.next = 5;
                        return validateRule(name, value, rule, options, messageVariables);
                      case 5:
                        errors = _context.sent;
                        if (!errors.length) {
                          _context.next = 9;
                          break;
                        }
                        reject([{
                          errors: errors,
                          rule: rule
                        }]);
                        return _context.abrupt("return");
                      case 9:
                        i += 1;
                        _context.next = 1;
                        break;
                      case 12:
                        /* eslint-enable */
                        resolve([]);
                      case 13:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));
              return function (_x6, _x7) {
                return _ref3.apply(this, arguments);
              };
            }());
          } else {
            // >>>>> Validate by parallel
            var rulePromises = filledRules.map(function (rule) {
              return validateRule(name, value, rule, options, messageVariables).then(function (errors) {
                return {
                  errors: errors,
                  rule: rule
                };
              });
            });
            summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(function (errors) {
              // Always change to rejection for Field to catch
              return Promise.reject(errors);
            });
          }
          // Internal catch error to avoid console error log.
          summaryPromise["catch"](function (e) {
            return e;
          });
          return summaryPromise;
        }
        function finishOnAllFailed(_x8) {
          return _finishOnAllFailed.apply(this, arguments);
        }
        function _finishOnAllFailed() {
          _finishOnAllFailed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rulePromises) {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", Promise.all(rulePromises).then(function (errorsList) {
                      var _ref5;
                      var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(errorsList));
                      return errors;
                    }));
                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
          return _finishOnAllFailed.apply(this, arguments);
        }
        function finishOnFirstFailed(_x9) {
          return _finishOnFirstFailed.apply(this, arguments);
        }
        function _finishOnFirstFailed() {
          _finishOnFirstFailed = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(rulePromises) {
            var count;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    count = 0;
                    return _context4.abrupt("return", new Promise(function (resolve) {
                      rulePromises.forEach(function (promise) {
                        promise.then(function (ruleError) {
                          if (ruleError.errors.length) {
                            resolve([ruleError]);
                          }
                          count += 1;
                          if (count === rulePromises.length) {
                            resolve([]);
                          }
                        });
                      });
                    }));
                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
          return _finishOnFirstFailed.apply(this, arguments);
        }
        var _jsxFileName$b = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-field-form@1.27.3_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-field-form\\es\\Field.js";
        var _excluded$5 = ["name"];
        var EMPTY_ERRORS = [];
        function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
          if (typeof shouldUpdate === 'function') {
            return shouldUpdate(prev, next, 'source' in info ? {
              source: info.source
            } : {});
          }
          return prevValue !== nextValue;
        }
        // We use Class instead of Hooks here since it will cost much code by using Hooks.
        var Field = /*#__PURE__*/function (_React$Component) {
          _inherits(Field, _React$Component);
          var _super = _createSuper(Field);
          /**
           * Follow state should not management in State since it will async update by React.
           * This makes first render of form can not get correct state value.
           */

          /**
           * Mark when touched & validated. Currently only used for `dependencies`.
           * Note that we do not think field with `initialValue` is dirty
           * but this will be by `isFieldDirty` func.
           */

          // ============================== Subscriptions ==============================
          function Field(props) {
            var _this;
            _classCallCheck(this, Field);
            _this = _super.call(this, props);
            // Register on init
            _this.state = {
              resetCount: 0
            };
            _this.cancelRegisterFunc = null;
            _this.mounted = false;
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.prevValidating = void 0;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.cancelRegister = function () {
              var _this$props = _this.props,
                preserve = _this$props.preserve,
                isListField = _this$props.isListField,
                name = _this$props.name;
              if (_this.cancelRegisterFunc) {
                _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
              }
              _this.cancelRegisterFunc = null;
            };
            _this.getNamePath = function () {
              var _this$props2 = _this.props,
                name = _this$props2.name,
                fieldContext = _this$props2.fieldContext;
              var _fieldContext$prefixN = fieldContext.prefixName,
                prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
              return name !== undefined ? [].concat(_toConsumableArray(prefixName), _toConsumableArray(name)) : [];
            };
            _this.getRules = function () {
              var _this$props3 = _this.props,
                _this$props3$rules = _this$props3.rules,
                rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
                fieldContext = _this$props3.fieldContext;
              return rules.map(function (rule) {
                if (typeof rule === 'function') {
                  return rule(fieldContext);
                }
                return rule;
              });
            };
            _this.refresh = function () {
              if (!_this.mounted) return;
              /**
               * Clean up current node.
               */
              _this.setState(function (_ref) {
                var resetCount = _ref.resetCount;
                return {
                  resetCount: resetCount + 1
                };
              });
            };
            _this.triggerMetaEvent = function (destroy) {
              var onMetaChange = _this.props.onMetaChange;
              onMetaChange === null || onMetaChange === void 0 ? void 0 : onMetaChange(_objectSpread2(_objectSpread2({}, _this.getMeta()), {}, {
                destroy: destroy
              }));
            };
            _this.onStoreChange = function (prevStore, namePathList, info) {
              var _this$props4 = _this.props,
                shouldUpdate = _this$props4.shouldUpdate,
                _this$props4$dependen = _this$props4.dependencies,
                dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
                onReset = _this$props4.onReset;
              var store = info.store;
              var namePath = _this.getNamePath();
              var prevValue = _this.getValue(prevStore);
              var curValue = _this.getValue(store);
              var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
              // `setFieldsValue` is a quick access to update related status
              if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
                _this.touched = true;
                _this.dirty = true;
                _this.validatePromise = null;
                _this.errors = EMPTY_ERRORS;
                _this.warnings = EMPTY_ERRORS;
                _this.triggerMetaEvent();
              }
              switch (info.type) {
                case 'reset':
                  if (!namePathList || namePathMatch) {
                    // Clean up state
                    _this.touched = false;
                    _this.dirty = false;
                    _this.validatePromise = null;
                    _this.errors = EMPTY_ERRORS;
                    _this.warnings = EMPTY_ERRORS;
                    _this.triggerMetaEvent();
                    onReset === null || onReset === void 0 ? void 0 : onReset();
                    _this.refresh();
                    return;
                  }
                  break;
                /**
                 * In case field with `preserve = false` nest deps like:
                 * - A = 1 => show B
                 * - B = 1 => show C
                 * - Reset A, need clean B, C
                 */
                case 'remove':
                  {
                    if (shouldUpdate) {
                      _this.reRender();
                      return;
                    }
                    break;
                  }
                case 'setField':
                  {
                    if (namePathMatch) {
                      var data = info.data;
                      if ('touched' in data) {
                        _this.touched = data.touched;
                      }
                      if ('validating' in data && !('originRCField' in data)) {
                        _this.validatePromise = data.validating ? Promise.resolve([]) : null;
                      }
                      if ('errors' in data) {
                        _this.errors = data.errors || EMPTY_ERRORS;
                      }
                      if ('warnings' in data) {
                        _this.warnings = data.warnings || EMPTY_ERRORS;
                      }
                      _this.dirty = true;
                      _this.triggerMetaEvent();
                      _this.reRender();
                      return;
                    }
                    // Handle update by `setField` with `shouldUpdate`
                    if (shouldUpdate && !namePath.length && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
                      _this.reRender();
                      return;
                    }
                    break;
                  }
                case 'dependenciesUpdate':
                  {
                    /**
                     * Trigger when marked `dependencies` updated. Related fields will all update
                     */
                    var dependencyList = dependencies.map(getNamePath);
                    // No need for `namePathMath` check and `shouldUpdate` check, since `valueUpdate` will be
                    // emitted earlier and they will work there
                    // If set it may cause unnecessary twice rerendering
                    if (dependencyList.some(function (dependency) {
                      return containsNamePath(info.relatedFields, dependency);
                    })) {
                      _this.reRender();
                      return;
                    }
                    break;
                  }
                default:
                  // 1. If `namePath` exists in `namePathList`, means it's related value and should update
                  //      For example <List name="list"><Field name={['list', 0]}></List>
                  //      If `namePathList` is [['list']] (List value update), Field should be updated
                  //      If `namePathList` is [['list', 0]] (Field value update), List shouldn't be updated
                  // 2.
                  //   2.1 If `dependencies` is set, `name` is not set and `shouldUpdate` is not set,
                  //       don't use `shouldUpdate`. `dependencies` is view as a shortcut if `shouldUpdate`
                  //       is not provided
                  //   2.2 If `shouldUpdate` provided, use customize logic to update the field
                  //       else to check if value changed
                  if (namePathMatch || (!dependencies.length || namePath.length || shouldUpdate) && requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)) {
                    _this.reRender();
                    return;
                  }
                  break;
              }
              if (shouldUpdate === true) {
                _this.reRender();
              }
            };
            _this.validateRules = function (options) {
              // We should fixed namePath & value to avoid developer change then by form function
              var namePath = _this.getNamePath();
              var currentValue = _this.getValue();
              // Force change to async to avoid rule OOD under renderProps field
              var rootPromise = Promise.resolve().then(function () {
                if (!_this.mounted) {
                  return [];
                }
                var _this$props5 = _this.props,
                  _this$props5$validate = _this$props5.validateFirst,
                  validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
                  messageVariables = _this$props5.messageVariables;
                var _ref2 = options || {},
                  triggerName = _ref2.triggerName;
                var filteredRules = _this.getRules();
                if (triggerName) {
                  filteredRules = filteredRules.filter(function (rule) {
                    return rule;
                  }).filter(function (rule) {
                    var validateTrigger = rule.validateTrigger;
                    if (!validateTrigger) {
                      return true;
                    }
                    var triggerList = toArray(validateTrigger);
                    return triggerList.includes(triggerName);
                  });
                }
                var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
                promise["catch"](function (e) {
                  return e;
                }).then(function () {
                  var ruleErrors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : EMPTY_ERRORS;
                  if (_this.validatePromise === rootPromise) {
                    var _ruleErrors$forEach;
                    _this.validatePromise = null;
                    // Get errors & warnings
                    var nextErrors = [];
                    var nextWarnings = [];
                    (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref3) {
                      var warningOnly = _ref3.rule.warningOnly,
                        _ref3$errors = _ref3.errors,
                        errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
                      if (warningOnly) {
                        nextWarnings.push.apply(nextWarnings, _toConsumableArray(errors));
                      } else {
                        nextErrors.push.apply(nextErrors, _toConsumableArray(errors));
                      }
                    });
                    _this.errors = nextErrors;
                    _this.warnings = nextWarnings;
                    _this.triggerMetaEvent();
                    _this.reRender();
                  }
                });
                return promise;
              });
              _this.validatePromise = rootPromise;
              _this.dirty = true;
              _this.errors = EMPTY_ERRORS;
              _this.warnings = EMPTY_ERRORS;
              _this.triggerMetaEvent();
              // Force trigger re-render since we need sync renderProps with new meta
              _this.reRender();
              return rootPromise;
            };
            _this.isFieldValidating = function () {
              return !!_this.validatePromise;
            };
            _this.isFieldTouched = function () {
              return _this.touched;
            };
            _this.isFieldDirty = function () {
              // Touched or validate or has initialValue
              if (_this.dirty || _this.props.initialValue !== undefined) {
                return true;
              }
              // Form set initialValue
              var fieldContext = _this.props.fieldContext;
              var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
                getInitialValue = _fieldContext$getInte.getInitialValue;
              if (getInitialValue(_this.getNamePath()) !== undefined) {
                return true;
              }
              return false;
            };
            _this.getErrors = function () {
              return _this.errors;
            };
            _this.getWarnings = function () {
              return _this.warnings;
            };
            _this.isListField = function () {
              return _this.props.isListField;
            };
            _this.isList = function () {
              return _this.props.isList;
            };
            _this.isPreserve = function () {
              return _this.props.preserve;
            };
            _this.getMeta = function () {
              // Make error & validating in cache to save perf
              _this.prevValidating = _this.isFieldValidating();
              var meta = {
                touched: _this.isFieldTouched(),
                validating: _this.prevValidating,
                errors: _this.errors,
                warnings: _this.warnings,
                name: _this.getNamePath()
              };
              return meta;
            };
            _this.getOnlyChild = function (children) {
              // Support render props
              if (typeof children === 'function') {
                var meta = _this.getMeta();
                return _objectSpread2(_objectSpread2({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))), {}, {
                  isFunction: true
                });
              }
              // Filed element only
              var childList = toArray$1(children);
              if (childList.length !== 1 || ! /*#__PURE__*/react.exports.isValidElement(childList[0])) {
                return {
                  child: childList,
                  isFunction: false
                };
              }
              return {
                child: childList[0],
                isFunction: false
              };
            };
            _this.getValue = function (store) {
              var getFieldsValue = _this.props.fieldContext.getFieldsValue;
              var namePath = _this.getNamePath();
              return getValue$1(store || getFieldsValue(true), namePath);
            };
            _this.getControlled = function () {
              var childProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
              var _this$props6 = _this.props,
                trigger = _this$props6.trigger,
                validateTrigger = _this$props6.validateTrigger,
                getValueFromEvent = _this$props6.getValueFromEvent,
                normalize = _this$props6.normalize,
                valuePropName = _this$props6.valuePropName,
                getValueProps = _this$props6.getValueProps,
                fieldContext = _this$props6.fieldContext;
              var mergedValidateTrigger = validateTrigger !== undefined ? validateTrigger : fieldContext.validateTrigger;
              var namePath = _this.getNamePath();
              var getInternalHooks = fieldContext.getInternalHooks,
                getFieldsValue = fieldContext.getFieldsValue;
              var _getInternalHooks = getInternalHooks(HOOK_MARK),
                dispatch = _getInternalHooks.dispatch;
              var value = _this.getValue();
              var mergedGetValueProps = getValueProps || function (val) {
                return _defineProperty({}, valuePropName, val);
              };
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              var originTriggerFunc = childProps[trigger];
              var control = _objectSpread2(_objectSpread2({}, childProps), mergedGetValueProps(value));
              // Add trigger
              control[trigger] = function () {
                // Mark as touched
                _this.touched = true;
                _this.dirty = true;
                _this.triggerMetaEvent();
                var newValue;
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }
                if (getValueFromEvent) {
                  newValue = getValueFromEvent.apply(void 0, args);
                } else {
                  newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
                }
                if (normalize) {
                  newValue = normalize(newValue, value, getFieldsValue(true));
                }
                dispatch({
                  type: 'updateValue',
                  namePath: namePath,
                  value: newValue
                });
                if (originTriggerFunc) {
                  originTriggerFunc.apply(void 0, args);
                }
              };
              // Add validateTrigger
              var validateTriggerList = toArray(mergedValidateTrigger || []);
              validateTriggerList.forEach(function (triggerName) {
                // Wrap additional function of component, so that we can get latest value from store
                var originTrigger = control[triggerName];
                control[triggerName] = function () {
                  if (originTrigger) {
                    originTrigger.apply(void 0, arguments);
                  }
                  // Always use latest rules
                  var rules = _this.props.rules;
                  if (rules && rules.length) {
                    // We dispatch validate to root,
                    // since it will update related data with other field with same name
                    dispatch({
                      type: 'validateField',
                      namePath: namePath,
                      triggerName: triggerName
                    });
                  }
                };
              });
              return control;
            };
            if (props.fieldContext) {
              var getInternalHooks = props.fieldContext.getInternalHooks;
              var _getInternalHooks2 = getInternalHooks(HOOK_MARK),
                initEntityValue = _getInternalHooks2.initEntityValue;
              initEntityValue(_assertThisInitialized(_this));
            }
            return _this;
          }
          _createClass(Field, [{
            key: "componentDidMount",
            value: function componentDidMount() {
              var _this$props7 = this.props,
                shouldUpdate = _this$props7.shouldUpdate,
                fieldContext = _this$props7.fieldContext;
              this.mounted = true;
              // Register on init
              if (fieldContext) {
                var getInternalHooks = fieldContext.getInternalHooks;
                var _getInternalHooks3 = getInternalHooks(HOOK_MARK),
                  registerField = _getInternalHooks3.registerField;
                this.cancelRegisterFunc = registerField(this);
              }
              // One more render for component in case fields not ready
              if (shouldUpdate === true) {
                this.reRender();
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function componentWillUnmount() {
              this.cancelRegister();
              this.triggerMetaEvent(true);
              this.mounted = false;
            }
          }, {
            key: "reRender",
            value: function reRender() {
              if (!this.mounted) return;
              this.forceUpdate();
            }
          }, {
            key: "render",
            value: function render() {
              this.state.resetCount;
              var children = this.props.children;
              var _this$getOnlyChild = this.getOnlyChild(children),
                child = _this$getOnlyChild.child,
                isFunction = _this$getOnlyChild.isFunction;
              // Not need to `cloneElement` since user can handle this in render function self
              var returnChildNode;
              if (isFunction) {
                returnChildNode = child;
              } else if ( /*#__PURE__*/react.exports.isValidElement(child)) {
                returnChildNode = /*#__PURE__*/react.exports.cloneElement(child, this.getControlled(child.props));
              } else {
                warningOnce(!child, '`children` of Field is not validate ReactElement.');
                returnChildNode = child;
              }
              return /*#__PURE__*/(
                /*#__PURE__*/
                jsxDEV(Fragment, {
                  children: returnChildNode
                }, void 0, false)
              );
            }
          }]);
          return Field;
        }(react.exports.Component);
        Field.contextType = Context;
        Field.defaultProps = {
          trigger: 'onChange',
          valuePropName: 'value'
        };
        function WrapperField(_ref5) {
          var name = _ref5.name,
            restProps = _objectWithoutProperties(_ref5, _excluded$5);
          var fieldContext = react.exports.useContext(Context);
          var namePath = name !== undefined ? getNamePath(name) : undefined;
          var key = 'keep';
          if (!restProps.isListField) {
            key = "_".concat((namePath || []).join('_'));
          }
          // Warning if it's a directly list field.
          // We can still support multiple level field preserve.
          if (restProps.preserve === false && restProps.isListField && namePath.length <= 1) {
            warningOnce(false, '`preserve` should not apply on Form.List fields.');
          }
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(Field, _objectSpread(_objectSpread({
              name: namePath
            }, restProps), {}, {
              fieldContext: fieldContext
            }), key, false, {
              fileName: _jsxFileName$b,
              lineNumber: 520,
              columnNumber: 23
            }, this)
          );
        }
        var ListContext = /*#__PURE__*/react.exports.createContext(null);
        var _jsxFileName$a = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-field-form@1.27.3_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-field-form\\es\\List.js";
        var List = function List(_ref) {
          var name = _ref.name,
            initialValue = _ref.initialValue,
            _children = _ref.children,
            rules = _ref.rules,
            validateTrigger = _ref.validateTrigger;
          var context = react.exports.useContext(Context);
          var keyRef = react.exports.useRef({
            keys: [],
            id: 0
          });
          var keyManager = keyRef.current;
          var prefixName = react.exports.useMemo(function () {
            var parentPrefixName = getNamePath(context.prefixName) || [];
            return [].concat(_toConsumableArray(parentPrefixName), _toConsumableArray(getNamePath(name)));
          }, [context.prefixName, name]);
          var fieldContext = react.exports.useMemo(function () {
            return _objectSpread2(_objectSpread2({}, context), {}, {
              prefixName: prefixName
            });
          }, [context, prefixName]);
          // List context
          var listContext = react.exports.useMemo(function () {
            return {
              getKey: function getKey(namePath) {
                var len = prefixName.length;
                var pathName = namePath[len];
                return [keyManager.keys[pathName], namePath.slice(len + 1)];
              }
            };
          }, [prefixName]);
          // User should not pass `children` as other type.
          if (typeof _children !== 'function') {
            warningOnce(false, 'Form.List only accepts function as children.');
            return null;
          }
          var shouldUpdate = function shouldUpdate(prevValue, nextValue, _ref2) {
            var source = _ref2.source;
            if (source === 'internal') {
              return false;
            }
            return prevValue !== nextValue;
          };
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(ListContext.Provider, {
              value: listContext,
              children: /*#__PURE__*/jsxDEV(Context.Provider, {
                value: fieldContext,
                children: /*#__PURE__*/jsxDEV(WrapperField, {
                  name: [],
                  shouldUpdate: shouldUpdate,
                  rules: rules,
                  validateTrigger: validateTrigger,
                  initialValue: initialValue,
                  isList: true,
                  children: function children(_ref3, meta) {
                    var _ref3$value = _ref3.value,
                      value = _ref3$value === void 0 ? [] : _ref3$value,
                      onChange = _ref3.onChange;
                    var getFieldValue = context.getFieldValue;
                    var getNewValue = function getNewValue() {
                      var values = getFieldValue(prefixName || []);
                      return values || [];
                    };
                    /**
                     * Always get latest value in case user update fields by `form` api.
                     */
                    var operations = {
                      add: function add(defaultValue, index) {
                        // Mapping keys
                        var newValue = getNewValue();
                        if (index >= 0 && index <= newValue.length) {
                          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys.slice(0, index)), [keyManager.id], _toConsumableArray(keyManager.keys.slice(index)));
                          onChange([].concat(_toConsumableArray(newValue.slice(0, index)), [defaultValue], _toConsumableArray(newValue.slice(index))));
                        } else {
                          if (index < 0 || index > newValue.length) {
                            warningOnce(false, 'The second parameter of the add function should be a valid positive number.');
                          }
                          keyManager.keys = [].concat(_toConsumableArray(keyManager.keys), [keyManager.id]);
                          onChange([].concat(_toConsumableArray(newValue), [defaultValue]));
                        }
                        keyManager.id += 1;
                      },
                      remove: function remove(index) {
                        var newValue = getNewValue();
                        var indexSet = new Set(Array.isArray(index) ? index : [index]);
                        if (indexSet.size <= 0) {
                          return;
                        }
                        keyManager.keys = keyManager.keys.filter(function (_, keysIndex) {
                          return !indexSet.has(keysIndex);
                        });
                        // Trigger store change
                        onChange(newValue.filter(function (_, valueIndex) {
                          return !indexSet.has(valueIndex);
                        }));
                      },
                      move: function move$1(from, to) {
                        if (from === to) {
                          return;
                        }
                        var newValue = getNewValue();
                        // Do not handle out of range
                        if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
                          return;
                        }
                        keyManager.keys = move(keyManager.keys, from, to);
                        // Trigger store change
                        onChange(move(newValue, from, to));
                      }
                    };
                    var listValue = value || [];
                    if (!Array.isArray(listValue)) {
                      listValue = [];
                      {
                        warningOnce(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
                      }
                    }
                    return _children(listValue.map(function (__, index) {
                      var key = keyManager.keys[index];
                      if (key === undefined) {
                        keyManager.keys[index] = keyManager.id;
                        key = keyManager.keys[index];
                        keyManager.id += 1;
                      }
                      return {
                        name: index,
                        key: key,
                        isListField: true
                      };
                    }), operations, meta);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName$a,
                  lineNumber: 56,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName$a,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName$a,
              lineNumber: 52,
              columnNumber: 23
            }, this)
          );
        };
        function allPromiseFinish(promiseList) {
          var hasError = false;
          var count = promiseList.length;
          var results = [];
          if (!promiseList.length) {
            return Promise.resolve([]);
          }
          return new Promise(function (resolve, reject) {
            promiseList.forEach(function (promise, index) {
              promise["catch"](function (e) {
                hasError = true;
                return e;
              }).then(function (result) {
                count -= 1;
                results[index] = result;
                if (count > 0) {
                  return;
                }
                if (hasError) {
                  reject(results);
                }
                resolve(results);
              });
            });
          });
        }
        var SPLIT = '__@field_split__';
        /**
         * Convert name path into string to fast the fetch speed of Map.
         */
        function normalize(namePath) {
          return namePath.map(function (cell) {
            return "".concat(_typeof(cell), ":").concat(cell);
          })
          // Magic split
          .join(SPLIT);
        }
        /**
         * NameMap like a `Map` but accepts `string[]` as key.
         */
        var NameMap = /*#__PURE__*/function () {
          function NameMap() {
            _classCallCheck(this, NameMap);
            this.kvs = new Map();
          }
          _createClass(NameMap, [{
            key: "set",
            value: function set(key, value) {
              this.kvs.set(normalize(key), value);
            }
          }, {
            key: "get",
            value: function get(key) {
              return this.kvs.get(normalize(key));
            }
          }, {
            key: "update",
            value: function update(key, updater) {
              var origin = this.get(key);
              var next = updater(origin);
              if (!next) {
                this["delete"](key);
              } else {
                this.set(key, next);
              }
            }
          }, {
            key: "delete",
            value: function _delete(key) {
              this.kvs["delete"](normalize(key));
            }
            // Since we only use this in test, let simply realize this
          }, {
            key: "map",
            value: function map(callback) {
              return _toConsumableArray(this.kvs.entries()).map(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];
                var cells = key.split(SPLIT);
                return callback({
                  key: cells.map(function (cell) {
                    var _cell$match = cell.match(/^([^:]*):(.*)$/),
                      _cell$match2 = _slicedToArray(_cell$match, 3),
                      type = _cell$match2[1],
                      unit = _cell$match2[2];
                    return type === 'number' ? Number(unit) : unit;
                  }),
                  value: value
                });
              });
            }
          }, {
            key: "toJSON",
            value: function toJSON() {
              var json = {};
              this.map(function (_ref3) {
                var key = _ref3.key,
                  value = _ref3.value;
                json[key.join('.')] = value;
                return null;
              });
              return json;
            }
          }]);
          return NameMap;
        }();
        var _excluded$4 = ["name", "errors"];
        var FormStore = /*#__PURE__*/_createClass(function FormStore(forceRootUpdate) {
          var _this = this;
          _classCallCheck(this, FormStore);
          this.formHooked = false;
          this.forceRootUpdate = void 0;
          this.subscribable = true;
          this.store = {};
          this.fieldEntities = [];
          this.initialValues = {};
          this.callbacks = {};
          this.validateMessages = null;
          this.preserve = null;
          this.lastValidatePromise = null;
          this.getForm = function () {
            return {
              getFieldValue: _this.getFieldValue,
              getFieldsValue: _this.getFieldsValue,
              getFieldError: _this.getFieldError,
              getFieldWarning: _this.getFieldWarning,
              getFieldsError: _this.getFieldsError,
              isFieldsTouched: _this.isFieldsTouched,
              isFieldTouched: _this.isFieldTouched,
              isFieldValidating: _this.isFieldValidating,
              isFieldsValidating: _this.isFieldsValidating,
              resetFields: _this.resetFields,
              setFields: _this.setFields,
              setFieldValue: _this.setFieldValue,
              setFieldsValue: _this.setFieldsValue,
              validateFields: _this.validateFields,
              submit: _this.submit,
              _init: true,
              getInternalHooks: _this.getInternalHooks
            };
          };
          this.getInternalHooks = function (key) {
            if (key === HOOK_MARK) {
              _this.formHooked = true;
              return {
                dispatch: _this.dispatch,
                initEntityValue: _this.initEntityValue,
                registerField: _this.registerField,
                useSubscribe: _this.useSubscribe,
                setInitialValues: _this.setInitialValues,
                destroyForm: _this.destroyForm,
                setCallbacks: _this.setCallbacks,
                setValidateMessages: _this.setValidateMessages,
                getFields: _this.getFields,
                setPreserve: _this.setPreserve,
                getInitialValue: _this.getInitialValue,
                registerWatch: _this.registerWatch
              };
            }
            warningOnce(false, '`getInternalHooks` is internal usage. Should not call directly.');
            return null;
          };
          this.useSubscribe = function (subscribable) {
            _this.subscribable = subscribable;
          };
          this.prevWithoutPreserves = null;
          this.setInitialValues = function (initialValues, init) {
            _this.initialValues = initialValues || {};
            if (init) {
              var _this$prevWithoutPres;
              var nextStore = setValues({}, initialValues, _this.store);
              // We will take consider prev form unmount fields.
              // When the field is not `preserve`, we need fill this with initialValues instead of store.
              // eslint-disable-next-line array-callback-return
              (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0 ? void 0 : _this$prevWithoutPres.map(function (_ref) {
                var namePath = _ref.key;
                nextStore = setValue(nextStore, namePath, getValue$1(initialValues, namePath));
              });
              _this.prevWithoutPreserves = null;
              _this.updateStore(nextStore);
            }
          };
          this.destroyForm = function () {
            var prevWithoutPreserves = new NameMap();
            _this.getFieldEntities(true).forEach(function (entity) {
              if (!_this.isMergedPreserve(entity.isPreserve())) {
                prevWithoutPreserves.set(entity.getNamePath(), true);
              }
            });
            _this.prevWithoutPreserves = prevWithoutPreserves;
          };
          this.getInitialValue = function (namePath) {
            var initValue = getValue$1(_this.initialValues, namePath);
            // Not cloneDeep when without `namePath`
            return namePath.length ? cloneDeep(initValue) : initValue;
          };
          this.setCallbacks = function (callbacks) {
            _this.callbacks = callbacks;
          };
          this.setValidateMessages = function (validateMessages) {
            _this.validateMessages = validateMessages;
          };
          this.setPreserve = function (preserve) {
            _this.preserve = preserve;
          };
          this.watchList = [];
          this.registerWatch = function (callback) {
            _this.watchList.push(callback);
            return function () {
              _this.watchList = _this.watchList.filter(function (fn) {
                return fn !== callback;
              });
            };
          };
          this.notifyWatch = function () {
            var namePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            // No need to cost perf when nothing need to watch
            if (_this.watchList.length) {
              var values = _this.getFieldsValue();
              _this.watchList.forEach(function (callback) {
                callback(values, namePath);
              });
            }
          };
          this.timeoutId = null;
          this.warningUnhooked = function () {
            if (!_this.timeoutId && typeof window !== 'undefined') {
              _this.timeoutId = setTimeout(function () {
                _this.timeoutId = null;
                if (!_this.formHooked) {
                  warningOnce(false, 'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?');
                }
              });
            }
          };
          this.updateStore = function (nextStore) {
            _this.store = nextStore;
          };
          this.getFieldEntities = function () {
            var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            if (!pure) {
              return _this.fieldEntities;
            }
            return _this.fieldEntities.filter(function (field) {
              return field.getNamePath().length;
            });
          };
          this.getFieldsMap = function () {
            var pure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var cache = new NameMap();
            _this.getFieldEntities(pure).forEach(function (field) {
              var namePath = field.getNamePath();
              cache.set(namePath, field);
            });
            return cache;
          };
          this.getFieldEntitiesForNamePathList = function (nameList) {
            if (!nameList) {
              return _this.getFieldEntities(true);
            }
            var cache = _this.getFieldsMap(true);
            return nameList.map(function (name) {
              var namePath = getNamePath(name);
              return cache.get(namePath) || {
                INVALIDATE_NAME_PATH: getNamePath(name)
              };
            });
          };
          this.getFieldsValue = function (nameList, filterFunc) {
            _this.warningUnhooked();
            if (nameList === true && !filterFunc) {
              return _this.store;
            }
            var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
            var filteredNameList = [];
            fieldEntities.forEach(function (entity) {
              var _entity$isListField;
              var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
              // Ignore when it's a list item and not specific the namePath,
              // since parent field is already take in count
              if (!nameList && ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0 ? void 0 : _entity$isListField.call(entity))) {
                return;
              }
              if (!filterFunc) {
                filteredNameList.push(namePath);
              } else {
                var meta = 'getMeta' in entity ? entity.getMeta() : null;
                if (filterFunc(meta)) {
                  filteredNameList.push(namePath);
                }
              }
            });
            return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
          };
          this.getFieldValue = function (name) {
            _this.warningUnhooked();
            var namePath = getNamePath(name);
            return getValue$1(_this.store, namePath);
          };
          this.getFieldsError = function (nameList) {
            _this.warningUnhooked();
            var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
            return fieldEntities.map(function (entity, index) {
              if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
                return {
                  name: entity.getNamePath(),
                  errors: entity.getErrors(),
                  warnings: entity.getWarnings()
                };
              }
              return {
                name: getNamePath(nameList[index]),
                errors: [],
                warnings: []
              };
            });
          };
          this.getFieldError = function (name) {
            _this.warningUnhooked();
            var namePath = getNamePath(name);
            var fieldError = _this.getFieldsError([namePath])[0];
            return fieldError.errors;
          };
          this.getFieldWarning = function (name) {
            _this.warningUnhooked();
            var namePath = getNamePath(name);
            var fieldError = _this.getFieldsError([namePath])[0];
            return fieldError.warnings;
          };
          this.isFieldsTouched = function () {
            _this.warningUnhooked();
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            var arg0 = args[0],
              arg1 = args[1];
            var namePathList;
            var isAllFieldsTouched = false;
            if (args.length === 0) {
              namePathList = null;
            } else if (args.length === 1) {
              if (Array.isArray(arg0)) {
                namePathList = arg0.map(getNamePath);
                isAllFieldsTouched = false;
              } else {
                namePathList = null;
                isAllFieldsTouched = arg0;
              }
            } else {
              namePathList = arg0.map(getNamePath);
              isAllFieldsTouched = arg1;
            }
            var fieldEntities = _this.getFieldEntities(true);
            var isFieldTouched = function isFieldTouched(field) {
              return field.isFieldTouched();
            };
            // ===== Will get fully compare when not config namePathList =====
            if (!namePathList) {
              return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
            }
            // Generate a nest tree for validate
            var map = new NameMap();
            namePathList.forEach(function (shortNamePath) {
              map.set(shortNamePath, []);
            });
            fieldEntities.forEach(function (field) {
              var fieldNamePath = field.getNamePath();
              // Find matched entity and put into list
              namePathList.forEach(function (shortNamePath) {
                if (shortNamePath.every(function (nameUnit, i) {
                  return fieldNamePath[i] === nameUnit;
                })) {
                  map.update(shortNamePath, function (list) {
                    return [].concat(_toConsumableArray(list), [field]);
                  });
                }
              });
            });
            // Check if NameMap value is touched
            var isNamePathListTouched = function isNamePathListTouched(entities) {
              return entities.some(isFieldTouched);
            };
            var namePathListEntities = map.map(function (_ref2) {
              var value = _ref2.value;
              return value;
            });
            return isAllFieldsTouched ? namePathListEntities.every(isNamePathListTouched) : namePathListEntities.some(isNamePathListTouched);
          };
          this.isFieldTouched = function (name) {
            _this.warningUnhooked();
            return _this.isFieldsTouched([name]);
          };
          this.isFieldsValidating = function (nameList) {
            _this.warningUnhooked();
            var fieldEntities = _this.getFieldEntities();
            if (!nameList) {
              return fieldEntities.some(function (testField) {
                return testField.isFieldValidating();
              });
            }
            var namePathList = nameList.map(getNamePath);
            return fieldEntities.some(function (testField) {
              var fieldNamePath = testField.getNamePath();
              return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
            });
          };
          this.isFieldValidating = function (name) {
            _this.warningUnhooked();
            return _this.isFieldsValidating([name]);
          };
          this.resetWithFieldInitialValue = function () {
            var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            // Create cache
            var cache = new NameMap();
            var fieldEntities = _this.getFieldEntities(true);
            fieldEntities.forEach(function (field) {
              var initialValue = field.props.initialValue;
              var namePath = field.getNamePath();
              // Record only if has `initialValue`
              if (initialValue !== undefined) {
                var records = cache.get(namePath) || new Set();
                records.add({
                  entity: field,
                  value: initialValue
                });
                cache.set(namePath, records);
              }
            });
            // Reset
            var resetWithFields = function resetWithFields(entities) {
              entities.forEach(function (field) {
                var initialValue = field.props.initialValue;
                if (initialValue !== undefined) {
                  var namePath = field.getNamePath();
                  var formInitialValue = _this.getInitialValue(namePath);
                  if (formInitialValue !== undefined) {
                    // Warning if conflict with form initialValues and do not modify value
                    warningOnce(false, "Form already set 'initialValues' with path '".concat(namePath.join('.'), "'. Field can not overwrite it."));
                  } else {
                    var records = cache.get(namePath);
                    if (records && records.size > 1) {
                      // Warning if multiple field set `initialValue`and do not modify value
                      warningOnce(false, "Multiple Field with path '".concat(namePath.join('.'), "' set 'initialValue'. Can not decide which one to pick."));
                    } else if (records) {
                      var originValue = _this.getFieldValue(namePath);
                      // Set `initialValue`
                      if (!info.skipExist || originValue === undefined) {
                        _this.updateStore(setValue(_this.store, namePath, _toConsumableArray(records)[0].value));
                      }
                    }
                  }
                }
              });
            };
            var requiredFieldEntities;
            if (info.entities) {
              requiredFieldEntities = info.entities;
            } else if (info.namePathList) {
              requiredFieldEntities = [];
              info.namePathList.forEach(function (namePath) {
                var records = cache.get(namePath);
                if (records) {
                  var _requiredFieldEntitie;
                  (_requiredFieldEntitie = requiredFieldEntities).push.apply(_requiredFieldEntitie, _toConsumableArray(_toConsumableArray(records).map(function (r) {
                    return r.entity;
                  })));
                }
              });
            } else {
              requiredFieldEntities = fieldEntities;
            }
            resetWithFields(requiredFieldEntities);
          };
          this.resetFields = function (nameList) {
            _this.warningUnhooked();
            var prevStore = _this.store;
            if (!nameList) {
              _this.updateStore(setValues({}, _this.initialValues));
              _this.resetWithFieldInitialValue();
              _this.notifyObservers(prevStore, null, {
                type: 'reset'
              });
              _this.notifyWatch();
              return;
            }
            // Reset by `nameList`
            var namePathList = nameList.map(getNamePath);
            namePathList.forEach(function (namePath) {
              var initialValue = _this.getInitialValue(namePath);
              _this.updateStore(setValue(_this.store, namePath, initialValue));
            });
            _this.resetWithFieldInitialValue({
              namePathList: namePathList
            });
            _this.notifyObservers(prevStore, namePathList, {
              type: 'reset'
            });
            _this.notifyWatch(namePathList);
          };
          this.setFields = function (fields) {
            _this.warningUnhooked();
            var prevStore = _this.store;
            var namePathList = [];
            fields.forEach(function (fieldData) {
              var name = fieldData.name;
              fieldData.errors;
              var data = _objectWithoutProperties(fieldData, _excluded$4);
              var namePath = getNamePath(name);
              namePathList.push(namePath);
              // Value
              if ('value' in data) {
                _this.updateStore(setValue(_this.store, namePath, data.value));
              }
              _this.notifyObservers(prevStore, [namePath], {
                type: 'setField',
                data: fieldData
              });
            });
            _this.notifyWatch(namePathList);
          };
          this.getFields = function () {
            var entities = _this.getFieldEntities(true);
            var fields = entities.map(function (field) {
              var namePath = field.getNamePath();
              var meta = field.getMeta();
              var fieldData = _objectSpread2(_objectSpread2({}, meta), {}, {
                name: namePath,
                value: _this.getFieldValue(namePath)
              });
              Object.defineProperty(fieldData, 'originRCField', {
                value: true
              });
              return fieldData;
            });
            return fields;
          };
          this.initEntityValue = function (entity) {
            var initialValue = entity.props.initialValue;
            if (initialValue !== undefined) {
              var namePath = entity.getNamePath();
              var prevValue = getValue$1(_this.store, namePath);
              if (prevValue === undefined) {
                _this.updateStore(setValue(_this.store, namePath, initialValue));
              }
            }
          };
          this.isMergedPreserve = function (fieldPreserve) {
            var mergedPreserve = fieldPreserve !== undefined ? fieldPreserve : _this.preserve;
            return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
          };
          this.registerField = function (entity) {
            _this.fieldEntities.push(entity);
            var namePath = entity.getNamePath();
            _this.notifyWatch([namePath]);
            // Set initial values
            if (entity.props.initialValue !== undefined) {
              var prevStore = _this.store;
              _this.resetWithFieldInitialValue({
                entities: [entity],
                skipExist: true
              });
              _this.notifyObservers(prevStore, [entity.getNamePath()], {
                type: 'valueUpdate',
                source: 'internal'
              });
            }
            // un-register field callback
            return function (isListField, preserve) {
              var subNamePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
              _this.fieldEntities = _this.fieldEntities.filter(function (item) {
                return item !== entity;
              });
              // Clean up store value if not preserve
              if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
                var defaultValue = isListField ? undefined : _this.getInitialValue(namePath);
                if (namePath.length && _this.getFieldValue(namePath) !== defaultValue && _this.fieldEntities.every(function (field) {
                  return (
                    // Only reset when no namePath exist
                    !matchNamePath(field.getNamePath(), namePath)
                  );
                })) {
                  var _prevStore = _this.store;
                  _this.updateStore(setValue(_prevStore, namePath, defaultValue, true));
                  // Notify that field is unmount
                  _this.notifyObservers(_prevStore, [namePath], {
                    type: 'remove'
                  });
                  // Dependencies update
                  _this.triggerDependenciesUpdate(_prevStore, namePath);
                }
              }
              _this.notifyWatch([namePath]);
            };
          };
          this.dispatch = function (action) {
            switch (action.type) {
              case 'updateValue':
                {
                  var namePath = action.namePath,
                    value = action.value;
                  _this.updateValue(namePath, value);
                  break;
                }
              case 'validateField':
                {
                  var _namePath = action.namePath,
                    triggerName = action.triggerName;
                  _this.validateFields([_namePath], {
                    triggerName: triggerName
                  });
                  break;
                }
              // Currently we don't have other action. Do nothing.
            }
          };

          this.notifyObservers = function (prevStore, namePathList, info) {
            if (_this.subscribable) {
              var mergedInfo = _objectSpread2(_objectSpread2({}, info), {}, {
                store: _this.getFieldsValue(true)
              });
              _this.getFieldEntities().forEach(function (_ref3) {
                var onStoreChange = _ref3.onStoreChange;
                onStoreChange(prevStore, namePathList, mergedInfo);
              });
            } else {
              _this.forceRootUpdate();
            }
          };
          this.triggerDependenciesUpdate = function (prevStore, namePath) {
            var childrenFields = _this.getDependencyChildrenFields(namePath);
            if (childrenFields.length) {
              _this.validateFields(childrenFields);
            }
            _this.notifyObservers(prevStore, childrenFields, {
              type: 'dependenciesUpdate',
              relatedFields: [namePath].concat(_toConsumableArray(childrenFields))
            });
            return childrenFields;
          };
          this.updateValue = function (name, value) {
            var namePath = getNamePath(name);
            var prevStore = _this.store;
            _this.updateStore(setValue(_this.store, namePath, value));
            _this.notifyObservers(prevStore, [namePath], {
              type: 'valueUpdate',
              source: 'internal'
            });
            _this.notifyWatch([namePath]);
            // Dependencies update
            var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
            // trigger callback function
            var onValuesChange = _this.callbacks.onValuesChange;
            if (onValuesChange) {
              var changedValues = cloneByNamePathList(_this.store, [namePath]);
              onValuesChange(changedValues, _this.getFieldsValue());
            }
            _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray(childrenFields)));
          };
          this.setFieldsValue = function (store) {
            _this.warningUnhooked();
            var prevStore = _this.store;
            if (store) {
              var nextStore = setValues(_this.store, store);
              _this.updateStore(nextStore);
            }
            _this.notifyObservers(prevStore, null, {
              type: 'valueUpdate',
              source: 'external'
            });
            _this.notifyWatch();
          };
          this.setFieldValue = function (name, value) {
            _this.setFields([{
              name: name,
              value: value
            }]);
          };
          this.getDependencyChildrenFields = function (rootNamePath) {
            var children = new Set();
            var childrenFields = [];
            var dependencies2fields = new NameMap();
            /**
             * Generate maps
             * Can use cache to save perf if user report performance issue with this
             */
            _this.getFieldEntities().forEach(function (field) {
              var dependencies = field.props.dependencies;
              (dependencies || []).forEach(function (dependency) {
                var dependencyNamePath = getNamePath(dependency);
                dependencies2fields.update(dependencyNamePath, function () {
                  var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Set();
                  fields.add(field);
                  return fields;
                });
              });
            });
            var fillChildren = function fillChildren(namePath) {
              var fields = dependencies2fields.get(namePath) || new Set();
              fields.forEach(function (field) {
                if (!children.has(field)) {
                  children.add(field);
                  var fieldNamePath = field.getNamePath();
                  if (field.isFieldDirty() && fieldNamePath.length) {
                    childrenFields.push(fieldNamePath);
                    fillChildren(fieldNamePath);
                  }
                }
              });
            };
            fillChildren(rootNamePath);
            return childrenFields;
          };
          this.triggerOnFieldsChange = function (namePathList, filedErrors) {
            var onFieldsChange = _this.callbacks.onFieldsChange;
            if (onFieldsChange) {
              var fields = _this.getFields();
              /**
               * Fill errors since `fields` may be replaced by controlled fields
               */
              if (filedErrors) {
                var cache = new NameMap();
                filedErrors.forEach(function (_ref4) {
                  var name = _ref4.name,
                    errors = _ref4.errors;
                  cache.set(name, errors);
                });
                fields.forEach(function (field) {
                  // eslint-disable-next-line no-param-reassign
                  field.errors = cache.get(field.name) || field.errors;
                });
              }
              var changedFields = fields.filter(function (_ref5) {
                var fieldName = _ref5.name;
                return containsNamePath(namePathList, fieldName);
              });
              onFieldsChange(changedFields, fields);
            }
          };
          this.validateFields = function (nameList, options) {
            _this.warningUnhooked();
            var provideNameList = !!nameList;
            var namePathList = provideNameList ? nameList.map(getNamePath) : [];
            // Collect result in promise list
            var promiseList = [];
            _this.getFieldEntities(true).forEach(function (field) {
              // Add field if not provide `nameList`
              if (!provideNameList) {
                namePathList.push(field.getNamePath());
              }
              /**
               * Recursive validate if configured.
               * TODO: perf improvement @zombieJ
               */
              if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
                var namePath = field.getNamePath();
                if (
                // nameList[i] === undefined 说明是以 nameList 开头的
                // ['name'] -> ['name','list']
                namePath.every(function (nameUnit, i) {
                  return nameList[i] === nameUnit || nameList[i] === undefined;
                })) {
                  namePathList.push(namePath);
                }
              }
              // Skip if without rule
              if (!field.props.rules || !field.props.rules.length) {
                return;
              }
              var fieldNamePath = field.getNamePath();
              // Add field validate rule in to promise list
              if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
                var promise = field.validateRules(_objectSpread2({
                  validateMessages: _objectSpread2(_objectSpread2({}, defaultValidateMessages), _this.validateMessages)
                }, options));
                // Wrap promise with field
                promiseList.push(promise.then(function () {
                  return {
                    name: fieldNamePath,
                    errors: [],
                    warnings: []
                  };
                })["catch"](function (ruleErrors) {
                  var _ruleErrors$forEach;
                  var mergedErrors = [];
                  var mergedWarnings = [];
                  (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0 ? void 0 : _ruleErrors$forEach.call(ruleErrors, function (_ref6) {
                    var warningOnly = _ref6.rule.warningOnly,
                      errors = _ref6.errors;
                    if (warningOnly) {
                      mergedWarnings.push.apply(mergedWarnings, _toConsumableArray(errors));
                    } else {
                      mergedErrors.push.apply(mergedErrors, _toConsumableArray(errors));
                    }
                  });
                  if (mergedErrors.length) {
                    return Promise.reject({
                      name: fieldNamePath,
                      errors: mergedErrors,
                      warnings: mergedWarnings
                    });
                  }
                  return {
                    name: fieldNamePath,
                    errors: mergedErrors,
                    warnings: mergedWarnings
                  };
                }));
              }
            });
            var summaryPromise = allPromiseFinish(promiseList);
            _this.lastValidatePromise = summaryPromise;
            // Notify fields with rule that validate has finished and need update
            summaryPromise["catch"](function (results) {
              return results;
            }).then(function (results) {
              var resultNamePathList = results.map(function (_ref7) {
                var name = _ref7.name;
                return name;
              });
              _this.notifyObservers(_this.store, resultNamePathList, {
                type: 'validateFinish'
              });
              _this.triggerOnFieldsChange(resultNamePathList, results);
            });
            var returnPromise = summaryPromise.then(function () {
              if (_this.lastValidatePromise === summaryPromise) {
                return Promise.resolve(_this.getFieldsValue(namePathList));
              }
              return Promise.reject([]);
            })["catch"](function (results) {
              var errorList = results.filter(function (result) {
                return result && result.errors.length;
              });
              return Promise.reject({
                values: _this.getFieldsValue(namePathList),
                errorFields: errorList,
                outOfDate: _this.lastValidatePromise !== summaryPromise
              });
            });
            // Do not throw in console
            returnPromise["catch"](function (e) {
              return e;
            });
            return returnPromise;
          };
          this.submit = function () {
            _this.warningUnhooked();
            _this.validateFields().then(function (values) {
              var onFinish = _this.callbacks.onFinish;
              if (onFinish) {
                try {
                  onFinish(values);
                } catch (err) {
                  // Should print error if user `onFinish` callback failed
                  console.error(err);
                }
              }
            })["catch"](function (e) {
              var onFinishFailed = _this.callbacks.onFinishFailed;
              if (onFinishFailed) {
                onFinishFailed(e);
              }
            });
          };
          this.forceRootUpdate = forceRootUpdate;
        });
        function useForm(form) {
          var formRef = react.exports.useRef();
          var _React$useState = react.exports.useState({}),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            forceUpdate = _React$useState2[1];
          if (!formRef.current) {
            if (form) {
              formRef.current = form;
            } else {
              // Create a new FormStore if not provided
              var forceReRender = function forceReRender() {
                forceUpdate({});
              };
              var formStore = new FormStore(forceReRender);
              formRef.current = formStore.getForm();
            }
          }
          return [formRef.current];
        }
        var _jsxFileName$9 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-field-form@1.27.3_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-field-form\\es\\FormContext.js";
        var FormContext = /*#__PURE__*/react.exports.createContext({
          triggerFormChange: function triggerFormChange() {},
          triggerFormFinish: function triggerFormFinish() {},
          registerForm: function registerForm() {},
          unregisterForm: function unregisterForm() {}
        });
        var FormProvider = function FormProvider(_ref) {
          var validateMessages = _ref.validateMessages,
            onFormChange = _ref.onFormChange,
            onFormFinish = _ref.onFormFinish,
            children = _ref.children;
          var formContext = react.exports.useContext(FormContext);
          var formsRef = react.exports.useRef({});
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(FormContext.Provider, {
              value: _objectSpread2(_objectSpread2({}, formContext), {}, {
                validateMessages: _objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages),
                // =========================================================
                // =                  Global Form Control                  =
                // =========================================================
                triggerFormChange: function triggerFormChange(name, changedFields) {
                  if (onFormChange) {
                    onFormChange(name, {
                      changedFields: changedFields,
                      forms: formsRef.current
                    });
                  }
                  formContext.triggerFormChange(name, changedFields);
                },
                triggerFormFinish: function triggerFormFinish(name, values) {
                  if (onFormFinish) {
                    onFormFinish(name, {
                      values: values,
                      forms: formsRef.current
                    });
                  }
                  formContext.triggerFormFinish(name, values);
                },
                registerForm: function registerForm(name, form) {
                  if (name) {
                    formsRef.current = _objectSpread2(_objectSpread2({}, formsRef.current), {}, _defineProperty({}, name, form));
                  }
                  formContext.registerForm(name, form);
                },
                unregisterForm: function unregisterForm(name) {
                  var newForms = _objectSpread2({}, formsRef.current);
                  delete newForms[name];
                  formsRef.current = newForms;
                  formContext.unregisterForm(name);
                }
              }),
              children: children
            }, void 0, false, {
              fileName: _jsxFileName$9,
              lineNumber: 17,
              columnNumber: 23
            }, this)
          );
        };
        var _jsxFileName$8 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-field-form@1.27.3_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-field-form\\es\\Form.js";
        var _excluded$3 = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed"];
        var Form = function Form(_ref, ref) {
          var name = _ref.name,
            initialValues = _ref.initialValues,
            fields = _ref.fields,
            form = _ref.form,
            preserve = _ref.preserve,
            children = _ref.children,
            _ref$component = _ref.component,
            Component = _ref$component === void 0 ? 'form' : _ref$component,
            validateMessages = _ref.validateMessages,
            _ref$validateTrigger = _ref.validateTrigger,
            validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
            onValuesChange = _ref.onValuesChange,
            _onFieldsChange = _ref.onFieldsChange,
            _onFinish = _ref.onFinish,
            onFinishFailed = _ref.onFinishFailed,
            restProps = _objectWithoutProperties(_ref, _excluded$3);
          var formContext = react.exports.useContext(FormContext);
          // We customize handle event since Context will makes all the consumer re-render:
          // https://reactjs.org/docs/context.html#contextprovider
          var _useForm = useForm(form),
            _useForm2 = _slicedToArray(_useForm, 1),
            formInstance = _useForm2[0];
          var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
            useSubscribe = _formInstance$getInte.useSubscribe,
            setInitialValues = _formInstance$getInte.setInitialValues,
            setCallbacks = _formInstance$getInte.setCallbacks,
            setValidateMessages = _formInstance$getInte.setValidateMessages,
            setPreserve = _formInstance$getInte.setPreserve,
            destroyForm = _formInstance$getInte.destroyForm;
          // Pass ref with form instance
          react.exports.useImperativeHandle(ref, function () {
            return formInstance;
          });
          // Register form into Context
          react.exports.useEffect(function () {
            formContext.registerForm(name, formInstance);
            return function () {
              formContext.unregisterForm(name);
            };
          }, [formContext, formInstance, name]);
          // Pass props to store
          setValidateMessages(_objectSpread2(_objectSpread2({}, formContext.validateMessages), validateMessages));
          setCallbacks({
            onValuesChange: onValuesChange,
            onFieldsChange: function onFieldsChange(changedFields) {
              formContext.triggerFormChange(name, changedFields);
              if (_onFieldsChange) {
                for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                  rest[_key - 1] = arguments[_key];
                }
                _onFieldsChange.apply(void 0, [changedFields].concat(rest));
              }
            },
            onFinish: function onFinish(values) {
              formContext.triggerFormFinish(name, values);
              if (_onFinish) {
                _onFinish(values);
              }
            },
            onFinishFailed: onFinishFailed
          });
          setPreserve(preserve);
          // Set initial value, init store value when first mount
          var mountRef = react.exports.useRef(null);
          setInitialValues(initialValues, !mountRef.current);
          if (!mountRef.current) {
            mountRef.current = true;
          }
          react.exports.useEffect(function () {
            return destroyForm;
          },
          // eslint-disable-next-line react-hooks/exhaustive-deps
          []);
          // Prepare children by `children` type
          var childrenNode;
          var childrenRenderProps = typeof children === 'function';
          if (childrenRenderProps) {
            var values = formInstance.getFieldsValue(true);
            childrenNode = children(values, formInstance);
          } else {
            childrenNode = children;
          }
          // Not use subscribe when using render props
          useSubscribe(!childrenRenderProps);
          // Listen if fields provided. We use ref to save prev data here to avoid additional render
          var prevFieldsRef = react.exports.useRef();
          react.exports.useEffect(function () {
            if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
              formInstance.setFields(fields || []);
            }
            prevFieldsRef.current = fields;
          }, [fields, formInstance]);
          var formContextValue = react.exports.useMemo(function () {
            return _objectSpread2(_objectSpread2({}, formInstance), {}, {
              validateTrigger: validateTrigger
            });
          }, [formInstance, validateTrigger]);
          var wrapperNode = /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(Context.Provider, {
            value: formContextValue,
            children: childrenNode
          }, void 0, false, {
            fileName: _jsxFileName$8,
            lineNumber: 109,
            columnNumber: 34
          }, this);
          if (Component === false) {
            return wrapperNode;
          }
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(Component, _objectSpread(_objectSpread({}, restProps), {}, {
              onSubmit: function onSubmit(event) {
                event.preventDefault();
                event.stopPropagation();
                formInstance.submit();
              },
              onReset: function onReset(event) {
                var _restProps$onReset;
                event.preventDefault();
                formInstance.resetFields();
                (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0 ? void 0 : _restProps$onReset.call(restProps, event);
              },
              children: wrapperNode
            }), void 0, false, {
              fileName: _jsxFileName$8,
              lineNumber: 115,
              columnNumber: 23
            }, this)
          );
        };
        function stringify(value) {
          try {
            return JSON.stringify(value);
          } catch (err) {
            return Math.random();
          }
        }
        function useWatch() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          var _args$ = args[0],
            dependencies = _args$ === void 0 ? [] : _args$,
            form = args[1];
          var _useState = react.exports.useState(),
            _useState2 = _slicedToArray(_useState, 2),
            value = _useState2[0],
            setValue = _useState2[1];
          var valueStr = react.exports.useMemo(function () {
            return stringify(value);
          }, [value]);
          var valueStrRef = react.exports.useRef(valueStr);
          valueStrRef.current = valueStr;
          var fieldContext = react.exports.useContext(Context);
          var formInstance = form || fieldContext;
          var isValidForm = formInstance && formInstance._init;
          // Warning if not exist form instance
          {
            warningOnce(args.length === 2 ? form ? isValidForm : true : isValidForm, 'useWatch requires a form instance since it can not auto detect from context.');
          }
          var namePath = getNamePath(dependencies);
          var namePathRef = react.exports.useRef(namePath);
          namePathRef.current = namePath;
          react.exports.useEffect(function () {
            // Skip if not exist form instance
            if (!isValidForm) {
              return;
            }
            var getFieldsValue = formInstance.getFieldsValue,
              getInternalHooks = formInstance.getInternalHooks;
            var _getInternalHooks = getInternalHooks(HOOK_MARK),
              registerWatch = _getInternalHooks.registerWatch;
            var cancelRegister = registerWatch(function (store) {
              var newValue = getValue$1(store, namePathRef.current);
              var nextValueStr = stringify(newValue);
              // Compare stringify in case it's nest object
              if (valueStrRef.current !== nextValueStr) {
                valueStrRef.current = nextValueStr;
                setValue(newValue);
              }
            });
            // TODO: We can improve this perf in future
            var initialValue = getValue$1(getFieldsValue(), namePathRef.current);
            setValue(initialValue);
            return cancelRegister;
          },
          // We do not need re-register since namePath content is the same
          // eslint-disable-next-line react-hooks/exhaustive-deps
          [isValidForm]);
          return value;
        }
        var InternalForm = /*#__PURE__*/react.exports.forwardRef(Form);
        var RefForm = InternalForm;
        RefForm.FormProvider = FormProvider;
        RefForm.Field = WrapperField;
        RefForm.List = List;
        RefForm.useForm = useForm;
        RefForm.useWatch = useWatch;
        function noop$1() {}
        // eslint-disable-next-line import/no-mutable-exports
        var warning$1 = noop$1;
        {
          warning$1 = function warning(valid, component, message) {
            warningOnce(valid, "[antd: ".concat(component, "] ").concat(message));
            // StrictMode will inject console which will not throw warning in React 17.
            {
              resetWarned();
            }
          };
        }
        var warning$2 = exports('n', warning$1);
        var enUS$1 = {
          // Options.jsx
          items_per_page: '/ page',
          jump_to: 'Go to',
          jump_to_confirm: 'confirm',
          page: 'Page',
          // Pagination.jsx
          prev_page: 'Previous Page',
          next_page: 'Next Page',
          prev_5: 'Previous 5 Pages',
          next_5: 'Next 5 Pages',
          prev_3: 'Previous 3 Pages',
          next_3: 'Next 3 Pages',
          page_size: 'Page Size'
        };
        var locale$2 = {
          locale: 'en_US',
          today: 'Today',
          now: 'Now',
          backToToday: 'Back to today',
          ok: 'OK',
          clear: 'Clear',
          month: 'Month',
          year: 'Year',
          timeSelect: 'select time',
          dateSelect: 'select date',
          weekSelect: 'Choose a week',
          monthSelect: 'Choose a month',
          yearSelect: 'Choose a year',
          decadeSelect: 'Choose a decade',
          yearFormat: 'YYYY',
          dateFormat: 'M/D/YYYY',
          dayFormat: 'D',
          dateTimeFormat: 'M/D/YYYY HH:mm:ss',
          monthBeforeYear: true,
          previousMonth: 'Previous month (PageUp)',
          nextMonth: 'Next month (PageDown)',
          previousYear: 'Last year (Control + left)',
          nextYear: 'Next year (Control + right)',
          previousDecade: 'Last decade',
          nextDecade: 'Next decade',
          previousCentury: 'Last century',
          nextCentury: 'Next century'
        };
        var locale$1 = {
          placeholder: 'Select time',
          rangePlaceholder: ['Start time', 'End time']
        };
        var TimePicker = locale$1;

        // Merge into a locale object
        var locale = {
          lang: _extends$1({
            placeholder: 'Select date',
            yearPlaceholder: 'Select year',
            quarterPlaceholder: 'Select quarter',
            monthPlaceholder: 'Select month',
            weekPlaceholder: 'Select week',
            rangePlaceholder: ['Start date', 'End date'],
            rangeYearPlaceholder: ['Start year', 'End year'],
            rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
            rangeMonthPlaceholder: ['Start month', 'End month'],
            rangeWeekPlaceholder: ['Start week', 'End week']
          }, locale$2),
          timePickerLocale: _extends$1({}, TimePicker)
        };
        // All settings at:
        // https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
        var enUS = locale;

        /* eslint-disable no-template-curly-in-string */
        var typeTemplate = '${label} is not a valid ${type}';
        var localeValues = {
          locale: 'en',
          Pagination: enUS$1,
          DatePicker: enUS,
          TimePicker: TimePicker,
          Calendar: enUS,
          global: {
            placeholder: 'Please select'
          },
          Table: {
            filterTitle: 'Filter menu',
            filterConfirm: 'OK',
            filterReset: 'Reset',
            filterEmptyText: 'No filters',
            filterCheckall: 'Select all items',
            filterSearchPlaceholder: 'Search in filters',
            emptyText: 'No data',
            selectAll: 'Select current page',
            selectInvert: 'Invert current page',
            selectNone: 'Clear all data',
            selectionAll: 'Select all data',
            sortTitle: 'Sort',
            expand: 'Expand row',
            collapse: 'Collapse row',
            triggerDesc: 'Click to sort descending',
            triggerAsc: 'Click to sort ascending',
            cancelSort: 'Click to cancel sorting'
          },
          Tour: {
            Next: 'Next',
            Previous: 'Previous',
            Finish: 'Finish'
          },
          Modal: {
            okText: 'OK',
            cancelText: 'Cancel',
            justOkText: 'OK'
          },
          Popconfirm: {
            okText: 'OK',
            cancelText: 'Cancel'
          },
          Transfer: {
            titles: ['', ''],
            searchPlaceholder: 'Search here',
            itemUnit: 'item',
            itemsUnit: 'items',
            remove: 'Remove',
            selectCurrent: 'Select current page',
            removeCurrent: 'Remove current page',
            selectAll: 'Select all data',
            removeAll: 'Remove all data',
            selectInvert: 'Invert current page'
          },
          Upload: {
            uploading: 'Uploading...',
            removeFile: 'Remove file',
            uploadError: 'Upload error',
            previewFile: 'Preview file',
            downloadFile: 'Download file'
          },
          Empty: {
            description: 'No data'
          },
          Icon: {
            icon: 'icon'
          },
          Text: {
            edit: 'Edit',
            copy: 'Copy',
            copied: 'Copied',
            expand: 'Expand'
          },
          PageHeader: {
            back: 'Back'
          },
          Form: {
            optional: '(optional)',
            defaultValidateMessages: {
              "default": 'Field validation error for ${label}',
              required: 'Please enter ${label}',
              "enum": '${label} must be one of [${enum}]',
              whitespace: '${label} cannot be a blank character',
              date: {
                format: '${label} date format is invalid',
                parse: '${label} cannot be converted to a date',
                invalid: '${label} is an invalid date'
              },
              types: {
                string: typeTemplate,
                method: typeTemplate,
                array: typeTemplate,
                object: typeTemplate,
                number: typeTemplate,
                date: typeTemplate,
                "boolean": typeTemplate,
                integer: typeTemplate,
                "float": typeTemplate,
                regexp: typeTemplate,
                email: typeTemplate,
                url: typeTemplate,
                hex: typeTemplate
              },
              string: {
                len: '${label} must be ${len} characters',
                min: '${label} must be at least ${min} characters',
                max: '${label} must be up to ${max} characters',
                range: '${label} must be between ${min}-${max} characters'
              },
              number: {
                len: '${label} must be equal to ${len}',
                min: '${label} must be minimum ${min}',
                max: '${label} must be maximum ${max}',
                range: '${label} must be between ${min}-${max}'
              },
              array: {
                len: 'Must be ${len} ${label}',
                min: 'At least ${min} ${label}',
                max: 'At most ${max} ${label}',
                range: 'The amount of ${label} must be between ${min}-${max}'
              },
              pattern: {
                mismatch: '${label} does not match the pattern ${pattern}'
              }
            }
          },
          Image: {
            preview: 'Preview'
          }
        };
        var defaultLocale = localeValues;
        var runtimeLocale = _extends$1({}, defaultLocale.Modal);
        function changeConfirmLocale(newLocale) {
          if (newLocale) {
            runtimeLocale = _extends$1(_extends$1({}, runtimeLocale), newLocale);
          } else {
            runtimeLocale = _extends$1({}, defaultLocale.Modal);
          }
        }
        var LocaleContext = /*#__PURE__*/react.exports.createContext(undefined);
        var LocaleContext$1 = LocaleContext;
        var _jsxFileName$7 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\locale-provider\\index.js";
        var ANT_MARK = 'internalMark';
        var LocaleProvider = function LocaleProvider(props) {
          var _props$locale = props.locale,
            locale = _props$locale === void 0 ? {} : _props$locale,
            children = props.children,
            _ANT_MARK__ = props._ANT_MARK__;
          {
            warning$2(_ANT_MARK__ === ANT_MARK, 'LocaleProvider', '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale');
          }
          react.exports.useEffect(function () {
            changeConfirmLocale(locale && locale.Modal);
            return function () {
              changeConfirmLocale();
            };
          }, [locale]);
          var getMemoizedContextValue = react.exports.useMemo(function () {
            return _extends$1(_extends$1({}, locale), {
              exist: true
            });
          }, [locale]);
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(LocaleContext$1.Provider, {
              value: getMemoizedContextValue,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName$7,
              lineNumber: 26,
              columnNumber: 23
            }, this)
          );
        };
        var LocaleProvider$1 = LocaleProvider;
        var LocaleReceiver = function LocaleReceiver(props) {
          var _props$componentName = props.componentName,
            componentName = _props$componentName === void 0 ? 'global' : _props$componentName,
            defaultLocale$1 = props.defaultLocale,
            children = props.children;
          var antLocale = react.exports.useContext(LocaleContext$1);
          var getLocale = react.exports.useMemo(function () {
            var _a;
            var locale = defaultLocale$1 || defaultLocale[componentName];
            var localeFromContext = (_a = antLocale === null || antLocale === void 0 ? void 0 : antLocale[componentName]) !== null && _a !== void 0 ? _a : {};
            return _extends$1(_extends$1({}, locale instanceof Function ? locale() : locale), localeFromContext || {});
          }, [componentName, defaultLocale$1, antLocale]);
          var getLocaleCode = react.exports.useMemo(function () {
            var localeCode = antLocale && antLocale.locale;
            // Had use LocaleProvide but didn't set locale
            if (antLocale && antLocale.exist && !localeCode) {
              return defaultLocale.locale;
            }
            return localeCode;
          }, [antLocale]);
          return children(getLocale, getLocaleCode, antLocale);
        };
        var LocaleReceiver$1 = LocaleReceiver;
        var version = '5.0.0-beta.2';

        /**
         * Take input from [0, n] and return it as [0, 1]
         * @hidden
         */
        function bound01(n, max) {
          if (isOnePointZero(n)) {
            n = '100%';
          }
          var isPercent = isPercentage(n);
          n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
          // Automatically convert percentage into number
          if (isPercent) {
            n = parseInt(String(n * max), 10) / 100;
          }
          // Handle floating point rounding errors
          if (Math.abs(n - max) < 0.000001) {
            return 1;
          }
          // Convert into [0, 1] range if it isn't already
          if (max === 360) {
            // If n is a hue given in degrees,
            // wrap around out-of-range values into [0, 360] range
            // then convert into [0, 1].
            n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
          } else {
            // If n not a hue given in degrees
            // Convert into [0, 1] range if it isn't already.
            n = n % max / parseFloat(String(max));
          }
          return n;
        }
        /**
         * Force a number between 0 and 1
         * @hidden
         */
        function clamp01(val) {
          return Math.min(1, Math.max(0, val));
        }
        /**
         * Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
         * <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
         * @hidden
         */
        function isOnePointZero(n) {
          return typeof n === 'string' && n.indexOf('.') !== -1 && parseFloat(n) === 1;
        }
        /**
         * Check to see if string passed in is a percentage
         * @hidden
         */
        function isPercentage(n) {
          return typeof n === 'string' && n.indexOf('%') !== -1;
        }
        /**
         * Return a valid alpha value [0,1] with all invalid values being set to 1
         * @hidden
         */
        function boundAlpha(a) {
          a = parseFloat(a);
          if (isNaN(a) || a < 0 || a > 1) {
            a = 1;
          }
          return a;
        }
        /**
         * Replace a decimal with it's percentage value
         * @hidden
         */
        function convertToPercentage(n) {
          if (n <= 1) {
            return "".concat(Number(n) * 100, "%");
          }
          return n;
        }
        /**
         * Force a hex value to have 2 characters
         * @hidden
         */
        function pad2(c) {
          return c.length === 1 ? '0' + c : String(c);
        }

        // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
        // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
        /**
         * Handle bounds / percentage checking to conform to CSS color spec
         * <http://www.w3.org/TR/css3-color/>
         * *Assumes:* r, g, b in [0, 255] or [0, 1]
         * *Returns:* { r, g, b } in [0, 255]
         */
        function rgbToRgb(r, g, b) {
          return {
            r: bound01(r, 255) * 255,
            g: bound01(g, 255) * 255,
            b: bound01(b, 255) * 255
          };
        }
        /**
         * Converts an RGB color value to HSL.
         * *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
         * *Returns:* { h, s, l } in [0,1]
         */
        function rgbToHsl(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h = 0;
          var s = 0;
          var l = (max + min) / 2;
          if (max === min) {
            s = 0;
            h = 0; // achromatic
          } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h: h,
            s: s,
            l: l
          };
        }
        function hue2rgb(p, q, t) {
          if (t < 0) {
            t += 1;
          }
          if (t > 1) {
            t -= 1;
          }
          if (t < 1 / 6) {
            return p + (q - p) * (6 * t);
          }
          if (t < 1 / 2) {
            return q;
          }
          if (t < 2 / 3) {
            return p + (q - p) * (2 / 3 - t) * 6;
          }
          return p;
        }
        /**
         * Converts an HSL color value to RGB.
         *
         * *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
         * *Returns:* { r, g, b } in the set [0, 255]
         */
        function hslToRgb(h, s, l) {
          var r;
          var g;
          var b;
          h = bound01(h, 360);
          s = bound01(s, 100);
          l = bound01(l, 100);
          if (s === 0) {
            // achromatic
            g = l;
            b = l;
            r = l;
          } else {
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
          }
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        /**
         * Converts an RGB color value to HSV
         *
         * *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
         * *Returns:* { h, s, v } in [0,1]
         */
        function rgbToHsv(r, g, b) {
          r = bound01(r, 255);
          g = bound01(g, 255);
          b = bound01(b, 255);
          var max = Math.max(r, g, b);
          var min = Math.min(r, g, b);
          var h = 0;
          var v = max;
          var d = max - min;
          var s = max === 0 ? 0 : d / max;
          if (max === min) {
            h = 0; // achromatic
          } else {
            switch (max) {
              case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
              case g:
                h = (b - r) / d + 2;
                break;
              case b:
                h = (r - g) / d + 4;
                break;
            }
            h /= 6;
          }
          return {
            h: h,
            s: s,
            v: v
          };
        }
        /**
         * Converts an HSV color value to RGB.
         *
         * *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
         * *Returns:* { r, g, b } in the set [0, 255]
         */
        function hsvToRgb(h, s, v) {
          h = bound01(h, 360) * 6;
          s = bound01(s, 100);
          v = bound01(v, 100);
          var i = Math.floor(h);
          var f = h - i;
          var p = v * (1 - s);
          var q = v * (1 - f * s);
          var t = v * (1 - (1 - f) * s);
          var mod = i % 6;
          var r = [v, q, p, p, t, v][mod];
          var g = [t, v, v, q, p, p][mod];
          var b = [p, p, t, v, v, q][mod];
          return {
            r: r * 255,
            g: g * 255,
            b: b * 255
          };
        }
        /**
         * Converts an RGB color to hex
         *
         * Assumes r, g, and b are contained in the set [0, 255]
         * Returns a 3 or 6 character hex
         */
        function rgbToHex(r, g, b, allow3Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
          // Return a 3 character hex if possible
          if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
          }
          return hex.join('');
        }
        /**
         * Converts an RGBA color plus alpha transparency to hex
         *
         * Assumes r, g, b are contained in the set [0, 255] and
         * a in [0, 1]. Returns a 4 or 8 character rgba hex
         */
        // eslint-disable-next-line max-params
        function rgbaToHex(r, g, b, a, allow4Char) {
          var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];
          // Return a 4 character hex if possible
          if (allow4Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1)) && hex[3].startsWith(hex[3].charAt(1))) {
            return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
          }
          return hex.join('');
        }
        /** Converts a decimal to a hex value */
        function convertDecimalToHex(d) {
          return Math.round(parseFloat(d) * 255).toString(16);
        }
        /** Converts a hex value to a decimal */
        function convertHexToDecimal(h) {
          return parseIntFromHex(h) / 255;
        }
        /** Parse a base-16 hex value into a base-10 integer */
        function parseIntFromHex(val) {
          return parseInt(val, 16);
        }
        function numberInputToObject(color) {
          return {
            r: color >> 16,
            g: (color & 0xff00) >> 8,
            b: color & 0xff
          };
        }

        // https://github.com/bahamas10/css-color-names/blob/master/css-color-names.json
        /**
         * @hidden
         */
        var names = {
          aliceblue: '#f0f8ff',
          antiquewhite: '#faebd7',
          aqua: '#00ffff',
          aquamarine: '#7fffd4',
          azure: '#f0ffff',
          beige: '#f5f5dc',
          bisque: '#ffe4c4',
          black: '#000000',
          blanchedalmond: '#ffebcd',
          blue: '#0000ff',
          blueviolet: '#8a2be2',
          brown: '#a52a2a',
          burlywood: '#deb887',
          cadetblue: '#5f9ea0',
          chartreuse: '#7fff00',
          chocolate: '#d2691e',
          coral: '#ff7f50',
          cornflowerblue: '#6495ed',
          cornsilk: '#fff8dc',
          crimson: '#dc143c',
          cyan: '#00ffff',
          darkblue: '#00008b',
          darkcyan: '#008b8b',
          darkgoldenrod: '#b8860b',
          darkgray: '#a9a9a9',
          darkgreen: '#006400',
          darkgrey: '#a9a9a9',
          darkkhaki: '#bdb76b',
          darkmagenta: '#8b008b',
          darkolivegreen: '#556b2f',
          darkorange: '#ff8c00',
          darkorchid: '#9932cc',
          darkred: '#8b0000',
          darksalmon: '#e9967a',
          darkseagreen: '#8fbc8f',
          darkslateblue: '#483d8b',
          darkslategray: '#2f4f4f',
          darkslategrey: '#2f4f4f',
          darkturquoise: '#00ced1',
          darkviolet: '#9400d3',
          deeppink: '#ff1493',
          deepskyblue: '#00bfff',
          dimgray: '#696969',
          dimgrey: '#696969',
          dodgerblue: '#1e90ff',
          firebrick: '#b22222',
          floralwhite: '#fffaf0',
          forestgreen: '#228b22',
          fuchsia: '#ff00ff',
          gainsboro: '#dcdcdc',
          ghostwhite: '#f8f8ff',
          goldenrod: '#daa520',
          gold: '#ffd700',
          gray: '#808080',
          green: '#008000',
          greenyellow: '#adff2f',
          grey: '#808080',
          honeydew: '#f0fff0',
          hotpink: '#ff69b4',
          indianred: '#cd5c5c',
          indigo: '#4b0082',
          ivory: '#fffff0',
          khaki: '#f0e68c',
          lavenderblush: '#fff0f5',
          lavender: '#e6e6fa',
          lawngreen: '#7cfc00',
          lemonchiffon: '#fffacd',
          lightblue: '#add8e6',
          lightcoral: '#f08080',
          lightcyan: '#e0ffff',
          lightgoldenrodyellow: '#fafad2',
          lightgray: '#d3d3d3',
          lightgreen: '#90ee90',
          lightgrey: '#d3d3d3',
          lightpink: '#ffb6c1',
          lightsalmon: '#ffa07a',
          lightseagreen: '#20b2aa',
          lightskyblue: '#87cefa',
          lightslategray: '#778899',
          lightslategrey: '#778899',
          lightsteelblue: '#b0c4de',
          lightyellow: '#ffffe0',
          lime: '#00ff00',
          limegreen: '#32cd32',
          linen: '#faf0e6',
          magenta: '#ff00ff',
          maroon: '#800000',
          mediumaquamarine: '#66cdaa',
          mediumblue: '#0000cd',
          mediumorchid: '#ba55d3',
          mediumpurple: '#9370db',
          mediumseagreen: '#3cb371',
          mediumslateblue: '#7b68ee',
          mediumspringgreen: '#00fa9a',
          mediumturquoise: '#48d1cc',
          mediumvioletred: '#c71585',
          midnightblue: '#191970',
          mintcream: '#f5fffa',
          mistyrose: '#ffe4e1',
          moccasin: '#ffe4b5',
          navajowhite: '#ffdead',
          navy: '#000080',
          oldlace: '#fdf5e6',
          olive: '#808000',
          olivedrab: '#6b8e23',
          orange: '#ffa500',
          orangered: '#ff4500',
          orchid: '#da70d6',
          palegoldenrod: '#eee8aa',
          palegreen: '#98fb98',
          paleturquoise: '#afeeee',
          palevioletred: '#db7093',
          papayawhip: '#ffefd5',
          peachpuff: '#ffdab9',
          peru: '#cd853f',
          pink: '#ffc0cb',
          plum: '#dda0dd',
          powderblue: '#b0e0e6',
          purple: '#800080',
          rebeccapurple: '#663399',
          red: '#ff0000',
          rosybrown: '#bc8f8f',
          royalblue: '#4169e1',
          saddlebrown: '#8b4513',
          salmon: '#fa8072',
          sandybrown: '#f4a460',
          seagreen: '#2e8b57',
          seashell: '#fff5ee',
          sienna: '#a0522d',
          silver: '#c0c0c0',
          skyblue: '#87ceeb',
          slateblue: '#6a5acd',
          slategray: '#708090',
          slategrey: '#708090',
          snow: '#fffafa',
          springgreen: '#00ff7f',
          steelblue: '#4682b4',
          tan: '#d2b48c',
          teal: '#008080',
          thistle: '#d8bfd8',
          tomato: '#ff6347',
          turquoise: '#40e0d0',
          violet: '#ee82ee',
          wheat: '#f5deb3',
          white: '#ffffff',
          whitesmoke: '#f5f5f5',
          yellow: '#ffff00',
          yellowgreen: '#9acd32'
        };

        /**
         * Given a string or object, convert that input to RGB
         *
         * Possible string inputs:
         * ```
         * "red"
         * "#f00" or "f00"
         * "#ff0000" or "ff0000"
         * "#ff000000" or "ff000000"
         * "rgb 255 0 0" or "rgb (255, 0, 0)"
         * "rgb 1.0 0 0" or "rgb (1, 0, 0)"
         * "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
         * "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
         * "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
         * "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
         * "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
         * ```
         */
        function inputToRGB(color) {
          var rgb = {
            r: 0,
            g: 0,
            b: 0
          };
          var a = 1;
          var s = null;
          var v = null;
          var l = null;
          var ok = false;
          var format = false;
          if (typeof color === 'string') {
            color = stringInputToObject(color);
          }
          if (_typeof2(color) === 'object') {
            if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
              rgb = rgbToRgb(color.r, color.g, color.b);
              ok = true;
              format = String(color.r).substr(-1) === '%' ? 'prgb' : 'rgb';
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
              s = convertToPercentage(color.s);
              v = convertToPercentage(color.v);
              rgb = hsvToRgb(color.h, s, v);
              ok = true;
              format = 'hsv';
            } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
              s = convertToPercentage(color.s);
              l = convertToPercentage(color.l);
              rgb = hslToRgb(color.h, s, l);
              ok = true;
              format = 'hsl';
            }
            if (Object.prototype.hasOwnProperty.call(color, 'a')) {
              a = color.a;
            }
          }
          a = boundAlpha(a);
          return {
            ok: ok,
            format: color.format || format,
            r: Math.min(255, Math.max(rgb.r, 0)),
            g: Math.min(255, Math.max(rgb.g, 0)),
            b: Math.min(255, Math.max(rgb.b, 0)),
            a: a
          };
        }
        // <http://www.w3.org/TR/css3-values/#integers>
        var CSS_INTEGER = '[-\\+]?\\d+%?';
        // <http://www.w3.org/TR/css3-values/#number-value>
        var CSS_NUMBER = '[-\\+]?\\d*\\.\\d+%?';
        // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
        var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
        // Actual matching.
        // Parentheses and commas are optional, but not required.
        // Whitespace can take the place of commas or opening paren
        var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
        var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
        var matchers = {
          CSS_UNIT: new RegExp(CSS_UNIT),
          rgb: new RegExp('rgb' + PERMISSIVE_MATCH3),
          rgba: new RegExp('rgba' + PERMISSIVE_MATCH4),
          hsl: new RegExp('hsl' + PERMISSIVE_MATCH3),
          hsla: new RegExp('hsla' + PERMISSIVE_MATCH4),
          hsv: new RegExp('hsv' + PERMISSIVE_MATCH3),
          hsva: new RegExp('hsva' + PERMISSIVE_MATCH4),
          hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
          hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
          hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        };
        /**
         * Permissive string parsing.  Take in a number of formats, and output an object
         * based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
         */
        function stringInputToObject(color) {
          color = color.trim().toLowerCase();
          if (color.length === 0) {
            return false;
          }
          var named = false;
          if (names[color]) {
            color = names[color];
            named = true;
          } else if (color === 'transparent') {
            return {
              r: 0,
              g: 0,
              b: 0,
              a: 0,
              format: 'name'
            };
          }
          // Try to match string input using regular expressions.
          // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
          // Just return an object and let the conversion functions handle that.
          // This way the result will be the same whether the tinycolor is initialized with string or object.
          var match = matchers.rgb.exec(color);
          if (match) {
            return {
              r: match[1],
              g: match[2],
              b: match[3]
            };
          }
          match = matchers.rgba.exec(color);
          if (match) {
            return {
              r: match[1],
              g: match[2],
              b: match[3],
              a: match[4]
            };
          }
          match = matchers.hsl.exec(color);
          if (match) {
            return {
              h: match[1],
              s: match[2],
              l: match[3]
            };
          }
          match = matchers.hsla.exec(color);
          if (match) {
            return {
              h: match[1],
              s: match[2],
              l: match[3],
              a: match[4]
            };
          }
          match = matchers.hsv.exec(color);
          if (match) {
            return {
              h: match[1],
              s: match[2],
              v: match[3]
            };
          }
          match = matchers.hsva.exec(color);
          if (match) {
            return {
              h: match[1],
              s: match[2],
              v: match[3],
              a: match[4]
            };
          }
          match = matchers.hex8.exec(color);
          if (match) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              a: convertHexToDecimal(match[4]),
              format: named ? 'name' : 'hex8'
            };
          }
          match = matchers.hex6.exec(color);
          if (match) {
            return {
              r: parseIntFromHex(match[1]),
              g: parseIntFromHex(match[2]),
              b: parseIntFromHex(match[3]),
              format: named ? 'name' : 'hex'
            };
          }
          match = matchers.hex4.exec(color);
          if (match) {
            return {
              r: parseIntFromHex(match[1] + match[1]),
              g: parseIntFromHex(match[2] + match[2]),
              b: parseIntFromHex(match[3] + match[3]),
              a: convertHexToDecimal(match[4] + match[4]),
              format: named ? 'name' : 'hex8'
            };
          }
          match = matchers.hex3.exec(color);
          if (match) {
            return {
              r: parseIntFromHex(match[1] + match[1]),
              g: parseIntFromHex(match[2] + match[2]),
              b: parseIntFromHex(match[3] + match[3]),
              format: named ? 'name' : 'hex'
            };
          }
          return false;
        }
        /**
         * Check to see if it looks like a CSS unit
         * (see `matchers` above for definition).
         */
        function isValidCSSUnit(color) {
          return Boolean(matchers.CSS_UNIT.exec(String(color)));
        }
        var TinyColor = /** @class */function () {
          function TinyColor(color, opts) {
            if (color === void 0) {
              color = '';
            }
            if (opts === void 0) {
              opts = {};
            }
            var _a;
            // If input is already a tinycolor, return itself
            if (color instanceof TinyColor) {
              // eslint-disable-next-line no-constructor-return
              return color;
            }
            if (typeof color === 'number') {
              color = numberInputToObject(color);
            }
            this.originalInput = color;
            var rgb = inputToRGB(color);
            this.originalInput = color;
            this.r = rgb.r;
            this.g = rgb.g;
            this.b = rgb.b;
            this.a = rgb.a;
            this.roundA = Math.round(100 * this.a) / 100;
            this.format = (_a = opts.format) !== null && _a !== void 0 ? _a : rgb.format;
            this.gradientType = opts.gradientType;
            // Don't let the range of [0,255] come back in [0,1].
            // Potentially lose a little bit of precision here, but will fix issues where
            // .5 gets interpreted as half of the total, instead of half of 1
            // If it was supposed to be 128, this was already taken care of by `inputToRgb`
            if (this.r < 1) {
              this.r = Math.round(this.r);
            }
            if (this.g < 1) {
              this.g = Math.round(this.g);
            }
            if (this.b < 1) {
              this.b = Math.round(this.b);
            }
            this.isValid = rgb.ok;
          }
          TinyColor.prototype.isDark = function () {
            return this.getBrightness() < 128;
          };
          TinyColor.prototype.isLight = function () {
            return !this.isDark();
          };
          /**
           * Returns the perceived brightness of the color, from 0-255.
           */
          TinyColor.prototype.getBrightness = function () {
            // http://www.w3.org/TR/AERT#color-contrast
            var rgb = this.toRgb();
            return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
          };
          /**
           * Returns the perceived luminance of a color, from 0-1.
           */
          TinyColor.prototype.getLuminance = function () {
            // http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
            var rgb = this.toRgb();
            var R;
            var G;
            var B;
            var RsRGB = rgb.r / 255;
            var GsRGB = rgb.g / 255;
            var BsRGB = rgb.b / 255;
            if (RsRGB <= 0.03928) {
              R = RsRGB / 12.92;
            } else {
              // eslint-disable-next-line prefer-exponentiation-operator
              R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
            }
            if (GsRGB <= 0.03928) {
              G = GsRGB / 12.92;
            } else {
              // eslint-disable-next-line prefer-exponentiation-operator
              G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
            }
            if (BsRGB <= 0.03928) {
              B = BsRGB / 12.92;
            } else {
              // eslint-disable-next-line prefer-exponentiation-operator
              B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
            }
            return 0.2126 * R + 0.7152 * G + 0.0722 * B;
          };
          /**
           * Returns the alpha value of a color, from 0-1.
           */
          TinyColor.prototype.getAlpha = function () {
            return this.a;
          };
          /**
           * Sets the alpha value on the current color.
           *
           * @param alpha - The new alpha value. The accepted range is 0-1.
           */
          TinyColor.prototype.setAlpha = function (alpha) {
            this.a = boundAlpha(alpha);
            this.roundA = Math.round(100 * this.a) / 100;
            return this;
          };
          /**
           * Returns the object as a HSVA object.
           */
          TinyColor.prototype.toHsv = function () {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            return {
              h: hsv.h * 360,
              s: hsv.s,
              v: hsv.v,
              a: this.a
            };
          };
          /**
           * Returns the hsva values interpolated into a string with the following format:
           * "hsva(xxx, xxx, xxx, xx)".
           */
          TinyColor.prototype.toHsvString = function () {
            var hsv = rgbToHsv(this.r, this.g, this.b);
            var h = Math.round(hsv.h * 360);
            var s = Math.round(hsv.s * 100);
            var v = Math.round(hsv.v * 100);
            return this.a === 1 ? "hsv(".concat(h, ", ").concat(s, "%, ").concat(v, "%)") : "hsva(".concat(h, ", ").concat(s, "%, ").concat(v, "%, ").concat(this.roundA, ")");
          };
          /**
           * Returns the object as a HSLA object.
           */
          TinyColor.prototype.toHsl = function () {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            return {
              h: hsl.h * 360,
              s: hsl.s,
              l: hsl.l,
              a: this.a
            };
          };
          /**
           * Returns the hsla values interpolated into a string with the following format:
           * "hsla(xxx, xxx, xxx, xx)".
           */
          TinyColor.prototype.toHslString = function () {
            var hsl = rgbToHsl(this.r, this.g, this.b);
            var h = Math.round(hsl.h * 360);
            var s = Math.round(hsl.s * 100);
            var l = Math.round(hsl.l * 100);
            return this.a === 1 ? "hsl(".concat(h, ", ").concat(s, "%, ").concat(l, "%)") : "hsla(".concat(h, ", ").concat(s, "%, ").concat(l, "%, ").concat(this.roundA, ")");
          };
          /**
           * Returns the hex value of the color.
           * @param allow3Char will shorten hex value to 3 char if possible
           */
          TinyColor.prototype.toHex = function (allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return rgbToHex(this.r, this.g, this.b, allow3Char);
          };
          /**
           * Returns the hex value of the color -with a # appened.
           * @param allow3Char will shorten hex value to 3 char if possible
           */
          TinyColor.prototype.toHexString = function (allow3Char) {
            if (allow3Char === void 0) {
              allow3Char = false;
            }
            return '#' + this.toHex(allow3Char);
          };
          /**
           * Returns the hex 8 value of the color.
           * @param allow4Char will shorten hex value to 4 char if possible
           */
          TinyColor.prototype.toHex8 = function (allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return rgbaToHex(this.r, this.g, this.b, this.a, allow4Char);
          };
          /**
           * Returns the hex 8 value of the color -with a # appened.
           * @param allow4Char will shorten hex value to 4 char if possible
           */
          TinyColor.prototype.toHex8String = function (allow4Char) {
            if (allow4Char === void 0) {
              allow4Char = false;
            }
            return '#' + this.toHex8(allow4Char);
          };
          /**
           * Returns the object as a RGBA object.
           */
          TinyColor.prototype.toRgb = function () {
            return {
              r: Math.round(this.r),
              g: Math.round(this.g),
              b: Math.round(this.b),
              a: this.a
            };
          };
          /**
           * Returns the RGBA values interpolated into a string with the following format:
           * "RGBA(xxx, xxx, xxx, xx)".
           */
          TinyColor.prototype.toRgbString = function () {
            var r = Math.round(this.r);
            var g = Math.round(this.g);
            var b = Math.round(this.b);
            return this.a === 1 ? "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")") : "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(this.roundA, ")");
          };
          /**
           * Returns the object as a RGBA object.
           */
          TinyColor.prototype.toPercentageRgb = function () {
            var fmt = function fmt(x) {
              return "".concat(Math.round(bound01(x, 255) * 100), "%");
            };
            return {
              r: fmt(this.r),
              g: fmt(this.g),
              b: fmt(this.b),
              a: this.a
            };
          };
          /**
           * Returns the RGBA relative values interpolated into a string
           */
          TinyColor.prototype.toPercentageRgbString = function () {
            var rnd = function rnd(x) {
              return Math.round(bound01(x, 255) * 100);
            };
            return this.a === 1 ? "rgb(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%)") : "rgba(".concat(rnd(this.r), "%, ").concat(rnd(this.g), "%, ").concat(rnd(this.b), "%, ").concat(this.roundA, ")");
          };
          /**
           * The 'real' name of the color -if there is one.
           */
          TinyColor.prototype.toName = function () {
            if (this.a === 0) {
              return 'transparent';
            }
            if (this.a < 1) {
              return false;
            }
            var hex = '#' + rgbToHex(this.r, this.g, this.b, false);
            for (var _i = 0, _a = Object.entries(names); _i < _a.length; _i++) {
              var _b = _a[_i],
                key = _b[0],
                value = _b[1];
              if (hex === value) {
                return key;
              }
            }
            return false;
          };
          TinyColor.prototype.toString = function (format) {
            var formatSet = Boolean(format);
            format = format !== null && format !== void 0 ? format : this.format;
            var formattedString = false;
            var hasAlpha = this.a < 1 && this.a >= 0;
            var needsAlphaFormat = !formatSet && hasAlpha && (format.startsWith('hex') || format === 'name');
            if (needsAlphaFormat) {
              // Special case for "transparent", all other non-alpha formats
              // will return rgba when there is transparency.
              if (format === 'name' && this.a === 0) {
                return this.toName();
              }
              return this.toRgbString();
            }
            if (format === 'rgb') {
              formattedString = this.toRgbString();
            }
            if (format === 'prgb') {
              formattedString = this.toPercentageRgbString();
            }
            if (format === 'hex' || format === 'hex6') {
              formattedString = this.toHexString();
            }
            if (format === 'hex3') {
              formattedString = this.toHexString(true);
            }
            if (format === 'hex4') {
              formattedString = this.toHex8String(true);
            }
            if (format === 'hex8') {
              formattedString = this.toHex8String();
            }
            if (format === 'name') {
              formattedString = this.toName();
            }
            if (format === 'hsl') {
              formattedString = this.toHslString();
            }
            if (format === 'hsv') {
              formattedString = this.toHsvString();
            }
            return formattedString || this.toHexString();
          };
          TinyColor.prototype.toNumber = function () {
            return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
          };
          TinyColor.prototype.clone = function () {
            return new TinyColor(this.toString());
          };
          /**
           * Lighten the color a given amount. Providing 100 will always return white.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.lighten = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l += amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor(hsl);
          };
          /**
           * Brighten the color a given amount, from 0 to 100.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.brighten = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var rgb = this.toRgb();
            rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
            rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
            rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
            return new TinyColor(rgb);
          };
          /**
           * Darken the color a given amount, from 0 to 100.
           * Providing 100 will always return black.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.darken = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.l -= amount / 100;
            hsl.l = clamp01(hsl.l);
            return new TinyColor(hsl);
          };
          /**
           * Mix the color with pure white, from 0 to 100.
           * Providing 0 will do nothing, providing 100 will always return white.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.tint = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix('white', amount);
          };
          /**
           * Mix the color with pure black, from 0 to 100.
           * Providing 0 will do nothing, providing 100 will always return black.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.shade = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            return this.mix('black', amount);
          };
          /**
           * Desaturate the color a given amount, from 0 to 100.
           * Providing 100 will is the same as calling greyscale
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.desaturate = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s -= amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor(hsl);
          };
          /**
           * Saturate the color a given amount, from 0 to 100.
           * @param amount - valid between 1-100
           */
          TinyColor.prototype.saturate = function (amount) {
            if (amount === void 0) {
              amount = 10;
            }
            var hsl = this.toHsl();
            hsl.s += amount / 100;
            hsl.s = clamp01(hsl.s);
            return new TinyColor(hsl);
          };
          /**
           * Completely desaturates a color into greyscale.
           * Same as calling `desaturate(100)`
           */
          TinyColor.prototype.greyscale = function () {
            return this.desaturate(100);
          };
          /**
           * Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
           * Values outside of this range will be wrapped into this range.
           */
          TinyColor.prototype.spin = function (amount) {
            var hsl = this.toHsl();
            var hue = (hsl.h + amount) % 360;
            hsl.h = hue < 0 ? 360 + hue : hue;
            return new TinyColor(hsl);
          };
          /**
           * Mix the current color a given amount with another color, from 0 to 100.
           * 0 means no mixing (return current color).
           */
          TinyColor.prototype.mix = function (color, amount) {
            if (amount === void 0) {
              amount = 50;
            }
            var rgb1 = this.toRgb();
            var rgb2 = new TinyColor(color).toRgb();
            var p = amount / 100;
            var rgba = {
              r: (rgb2.r - rgb1.r) * p + rgb1.r,
              g: (rgb2.g - rgb1.g) * p + rgb1.g,
              b: (rgb2.b - rgb1.b) * p + rgb1.b,
              a: (rgb2.a - rgb1.a) * p + rgb1.a
            };
            return new TinyColor(rgba);
          };
          TinyColor.prototype.analogous = function (results, slices) {
            if (results === void 0) {
              results = 6;
            }
            if (slices === void 0) {
              slices = 30;
            }
            var hsl = this.toHsl();
            var part = 360 / slices;
            var ret = [this];
            for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
              hsl.h = (hsl.h + part) % 360;
              ret.push(new TinyColor(hsl));
            }
            return ret;
          };
          /**
           * taken from https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js
           */
          TinyColor.prototype.complement = function () {
            var hsl = this.toHsl();
            hsl.h = (hsl.h + 180) % 360;
            return new TinyColor(hsl);
          };
          TinyColor.prototype.monochromatic = function (results) {
            if (results === void 0) {
              results = 6;
            }
            var hsv = this.toHsv();
            var h = hsv.h;
            var s = hsv.s;
            var v = hsv.v;
            var res = [];
            var modification = 1 / results;
            while (results--) {
              res.push(new TinyColor({
                h: h,
                s: s,
                v: v
              }));
              v = (v + modification) % 1;
            }
            return res;
          };
          TinyColor.prototype.splitcomplement = function () {
            var hsl = this.toHsl();
            var h = hsl.h;
            return [this, new TinyColor({
              h: (h + 72) % 360,
              s: hsl.s,
              l: hsl.l
            }), new TinyColor({
              h: (h + 216) % 360,
              s: hsl.s,
              l: hsl.l
            })];
          };
          /**
           * Compute how the color would appear on a background
           */
          TinyColor.prototype.onBackground = function (background) {
            var fg = this.toRgb();
            var bg = new TinyColor(background).toRgb();
            return new TinyColor({
              r: bg.r + (fg.r - bg.r) * fg.a,
              g: bg.g + (fg.g - bg.g) * fg.a,
              b: bg.b + (fg.b - bg.b) * fg.a
            });
          };
          /**
           * Alias for `polyad(3)`
           */
          TinyColor.prototype.triad = function () {
            return this.polyad(3);
          };
          /**
           * Alias for `polyad(4)`
           */
          TinyColor.prototype.tetrad = function () {
            return this.polyad(4);
          };
          /**
           * Get polyad colors, like (for 1, 2, 3, 4, 5, 6, 7, 8, etc...)
           * monad, dyad, triad, tetrad, pentad, hexad, heptad, octad, etc...
           */
          TinyColor.prototype.polyad = function (n) {
            var hsl = this.toHsl();
            var h = hsl.h;
            var result = [this];
            var increment = 360 / n;
            for (var i = 1; i < n; i++) {
              result.push(new TinyColor({
                h: (h + i * increment) % 360,
                s: hsl.s,
                l: hsl.l
              }));
            }
            return result;
          };
          /**
           * compare color vs current color
           */
          TinyColor.prototype.equals = function (color) {
            return this.toRgbString() === new TinyColor(color).toRgbString();
          };
          return TinyColor;
        }();
        var hueStep = 2; // 色相阶梯

        var saturationStep = 0.16; // 饱和度阶梯，浅色部分

        var saturationStep2 = 0.05; // 饱和度阶梯，深色部分

        var brightnessStep1 = 0.05; // 亮度阶梯，浅色部分

        var brightnessStep2 = 0.15; // 亮度阶梯，深色部分

        var lightColorCount = 5; // 浅色数量，主色上

        var darkColorCount = 4; // 深色数量，主色下
        // 暗色主题颜色映射关系表

        var darkColorMap = [{
          index: 7,
          opacity: 0.15
        }, {
          index: 6,
          opacity: 0.25
        }, {
          index: 5,
          opacity: 0.3
        }, {
          index: 5,
          opacity: 0.45
        }, {
          index: 5,
          opacity: 0.65
        }, {
          index: 5,
          opacity: 0.85
        }, {
          index: 4,
          opacity: 0.9
        }, {
          index: 3,
          opacity: 0.95
        }, {
          index: 2,
          opacity: 0.97
        }, {
          index: 1,
          opacity: 0.98
        }]; // Wrapper function ported from TinyColor.prototype.toHsv
        // Keep it here because of `hsv.h * 360`

        function toHsv(_ref) {
          var r = _ref.r,
            g = _ref.g,
            b = _ref.b;
          var hsv = rgbToHsv(r, g, b);
          return {
            h: hsv.h * 360,
            s: hsv.s,
            v: hsv.v
          };
        } // Wrapper function ported from TinyColor.prototype.toHexString
        // Keep it here because of the prefix `#`

        function toHex(_ref2) {
          var r = _ref2.r,
            g = _ref2.g,
            b = _ref2.b;
          return "#".concat(rgbToHex(r, g, b, false));
        } // Wrapper function ported from TinyColor.prototype.mix, not treeshakable.
        // Amount in range [0, 1]
        // Assume color1 & color2 has no alpha, since the following src code did so.

        function mix(rgb1, rgb2, amount) {
          var p = amount / 100;
          var rgb = {
            r: (rgb2.r - rgb1.r) * p + rgb1.r,
            g: (rgb2.g - rgb1.g) * p + rgb1.g,
            b: (rgb2.b - rgb1.b) * p + rgb1.b
          };
          return rgb;
        }
        function getHue(hsv, i, light) {
          var hue; // 根据色相不同，色相转向不同

          if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
            hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
          } else {
            hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
          }
          if (hue < 0) {
            hue += 360;
          } else if (hue >= 360) {
            hue -= 360;
          }
          return hue;
        }
        function getSaturation(hsv, i, light) {
          // grey color don't change saturation
          if (hsv.h === 0 && hsv.s === 0) {
            return hsv.s;
          }
          var saturation;
          if (light) {
            saturation = hsv.s - saturationStep * i;
          } else if (i === darkColorCount) {
            saturation = hsv.s + saturationStep;
          } else {
            saturation = hsv.s + saturationStep2 * i;
          } // 边界值修正

          if (saturation > 1) {
            saturation = 1;
          } // 第一格的 s 限制在 0.06-0.1 之间

          if (light && i === lightColorCount && saturation > 0.1) {
            saturation = 0.1;
          }
          if (saturation < 0.06) {
            saturation = 0.06;
          }
          return Number(saturation.toFixed(2));
        }
        function getValue(hsv, i, light) {
          var value;
          if (light) {
            value = hsv.v + brightnessStep1 * i;
          } else {
            value = hsv.v - brightnessStep2 * i;
          }
          if (value > 1) {
            value = 1;
          }
          return Number(value.toFixed(2));
        }
        function generate$1(color) {
          var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var patterns = [];
          var pColor = inputToRGB(color);
          for (var i = lightColorCount; i > 0; i -= 1) {
            var hsv = toHsv(pColor);
            var colorString = toHex(inputToRGB({
              h: getHue(hsv, i, true),
              s: getSaturation(hsv, i, true),
              v: getValue(hsv, i, true)
            }));
            patterns.push(colorString);
          }
          patterns.push(toHex(pColor));
          for (var _i = 1; _i <= darkColorCount; _i += 1) {
            var _hsv = toHsv(pColor);
            var _colorString = toHex(inputToRGB({
              h: getHue(_hsv, _i),
              s: getSaturation(_hsv, _i),
              v: getValue(_hsv, _i)
            }));
            patterns.push(_colorString);
          } // dark theme patterns

          if (opts.theme === 'dark') {
            return darkColorMap.map(function (_ref3) {
              var index = _ref3.index,
                opacity = _ref3.opacity;
              var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || '#141414'), inputToRGB(patterns[index]), opacity * 100));
              return darkColorString;
            });
          }
          return patterns;
        }
        var presetPrimaryColors = {
          red: '#F5222D',
          volcano: '#FA541C',
          orange: '#FA8C16',
          gold: '#FAAD14',
          yellow: '#FADB14',
          lime: '#A0D911',
          green: '#52C41A',
          cyan: '#13C2C2',
          blue: '#1890FF',
          geekblue: '#2F54EB',
          purple: '#722ED1',
          magenta: '#EB2F96',
          grey: '#666666'
        };
        var presetPalettes = {};
        var presetDarkPalettes = {};
        Object.keys(presetPrimaryColors).forEach(function (key) {
          presetPalettes[key] = generate$1(presetPrimaryColors[key]);
          presetPalettes[key].primary = presetPalettes[key][5]; // dark presetPalettes

          presetDarkPalettes[key] = generate$1(presetPrimaryColors[key], {
            theme: 'dark',
            backgroundColor: '#141414'
          });
          presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
        });
        var genControlHeight = function genControlHeight(token) {
          var controlHeight = token.controlHeight;
          return {
            controlHeightSM: controlHeight * 0.75,
            controlHeightXS: controlHeight * 0.5,
            controlHeightLG: controlHeight * 1.25
          };
        };
        var genControlHeight$1 = genControlHeight;
        function genSizeMapToken(token) {
          var sizeUnit = token.sizeUnit,
            sizeStep = token.sizeStep;
          return {
            sizeXXL: sizeUnit * (sizeStep + 8),
            sizeXL: sizeUnit * (sizeStep + 4),
            sizeLG: sizeUnit * (sizeStep + 2),
            sizeMD: sizeUnit * (sizeStep + 1),
            sizeMS: sizeUnit * sizeStep,
            size: sizeUnit * sizeStep,
            sizeSM: sizeUnit * (sizeStep - 1),
            sizeXS: sizeUnit * (sizeStep - 2),
            sizeXXS: sizeUnit * (sizeStep - 3) // 4
          };
        }

        var defaultPresetColors = {
          blue: '#1677ff',
          purple: '#722ED1',
          cyan: '#13C2C2',
          green: '#52C41A',
          magenta: '#EB2F96',
          pink: '#eb2f96',
          red: '#F5222D',
          orange: '#FA8C16',
          yellow: '#FADB14',
          volcano: '#FA541C',
          geekblue: '#2F54EB',
          gold: '#FAAD14',
          lime: '#A0D911'
        };
        var seedToken = _extends$1(_extends$1({}, defaultPresetColors), {
          // Color
          colorPrimary: '#1677ff',
          colorSuccess: '#52c41a',
          colorWarning: '#faad14',
          colorError: '#f5222d',
          colorInfo: '#1677ff',
          colorTextBase: '',
          colorBgBase: '',
          // Font
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,\n'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n'Noto Color Emoji'",
          fontSize: 14,
          // Line
          lineWidth: 1,
          lineType: 'solid',
          // Motion
          motionUnit: 0.1,
          motionBase: 0,
          motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
          motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
          motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
          motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
          motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
          // Radius
          borderRadius: 6,
          // Size
          sizeUnit: 4,
          sizeStep: 4,
          sizePopupArrow: 16,
          // Control Base
          controlHeight: 32,
          // zIndex
          zIndexBase: 0,
          zIndexPopupBase: 1000,
          // Image
          opacityImage: 1,
          // Wireframe
          wireframe: false
        });
        var defaultSeedToken = seedToken;
        function genColorMapToken(seed, _ref) {
          var generateColorPalettes = _ref.generateColorPalettes,
            generateNeutralColorPalettes = _ref.generateNeutralColorPalettes;
          var colorSuccessBase = seed.colorSuccess,
            colorWarningBase = seed.colorWarning,
            colorErrorBase = seed.colorError,
            colorInfoBase = seed.colorInfo,
            colorPrimaryBase = seed.colorPrimary,
            colorBgBase = seed.colorBgBase,
            colorTextBase = seed.colorTextBase;
          var primaryColors = generateColorPalettes(colorPrimaryBase);
          var successColors = generateColorPalettes(colorSuccessBase);
          var warningColors = generateColorPalettes(colorWarningBase);
          var errorColors = generateColorPalettes(colorErrorBase);
          var infoColors = generateColorPalettes(colorInfoBase);
          var neutralColors = generateNeutralColorPalettes(colorBgBase, colorTextBase);
          return _extends$1(_extends$1({}, neutralColors), {
            colorPrimaryBg: primaryColors[1],
            colorPrimaryBgHover: primaryColors[2],
            colorPrimaryBorder: primaryColors[3],
            colorPrimaryBorderHover: primaryColors[4],
            colorPrimaryHover: primaryColors[5],
            colorPrimary: primaryColors[6],
            colorPrimaryActive: primaryColors[7],
            colorPrimaryTextHover: primaryColors[8],
            colorPrimaryText: primaryColors[9],
            colorPrimaryTextActive: primaryColors[10],
            colorSuccessBg: successColors[1],
            colorSuccessBgHover: successColors[2],
            colorSuccessBorder: successColors[3],
            colorSuccessBorderHover: successColors[4],
            colorSuccessHover: successColors[4],
            colorSuccess: successColors[6],
            colorSuccessActive: successColors[7],
            colorSuccessTextHover: successColors[8],
            colorSuccessText: successColors[9],
            colorSuccessTextActive: successColors[10],
            colorErrorBg: errorColors[1],
            colorErrorBgHover: errorColors[2],
            colorErrorBorder: errorColors[3],
            colorErrorBorderHover: errorColors[4],
            colorErrorHover: errorColors[4],
            colorError: errorColors[5],
            colorErrorActive: errorColors[7],
            colorErrorTextHover: errorColors[8],
            colorErrorText: errorColors[9],
            colorErrorTextActive: errorColors[10],
            colorWarningBg: warningColors[1],
            colorWarningBgHover: warningColors[2],
            colorWarningBorder: warningColors[3],
            colorWarningBorderHover: warningColors[4],
            colorWarningHover: warningColors[4],
            colorWarning: warningColors[6],
            colorWarningActive: warningColors[7],
            colorWarningTextHover: warningColors[8],
            colorWarningText: warningColors[9],
            colorWarningTextActive: warningColors[10],
            colorInfoBg: infoColors[1],
            colorInfoBgHover: infoColors[2],
            colorInfoBorder: infoColors[3],
            colorInfoBorderHover: infoColors[4],
            colorInfoHover: infoColors[4],
            colorInfo: infoColors[6],
            colorInfoActive: infoColors[7],
            colorInfoTextHover: infoColors[8],
            colorInfoText: infoColors[9],
            colorInfoTextActive: infoColors[10],
            colorBgMask: new TinyColor('#000').setAlpha(0.45).toRgbString(),
            colorWhite: '#fff'
          });
        }

        // https://zhuanlan.zhihu.com/p/32746810
        function getFontSizes(base) {
          var fontSizes = new Array(10).fill(null).map(function (_, index) {
            var i = index - 1;
            var baseSize = base * Math.pow(2.71828, i / 5);
            var intSize = index > 1 ? Math.floor(baseSize) : Math.ceil(baseSize);
            // Convert to even
            return Math.floor(intSize / 2) * 2;
          });
          fontSizes[1] = base;
          return fontSizes.map(function (size) {
            var height = size + 8;
            return {
              size: size,
              lineHeight: height / size
            };
          });
        }
        var genRadius = function genRadius(radiusBase) {
          var radiusLG = radiusBase;
          var radiusSM = radiusBase;
          var radiusXS = radiusBase;
          var radiusOuter = radiusBase;
          // radiusLG
          if (radiusBase < 6 && radiusBase >= 5) {
            radiusLG = radiusBase + 1;
          } else if (radiusBase < 16 && radiusBase >= 6) {
            radiusLG = radiusBase + 2;
          } else if (radiusBase >= 16) {
            radiusLG = 16;
          }
          // radiusSM
          if (radiusBase < 7 && radiusBase >= 5) {
            radiusSM = 4;
          } else if (radiusBase < 8 && radiusBase >= 7) {
            radiusSM = 5;
          } else if (radiusBase < 14 && radiusBase >= 8) {
            radiusSM = 6;
          } else if (radiusBase < 16 && radiusBase >= 14) {
            radiusSM = 7;
          } else if (radiusBase >= 16) {
            radiusSM = 8;
          }
          // radiusXS
          if (radiusBase < 6 && radiusBase >= 2) {
            radiusXS = 1;
          } else if (radiusBase >= 6) {
            radiusXS = 2;
          }
          // radiusOuter
          if (radiusBase > 4 && radiusBase < 8) {
            radiusOuter = 4;
          } else if (radiusBase >= 8) {
            radiusOuter = 6;
          }
          return {
            borderRadius: radiusBase > 16 ? 16 : radiusBase,
            borderRadiusXS: radiusXS,
            borderRadiusSM: radiusSM,
            borderRadiusLG: radiusLG,
            borderRadiusOuter: radiusOuter
          };
        };
        var genRadius$1 = genRadius;
        function genCommonMapToken(token) {
          var motionUnit = token.motionUnit,
            motionBase = token.motionBase,
            fontSize = token.fontSize,
            borderRadius = token.borderRadius,
            lineWidth = token.lineWidth;
          var fontSizes = getFontSizes(fontSize);
          return _extends$1({
            // motion
            motionDurationFast: "".concat((motionBase + motionUnit).toFixed(1), "s"),
            motionDurationMid: "".concat((motionBase + motionUnit * 2).toFixed(1), "s"),
            motionDurationSlow: "".concat((motionBase + motionUnit * 3).toFixed(1), "s"),
            // font
            fontSizes: fontSizes.map(function (fs) {
              return fs.size;
            }),
            lineHeights: fontSizes.map(function (fs) {
              return fs.lineHeight;
            }),
            // line
            lineWidthBold: lineWidth + 1
          }, genRadius$1(borderRadius));
        }
        var getAlphaColor$1 = function getAlphaColor(baseColor, alpha) {
          return new TinyColor(baseColor).setAlpha(alpha).toRgbString();
        };
        var getSolidColor = function getSolidColor(baseColor, brightness) {
          var instance = new TinyColor(baseColor);
          return instance.darken(brightness).toHexString();
        };
        var generateColorPalettes = function generateColorPalettes(baseColor) {
          var colors = generate$1(baseColor);
          return {
            1: colors[0],
            2: colors[1],
            3: colors[2],
            4: colors[3],
            5: colors[4],
            6: colors[5],
            7: colors[6],
            8: colors[4],
            9: colors[5],
            10: colors[6]
            // 8: colors[7],
            // 9: colors[8],
            // 10: colors[9],
          };
        };

        var generateNeutralColorPalettes = function generateNeutralColorPalettes(bgBaseColor, textBaseColor) {
          var colorBgBase = bgBaseColor || '#fff';
          var colorTextBase = textBaseColor || '#000';
          return {
            colorBgBase: colorBgBase,
            colorTextBase: colorTextBase,
            colorText: getAlphaColor$1(colorTextBase, 0.88),
            colorTextSecondary: getAlphaColor$1(colorTextBase, 0.65),
            colorTextTertiary: getAlphaColor$1(colorTextBase, 0.45),
            colorTextQuaternary: getAlphaColor$1(colorTextBase, 0.25),
            colorFill: getAlphaColor$1(colorTextBase, 0.15),
            colorFillSecondary: getAlphaColor$1(colorTextBase, 0.06),
            colorFillTertiary: getAlphaColor$1(colorTextBase, 0.04),
            colorFillQuaternary: getAlphaColor$1(colorTextBase, 0.02),
            colorBgLayout: getSolidColor(colorBgBase, 4),
            colorBgContainer: getSolidColor(colorBgBase, 0),
            colorBgElevated: getSolidColor(colorBgBase, 0),
            colorBgSpotlight: getAlphaColor$1(colorTextBase, 0.85),
            colorBorder: getSolidColor(colorBgBase, 15),
            colorBorderSecondary: getSolidColor(colorBgBase, 6)
          };
        };
        function derivative(token) {
          var colorPalettes = Object.keys(defaultPresetColors).map(function (colorKey) {
            var colors = generate$1(token[colorKey]);
            return new Array(10).fill(1).reduce(function (prev, _, i) {
              prev["".concat(colorKey, "-").concat(i + 1)] = colors[i];
              return prev;
            }, {});
          }).reduce(function (prev, cur) {
            prev = _extends$1(_extends$1({}, prev), cur);
            return prev;
          }, {});
          return _extends$1(_extends$1(_extends$1(_extends$1(_extends$1(_extends$1({}, token), colorPalettes), genColorMapToken(token, {
            generateColorPalettes: generateColorPalettes,
            generateNeutralColorPalettes: generateNeutralColorPalettes
          })), genSizeMapToken(token)), genControlHeight$1(token)), genCommonMapToken(token));
        }
        function isStableColor(color) {
          return color >= 0 && color <= 255;
        }
        function getAlphaColor(frontColor, backgroundColor) {
          var _TinyColor$toRgb = new TinyColor(frontColor).toRgb(),
            fR = _TinyColor$toRgb.r,
            fG = _TinyColor$toRgb.g,
            fB = _TinyColor$toRgb.b,
            originAlpha = _TinyColor$toRgb.a;
          if (originAlpha < 1) {
            return frontColor;
          }
          var _TinyColor$toRgb2 = new TinyColor(backgroundColor).toRgb(),
            bR = _TinyColor$toRgb2.r,
            bG = _TinyColor$toRgb2.g,
            bB = _TinyColor$toRgb2.b;
          for (var fA = 0.01; fA <= 1; fA += 0.01) {
            var r = Math.round((fR - bR * (1 - fA)) / fA);
            var g = Math.round((fG - bG * (1 - fA)) / fA);
            var b = Math.round((fB - bB * (1 - fA)) / fA);
            if (isStableColor(r) && isStableColor(g) && isStableColor(b)) return new TinyColor({
              r: r,
              g: g,
              b: b,
              a: Math.round(fA * 100) / 100
            }).toRgbString();
          }
          // fallback
          /* istanbul ignore next */
          return new TinyColor({
            r: fR,
            g: fG,
            b: fB,
            a: 1
          }).toRgbString();
        }
        var __rest$1 = globalThis && globalThis.__rest || function (s, e) {
          var t = {};
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          }
          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        /**
         * Seed (designer) > Derivative (designer) > Alias (developer).
         *
         * Merge seed & derivative & override token and generate alias token for developer.
         */
        function formatToken(derivativeToken) {
          var override = derivativeToken.override,
            restToken = __rest$1(derivativeToken, ["override"]);
          var overrideTokens = _extends$1({}, override);
          Object.keys(defaultSeedToken).forEach(function (token) {
            delete overrideTokens[token];
          });
          var mergedToken = _extends$1(_extends$1({}, restToken), overrideTokens);
          var fontSizes = mergedToken.fontSizes,
            lineHeights = mergedToken.lineHeights;
          var screenXS = 480;
          var screenSM = 576;
          var screenMD = 768;
          var screenLG = 992;
          var screenXL = 1200;
          var screenXXL = 1600;
          var fontSizeSM = fontSizes[0];
          // Generate alias token
          var aliasToken = _extends$1(_extends$1(_extends$1({}, mergedToken), {
            colorLink: mergedToken.colorInfoText,
            colorLinkHover: mergedToken.colorInfoHover,
            colorLinkActive: mergedToken.colorInfoActive,
            // ============== Background ============== //
            colorFillContent: mergedToken.colorFillSecondary,
            colorFillContentHover: mergedToken.colorFill,
            colorFillAlter: mergedToken.colorFillQuaternary,
            colorBgContainerDisabled: mergedToken.colorFillTertiary,
            // ============== Split ============== //
            colorBorderBg: mergedToken.colorBgContainer,
            colorSplit: getAlphaColor(mergedToken.colorBorderSecondary, mergedToken.colorBgContainer),
            // ============== Text ============== //
            colorTextPlaceholder: mergedToken.colorTextQuaternary,
            colorTextDisabled: mergedToken.colorTextQuaternary,
            colorTextHeading: mergedToken.colorText,
            colorTextLabel: mergedToken.colorTextSecondary,
            colorTextDescription: mergedToken.colorTextTertiary,
            colorTextLightSolid: mergedToken.colorWhite,
            colorHighlight: mergedToken.colorError,
            colorBgTextHover: mergedToken.colorFillSecondary,
            colorBgTextActive: mergedToken.colorFill,
            colorIcon: mergedToken.colorTextTertiary,
            colorIconHover: mergedToken.colorText,
            colorErrorOutline: getAlphaColor(mergedToken.colorErrorBg, mergedToken.colorBgContainer),
            colorWarningOutline: getAlphaColor(mergedToken.colorWarningBg, mergedToken.colorBgContainer),
            // Font
            fontSizeSM: fontSizeSM,
            fontSize: fontSizes[1],
            fontSizeLG: fontSizes[2],
            fontSizeXL: fontSizes[3],
            fontSizeHeading1: fontSizes[6],
            fontSizeHeading2: fontSizes[5],
            fontSizeHeading3: fontSizes[4],
            fontSizeHeading4: fontSizes[3],
            fontSizeHeading5: fontSizes[2],
            fontSizeIcon: fontSizeSM,
            lineHeight: lineHeights[1],
            lineHeightLG: lineHeights[2],
            lineHeightSM: lineHeights[0],
            lineHeightHeading1: lineHeights[6],
            lineHeightHeading2: lineHeights[5],
            lineHeightHeading3: lineHeights[4],
            lineHeightHeading4: lineHeights[3],
            lineHeightHeading5: lineHeights[2],
            // Control
            lineWidth: mergedToken.lineWidth,
            controlOutlineWidth: mergedToken.lineWidth * 2,
            // Checkbox size and expand icon size
            controlInteractiveSize: mergedToken.controlHeight / 2,
            controlItemBgHover: mergedToken.colorFillTertiary,
            controlItemBgActive: mergedToken.colorPrimaryBg,
            controlItemBgActiveHover: mergedToken.colorPrimaryBgHover,
            controlItemBgActiveDisabled: mergedToken.colorFill,
            controlTmpOutline: mergedToken.colorFillQuaternary,
            controlOutline: getAlphaColor(mergedToken.colorPrimaryBg, mergedToken.colorBgContainer),
            lineType: mergedToken.lineType,
            borderRadius: mergedToken.borderRadius,
            borderRadiusXS: mergedToken.borderRadiusXS,
            borderRadiusSM: mergedToken.borderRadiusSM,
            borderRadiusLG: mergedToken.borderRadiusLG,
            fontWeightStrong: 600,
            opacityLoading: 0.65,
            linkDecoration: 'none',
            linkHoverDecoration: 'none',
            linkFocusDecoration: 'none',
            controlPaddingHorizontal: 12,
            controlPaddingHorizontalSM: 8,
            paddingXXS: mergedToken.sizeXXS,
            paddingXS: mergedToken.sizeXS,
            paddingSM: mergedToken.sizeSM,
            padding: mergedToken.size,
            paddingMD: mergedToken.sizeMD,
            paddingLG: mergedToken.sizeLG,
            paddingXL: mergedToken.sizeXL,
            paddingContentHorizontalLG: mergedToken.sizeLG,
            paddingContentVerticalLG: mergedToken.sizeMS,
            paddingContentHorizontal: mergedToken.sizeMS,
            paddingContentVertical: mergedToken.sizeSM,
            paddingContentHorizontalSM: mergedToken.size,
            paddingContentVerticalSM: mergedToken.sizeXS,
            marginXXS: mergedToken.sizeXXS,
            marginXS: mergedToken.sizeXS,
            marginSM: mergedToken.sizeSM,
            margin: mergedToken.size,
            marginMD: mergedToken.sizeMD,
            marginLG: mergedToken.sizeLG,
            marginXL: mergedToken.sizeXL,
            marginXXL: mergedToken.sizeXXL,
            boxShadow: "\n      0 1px 2px 0 rgba(0, 0, 0, 0.03),\n      0 1px 6px -1px rgba(0, 0, 0, 0.02),\n      0 2px 4px 0 rgba(0, 0, 0, 0.02)\n    ",
            boxShadowSecondary: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            screenXS: screenXS,
            screenXSMin: screenXS,
            screenXSMax: screenXS - 1,
            screenSM: screenSM,
            screenSMMin: screenSM,
            screenSMMax: screenSM - 1,
            screenMD: screenMD,
            screenMDMin: screenMD,
            screenMDMax: screenMD - 1,
            screenLG: screenLG,
            screenLGMin: screenLG,
            screenLGMax: screenLG - 1,
            screenXL: screenXL,
            screenXLMin: screenXL,
            screenXLMax: screenXL - 1,
            screenXXL: screenXXL,
            screenXXLMin: screenXXL,
            screenXXLMax: screenXXL - 1,
            // FIXME: component box-shadow, should be removed
            boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
            boxShadowCard: "\n      0 1px 2px -2px ".concat(new TinyColor('rgba(0, 0, 0, 0.16)').toRgbString(), ",\n      0 3px 6px 0 ").concat(new TinyColor('rgba(0, 0, 0, 0.12)').toRgbString(), ",\n      0 5px 12px 4px ").concat(new TinyColor('rgba(0, 0, 0, 0.09)').toRgbString(), "\n    "),
            boxShadowDrawerRight: "\n      -6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      -3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      -9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerLeft: "\n      6px 0 16px 0 rgba(0, 0, 0, 0.08),\n      3px 0 6px -4px rgba(0, 0, 0, 0.12),\n      9px 0 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerUp: "\n      0 6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowDrawerDown: "\n      0 -6px 16px 0 rgba(0, 0, 0, 0.08),\n      0 -3px 6px -4px rgba(0, 0, 0, 0.12),\n      0 -9px 28px 8px rgba(0, 0, 0, 0.05)\n    ",
            boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
            boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
          }), overrideTokens);
          return aliasToken;
        }
        var resetComponent = exports('z', function resetComponent(token) {
          return {
            boxSizing: 'border-box',
            margin: 0,
            padding: 0,
            color: token.colorText,
            fontSize: token.fontSize,
            // font-variant: @font-variant-base;
            lineHeight: token.lineHeight,
            listStyle: 'none',
            // font-feature-settings: @font-feature-settings-base;
            fontFamily: token.fontFamily
          };
        });
        var genLinkStyle = function genLinkStyle(token) {
          var _a;
          return {
            a: (_a = {
              color: token.colorLink,
              textDecoration: token.linkDecoration,
              backgroundColor: 'transparent',
              outline: 'none',
              cursor: 'pointer',
              transition: "color ".concat(token.motionDurationSlow),
              '-webkit-text-decoration-skip': 'objects',
              '&:hover': {
                color: token.colorLinkHover
              },
              '&:active': {
                color: token.colorLinkActive
              }
            }, _defineProperty(_a, "&:active,\n  &:hover", {
              textDecoration: token.linkHoverDecoration,
              outline: 0
            }), _defineProperty(_a, '&:focus', {
              textDecoration: token.linkFocusDecoration,
              outline: 0
            }), _defineProperty(_a, '&[disabled]', {
              color: token.colorTextDisabled,
              cursor: 'not-allowed'
            }), _a)
          };
        };
        var genCommonStyle = function genCommonStyle(token, componentPrefixCls) {
          var fontFamily = token.fontFamily,
            fontSize = token.fontSize;
          var rootPrefixSelector = "[class^=\"".concat(componentPrefixCls, "\"], [class*=\" ").concat(componentPrefixCls, "\"]");
          return _defineProperty({}, rootPrefixSelector, _defineProperty({
            fontFamily: fontFamily,
            fontSize: fontSize,
            boxSizing: 'border-box',
            '&::before, &::after': {
              boxSizing: 'border-box'
            }
          }, rootPrefixSelector, {
            boxSizing: 'border-box',
            '&::before, &::after': {
              boxSizing: 'border-box'
            }
          }));
        };
        var genFocusOutline = function genFocusOutline(token) {
          return {
            outline: "".concat(token.lineWidth * 4, "px solid ").concat(token.colorPrimaryBorder),
            outlineOffset: 1,
            transition: 'outline-offset 0s, outline 0s'
          };
        };
        var genFocusStyle = exports('r', function genFocusStyle(token) {
          return {
            '&:focus-visible': _extends$1({}, genFocusOutline(token))
          };
        });
        var defaultIconPrefixCls = 'anticon';
        var defaultGetPrefixCls = function defaultGetPrefixCls(suffixCls, customizePrefixCls) {
          if (customizePrefixCls) return customizePrefixCls;
          return suffixCls ? "ant-".concat(suffixCls) : 'ant';
        };
        // zombieJ: 🚨 Do not pass `defaultRenderEmpty` here since it will case circular dependency.
        var ConfigContext = exports('C', /*#__PURE__*/react.exports.createContext({
          // We provide a default function for Context without provider
          getPrefixCls: defaultGetPrefixCls,
          iconPrefixCls: defaultIconPrefixCls
        }));
        var ConfigConsumer = exports('m', ConfigContext.Consumer);
        function genComponentStyleHook(component, styleFn, getDefaultToken) {
          return function (prefixCls) {
            var _useToken = useToken(),
              _useToken2 = _slicedToArray(_useToken, 3),
              theme = _useToken2[0],
              token = _useToken2[1],
              hashId = _useToken2[2];
            var _useContext = react.exports.useContext(ConfigContext),
              getPrefixCls = _useContext.getPrefixCls,
              iconPrefixCls = _useContext.iconPrefixCls;
            var rootPrefixCls = getPrefixCls();
            // Generate style for all a tags in antd component.
            useStyleRegister({
              theme: theme,
              token: token,
              hashId: hashId,
              path: ['Shared', rootPrefixCls]
            }, function () {
              return [{
                // Link
                '&': genLinkStyle(token)
              }];
            });
            return [useStyleRegister({
              theme: theme,
              token: token,
              hashId: hashId,
              path: [component, prefixCls, iconPrefixCls]
            }, function () {
              var _statisticToken = statisticToken(token),
                proxyToken = _statisticToken.token,
                flush = _statisticToken.flush;
              var defaultComponentToken = typeof getDefaultToken === 'function' ? getDefaultToken(proxyToken) : getDefaultToken;
              var mergedComponentToken = _extends$1(_extends$1({}, defaultComponentToken), token[component]);
              var componentCls = ".".concat(prefixCls);
              var mergedToken = merge(proxyToken, {
                componentCls: componentCls,
                prefixCls: prefixCls,
                iconCls: ".".concat(iconPrefixCls),
                antCls: ".".concat(rootPrefixCls)
              }, mergedComponentToken);
              var styleInterpolation = styleFn(mergedToken, {
                hashId: hashId,
                prefixCls: prefixCls,
                rootPrefixCls: rootPrefixCls,
                iconPrefixCls: iconPrefixCls,
                overrideComponentToken: token[component]
              });
              flush(component, mergedComponentToken);
              return [genCommonStyle(token, prefixCls), styleInterpolation];
            }), hashId];
          };
        }
        var enableStatistic = "test" !== 'production';
        var recording = true;
        /**
         * This function will do as `Object.assign` in production. But will use Object.defineProperty:get to
         * pass all value access in development. To support statistic field usage with alias token.
         */
        function merge() {
          for (var _len = arguments.length, objs = new Array(_len), _key = 0; _key < _len; _key++) {
            objs[_key] = arguments[_key];
          }
          recording = false;
          var ret = {};
          objs.forEach(function (obj) {
            var keys = Object.keys(obj);
            keys.forEach(function (key) {
              Object.defineProperty(ret, key, {
                configurable: true,
                enumerable: true,
                get: function get() {
                  return obj[key];
                }
              });
            });
          });
          recording = true;
          return ret;
        }
        /* istanbul ignore next */
        function noop() {}
        /** Statistic token usage case. Should use `merge` function if you do not want spread record. */
        function statisticToken(token) {
          var tokenKeys;
          var proxy = token;
          var flush = noop;
          if (enableStatistic) {
            tokenKeys = new Set();
            proxy = new Proxy(token, {
              get: function get(obj, prop) {
                if (recording) {
                  tokenKeys.add(prop);
                }
                return obj[prop];
              }
            });
            flush = function flush(componentName, componentToken) {
              ({
                global: Array.from(tokenKeys),
                component: componentToken
              });
            };
          }
          return {
            token: proxy,
            keys: tokenKeys,
            flush: flush
          };
        }
        var defaultTheme = createTheme(derivative);
        // ================================ Context =================================
        // To ensure snapshot stable. We disable hashed in test env.
        var defaultConfig = {
          token: defaultSeedToken,
          hashed: true
        };
        var DesignTokenContext = /*#__PURE__*/React.createContext(defaultConfig);
        // ================================== Hook ==================================
        // In dev env, we refresh salt per hour to avoid user use this
        // Note: Do not modify this to real time update which will make debug harder
        var saltPrefix = "".concat(version, "-").concat(new Date().getHours());
        function useToken() {
          var _React$useContext = React.useContext(DesignTokenContext),
            rootDesignToken = _React$useContext.token,
            hashed = _React$useContext.hashed,
            theme = _React$useContext.theme,
            components = _React$useContext.components;
          var salt = "".concat(saltPrefix, "-").concat(hashed || '');
          var mergedTheme = theme || defaultTheme;
          var _useCacheToken = useCacheToken(mergedTheme, [defaultSeedToken, rootDesignToken], {
              salt: salt,
              override: _extends$1({
                override: rootDesignToken
              }, components),
              formatToken: formatToken
            }),
            _useCacheToken2 = _slicedToArray(_useCacheToken, 2),
            token = _useCacheToken2[0],
            hashId = _useCacheToken2[1];
          return [mergedTheme, token, hashed ? hashId : ''];
        }

        /* eslint-disable import/prefer-default-export, prefer-destructuring */
        var dynamicStyleMark = "-ant-".concat(Date.now(), "-").concat(Math.random());
        function getStyle(globalPrefixCls, theme) {
          var variables = {};
          var formatColor = function formatColor(color, updater) {
            var clone = color.clone();
            clone = (updater === null || updater === void 0 ? void 0 : updater(clone)) || clone;
            return clone.toRgbString();
          };
          var fillColor = function fillColor(colorVal, type) {
            var baseColor = new TinyColor(colorVal);
            var colorPalettes = generate$1(baseColor.toRgbString());
            variables["".concat(type, "-color")] = formatColor(baseColor);
            variables["".concat(type, "-color-disabled")] = colorPalettes[1];
            variables["".concat(type, "-color-hover")] = colorPalettes[4];
            variables["".concat(type, "-color-active")] = colorPalettes[6];
            variables["".concat(type, "-color-outline")] = baseColor.clone().setAlpha(0.2).toRgbString();
            variables["".concat(type, "-color-deprecated-bg")] = colorPalettes[0];
            variables["".concat(type, "-color-deprecated-border")] = colorPalettes[2];
          };
          // ================ Primary Color ================
          if (theme.primaryColor) {
            fillColor(theme.primaryColor, 'primary');
            var primaryColor = new TinyColor(theme.primaryColor);
            var primaryColors = generate$1(primaryColor.toRgbString());
            // Legacy - We should use semantic naming standard
            primaryColors.forEach(function (color, index) {
              variables["primary-".concat(index + 1)] = color;
            });
            // Deprecated
            variables['primary-color-deprecated-l-35'] = formatColor(primaryColor, function (c) {
              return c.lighten(35);
            });
            variables['primary-color-deprecated-l-20'] = formatColor(primaryColor, function (c) {
              return c.lighten(20);
            });
            variables['primary-color-deprecated-t-20'] = formatColor(primaryColor, function (c) {
              return c.tint(20);
            });
            variables['primary-color-deprecated-t-50'] = formatColor(primaryColor, function (c) {
              return c.tint(50);
            });
            variables['primary-color-deprecated-f-12'] = formatColor(primaryColor, function (c) {
              return c.setAlpha(c.getAlpha() * 0.12);
            });
            var primaryActiveColor = new TinyColor(primaryColors[0]);
            variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, function (c) {
              return c.setAlpha(c.getAlpha() * 0.3);
            });
            variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, function (c) {
              return c.darken(2);
            });
          }
          // ================ Success Color ================
          if (theme.successColor) {
            fillColor(theme.successColor, 'success');
          }
          // ================ Warning Color ================
          if (theme.warningColor) {
            fillColor(theme.warningColor, 'warning');
          }
          // ================= Error Color =================
          if (theme.errorColor) {
            fillColor(theme.errorColor, 'error');
          }
          // ================= Info Color ==================
          if (theme.infoColor) {
            fillColor(theme.infoColor, 'info');
          }
          // Convert to css variables
          var cssList = Object.keys(variables).map(function (key) {
            return "--".concat(globalPrefixCls, "-").concat(key, ": ").concat(variables[key], ";");
          });
          return "\n  :root {\n    ".concat(cssList.join('\n'), "\n  }\n  ").trim();
        }
        function registerTheme(globalPrefixCls, theme) {
          var style = getStyle(globalPrefixCls, theme);
          if (canUseDom()) {
            updateCSS(style, "".concat(dynamicStyleMark, "-dynamic-theme"));
          } else {
            warning$2(false, 'ConfigProvider', 'SSR do not support dynamic theme with css variables.');
          }
        }
        var _jsxFileName$6 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\config-provider\\DisabledContext.js";
        var DisabledContext = /*#__PURE__*/react.exports.createContext(false);
        var DisabledContextProvider = function DisabledContextProvider(_ref) {
          var children = _ref.children,
            disabled = _ref.disabled;
          var originDisabled = react.exports.useContext(DisabledContext);
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(DisabledContext.Provider, {
              value: disabled || originDisabled,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName$6,
              lineNumber: 7,
              columnNumber: 23
            }, this)
          );
        };
        var DisabledContext$1 = exports('D', DisabledContext);

        //

        var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
          var ret = compare ? compare.call(compareContext, objA, objB) : void 0;
          if (ret !== void 0) {
            return !!ret;
          }
          if (objA === objB) {
            return true;
          }
          if (_typeof2(objA) !== "object" || !objA || _typeof2(objB) !== "object" || !objB) {
            return false;
          }
          var keysA = Object.keys(objA);
          var keysB = Object.keys(objB);
          if (keysA.length !== keysB.length) {
            return false;
          }
          var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

          // Test for A's keys different from B.
          for (var idx = 0; idx < keysA.length; idx++) {
            var key = keysA[idx];
            if (!bHasOwnProperty(key)) {
              return false;
            }
            var valueA = objA[key];
            var valueB = objB[key];
            ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
            if (ret === false || ret === void 0 && valueA !== valueB) {
              return false;
            }
          }
          return true;
        };
        var shallowEqual = shallowequal;
        function useTheme(theme, parentTheme) {
          var themeConfig = theme || {};
          var parentThemeConfig = parentTheme || defaultConfig;
          var mergedTheme = useMemo(function () {
            if (!theme) {
              return parentTheme;
            }
            // Override
            var mergedComponents = _extends$1({}, parentThemeConfig.components);
            Object.keys(theme.components || {}).forEach(function (componentName) {
              mergedComponents[componentName] = _extends$1(_extends$1({}, mergedComponents[componentName]), theme.components[componentName]);
            });
            // Base token
            return _extends$1(_extends$1(_extends$1({}, parentThemeConfig), themeConfig), {
              token: _extends$1(_extends$1({}, parentThemeConfig.token), themeConfig.token),
              components: mergedComponents
            });
          }, [themeConfig, parentThemeConfig], function (prev, next) {
            return prev.some(function (prevTheme, index) {
              var nextTheme = next[index];
              return !shallowEqual(prevTheme, nextTheme);
            });
          });
          return mergedTheme;
        }
        var _jsxFileName$5 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\config-provider\\SizeContext.js";
        var SizeContext = /*#__PURE__*/react.exports.createContext(undefined);
        var SizeContextProvider = function SizeContextProvider(_ref) {
          var _children2 = _ref.children,
            size = _ref.size;
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(SizeContext.Consumer, {
              children: function children(originSize) {
                return /*#__PURE__*/(
                  /*#__PURE__*/
                  jsxDEV(SizeContext.Provider, {
                    value: size || originSize,
                    children: _children2
                  }, void 0, false, {
                    fileName: _jsxFileName$5,
                    lineNumber: 7,
                    columnNumber: 25
                  }, this)
                );
              }
            }, void 0, false, {
              fileName: _jsxFileName$5,
              lineNumber: 6,
              columnNumber: 23
            }, this)
          );
        };
        var SizeContext$1 = exports('S', SizeContext);
        var _jsxFileName$4 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\config-provider\\index.js";
        var __rest = globalThis && globalThis.__rest || function (s, e) {
          var t = {};
          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
          }
          if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
          }
          return t;
        };
        // These props is used by `useContext` directly in sub component
        var PASSED_PROPS = ['getTargetContainer', 'getPopupContainer', 'renderEmpty', 'pageHeader', 'input', 'pagination', 'form'];
        var defaultPrefixCls = 'ant';
        var globalPrefixCls;
        var globalIconPrefixCls;
        function getGlobalPrefixCls() {
          return globalPrefixCls || defaultPrefixCls;
        }
        function getGlobalIconPrefixCls() {
          return globalIconPrefixCls || defaultIconPrefixCls;
        }
        var setGlobalConfig = function setGlobalConfig(_ref) {
          var prefixCls = _ref.prefixCls,
            iconPrefixCls = _ref.iconPrefixCls,
            theme = _ref.theme;
          if (prefixCls !== undefined) {
            globalPrefixCls = prefixCls;
          }
          if (iconPrefixCls !== undefined) {
            globalIconPrefixCls = iconPrefixCls;
          }
          if (theme) {
            registerTheme(getGlobalPrefixCls(), theme);
          }
        };
        var globalConfig = exports('E', function globalConfig() {
          return {
            getPrefixCls: function getPrefixCls(suffixCls, customizePrefixCls) {
              if (customizePrefixCls) return customizePrefixCls;
              return suffixCls ? "".concat(getGlobalPrefixCls(), "-").concat(suffixCls) : getGlobalPrefixCls();
            },
            getIconPrefixCls: getGlobalIconPrefixCls,
            getRootPrefixCls: function getRootPrefixCls() {
              // If Global prefixCls provided, use this
              if (globalPrefixCls) {
                return globalPrefixCls;
              }
              // Fallback to default prefixCls
              return getGlobalPrefixCls();
            }
          };
        });
        var ProviderChildren = function ProviderChildren(props) {
          var _a, _b;
          var children = props.children,
            customCsp = props.csp,
            autoInsertSpaceInButton = props.autoInsertSpaceInButton,
            form = props.form,
            locale = props.locale,
            componentSize = props.componentSize,
            direction = props.direction,
            space = props.space,
            virtual = props.virtual,
            dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
            legacyLocale = props.legacyLocale,
            parentContext = props.parentContext,
            customIconPrefixCls = props.iconPrefixCls,
            theme = props.theme,
            componentDisabled = props.componentDisabled;
          var getPrefixCls = react.exports.useCallback(function (suffixCls, customizePrefixCls) {
            var prefixCls = props.prefixCls;
            if (customizePrefixCls) return customizePrefixCls;
            var mergedPrefixCls = prefixCls || parentContext.getPrefixCls('');
            return suffixCls ? "".concat(mergedPrefixCls, "-").concat(suffixCls) : mergedPrefixCls;
          }, [parentContext.getPrefixCls, props.prefixCls]);
          var iconPrefixCls = customIconPrefixCls || parentContext.iconPrefixCls || defaultIconPrefixCls;
          var csp = customCsp || parentContext.csp;
          var mergedTheme = useTheme(theme, parentContext.theme);
          var config = _extends$1(_extends$1({}, parentContext), {
            csp: csp,
            autoInsertSpaceInButton: autoInsertSpaceInButton,
            locale: locale || legacyLocale,
            direction: direction,
            space: space,
            virtual: virtual,
            dropdownMatchSelectWidth: dropdownMatchSelectWidth,
            getPrefixCls: getPrefixCls,
            iconPrefixCls: iconPrefixCls,
            theme: mergedTheme
          });
          // Pass the props used by `useContext` directly with child component.
          // These props should merged into `config`.
          PASSED_PROPS.forEach(function (propName) {
            var propValue = props[propName];
            if (propValue) {
              config[propName] = propValue;
            }
          });
          // https://github.com/ant-design/ant-design/issues/27617
          var memoedConfig = useMemo(function () {
            return config;
          }, config, function (prevConfig, currentConfig) {
            var prevKeys = Object.keys(prevConfig);
            var currentKeys = Object.keys(currentConfig);
            return prevKeys.length !== currentKeys.length || prevKeys.some(function (key) {
              return prevConfig[key] !== currentConfig[key];
            });
          });
          var memoIconContextValue = react.exports.useMemo(function () {
            return {
              prefixCls: iconPrefixCls,
              csp: csp
            };
          }, [iconPrefixCls, csp]);
          var childNode = children;
          // Additional Form provider
          var validateMessages = {};
          if (locale) {
            validateMessages = ((_a = locale.Form) === null || _a === void 0 ? void 0 : _a.defaultValidateMessages) || ((_b = defaultLocale.Form) === null || _b === void 0 ? void 0 : _b.defaultValidateMessages) || {};
          }
          if (form && form.validateMessages) {
            validateMessages = _extends$1(_extends$1({}, validateMessages), form.validateMessages);
          }
          if (Object.keys(validateMessages).length > 0) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(FormProvider, {
              validateMessages: validateMessages,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 144,
              columnNumber: 30
            }, this);
          }
          if (locale) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(LocaleProvider$1, {
              locale: locale,
              _ANT_MARK__: ANT_MARK,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 149,
              columnNumber: 30
            }, this);
          }
          if (iconPrefixCls || csp) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(Context$1.Provider, {
              value: memoIconContextValue,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 155,
              columnNumber: 30
            }, this);
          }
          if (componentSize) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(SizeContextProvider, {
              size: componentSize,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 160,
              columnNumber: 30
            }, this);
          }
          // ================================ Dynamic theme ================================
          var memoTheme = react.exports.useMemo(function () {
            var _a = mergedTheme || {},
              algorithm = _a.algorithm,
              token = _a.token,
              rest = __rest(_a, ["algorithm", "token"]);
            var themeObj = algorithm && (!Array.isArray(algorithm) || algorithm.length > 0) ? createTheme(algorithm) : undefined;
            return _extends$1(_extends$1({}, rest), {
              theme: themeObj,
              token: _extends$1(_extends$1({}, defaultSeedToken), token)
            });
          }, [mergedTheme]);
          if (theme) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(DesignTokenContext.Provider, {
              value: memoTheme,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 177,
              columnNumber: 30
            }, this);
          }
          // =================================== Render ===================================
          if (componentDisabled !== undefined) {
            childNode = /*#__PURE__*/
            /*#__PURE__*/
            jsxDEV(DisabledContextProvider, {
              disabled: componentDisabled,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 183,
              columnNumber: 30
            }, this);
          }
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(ConfigContext.Provider, {
              value: memoedConfig,
              children: childNode
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 187,
              columnNumber: 23
            }, this)
          );
        };
        var ConfigProvider = function ConfigProvider(props) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(LocaleReceiver$1, {
              children: function children(_, __, legacyLocale) {
                return /*#__PURE__*/(
                  /*#__PURE__*/
                  jsxDEV(ConfigConsumer, {
                    children: function children(context) {
                      return /*#__PURE__*/(
                        /*#__PURE__*/
                        jsxDEV(ProviderChildren, _objectSpread({
                          parentContext: context,
                          legacyLocale: legacyLocale
                        }, props), void 0, false, {
                          fileName: _jsxFileName$4,
                          lineNumber: 194,
                          columnNumber: 27
                        }, this)
                      );
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName$4,
                    lineNumber: 193,
                    columnNumber: 25
                  }, this)
                );
              }
            }, void 0, false, {
              fileName: _jsxFileName$4,
              lineNumber: 192,
              columnNumber: 23
            }, this)
          );
        };
        ConfigProvider.ConfigContext = ConfigContext;
        ConfigProvider.SizeContext = SizeContext$1;
        ConfigProvider.config = setGlobalConfig;
        var ConfigProvider$1 = exports('B', ConfigProvider);
        var raf = function raf(callback) {
          return +setTimeout(callback, 16);
        };
        var caf = function caf(num) {
          return clearTimeout(num);
        };
        if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
          raf = function raf(callback) {
            return window.requestAnimationFrame(callback);
          };
          caf = function caf(handle) {
            return window.cancelAnimationFrame(handle);
          };
        }
        var rafUUID = 0;
        var rafIds = new Map();
        function cleanup(id) {
          rafIds["delete"](id);
        }
        function wrapperRaf(callback) {
          var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
          rafUUID += 1;
          var id = rafUUID;
          function callRef(leftTimes) {
            if (leftTimes === 0) {
              // Clean up
              cleanup(id); // Trigger

              callback();
            } else {
              // Next raf
              var realId = raf(function () {
                callRef(leftTimes - 1);
              }); // Bind real raf id

              rafIds.set(id, realId);
            }
          }
          callRef(times);
          return id;
        }
        wrapperRaf.cancel = function (id) {
          var realId = rafIds.get(id);
          cleanup(realId);
          return caf(realId);
        };
        function warning(valid, message) {
          warningOnce(valid, "[@ant-design/icons] ".concat(message));
        }
        function isIconDefinition(target) {
          return _typeof(target) === 'object' && typeof target.name === 'string' && typeof target.theme === 'string' && (_typeof(target.icon) === 'object' || typeof target.icon === 'function');
        }
        function normalizeAttrs() {
          var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          return Object.keys(attrs).reduce(function (acc, key) {
            var val = attrs[key];
            switch (key) {
              case 'class':
                acc.className = val;
                delete acc["class"];
                break;
              default:
                acc[key] = val;
            }
            return acc;
          }, {});
        }
        function generate(node, key, rootProps) {
          if (!rootProps) {
            return /*#__PURE__*/React.createElement(node.tag, _objectSpread2({
              key: key
            }, normalizeAttrs(node.attrs)), (node.children || []).map(function (child, index) {
              return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
            }));
          }
          return /*#__PURE__*/React.createElement(node.tag, _objectSpread2(_objectSpread2({
            key: key
          }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function (child, index) {
            return generate(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
          }));
        }
        function getSecondaryColor(primaryColor) {
          // choose the second color
          return generate$1(primaryColor)[0];
        }
        function normalizeTwoToneColors(twoToneColor) {
          if (!twoToneColor) {
            return [];
          }
          return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
        } // These props make sure that the SVG behaviours like general text.
        var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
        var useInsertStyles = function useInsertStyles() {
          var styleStr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : iconStyles;
          var _useContext = react.exports.useContext(Context$1),
            csp = _useContext.csp;
          react.exports.useEffect(function () {
            updateCSS(styleStr, '@ant-design-icons', {
              prepend: true,
              csp: csp
            });
          }, []);
        };
        var _excluded$2 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
        var twoToneColorPalette = {
          primaryColor: '#333',
          secondaryColor: '#E6E6E6',
          calculated: false
        };
        function setTwoToneColors(_ref) {
          var primaryColor = _ref.primaryColor,
            secondaryColor = _ref.secondaryColor;
          twoToneColorPalette.primaryColor = primaryColor;
          twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
          twoToneColorPalette.calculated = !!secondaryColor;
        }
        function getTwoToneColors() {
          return _objectSpread2({}, twoToneColorPalette);
        }
        var IconBase = function IconBase(props) {
          var icon = props.icon,
            className = props.className,
            onClick = props.onClick,
            style = props.style,
            primaryColor = props.primaryColor,
            secondaryColor = props.secondaryColor,
            restProps = _objectWithoutProperties(props, _excluded$2);
          var colors = twoToneColorPalette;
          if (primaryColor) {
            colors = {
              primaryColor: primaryColor,
              secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
            };
          }
          useInsertStyles();
          warning(isIconDefinition(icon), "icon should be icon definiton, but got ".concat(icon));
          if (!isIconDefinition(icon)) {
            return null;
          }
          var target = icon;
          if (target && typeof target.icon === 'function') {
            target = _objectSpread2(_objectSpread2({}, target), {}, {
              icon: target.icon(colors.primaryColor, colors.secondaryColor)
            });
          }
          return generate(target.icon, "svg-".concat(target.name), _objectSpread2({
            className: className,
            onClick: onClick,
            style: style,
            'data-icon': target.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true'
          }, restProps));
        };
        IconBase.displayName = 'IconReact';
        IconBase.getTwoToneColors = getTwoToneColors;
        IconBase.setTwoToneColors = setTwoToneColors;
        var ReactIcon = IconBase;
        function setTwoToneColor(twoToneColor) {
          var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
            _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
            primaryColor = _normalizeTwoToneColo2[0],
            secondaryColor = _normalizeTwoToneColo2[1];
          return ReactIcon.setTwoToneColors({
            primaryColor: primaryColor,
            secondaryColor: secondaryColor
          });
        }
        function getTwoToneColor() {
          var colors = ReactIcon.getTwoToneColors();
          if (!colors.calculated) {
            return colors.primaryColor;
          }
          return [colors.primaryColor, colors.secondaryColor];
        }
        var _jsxFileName$3 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\components\\AntdIcon.js";
        var _excluded$1 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
        setTwoToneColor('#1890ff');
        var Icon = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
          var _classNames;
          var className = props.className,
            icon = props.icon,
            spin = props.spin,
            rotate = props.rotate,
            tabIndex = props.tabIndex,
            onClick = props.onClick,
            twoToneColor = props.twoToneColor,
            restProps = _objectWithoutProperties(props, _excluded$1);
          var _React$useContext = react.exports.useContext(Context$1),
            _React$useContext$pre = _React$useContext.prefixCls,
            prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre;
          var classString = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon.name), !!icon.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon.name === 'loading'), _classNames), className);
          var iconTabIndex = tabIndex;
          if (iconTabIndex === undefined && onClick) {
            iconTabIndex = -1;
          }
          var svgStyle = rotate ? {
            msTransform: "rotate(".concat(rotate, "deg)"),
            transform: "rotate(".concat(rotate, "deg)")
          } : undefined;
          var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
            _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
            primaryColor = _normalizeTwoToneColo2[0],
            secondaryColor = _normalizeTwoToneColo2[1];
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV("span", _objectSpread(_objectSpread({}, _objectSpread2(_objectSpread2({
              role: "img",
              "aria-label": icon.name
            }, restProps), {}, {
              ref: ref,
              tabIndex: iconTabIndex,
              onClick: onClick,
              className: classString
            })), {}, {
              children: /*#__PURE__*/jsxDEV(ReactIcon, {
                icon: icon,
                primaryColor: primaryColor,
                secondaryColor: secondaryColor,
                style: svgStyle
              }, void 0, false, {
                fileName: _jsxFileName$3,
                lineNumber: 56,
                columnNumber: 20
              }, this)
            }), void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 48,
              columnNumber: 23
            }, this)
          );
        });
        Icon.displayName = 'AntdIcon';
        Icon.getTwoToneColor = getTwoToneColor;
        Icon.setTwoToneColor = setTwoToneColor;
        var AntdIcon = exports('A', Icon);

        // Event wrapper. Copy from react source code

        function makePrefixMap(styleProp, eventName) {
          var prefixes = {};
          prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
          prefixes["Webkit".concat(styleProp)] = "webkit".concat(eventName);
          prefixes["Moz".concat(styleProp)] = "moz".concat(eventName);
          prefixes["ms".concat(styleProp)] = "MS".concat(eventName);
          prefixes["O".concat(styleProp)] = "o".concat(eventName.toLowerCase());
          return prefixes;
        }
        function getVendorPrefixes(domSupport, win) {
          var prefixes = {
            animationend: makePrefixMap('Animation', 'AnimationEnd'),
            transitionend: makePrefixMap('Transition', 'TransitionEnd')
          };
          if (domSupport) {
            if (!('AnimationEvent' in win)) {
              delete prefixes.animationend.animation;
            }
            if (!('TransitionEvent' in win)) {
              delete prefixes.transitionend.transition;
            }
          }
          return prefixes;
        }
        var vendorPrefixes = getVendorPrefixes(canUseDom(), typeof window !== 'undefined' ? window : {});
        var style = {};
        if (canUseDom()) {
          var _document$createEleme = document.createElement('div');
          style = _document$createEleme.style;
        }
        var prefixedEventNames = {};
        function getVendorPrefixedEventName(eventName) {
          if (prefixedEventNames[eventName]) {
            return prefixedEventNames[eventName];
          }
          var prefixMap = vendorPrefixes[eventName];
          if (prefixMap) {
            var stylePropList = Object.keys(prefixMap);
            var len = stylePropList.length;
            for (var i = 0; i < len; i += 1) {
              var styleProp = stylePropList[i];
              if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
                prefixedEventNames[eventName] = prefixMap[styleProp];
                return prefixedEventNames[eventName];
              }
            }
          }
          return '';
        }
        var internalAnimationEndName = getVendorPrefixedEventName('animationend');
        var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
        var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
        var animationEndName = internalAnimationEndName || 'animationend';
        var transitionEndName = internalTransitionEndName || 'transitionend';
        function getTransitionName(transitionName, transitionType) {
          if (!transitionName) return null;
          if (_typeof(transitionName) === 'object') {
            var type = transitionType.replace(/-\w/g, function (match) {
              return match[1].toUpperCase();
            });
            return transitionName[type];
          }
          return "".concat(transitionName, "-").concat(transitionType);
        }
        var STATUS_NONE = 'none';
        var STATUS_APPEAR = 'appear';
        var STATUS_ENTER = 'enter';
        var STATUS_LEAVE = 'leave';
        var STEP_NONE = 'none';
        var STEP_PREPARE = 'prepare';
        var STEP_START = 'start';
        var STEP_ACTIVE = 'active';
        var STEP_ACTIVATED = 'end';

        /**
         * Same as React.useState but `setState` accept `ignoreDestroy` param to not to setState after destroyed.
         * We do not make this auto is to avoid real memory leak.
         * Developer should confirm it's safe to ignore themselves.
         */

        function useSafeState(defaultValue) {
          var destroyRef = react.exports.useRef(false);
          var _React$useState = react.exports.useState(defaultValue),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            value = _React$useState2[0],
            setValue = _React$useState2[1];
          react.exports.useEffect(function () {
            destroyRef.current = false;
            return function () {
              destroyRef.current = true;
            };
          }, []);
          function safeSetState(updater, ignoreDestroy) {
            if (ignoreDestroy && destroyRef.current) {
              return;
            }
            setValue(updater);
          }
          return [value, safeSetState];
        }
        var useNextFrame = function useNextFrame() {
          var nextFrameRef = react.exports.useRef(null);
          function cancelNextFrame() {
            wrapperRaf.cancel(nextFrameRef.current);
          }
          function nextFrame(callback) {
            var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
            cancelNextFrame();
            var nextFrameId = wrapperRaf(function () {
              if (delay <= 1) {
                callback({
                  isCanceled: function isCanceled() {
                    return nextFrameId !== nextFrameRef.current;
                  }
                });
              } else {
                nextFrame(callback, delay - 1);
              }
            });
            nextFrameRef.current = nextFrameId;
          }
          react.exports.useEffect(function () {
            return function () {
              cancelNextFrame();
            };
          }, []);
          return [nextFrame, cancelNextFrame];
        };
        var useIsomorphicLayoutEffect = canUseDom() ? react.exports.useLayoutEffect : react.exports.useEffect;
        var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
        /** Skip current step */

        var SkipStep = false;
        /** Current step should be update in */

        var DoStep = true;
        function isActive(step) {
          return step === STEP_ACTIVE || step === STEP_ACTIVATED;
        }
        var useStepQueue = function useStepQueue(status, callback) {
          var _useState = useSafeState(STEP_NONE),
            _useState2 = _slicedToArray(_useState, 2),
            step = _useState2[0],
            setStep = _useState2[1];
          var _useNextFrame = useNextFrame(),
            _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
            nextFrame = _useNextFrame2[0],
            cancelNextFrame = _useNextFrame2[1];
          function startQueue() {
            setStep(STEP_PREPARE, true);
          }
          useIsomorphicLayoutEffect(function () {
            if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
              var index = STEP_QUEUE.indexOf(step);
              var nextStep = STEP_QUEUE[index + 1];
              var result = callback(step);
              if (result === SkipStep) {
                // Skip when no needed
                setStep(nextStep, true);
              } else {
                // Do as frame for step update
                nextFrame(function (info) {
                  function doNext() {
                    // Skip since current queue is ood
                    if (info.isCanceled()) return;
                    setStep(nextStep, true);
                  }
                  if (result === true) {
                    doNext();
                  } else {
                    // Only promise should be async
                    Promise.resolve(result).then(doNext);
                  }
                });
              }
            }
          }, [status, step]);
          react.exports.useEffect(function () {
            return function () {
              cancelNextFrame();
            };
          }, []);
          return [startQueue, step];
        };
        var useDomMotionEvents = function useDomMotionEvents(callback) {
          var cacheElementRef = react.exports.useRef(); // Cache callback

          var callbackRef = react.exports.useRef(callback);
          callbackRef.current = callback; // Internal motion event handler

          var onInternalMotionEnd = react.exports.useCallback(function (event) {
            callbackRef.current(event);
          }, []); // Remove events

          function removeMotionEvents(element) {
            if (element) {
              element.removeEventListener(transitionEndName, onInternalMotionEnd);
              element.removeEventListener(animationEndName, onInternalMotionEnd);
            }
          } // Patch events

          function patchMotionEvents(element) {
            if (cacheElementRef.current && cacheElementRef.current !== element) {
              removeMotionEvents(cacheElementRef.current);
            }
            if (element && element !== cacheElementRef.current) {
              element.addEventListener(transitionEndName, onInternalMotionEnd);
              element.addEventListener(animationEndName, onInternalMotionEnd); // Save as cache in case dom removed trigger by `motionDeadline`

              cacheElementRef.current = element;
            }
          } // Clean up when removed

          react.exports.useEffect(function () {
            return function () {
              removeMotionEvents(cacheElementRef.current);
            };
          }, []);
          return [patchMotionEvents, removeMotionEvents];
        };
        function useStatus(supportMotion, visible, getElement, _ref) {
          var _ref$motionEnter = _ref.motionEnter,
            motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
            _ref$motionAppear = _ref.motionAppear,
            motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
            _ref$motionLeave = _ref.motionLeave,
            motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
            motionDeadline = _ref.motionDeadline,
            motionLeaveImmediately = _ref.motionLeaveImmediately,
            onAppearPrepare = _ref.onAppearPrepare,
            onEnterPrepare = _ref.onEnterPrepare,
            onLeavePrepare = _ref.onLeavePrepare,
            onAppearStart = _ref.onAppearStart,
            onEnterStart = _ref.onEnterStart,
            onLeaveStart = _ref.onLeaveStart,
            onAppearActive = _ref.onAppearActive,
            onEnterActive = _ref.onEnterActive,
            onLeaveActive = _ref.onLeaveActive,
            onAppearEnd = _ref.onAppearEnd,
            onEnterEnd = _ref.onEnterEnd,
            onLeaveEnd = _ref.onLeaveEnd,
            onVisibleChanged = _ref.onVisibleChanged;

          // Used for outer render usage to avoid `visible: false & status: none` to render nothing
          var _useState = useSafeState(),
            _useState2 = _slicedToArray(_useState, 2),
            asyncVisible = _useState2[0],
            setAsyncVisible = _useState2[1];
          var _useState3 = useSafeState(STATUS_NONE),
            _useState4 = _slicedToArray(_useState3, 2),
            status = _useState4[0],
            setStatus = _useState4[1];
          var _useState5 = useSafeState(null),
            _useState6 = _slicedToArray(_useState5, 2),
            style = _useState6[0],
            setStyle = _useState6[1];
          var mountedRef = react.exports.useRef(false);
          var deadlineRef = react.exports.useRef(null); // =========================== Dom Node ===========================

          function getDomElement() {
            return getElement();
          } // ========================== Motion End ==========================

          var activeRef = react.exports.useRef(false);
          function onInternalMotionEnd(event) {
            var element = getDomElement();
            if (event && !event.deadline && event.target !== element) {
              // event exists
              // not initiated by deadline
              // transitionEnd not fired by inner elements
              return;
            }
            var currentActive = activeRef.current;
            var canEnd;
            if (status === STATUS_APPEAR && currentActive) {
              canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
            } else if (status === STATUS_ENTER && currentActive) {
              canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
            } else if (status === STATUS_LEAVE && currentActive) {
              canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
            } // Only update status when `canEnd` and not destroyed

            if (status !== STATUS_NONE && currentActive && canEnd !== false) {
              setStatus(STATUS_NONE, true);
              setStyle(null, true);
            }
          }
          var _useDomMotionEvents = useDomMotionEvents(onInternalMotionEnd),
            _useDomMotionEvents2 = _slicedToArray(_useDomMotionEvents, 1),
            patchMotionEvents = _useDomMotionEvents2[0]; // ============================= Step =============================

          var eventHandlers = react.exports.useMemo(function () {
            var _ref2, _ref3, _ref4;
            switch (status) {
              case STATUS_APPEAR:
                return _ref2 = {}, _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare), _defineProperty(_ref2, STEP_START, onAppearStart), _defineProperty(_ref2, STEP_ACTIVE, onAppearActive), _ref2;
              case STATUS_ENTER:
                return _ref3 = {}, _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare), _defineProperty(_ref3, STEP_START, onEnterStart), _defineProperty(_ref3, STEP_ACTIVE, onEnterActive), _ref3;
              case STATUS_LEAVE:
                return _ref4 = {}, _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare), _defineProperty(_ref4, STEP_START, onLeaveStart), _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive), _ref4;
              default:
                return {};
            }
          }, [status]);
          var _useStepQueue = useStepQueue(status, function (newStep) {
              // Only prepare step can be skip
              if (newStep === STEP_PREPARE) {
                var onPrepare = eventHandlers[STEP_PREPARE];
                if (!onPrepare) {
                  return SkipStep;
                }
                return onPrepare(getDomElement());
              } // Rest step is sync update

              // Rest step is sync update
              if (step in eventHandlers) {
                var _eventHandlers$step;
                setStyle(((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0 ? void 0 : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null);
              }
              if (step === STEP_ACTIVE) {
                // Patch events when motion needed
                patchMotionEvents(getDomElement());
                if (motionDeadline > 0) {
                  clearTimeout(deadlineRef.current);
                  deadlineRef.current = setTimeout(function () {
                    onInternalMotionEnd({
                      deadline: true
                    });
                  }, motionDeadline);
                }
              }
              return DoStep;
            }),
            _useStepQueue2 = _slicedToArray(_useStepQueue, 2),
            startStep = _useStepQueue2[0],
            step = _useStepQueue2[1];
          var active = isActive(step);
          activeRef.current = active; // ============================ Status ============================
          // Update with new status

          useIsomorphicLayoutEffect(function () {
            setAsyncVisible(visible);
            var isMounted = mountedRef.current;
            mountedRef.current = true;
            if (!supportMotion) {
              return;
            }
            var nextStatus; // Appear

            if (!isMounted && visible && motionAppear) {
              nextStatus = STATUS_APPEAR;
            } // Enter

            if (isMounted && visible && motionEnter) {
              nextStatus = STATUS_ENTER;
            } // Leave

            if (isMounted && !visible && motionLeave || !isMounted && motionLeaveImmediately && !visible && motionLeave) {
              nextStatus = STATUS_LEAVE;
            } // Update to next status

            if (nextStatus) {
              setStatus(nextStatus);
              startStep();
            }
          }, [visible]); // ============================ Effect ============================
          // Reset when motion changed

          react.exports.useEffect(function () {
            if (
            // Cancel appear
            status === STATUS_APPEAR && !motionAppear ||
            // Cancel enter
            status === STATUS_ENTER && !motionEnter ||
            // Cancel leave
            status === STATUS_LEAVE && !motionLeave) {
              setStatus(STATUS_NONE);
            }
          }, [motionAppear, motionEnter, motionLeave]);
          react.exports.useEffect(function () {
            return function () {
              mountedRef.current = false;
              clearTimeout(deadlineRef.current);
            };
          }, []); // Trigger `onVisibleChanged`

          var firstMountChangeRef = react.exports.useRef(false);
          react.exports.useEffect(function () {
            // [visible & motion not end] => [!visible & motion end] still need trigger onVisibleChanged
            if (asyncVisible) {
              firstMountChangeRef.current = true;
            }
            if (asyncVisible !== undefined && status === STATUS_NONE) {
              // Skip first render is invisible since it's nothing changed
              if (firstMountChangeRef.current || asyncVisible) {
                onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
              }
              firstMountChangeRef.current = true;
            }
          }, [asyncVisible, status]); // ============================ Styles ============================

          var mergedStyle = style;
          if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
            mergedStyle = _objectSpread2({
              transition: 'none'
            }, mergedStyle);
          }
          return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
        }
        var DomWrapper = /*#__PURE__*/function (_React$Component) {
          _inherits(DomWrapper, _React$Component);
          var _super = _createSuper(DomWrapper);
          function DomWrapper() {
            _classCallCheck(this, DomWrapper);
            return _super.apply(this, arguments);
          }
          _createClass(DomWrapper, [{
            key: "render",
            value: function render() {
              return this.props.children;
            }
          }]);
          return DomWrapper;
        }(react.exports.Component);
        var _jsxFileName$2 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-motion\\es\\CSSMotion.js";
        function genCSSMotion(config) {
          var transitionSupport = config;
          if (_typeof(config) === 'object') {
            transitionSupport = config.transitionSupport;
          }
          function isSupportTransition(props) {
            return !!(props.motionName && transitionSupport);
          }
          var CSSMotion = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
            var _props$visible = props.visible,
              visible = _props$visible === void 0 ? true : _props$visible,
              _props$removeOnLeave = props.removeOnLeave,
              removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
              forceRender = props.forceRender,
              children = props.children,
              motionName = props.motionName,
              leavedClassName = props.leavedClassName,
              eventProps = props.eventProps;
            var supportMotion = isSupportTransition(props); // Ref to the react node, it may be a HTMLElement

            var nodeRef = react.exports.useRef(); // Ref to the dom wrapper in case ref can not pass to HTMLElement

            var wrapperNodeRef = react.exports.useRef();
            function getDomElement() {
              try {
                // Here we're avoiding call for findDOMNode since it's deprecated
                // in strict mode. We're calling it only when node ref is not
                // an instance of DOM HTMLElement. Otherwise use
                // findDOMNode as a final resort
                return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
              } catch (e) {
                // Only happen when `motionDeadline` trigger but element removed.
                return null;
              }
            }
            var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
              _useStatus2 = _slicedToArray(_useStatus, 4),
              status = _useStatus2[0],
              statusStep = _useStatus2[1],
              statusStyle = _useStatus2[2],
              mergedVisible = _useStatus2[3]; // Record whether content has rendered
            // Will return null for un-rendered even when `removeOnLeave={false}`

            var renderedRef = react.exports.useRef(mergedVisible);
            if (mergedVisible) {
              renderedRef.current = true;
            } // ====================== Refs ======================

            var setNodeRef = react.exports.useCallback(function (node) {
              nodeRef.current = node;
              fillRef(ref, node);
            }, [ref]); // ===================== Render =====================

            var motionChildren;
            var mergedProps = _objectSpread2(_objectSpread2({}, eventProps), {}, {
              visible: visible
            });
            if (!children) {
              // No children
              motionChildren = null;
            } else if (status === STATUS_NONE || !isSupportTransition(props)) {
              // Stable children
              if (mergedVisible) {
                motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
              } else if (!removeOnLeave && renderedRef.current) {
                motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                  className: leavedClassName
                }), setNodeRef);
              } else if (forceRender) {
                motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                  style: {
                    display: 'none'
                  }
                }), setNodeRef);
              } else {
                motionChildren = null;
              }
            } else {
              var _classNames;

              // In motion
              var statusSuffix;
              if (statusStep === STEP_PREPARE) {
                statusSuffix = 'prepare';
              } else if (isActive(statusStep)) {
                statusSuffix = 'active';
              } else if (statusStep === STEP_START) {
                statusSuffix = 'start';
              }
              motionChildren = children(_objectSpread2(_objectSpread2({}, mergedProps), {}, {
                className: classNames(getTransitionName(motionName, status), (_classNames = {}, _defineProperty(_classNames, getTransitionName(motionName, "".concat(status, "-").concat(statusSuffix)), statusSuffix), _defineProperty(_classNames, motionName, typeof motionName === 'string'), _classNames)),
                style: statusStyle
              }), setNodeRef);
            } // Auto inject ref if child node not have `ref` props

            if ( /*#__PURE__*/react.exports.isValidElement(motionChildren) && supportRef(motionChildren)) {
              var _motionChildren = motionChildren,
                originNodeRef = _motionChildren.ref;
              if (!originNodeRef) {
                motionChildren = /*#__PURE__*/react.exports.cloneElement(motionChildren, {
                  ref: setNodeRef
                });
              }
            }
            return /*#__PURE__*/(
              /*#__PURE__*/
              jsxDEV(DomWrapper, {
                ref: wrapperNodeRef,
                children: motionChildren
              }, void 0, false, {
                fileName: _jsxFileName$2,
                lineNumber: 141,
                columnNumber: 25
              }, this)
            );
          });
          CSSMotion.displayName = 'CSSMotion';
          return CSSMotion;
        }
        var CSSMotion = exports('o', genCSSMotion(supportTransition));
        var STATUS_ADD = 'add';
        var STATUS_KEEP = 'keep';
        var STATUS_REMOVE = 'remove';
        var STATUS_REMOVED = 'removed';
        function wrapKeyToObject(key) {
          var keyObj;
          if (key && _typeof(key) === 'object' && 'key' in key) {
            keyObj = key;
          } else {
            keyObj = {
              key: key
            };
          }
          return _objectSpread2(_objectSpread2({}, keyObj), {}, {
            key: String(keyObj.key)
          });
        }
        function parseKeys() {
          var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return keys.map(wrapKeyToObject);
        }
        function diffKeys() {
          var prevKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var currentKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          var list = [];
          var currentIndex = 0;
          var currentLen = currentKeys.length;
          var prevKeyObjects = parseKeys(prevKeys);
          var currentKeyObjects = parseKeys(currentKeys); // Check prev keys to insert or keep

          prevKeyObjects.forEach(function (keyObj) {
            var hit = false;
            for (var i = currentIndex; i < currentLen; i += 1) {
              var currentKeyObj = currentKeyObjects[i];
              if (currentKeyObj.key === keyObj.key) {
                // New added keys should add before current key
                if (currentIndex < i) {
                  list = list.concat(currentKeyObjects.slice(currentIndex, i).map(function (obj) {
                    return _objectSpread2(_objectSpread2({}, obj), {}, {
                      status: STATUS_ADD
                    });
                  }));
                  currentIndex = i;
                }
                list.push(_objectSpread2(_objectSpread2({}, currentKeyObj), {}, {
                  status: STATUS_KEEP
                }));
                currentIndex += 1;
                hit = true;
                break;
              }
            } // If not hit, it means key is removed

            if (!hit) {
              list.push(_objectSpread2(_objectSpread2({}, keyObj), {}, {
                status: STATUS_REMOVE
              }));
            }
          }); // Add rest to the list

          if (currentIndex < currentLen) {
            list = list.concat(currentKeyObjects.slice(currentIndex).map(function (obj) {
              return _objectSpread2(_objectSpread2({}, obj), {}, {
                status: STATUS_ADD
              });
            }));
          }
          /**
           * Merge same key when it remove and add again:
           *    [1 - add, 2 - keep, 1 - remove] -> [1 - keep, 2 - keep]
           */

          var keys = {};
          list.forEach(function (_ref) {
            var key = _ref.key;
            keys[key] = (keys[key] || 0) + 1;
          });
          var duplicatedKeys = Object.keys(keys).filter(function (key) {
            return keys[key] > 1;
          });
          duplicatedKeys.forEach(function (matchKey) {
            // Remove `STATUS_REMOVE` node.
            list = list.filter(function (_ref2) {
              var key = _ref2.key,
                status = _ref2.status;
              return key !== matchKey || status !== STATUS_REMOVE;
            }); // Update `STATUS_ADD` to `STATUS_KEEP`

            list.forEach(function (node) {
              if (node.key === matchKey) {
                // eslint-disable-next-line no-param-reassign
                node.status = STATUS_KEEP;
              }
            });
          });
          return list;
        }
        var _jsxFileName$1 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-motion\\es\\CSSMotionList.js";
        var _excluded = ["component", "children", "onVisibleChanged", "onAllRemoved"],
          _excluded2 = ["status"];
        var MOTION_PROP_NAMES = ['eventProps', 'visible', 'children', 'motionName', 'motionAppear', 'motionEnter', 'motionLeave', 'motionLeaveImmediately', 'motionDeadline', 'removeOnLeave', 'leavedClassName', 'onAppearStart', 'onAppearActive', 'onAppearEnd', 'onEnterStart', 'onEnterActive', 'onEnterEnd', 'onLeaveStart', 'onLeaveActive', 'onLeaveEnd'];
        /**
         * Generate a CSSMotionList component with config
         * @param transitionSupport No need since CSSMotionList no longer depends on transition support
         * @param CSSMotion CSSMotion component
         */

        function genCSSMotionList(transitionSupport) {
          var CSSMotion$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CSSMotion;
          var CSSMotionList = /*#__PURE__*/function (_React$Component) {
            _inherits(CSSMotionList, _React$Component);
            var _super = _createSuper(CSSMotionList);
            function CSSMotionList() {
              var _this;
              _classCallCheck(this, CSSMotionList);
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              _this = _super.call.apply(_super, [this].concat(args));
              _this.state = {
                keyEntities: []
              };
              _this.removeKey = function (removeKey) {
                var keyEntities = _this.state.keyEntities;
                var nextKeyEntities = keyEntities.map(function (entity) {
                  if (entity.key !== removeKey) return entity;
                  return _objectSpread2(_objectSpread2({}, entity), {}, {
                    status: STATUS_REMOVED
                  });
                });
                _this.setState({
                  keyEntities: nextKeyEntities
                });
                return nextKeyEntities.filter(function (_ref) {
                  var status = _ref.status;
                  return status !== STATUS_REMOVED;
                }).length;
              };
              return _this;
            }
            _createClass(CSSMotionList, [{
              key: "render",
              value: function render() {
                var _this2 = this;
                var keyEntities = this.state.keyEntities;
                var _this$props = this.props,
                  component = _this$props.component,
                  children = _this$props.children,
                  _onVisibleChanged = _this$props.onVisibleChanged,
                  onAllRemoved = _this$props.onAllRemoved,
                  restProps = _objectWithoutProperties(_this$props, _excluded);
                var Component = component || react.exports.Fragment;
                var motionProps = {};
                MOTION_PROP_NAMES.forEach(function (prop) {
                  motionProps[prop] = restProps[prop];
                  delete restProps[prop];
                });
                delete restProps.keys;
                return /*#__PURE__*/(
                  /*#__PURE__*/
                  jsxDEV(Component, _objectSpread(_objectSpread({}, restProps), {}, {
                    children: keyEntities.map(function (_ref2) {
                      var status = _ref2.status,
                        eventProps = _objectWithoutProperties(_ref2, _excluded2);
                      var visible = status === STATUS_ADD || status === STATUS_KEEP;
                      return /*#__PURE__*/(
                        /*#__PURE__*/
                        react.exports.createElement(CSSMotion$1, _objectSpread(_objectSpread({}, motionProps), {}, {
                          key: eventProps.key,
                          visible: visible,
                          eventProps: eventProps,
                          onVisibleChanged: function onVisibleChanged(changedVisible) {
                            _onVisibleChanged === null || _onVisibleChanged === void 0 ? void 0 : _onVisibleChanged(changedVisible, {
                              key: eventProps.key
                            });
                            if (!changedVisible) {
                              var restKeysCount = _this2.removeKey(eventProps.key);
                              if (restKeysCount === 0 && onAllRemoved) {
                                onAllRemoved();
                              }
                            }
                          },
                          __self: this,
                          __source: {
                            fileName: _jsxFileName$1,
                            lineNumber: 93,
                            columnNumber: 31
                          }
                        }), children)
                      );
                    })
                  }), void 0, false, {
                    fileName: _jsxFileName$1,
                    lineNumber: 88,
                    columnNumber: 29
                  }, this)
                );
              }
            }], [{
              key: "getDerivedStateFromProps",
              value: function getDerivedStateFromProps(_ref3, _ref4) {
                var keys = _ref3.keys;
                var keyEntities = _ref4.keyEntities;
                var parsedKeyObjects = parseKeys(keys);
                var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
                return {
                  keyEntities: mixedKeyEntities.filter(function (entity) {
                    var prevEntity = keyEntities.find(function (_ref5) {
                      var key = _ref5.key;
                      return entity.key === key;
                    }); // Remove if already mark as removed

                    if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                      return false;
                    }
                    return true;
                  })
                };
              } // ZombieJ: Return the count of rest keys. It's safe to refactor if need more info.
            }]);

            return CSSMotionList;
          }(react.exports.Component);
          CSSMotionList.defaultProps = {
            component: 'div'
          };
          return CSSMotionList;
        }
        var CSSMotionList = exports('x', genCSSMotionList(supportTransition));

        // This icon file is generated automatically.
        var LoadingOutlined$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "0 0 1024 1024",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"
              }
            }]
          },
          "name": "loading",
          "theme": "outlined"
        };
        var LoadingOutlinedSvg = LoadingOutlined$2;
        var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\LoadingOutlined.js";
        var LoadingOutlined = function LoadingOutlined(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: LoadingOutlinedSvg
            })), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        LoadingOutlined.displayName = 'LoadingOutlined';
        var LoadingOutlined$1 = exports('L', /*#__PURE__*/react.exports.forwardRef(LoadingOutlined));
      }
    };
  });
})();

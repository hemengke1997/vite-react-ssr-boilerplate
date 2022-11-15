;
(function () {
  function _typeof2(obj) { "@babel/helpers - typeof"; return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof2(obj); }
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
  function _defineProperty2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  System.register(['./jsx-dev-runtime.10b3778c-legacy.js', './LoadingOutlined.be4fdceb-legacy.js', './index.110d239b-legacy.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.innerHTML = "/* -------------------- pc -------------------- */\n:root {\n  --pc-primary-color: #ff9800;\n}\n#app {\n}\r\n";
    document.head.appendChild(__vite_style__);
    var react, jsxDEV, Fragment, AntdIcon, _objectSpread2, _typeof, _slicedToArray, classNames, _defineProperty, _toConsumableArray, CSSMotionList, _objectWithoutProperties, genComponentStyleHook, merge, Keyframe, _extends, resetComponent, ConfigContext, LoadingOutlined, warning, ConfigProvider, globalConfig, ReactDOM, reactDom;
    return {
      setters: [function (module) {
        react = module.r;
        jsxDEV = module.j;
        Fragment = module.F;
      }, function (module) {
        AntdIcon = module.A;
        _objectSpread2 = module._;
        _typeof = module.t;
        _slicedToArray = module.d;
        classNames = module.c;
        _defineProperty = module.b;
        _toConsumableArray = module.v;
        CSSMotionList = module.x;
        _objectWithoutProperties = module.y;
        genComponentStyleHook = module.p;
        merge = module.q;
        Keyframe = module.K;
        _extends = module.a;
        resetComponent = module.z;
        ConfigContext = module.C;
        LoadingOutlined = module.L;
        warning = module.n;
        ConfigProvider = module.B;
        globalConfig = module.E;
      }, function (module) {
        ReactDOM = module.a;
        reactDom = module.r;
      }],
      execute: function execute() {
        exports('PCLayout', PCLayout);

        // This icon file is generated automatically.
        var CheckCircleFilled$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "64 64 896 896",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"
              }
            }]
          },
          "name": "check-circle",
          "theme": "filled"
        };
        var CheckCircleFilledSvg = CheckCircleFilled$2;
        var _jsxFileName$b = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\CheckCircleFilled.js";
        var CheckCircleFilled = function CheckCircleFilled(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: CheckCircleFilledSvg
            })), void 0, false, {
              fileName: _jsxFileName$b,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        CheckCircleFilled.displayName = 'CheckCircleFilled';
        var CheckCircleFilled$1 = /*#__PURE__*/react.exports.forwardRef(CheckCircleFilled);

        // This icon file is generated automatically.
        var CloseCircleFilled$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "64 64 896 896",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
              }
            }]
          },
          "name": "close-circle",
          "theme": "filled"
        };
        var CloseCircleFilledSvg = CloseCircleFilled$2;
        var _jsxFileName$a = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\CloseCircleFilled.js";
        var CloseCircleFilled = function CloseCircleFilled(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: CloseCircleFilledSvg
            })), void 0, false, {
              fileName: _jsxFileName$a,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        CloseCircleFilled.displayName = 'CloseCircleFilled';
        var CloseCircleFilled$1 = /*#__PURE__*/react.exports.forwardRef(CloseCircleFilled);

        // This icon file is generated automatically.
        var CloseOutlined$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "64 64 896 896",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"
              }
            }]
          },
          "name": "close",
          "theme": "outlined"
        };
        var CloseOutlinedSvg = CloseOutlined$2;
        var _jsxFileName$9 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\CloseOutlined.js";
        var CloseOutlined = function CloseOutlined(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: CloseOutlinedSvg
            })), void 0, false, {
              fileName: _jsxFileName$9,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        CloseOutlined.displayName = 'CloseOutlined';
        var CloseOutlined$1 = /*#__PURE__*/react.exports.forwardRef(CloseOutlined);

        // This icon file is generated automatically.
        var ExclamationCircleFilled$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "64 64 896 896",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
              }
            }]
          },
          "name": "exclamation-circle",
          "theme": "filled"
        };
        var ExclamationCircleFilledSvg = ExclamationCircleFilled$2;
        var _jsxFileName$8 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\ExclamationCircleFilled.js";
        var ExclamationCircleFilled = function ExclamationCircleFilled(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: ExclamationCircleFilledSvg
            })), void 0, false, {
              fileName: _jsxFileName$8,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        ExclamationCircleFilled.displayName = 'ExclamationCircleFilled';
        var ExclamationCircleFilled$1 = /*#__PURE__*/react.exports.forwardRef(ExclamationCircleFilled);

        // This icon file is generated automatically.
        var InfoCircleFilled$2 = {
          "icon": {
            "tag": "svg",
            "attrs": {
              "viewBox": "64 64 896 896",
              "focusable": "false"
            },
            "children": [{
              "tag": "path",
              "attrs": {
                "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"
              }
            }]
          },
          "name": "info-circle",
          "theme": "filled"
        };
        var InfoCircleFilledSvg = InfoCircleFilled$2;
        var _jsxFileName$7 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+@ant-design+icons@4.7.0_biqbaboplfbrettd7655fr4n2y\\node_modules\\@ant-design\\icons\\es\\icons\\InfoCircleFilled.js";
        var InfoCircleFilled = function InfoCircleFilled(props, ref) {
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(AntdIcon, _objectSpread({}, _objectSpread2(_objectSpread2({}, props), {}, {
              ref: ref,
              icon: InfoCircleFilledSvg
            })), void 0, false, {
              fileName: _jsxFileName$7,
              lineNumber: 9,
              columnNumber: 23
            }, this)
          );
        };
        InfoCircleFilled.displayName = 'InfoCircleFilled';
        var InfoCircleFilled$1 = /*#__PURE__*/react.exports.forwardRef(InfoCircleFilled);
        var fullClone = _objectSpread2({}, ReactDOM);
        var version = fullClone.version,
          reactRender = fullClone.render;
        fullClone.unmountComponentAtNode;
        var createRoot;
        try {
          var mainVersion = Number((version || '').split('.')[0]);
          if (mainVersion >= 18) {
            createRoot = fullClone.createRoot;
          }
        } catch (e) {// Do nothing;
        }
        function toggleWarning(skip) {
          var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fullClone.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && _typeof(__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === 'object') {
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
          }
        }
        var MARK = '__rc_react_root__';
        function modernRender(node, container) {
          toggleWarning(true);
          var root = container[MARK] || createRoot(container);
          toggleWarning(false);
          root.render(node);
          container[MARK] = root;
        }
        function legacyRender(node, container) {
          reactRender(node, container);
        }
        function render(node, container) {
          if (createRoot) {
            modernRender(node, container);
            return;
          }
          legacyRender(node, container);
        } // ========================= Unmount ==========================

        var _jsxFileName$6 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-notification@5.0.0-alpha.9_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-notification\\es\\Notice.js";
        var Notify = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
          var prefixCls = props.prefixCls,
            style = props.style,
            className = props.className,
            _props$duration = props.duration,
            duration = _props$duration === void 0 ? 4.5 : _props$duration,
            eventKey = props.eventKey,
            content = props.content,
            closable = props.closable,
            _props$closeIcon = props.closeIcon,
            closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon,
            divProps = props.props,
            onClick = props.onClick,
            onNoticeClose = props.onNoticeClose;
          var _React$useState = react.exports.useState(false),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            hovering = _React$useState2[0],
            setHovering = _React$useState2[1]; // ======================== Close =========================

          var onInternalClose = function onInternalClose() {
            onNoticeClose(eventKey);
          }; // ======================== Effect ========================

          react.exports.useEffect(function () {
            if (!hovering && duration > 0) {
              var timeout = setTimeout(function () {
                onInternalClose();
              }, duration * 1000);
              return function () {
                clearTimeout(timeout);
              };
            }
          }, [duration, hovering]); // ======================== Render ========================

          var noticePrefixCls = "".concat(prefixCls, "-notice");
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV("div", _objectSpread(_objectSpread({}, divProps), {}, {
              ref: ref,
              className: classNames(noticePrefixCls, className, _defineProperty({}, "".concat(noticePrefixCls, "-closable"), closable)),
              style: style,
              onMouseEnter: function onMouseEnter() {
                setHovering(true);
              },
              onMouseLeave: function onMouseLeave() {
                setHovering(false);
              },
              onClick: onClick,
              children: [/*#__PURE__*/jsxDEV("div", {
                className: "".concat(noticePrefixCls, "-content"),
                children: content
              }, void 0, false, {
                fileName: _jsxFileName$6,
                lineNumber: 55,
                columnNumber: 20
              }, this), closable && /*#__PURE__*/
              /*#__PURE__*/
              jsxDEV("a", {
                tabIndex: 0,
                className: "".concat(noticePrefixCls, "-close"),
                onClick: function onClick(e) {
                  e.preventDefault();
                  e.stopPropagation();
                  onInternalClose();
                },
                children: closeIcon
              }, void 0, false, {
                fileName: _jsxFileName$6,
                lineNumber: 57,
                columnNumber: 41
              }, this)]
            }), void 0, true, {
              fileName: _jsxFileName$6,
              lineNumber: 44,
              columnNumber: 23
            }, this)
          );
        });
        var Notice = Notify;
        var _jsxFileName$5 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-notification@5.0.0-alpha.9_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-notification\\es\\Notifications.js";
        var Notifications = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
          var _props$prefixCls = props.prefixCls,
            prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls,
            container = props.container,
            motion = props.motion,
            maxCount = props.maxCount,
            className = props.className,
            style = props.style,
            onAllRemoved = props.onAllRemoved;
          var _React$useState = react.exports.useState([]),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            configList = _React$useState2[0],
            setConfigList = _React$useState2[1]; // ======================== Close =========================

          var onNoticeClose = function onNoticeClose(key) {
            var _config$onClose;

            // Trigger close event
            var config = configList.find(function (item) {
              return item.key === key;
            });
            config === null || config === void 0 ? void 0 : (_config$onClose = config.onClose) === null || _config$onClose === void 0 ? void 0 : _config$onClose.call(config);
            setConfigList(function (list) {
              return list.filter(function (item) {
                return item.key !== key;
              });
            });
          }; // ========================= Refs =========================

          react.exports.useImperativeHandle(ref, function () {
            return {
              open: function open(config) {
                setConfigList(function (list) {
                  var clone = _toConsumableArray(list); // Replace if exist

                  var index = clone.findIndex(function (item) {
                    return item.key === config.key;
                  });
                  if (index >= 0) {
                    clone[index] = config;
                  } else {
                    clone.push(config);
                  }
                  if (maxCount > 0 && clone.length > maxCount) {
                    clone = clone.slice(-maxCount);
                  }
                  return clone;
                });
              },
              close: function close(key) {
                onNoticeClose(key);
              },
              destroy: function destroy() {
                setConfigList([]);
              }
            };
          }); // ====================== Placements ======================

          var _React$useState3 = react.exports.useState({}),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            placements = _React$useState4[0],
            setPlacements = _React$useState4[1];
          react.exports.useEffect(function () {
            var nextPlacements = {};
            configList.forEach(function (config) {
              var _config$placement = config.placement,
                placement = _config$placement === void 0 ? 'topRight' : _config$placement;
              if (placement) {
                nextPlacements[placement] = nextPlacements[placement] || [];
                nextPlacements[placement].push(config);
              }
            }); // Fill exist placements to avoid empty list causing remove without motion

            Object.keys(placements).forEach(function (placement) {
              nextPlacements[placement] = nextPlacements[placement] || [];
            });
            setPlacements(nextPlacements);
          }, [configList]); // Clean up container if all notices fade out

          var onAllNoticeRemoved = function onAllNoticeRemoved(placement) {
            setPlacements(function (originPlacements) {
              var clone = _objectSpread2({}, originPlacements);
              var list = clone[placement] || [];
              if (!list.length) {
                delete clone[placement];
              }
              return clone;
            });
          }; // Effect tell that placements is empty now

          var emptyRef = react.exports.useRef(false);
          react.exports.useEffect(function () {
            if (Object.keys(placements).length > 0) {
              emptyRef.current = true;
            } else if (emptyRef.current) {
              // Trigger only when from exist to empty
              onAllRemoved === null || onAllRemoved === void 0 ? void 0 : onAllRemoved();
              emptyRef.current = false;
            }
          }, [placements]); // ======================== Render ========================

          if (!container) {
            return null;
          }
          var placementList = Object.keys(placements);
          return /*#__PURE__*/reactDom.exports.createPortal( /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(Fragment, {
            children: placementList.map(function (placement) {
              var placementConfigList = placements[placement];
              var keys = placementConfigList.map(function (config) {
                return {
                  config: config,
                  key: config.key
                };
              });
              var placementMotion = typeof motion === 'function' ? motion(placement) : motion;
              return /*#__PURE__*/(
                /*#__PURE__*/
                jsxDEV(CSSMotionList, _objectSpread(_objectSpread({
                  className: classNames(prefixCls, "".concat(prefixCls, "-").concat(placement), className === null || className === void 0 ? void 0 : className(placement)),
                  style: style === null || style === void 0 ? void 0 : style(placement),
                  keys: keys,
                  motionAppear: true
                }, placementMotion), {}, {
                  onAllRemoved: function onAllRemoved() {
                    onAllNoticeRemoved(placement);
                  },
                  children: function children(_ref, nodeRef) {
                    var config = _ref.config,
                      motionClassName = _ref.className,
                      motionStyle = _ref.style;
                    var key = config.key;
                    var configClassName = config.className,
                      configStyle = config.style;
                    return /*#__PURE__*/(
                      /*#__PURE__*/
                      react.exports.createElement(Notice, _objectSpread(_objectSpread({}, config), {}, {
                        ref: nodeRef,
                        prefixCls: prefixCls,
                        className: classNames(motionClassName, configClassName),
                        style: _objectSpread2(_objectSpread2({}, motionStyle), configStyle),
                        key: key,
                        eventKey: key,
                        onNoticeClose: onNoticeClose,
                        __self: this,
                        __source: {
                          fileName: _jsxFileName$5,
                          lineNumber: 156,
                          columnNumber: 27
                        }
                      }))
                    );
                  }
                }), placement, false, {
                  fileName: _jsxFileName$5,
                  lineNumber: 139,
                  columnNumber: 25
                }, this)
              );
            })
          }, void 0, false), container);
        });
        {
          Notifications.displayName = 'Notifications';
        }
        var _jsxFileName$4 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+rc-notification@5.0.0-alpha.9_biqbaboplfbrettd7655fr4n2y\\node_modules\\rc-notification\\es\\useNotification.js";
        var _excluded = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved"];
        var defaultGetContainer = function defaultGetContainer() {
          return document.body;
        };
        var uniqueKey = 0;
        function mergeConfig() {
          var clone = {};
          for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
            objList[_key] = arguments[_key];
          }
          objList.forEach(function (obj) {
            if (obj) {
              Object.keys(obj).forEach(function (key) {
                var val = obj[key];
                if (val !== undefined) {
                  clone[key] = val;
                }
              });
            }
          });
          return clone;
        }
        function useNotification() {
          var rootConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var _rootConfig$getContai = rootConfig.getContainer,
            getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai,
            motion = rootConfig.motion,
            prefixCls = rootConfig.prefixCls,
            maxCount = rootConfig.maxCount,
            className = rootConfig.className,
            style = rootConfig.style,
            onAllRemoved = rootConfig.onAllRemoved,
            shareConfig = _objectWithoutProperties(rootConfig, _excluded);
          var _React$useState = react.exports.useState(),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            container = _React$useState2[0],
            setContainer = _React$useState2[1];
          var notificationsRef = react.exports.useRef();
          var contextHolder = /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(Notifications, {
            container: container,
            ref: notificationsRef,
            prefixCls: prefixCls,
            motion: motion,
            maxCount: maxCount,
            className: className,
            style: style,
            onAllRemoved: onAllRemoved
          }, void 0, false, {
            fileName: _jsxFileName$4,
            lineNumber: 54,
            columnNumber: 36
          }, this);
          var _React$useState3 = react.exports.useState([]),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            taskQueue = _React$useState4[0],
            setTaskQueue = _React$useState4[1]; // ========================= Refs =========================

          var api = react.exports.useMemo(function () {
            return {
              open: function open(config) {
                var mergedConfig = mergeConfig(shareConfig, config);
                if (mergedConfig.key === null || mergedConfig.key === undefined) {
                  mergedConfig.key = "rc-notification-".concat(uniqueKey);
                  uniqueKey += 1;
                }
                setTaskQueue(function (queue) {
                  return [].concat(_toConsumableArray(queue), [{
                    type: 'open',
                    config: mergedConfig
                  }]);
                });
              },
              close: function close(key) {
                setTaskQueue(function (queue) {
                  return [].concat(_toConsumableArray(queue), [{
                    type: 'close',
                    key: key
                  }]);
                });
              },
              destroy: function destroy() {
                setTaskQueue(function (queue) {
                  return [].concat(_toConsumableArray(queue), [{
                    type: 'destroy'
                  }]);
                });
              }
            };
          }, []); // ======================= Container ======================
          // React 18 should all in effect that we will check container in each render
          // Which means getContainer should be stable.

          react.exports.useEffect(function () {
            setContainer(getContainer());
          }); // ======================== Effect ========================

          react.exports.useEffect(function () {
            // Flush task when node ready
            if (notificationsRef.current && taskQueue.length) {
              taskQueue.forEach(function (task) {
                switch (task.type) {
                  case 'open':
                    notificationsRef.current.open(task.config);
                    break;
                  case 'close':
                    notificationsRef.current.close(task.key);
                    break;
                  case 'destroy':
                    notificationsRef.current.destroy();
                    break;
                }
              });
              setTaskQueue([]);
            }
          }, [taskQueue]); // ======================== Return ========================

          return [api, contextHolder];
        }
        var genMessageStyle = function genMessageStyle(token) {
          var _extends2, _$concat;
          var componentCls = token.componentCls,
            iconCls = token.iconCls,
            boxShadowSecondary = token.boxShadowSecondary,
            colorBgElevated = token.colorBgElevated,
            colorSuccess = token.colorSuccess,
            colorError = token.colorError,
            colorWarning = token.colorWarning,
            colorInfo = token.colorInfo,
            fontSizeLG = token.fontSizeLG,
            motionEaseInOutCirc = token.motionEaseInOutCirc,
            motionDurationSlow = token.motionDurationSlow,
            marginXS = token.marginXS,
            paddingXS = token.paddingXS,
            borderRadiusLG = token.borderRadiusLG,
            zIndexPopup = token.zIndexPopup,
            messageNoticeContentPadding = token.messageNoticeContentPadding;
          var messageMoveIn = new Keyframe('MessageMoveIn', {
            '0%': {
              padding: 0,
              transform: 'translateY(-100%)',
              opacity: 0
            },
            '100%': {
              padding: paddingXS,
              transform: 'translateY(0)',
              opacity: 1
            }
          });
          var messageMoveOut = new Keyframe('MessageMoveOut', {
            '0%': {
              maxHeight: token.height,
              padding: paddingXS,
              opacity: 1
            },
            '100%': {
              maxHeight: 0,
              padding: 0,
              opacity: 0
            }
          });
          return [
          // ============================ Holder ============================
          _defineProperty({}, componentCls, _extends(_extends({}, resetComponent(token)), (_extends2 = {
            position: 'fixed',
            top: marginXS,
            insetInlineStart: 0,
            width: '100%',
            pointerEvents: 'none',
            zIndex: zIndexPopup
          }, _defineProperty(_extends2, "".concat(componentCls, "-move-up"), {
            animationFillMode: 'forwards'
          }), _defineProperty(_extends2, "\n        ".concat(componentCls, "-move-up-appear,\n        ").concat(componentCls, "-move-up-enter\n      "), {
            animationName: messageMoveIn,
            animationDuration: motionDurationSlow,
            animationPlayState: 'paused',
            animationTimingFunction: motionEaseInOutCirc
          }), _defineProperty(_extends2, "\n        ".concat(componentCls, "-move-up-appear").concat(componentCls, "-move-up-appear-active,\n        ").concat(componentCls, "-move-up-enter").concat(componentCls, "-move-up-enter-active\n      "), {
            animationPlayState: 'running'
          }), _defineProperty(_extends2, "".concat(componentCls, "-move-up-leave"), {
            animationName: messageMoveOut,
            animationDuration: motionDurationSlow,
            animationPlayState: 'paused',
            animationTimingFunction: motionEaseInOutCirc
          }), _defineProperty(_extends2, "".concat(componentCls, "-move-up-leave").concat(componentCls, "-move-up-leave-active"), {
            animationPlayState: 'running'
          }), _defineProperty(_extends2, '&-rtl', {
            direction: 'rtl',
            span: {
              direction: 'rtl'
            }
          }), _extends2))),
          // ============================ Notice ============================
          _defineProperty({}, "".concat(componentCls, "-notice"), (_$concat = {
            padding: paddingXS,
            textAlign: 'center'
          }, _defineProperty(_$concat, iconCls, {
            verticalAlign: 'text-bottom',
            marginInlineEnd: marginXS,
            fontSize: fontSizeLG
          }), _defineProperty(_$concat, "".concat(componentCls, "-notice-content"), {
            display: 'inline-block',
            padding: messageNoticeContentPadding,
            background: colorBgElevated,
            borderRadius: borderRadiusLG,
            boxShadow: boxShadowSecondary,
            pointerEvents: 'all'
          }), _defineProperty(_$concat, "".concat(componentCls, "-success ").concat(iconCls), {
            color: colorSuccess
          }), _defineProperty(_$concat, "".concat(componentCls, "-error ").concat(iconCls), {
            color: colorError
          }), _defineProperty(_$concat, "".concat(componentCls, "-warning ").concat(iconCls), {
            color: colorWarning
          }), _defineProperty(_$concat, "\n        ".concat(componentCls, "-info ").concat(iconCls, ",\n        ").concat(componentCls, "-loading ").concat(iconCls), {
            color: colorInfo
          }), _$concat)),
          // ============================= Pure =============================
          _defineProperty({}, "".concat(componentCls, "-notice-pure-panel"), {
            padding: 0,
            textAlign: 'start'
          })];
        };
        // ============================== Export ==============================
        var useStyle = genComponentStyleHook('Message', function (token) {
          // Gen-style functions here
          var combinedToken = merge(token, {
            messageNoticeContentPadding: "".concat((token.controlHeightLG - token.fontSize * token.lineHeight) / 2, "px ").concat(token.paddingContentVertical, "px")
          });
          return [genMessageStyle(combinedToken)];
        }, function (token) {
          return {
            height: 150,
            zIndexPopup: token.zIndexPopupBase + 10
          };
        });
        var _jsxFileName$3 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\message\\PurePanel.js";
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
        var TypeIcon = {
          info: /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(InfoCircleFilled$1, {}, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 24,
            columnNumber: 22
          }, globalThis),
          success: /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(CheckCircleFilled$1, {}, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 25,
            columnNumber: 25
          }, globalThis),
          error: /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(CloseCircleFilled$1, {}, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 26,
            columnNumber: 23
          }, globalThis),
          warning: /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(ExclamationCircleFilled$1, {}, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 27,
            columnNumber: 25
          }, globalThis),
          loading: /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(LoadingOutlined, {}, void 0, false, {
            fileName: _jsxFileName$3,
            lineNumber: 28,
            columnNumber: 25
          }, globalThis)
        };
        function PureContent(_ref) {
          var prefixCls = _ref.prefixCls,
            type = _ref.type,
            icon = _ref.icon,
            children = _ref.children;
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV("div", {
              className: classNames("".concat(prefixCls, "-custom-content"), "".concat(prefixCls, "-").concat(type)),
              children: [icon || TypeIcon[type], /*#__PURE__*/jsxDEV("span", {
                children: children
              }, void 0, false, {
                fileName: _jsxFileName$3,
                lineNumber: 37,
                columnNumber: 43
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName$3,
              lineNumber: 35,
              columnNumber: 23
            }, this)
          );
        }
        /** @private Internal Component. Do not use in your production. */
        function PurePanel(props) {
          var staticPrefixCls = props.prefixCls,
            className = props.className,
            type = props.type,
            icon = props.icon,
            content = props.content,
            restProps = __rest$1(props, ["prefixCls", "className", "type", "icon", "content"]);
          var _React$useContext = react.exports.useContext(ConfigContext),
            getPrefixCls = _React$useContext.getPrefixCls;
          var prefixCls = staticPrefixCls || getPrefixCls('message');
          var _useStyle = useStyle(prefixCls),
            _useStyle2 = _slicedToArray(_useStyle, 2),
            hashId = _useStyle2[1];
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(Notice, _objectSpread(_objectSpread({}, restProps), {}, {
              prefixCls: prefixCls,
              className: classNames(className, hashId, "".concat(prefixCls, "-notice-pure-panel")),
              eventKey: "pure",
              duration: null,
              content: /*#__PURE__*/
              /*#__PURE__*/
              jsxDEV(PureContent, {
                prefixCls: prefixCls,
                type: type,
                icon: icon,
                children: content
              }, void 0, false, {
                fileName: _jsxFileName$3,
                lineNumber: 58,
                columnNumber: 27
              }, this)
            }), void 0, false, {
              fileName: _jsxFileName$3,
              lineNumber: 53,
              columnNumber: 23
            }, this)
          );
        }
        function getMotion(prefixCls, transitionName) {
          return {
            motionName: transitionName !== null && transitionName !== void 0 ? transitionName : "".concat(prefixCls, "-move-up")
          };
        }
        /** Wrap message open with promise like function */
        function wrapPromiseFn(openFn) {
          var closeFn;
          var closePromise = new Promise(function (resolve) {
            closeFn = openFn(function () {
              resolve(true);
            });
          });
          var result = function result() {
            closeFn === null || closeFn === void 0 ? void 0 : closeFn();
          };
          result.then = function (filled, rejected) {
            return closePromise.then(filled, rejected);
          };
          result.promise = closePromise;
          return result;
        }
        var _jsxFileName$2 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\message\\useMessage.js";
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
        var DEFAULT_OFFSET = 8;
        var DEFAULT_DURATION = 3;
        var Holder = /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
          var top = props.top,
            staticPrefixCls = props.prefixCls,
            staticGetContainer = props.getContainer,
            maxCount = props.maxCount,
            rtl = props.rtl,
            transitionName = props.transitionName,
            onAllRemoved = props.onAllRemoved;
          var _React$useContext = react.exports.useContext(ConfigContext),
            getPrefixCls = _React$useContext.getPrefixCls,
            getPopupContainer = _React$useContext.getPopupContainer;
          var prefixCls = staticPrefixCls || getPrefixCls('message');
          var _useStyle = useStyle(prefixCls),
            _useStyle2 = _slicedToArray(_useStyle, 2),
            hashId = _useStyle2[1];
          // =============================== Style ===============================
          var getStyle = function getStyle() {
            return {
              left: '50%',
              transform: 'translateX(-50%)',
              top: top !== null && top !== void 0 ? top : DEFAULT_OFFSET
            };
          };
          var getClassName = function getClassName() {
            return classNames(hashId, rtl ? "".concat(prefixCls, "-rtl") : '');
          };
          // ============================== Motion ===============================
          var getNotificationMotion = function getNotificationMotion() {
            return getMotion(prefixCls, transitionName);
          };
          // ============================ Close Icon =============================
          var mergedCloseIcon = /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV("span", {
            className: "".concat(prefixCls, "-close-x"),
            children: /*#__PURE__*/jsxDEV(CloseOutlined$1, {
              className: "".concat(prefixCls, "-close-icon")
            }, void 0, false, {
              fileName: _jsxFileName$2,
              lineNumber: 58,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName$2,
            lineNumber: 56,
            columnNumber: 38
          }, this);
          // ============================== Origin ===============================
          var _useRcNotification = useNotification({
              prefixCls: prefixCls,
              style: getStyle,
              className: getClassName,
              motion: getNotificationMotion,
              closable: false,
              closeIcon: mergedCloseIcon,
              duration: DEFAULT_DURATION,
              getContainer: function getContainer() {
                return (staticGetContainer === null || staticGetContainer === void 0 ? void 0 : staticGetContainer()) || (getPopupContainer === null || getPopupContainer === void 0 ? void 0 : getPopupContainer()) || document.body;
              },
              maxCount: maxCount,
              onAllRemoved: onAllRemoved
            }),
            _useRcNotification2 = _slicedToArray(_useRcNotification, 2),
            api = _useRcNotification2[0],
            holder = _useRcNotification2[1];
          // ================================ Ref ================================
          react.exports.useImperativeHandle(ref, function () {
            return _extends(_extends({}, api), {
              prefixCls: prefixCls,
              hashId: hashId
            });
          });
          return holder;
        });
        // ==============================================================================
        // ==                                   Hook                                   ==
        // ==============================================================================
        var keyIndex = 0;
        function useInternalMessage(notificationConfig) {
          var holderRef = react.exports.useRef(null);
          // ================================ API ================================
          var wrapAPI = react.exports.useMemo(function () {
            // Wrap with notification content
            // >>> close
            var close = function close(key) {
              var _a;
              (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.close(key);
            };
            // >>> Open
            var open = function open(config) {
              if (!holderRef.current) {
                warning(false, 'Message', 'You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.');
                var fakeResult = function fakeResult() {};
                fakeResult.then = function () {};
                return fakeResult;
              }
              var _holderRef$current = holderRef.current,
                originOpen = _holderRef$current.open,
                prefixCls = _holderRef$current.prefixCls,
                hashId = _holderRef$current.hashId;
              var noticePrefixCls = "".concat(prefixCls, "-notice");
              var content = config.content,
                icon = config.icon,
                type = config.type,
                key = config.key,
                className = config.className,
                _onClose = config.onClose,
                restConfig = __rest(config, ["content", "icon", "type", "key", "className", "onClose"]);
              var mergedKey = key;
              if (mergedKey === undefined || mergedKey === null) {
                keyIndex += 1;
                mergedKey = "antd-message-".concat(keyIndex);
              }
              return wrapPromiseFn(function (resolve) {
                originOpen(_extends(_extends({}, restConfig), {
                  key: mergedKey,
                  content: /*#__PURE__*/
                  /*#__PURE__*/
                  jsxDEV(PureContent, {
                    prefixCls: prefixCls,
                    type: type,
                    icon: icon,
                    children: content
                  }, void 0, false, {
                    fileName: _jsxFileName$2,
                    lineNumber: 130,
                    columnNumber: 33
                  }, this),
                  placement: 'top',
                  className: classNames(type && "".concat(noticePrefixCls, "-").concat(type), hashId, className),
                  onClose: function onClose() {
                    _onClose === null || _onClose === void 0 ? void 0 : _onClose();
                    resolve();
                  }
                }));
                // Return close function
                return function () {
                  close(mergedKey);
                };
              });
            };
            // >>> destroy
            var destroy = function destroy(key) {
              var _a;
              if (key !== undefined) {
                close(key);
              } else {
                (_a = holderRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
              }
            };
            var clone = {
              open: open,
              destroy: destroy
            };
            var keys = ['info', 'success', 'warning', 'error', 'loading'];
            keys.forEach(function (type) {
              var typeOpen = function typeOpen(jointContent, duration, onClose) {
                var config;
                if (jointContent && _typeof(jointContent) === 'object' && 'content' in jointContent) {
                  config = jointContent;
                } else {
                  config = {
                    content: jointContent
                  };
                }
                // Params
                var mergedDuration;
                var mergedOnClose;
                if (typeof duration === 'function') {
                  mergedOnClose = duration;
                } else {
                  mergedDuration = duration;
                  mergedOnClose = onClose;
                }
                var mergedConfig = _extends(_extends({
                  onClose: mergedOnClose,
                  duration: mergedDuration
                }, config), {
                  type: type
                });
                return open(mergedConfig);
              };
              clone[type] = typeOpen;
            });
            return clone;
          }, []);
          // ============================== Return ===============================
          return [wrapAPI, /*#__PURE__*/
          /*#__PURE__*/
          jsxDEV(Holder, _objectSpread(_objectSpread({}, notificationConfig), {}, {
            ref: holderRef
          }), "holder", false, {
            fileName: _jsxFileName$2,
            lineNumber: 194,
            columnNumber: 33
          }, this)];
        }
        function useMessage(notificationConfig) {
          return useInternalMessage(notificationConfig);
        }
        var _jsxFileName$1 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\message\\index.js";
        var methods = ['success', 'info', 'warning', 'error', 'loading'];
        var message = null;
        var act = function act(callback) {
          return callback();
        };
        var taskQueue = [];
        var defaultGlobalConfig = {};
        function getGlobalContext() {
          var _defaultGlobalConfig = defaultGlobalConfig,
            globalPrefixCls = _defaultGlobalConfig.prefixCls,
            globalGetContainer = _defaultGlobalConfig.getContainer,
            rtl = _defaultGlobalConfig.rtl,
            maxCount = _defaultGlobalConfig.maxCount,
            top = _defaultGlobalConfig.top;
          var mergedPrefixCls = globalPrefixCls !== null && globalPrefixCls !== void 0 ? globalPrefixCls : globalConfig().getPrefixCls('message');
          var mergedContainer = (globalGetContainer === null || globalGetContainer === void 0 ? void 0 : globalGetContainer()) || document.body;
          return {
            prefixCls: mergedPrefixCls,
            container: mergedContainer,
            rtl: rtl,
            maxCount: maxCount,
            top: top
          };
        }
        var GlobalHolder = /*#__PURE__*/react.exports.forwardRef(function (_, ref) {
          var _React$useState = react.exports.useState(),
            _React$useState2 = _slicedToArray(_React$useState, 2),
            prefixCls = _React$useState2[0],
            setPrefixCls = _React$useState2[1];
          var _React$useState3 = react.exports.useState(),
            _React$useState4 = _slicedToArray(_React$useState3, 2),
            container = _React$useState4[0],
            setContainer = _React$useState4[1];
          var _React$useState5 = react.exports.useState(),
            _React$useState6 = _slicedToArray(_React$useState5, 2),
            maxCount = _React$useState6[0],
            setMaxCount = _React$useState6[1];
          var _React$useState7 = react.exports.useState(),
            _React$useState8 = _slicedToArray(_React$useState7, 2),
            rtl = _React$useState8[0],
            setRTL = _React$useState8[1];
          var _React$useState9 = react.exports.useState(),
            _React$useState10 = _slicedToArray(_React$useState9, 2),
            top = _React$useState10[0],
            setTop = _React$useState10[1];
          var _useInternalMessage = useInternalMessage({
              prefixCls: prefixCls,
              getContainer: function getContainer() {
                return container;
              },
              maxCount: maxCount,
              rtl: rtl,
              top: top
            }),
            _useInternalMessage2 = _slicedToArray(_useInternalMessage, 2),
            api = _useInternalMessage2[0],
            holder = _useInternalMessage2[1];
          var global = globalConfig();
          var rootPrefixCls = global.getRootPrefixCls();
          var rootIconPrefixCls = global.getIconPrefixCls();
          var sync = function sync() {
            var _getGlobalContext = getGlobalContext(),
              nextGlobalPrefixCls = _getGlobalContext.prefixCls,
              nextGlobalContainer = _getGlobalContext.container,
              nextGlobalMaxCount = _getGlobalContext.maxCount,
              nextGlobalRTL = _getGlobalContext.rtl,
              nextTop = _getGlobalContext.top;
            setPrefixCls(nextGlobalPrefixCls);
            setContainer(nextGlobalContainer);
            setMaxCount(nextGlobalMaxCount);
            setRTL(nextGlobalRTL);
            setTop(nextTop);
          };
          react.exports.useEffect(sync, []);
          react.exports.useImperativeHandle(ref, function () {
            var instance = _extends({}, api);
            Object.keys(instance).forEach(function (method) {
              instance[method] = function () {
                sync();
                return api[method].apply(api, arguments);
              };
            });
            return {
              instance: instance,
              sync: sync
            };
          });
          return /*#__PURE__*/(
            /*#__PURE__*/
            jsxDEV(ConfigProvider, {
              prefixCls: rootPrefixCls,
              iconPrefixCls: rootIconPrefixCls,
              children: holder
            }, void 0, false, {
              fileName: _jsxFileName$1,
              lineNumber: 97,
              columnNumber: 23
            }, this)
          );
        });
        function flushNotice() {
          if (!message) {
            var holderFragment = document.createDocumentFragment();
            var newMessage = {
              fragment: holderFragment
            };
            message = newMessage;
            // Delay render to avoid sync issue
            act(function () {
              render( /*#__PURE__*/
              /*#__PURE__*/
              jsxDEV(GlobalHolder, {
                ref: function ref(node) {
                  var _ref = node || {},
                    instance = _ref.instance,
                    sync = _ref.sync;
                  // React 18 test env will throw if call immediately in ref
                  Promise.resolve().then(function () {
                    if (!newMessage.instance && instance) {
                      newMessage.instance = instance;
                      newMessage.sync = sync;
                      flushNotice();
                    }
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName$1,
                lineNumber: 111,
                columnNumber: 28
              }, this), holderFragment);
            });
            return;
          }
          // Notification not ready
          if (message && !message.instance) {
            return;
          }
          // >>> Execute task
          taskQueue.forEach(function (task) {
            var type = task.type,
              skipped = task.skipped;
            // Only `skipped` when user call notice but cancel it immediately
            // and instance not ready
            if (!skipped) {
              switch (type) {
                case 'open':
                  {
                    act(function () {
                      var closeFn = message.instance.open(_extends(_extends({}, defaultGlobalConfig), task.config));
                      closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                      task.setCloseFn(closeFn);
                    });
                    break;
                  }
                case 'destroy':
                  act(function () {
                    message === null || message === void 0 ? void 0 : message.instance.destroy(task.key);
                  });
                  break;
                // Other type open
                default:
                  {
                    act(function () {
                      var _message$instance;
                      var closeFn = (_message$instance = message.instance)[type].apply(_message$instance, _toConsumableArray(task.args));
                      closeFn === null || closeFn === void 0 ? void 0 : closeFn.then(task.resolve);
                      task.setCloseFn(closeFn);
                    });
                  }
              }
            }
          });
          // Clean up
          taskQueue = [];
        }
        function setMessageGlobalConfig(config) {
          defaultGlobalConfig = _extends(_extends({}, defaultGlobalConfig), config);
          // Trigger sync for it
          act(function () {
            var _a;
            (_a = message === null || message === void 0 ? void 0 : message.sync) === null || _a === void 0 ? void 0 : _a.call(message);
          });
        }
        function open(config) {
          var result = wrapPromiseFn(function (resolve) {
            var closeFn;
            var task = {
              type: 'open',
              config: config,
              resolve: resolve,
              setCloseFn: function setCloseFn(fn) {
                closeFn = fn;
              }
            };
            taskQueue.push(task);
            return function () {
              if (closeFn) {
                act(function () {
                  closeFn();
                });
              } else {
                task.skipped = true;
              }
            };
          });
          flushNotice();
          return result;
        }
        function typeOpen(type, args) {
          var result = wrapPromiseFn(function (resolve) {
            var closeFn;
            var task = {
              type: type,
              args: args,
              resolve: resolve,
              setCloseFn: function setCloseFn(fn) {
                closeFn = fn;
              }
            };
            taskQueue.push(task);
            return function () {
              if (closeFn) {
                act(function () {
                  closeFn();
                });
              } else {
                task.skipped = true;
              }
            };
          });
          flushNotice();
          return result;
        }
        function destroy(key) {
          taskQueue.push({
            type: 'destroy',
            key: key
          });
          flushNotice();
        }
        var baseStaticMethods = {
          open: open,
          destroy: destroy,
          config: setMessageGlobalConfig,
          useMessage: useMessage,
          _InternalPanelDoNotUseOrYouWillBeFired: PurePanel
        };
        var staticMethods = baseStaticMethods;
        methods.forEach(function (type) {
          staticMethods[type] = function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            return typeOpen(type, args);
          };
        });
        var message$1 = staticMethods;
        var zh_CN$3 = {};
        Object.defineProperty(zh_CN$3, "__esModule", {
          value: true
        });
        zh_CN$3["default"] = void 0;
        var _default$1 = {
          // Options.jsx
          items_per_page: '条/页',
          jump_to: '跳至',
          jump_to_confirm: '确定',
          page: '页',
          // Pagination.jsx
          prev_page: '上一页',
          next_page: '下一页',
          prev_5: '向前 5 页',
          next_5: '向后 5 页',
          prev_3: '向前 3 页',
          next_3: '向后 3 页',
          page_size: '页码'
        };
        zh_CN$3["default"] = _default$1;
        var zh_CN$2 = {};
        Object.defineProperty(zh_CN$2, "__esModule", {
          value: true
        });
        zh_CN$2["default"] = void 0;
        var locale$1 = {
          locale: 'zh_CN',
          today: '今天',
          now: '此刻',
          backToToday: '返回今天',
          ok: '确定',
          timeSelect: '选择时间',
          dateSelect: '选择日期',
          weekSelect: '选择周',
          clear: '清除',
          month: '月',
          year: '年',
          previousMonth: '上个月 (翻页上键)',
          nextMonth: '下个月 (翻页下键)',
          monthSelect: '选择月份',
          yearSelect: '选择年份',
          decadeSelect: '选择年代',
          yearFormat: 'YYYY年',
          dayFormat: 'D日',
          dateFormat: 'YYYY年M月D日',
          dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
          previousYear: '上一年 (Control键加左方向键)',
          nextYear: '下一年 (Control键加右方向键)',
          previousDecade: '上一年代',
          nextDecade: '下一年代',
          previousCentury: '上一世纪',
          nextCentury: '下一世纪'
        };
        var _default = locale$1;
        zh_CN$2["default"] = _default;
        var __create = Object.create;
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __getOwnPropSymbols = Object.getOwnPropertySymbols;
        var __getProtoOf = Object.getPrototypeOf;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __propIsEnum = Object.prototype.propertyIsEnumerable;
        var __defNormalProp = function __defNormalProp(obj, key, value) {
          return key in obj ? __defProp(obj, key, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: value
          }) : obj[key] = value;
        };
        var __spreadValues = function __spreadValues(a, b) {
          for (var prop in b || (b = {})) {
            if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
          }
          if (__getOwnPropSymbols) {
            var _iterator = _createForOfIteratorHelper(__getOwnPropSymbols(b)),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var prop = _step.value;
                if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
          return a;
        };
        var __export = function __export(target, all) {
          for (var name in all) {
            __defProp(target, name, {
              get: all[name],
              enumerable: true
            });
          }
        };
        var __copyProps = function __copyProps(to, from, except, desc) {
          if (from && _typeof2(from) === "object" || typeof from === "function") {
            var _iterator2 = _createForOfIteratorHelper(__getOwnPropNames(from)),
              _step2;
            try {
              var _loop = function _loop() {
                var key = _step2.value;
                if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                  get: function get() {
                    return from[key];
                  },
                  enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
              };
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          return to;
        };
        var __toESM = function __toESM(mod, isNodeMode, target) {
          return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
          }) : target, mod);
        };
        var __toCommonJS = function __toCommonJS(mod) {
          return __copyProps(__defProp({}, "__esModule", {
            value: true
          }), mod);
        };

        // components/locale/zh_CN.tsx
        var zh_CN_exports = {};
        __export(zh_CN_exports, {
          "default": function _default() {
            return zh_CN_default4;
          }
        });
        var zh_CN = __toCommonJS(zh_CN_exports);
        var import_zh_CN4 = __toESM(zh_CN$3);

        // components/date-picker/locale/zh_CN.tsx
        var import_zh_CN = __toESM(zh_CN$2);

        // components/time-picker/locale/zh_CN.tsx
        var locale = {
          placeholder: "请选择时间",
          rangePlaceholder: ["开始时间", "结束时间"]
        };
        var zh_CN_default = locale;

        // components/date-picker/locale/zh_CN.tsx
        var locale2 = {
          lang: __spreadValues({
            placeholder: "请选择日期",
            yearPlaceholder: "请选择年份",
            quarterPlaceholder: "请选择季度",
            monthPlaceholder: "请选择月份",
            weekPlaceholder: "请选择周",
            rangePlaceholder: ["开始日期", "结束日期"],
            rangeYearPlaceholder: ["开始年份", "结束年份"],
            rangeMonthPlaceholder: ["开始月份", "结束月份"],
            rangeQuarterPlaceholder: ["开始季度", "结束季度"],
            rangeWeekPlaceholder: ["开始周", "结束周"]
          }, import_zh_CN["default"]),
          timePickerLocale: __spreadValues({}, zh_CN_default)
        };
        locale2.lang.ok = "确定";
        var zh_CN_default2 = locale2;

        // components/calendar/locale/zh_CN.tsx
        var zh_CN_default3 = zh_CN_default2;

        // components/locale/zh_CN.tsx
        var typeTemplate = "${label}不是一个有效的${type}";
        var localeValues = {
          locale: "zh-cn",
          Pagination: import_zh_CN4["default"],
          DatePicker: zh_CN_default2,
          TimePicker: zh_CN_default,
          Calendar: zh_CN_default3,
          global: {
            placeholder: "请选择"
          },
          Table: {
            filterTitle: "筛选",
            filterConfirm: "确定",
            filterReset: "重置",
            filterEmptyText: "无筛选项",
            filterCheckall: "全选",
            filterSearchPlaceholder: "在筛选项中搜索",
            selectAll: "全选当页",
            selectInvert: "反选当页",
            selectNone: "清空所有",
            selectionAll: "全选所有",
            sortTitle: "排序",
            expand: "展开行",
            collapse: "关闭行",
            triggerDesc: "点击降序",
            triggerAsc: "点击升序",
            cancelSort: "取消排序"
          },
          Modal: {
            okText: "确定",
            cancelText: "取消",
            justOkText: "知道了"
          },
          Tour: {
            Next: "下一步",
            Previous: "上一步",
            Finish: "结束导览"
          },
          Popconfirm: {
            cancelText: "取消",
            okText: "确定"
          },
          Transfer: {
            titles: ["", ""],
            searchPlaceholder: "请输入搜索内容",
            itemUnit: "项",
            itemsUnit: "项",
            remove: "删除",
            selectCurrent: "全选当页",
            removeCurrent: "删除当页",
            selectAll: "全选所有",
            removeAll: "删除全部",
            selectInvert: "反选当页"
          },
          Upload: {
            uploading: "文件上传中",
            removeFile: "删除文件",
            uploadError: "上传错误",
            previewFile: "预览文件",
            downloadFile: "下载文件"
          },
          Empty: {
            description: "暂无数据"
          },
          Icon: {
            icon: "图标"
          },
          Text: {
            edit: "编辑",
            copy: "复制",
            copied: "复制成功",
            expand: "展开"
          },
          PageHeader: {
            back: "返回"
          },
          Form: {
            optional: "（可选）",
            defaultValidateMessages: {
              "default": "字段验证错误${label}",
              required: "请输入${label}",
              "enum": "${label}必须是其中一个[${enum}]",
              whitespace: "${label}不能为空字符",
              date: {
                format: "${label}日期格式无效",
                parse: "${label}不能转换为日期",
                invalid: "${label}是一个无效日期"
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
                len: "${label}须为${len}个字符",
                min: "${label}最少${min}个字符",
                max: "${label}最多${max}个字符",
                range: "${label}须在${min}-${max}字符之间"
              },
              number: {
                len: "${label}必须等于${len}",
                min: "${label}最小值为${min}",
                max: "${label}最大值为${max}",
                range: "${label}须在${min}-${max}之间"
              },
              array: {
                len: "须为${len}个${label}",
                min: "最少${min}个${label}",
                max: "最多${max}个${label}",
                range: "${label}数量须在${min}-${max}之间"
              },
              pattern: {
                mismatch: "${label}与模式不匹配${pattern}"
              }
            }
          },
          Image: {
            preview: "预览"
          }
        };
        var zh_CN_default4 = localeValues;
        var zh_CN$1 = zh_CN;
        var index = '';
        var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\src\\components\\pc\\PCLayout\\index.tsx";
        message$1.config({
          maxCount: 1,
          duration: 2
        });
        function PCLayout(_ref2) {
          var children = _ref2.children;
          return /* @__PURE__ */jsxDEV(ConfigProvider, {
            locale: zh_CN$1,
            autoInsertSpaceInButton: false,
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 5
          }, this);
        }
      }
    };
  });
})();

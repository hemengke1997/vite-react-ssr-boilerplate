function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { r as react, j as jsxDEV, F as Fragment } from "../../../jsx-dev-runtime.62039f8c.js";
import { _ as _objectSpread2, a as _extends, b as _defineProperty, c as classNames, w as wrapperRaf$1, u as useToken, d as _slicedToArray, C as ConfigContext, e as useStyleRegister, K as Keyframe, f as _inherits, g as _createSuper, h as _classCallCheck, i as _assertThisInitialized, j as updateCSS, s as supportRef, k as composeRef, l as _createClass, m as ConfigConsumer, n as warning, L as LoadingOutlined, o as CSSMotion, p as genComponentStyleHook, q as merge, r as genFocusStyle, S as SizeContext, D as DisabledContext, t as _typeof } from "../../../LoadingOutlined.60004926.js";
import "../../../index.a1ea8fec.js";
function omit(obj, fields) {
  var clone = _objectSpread2({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}
var isValidElement = react.exports.isValidElement;
function isFragment(child) {
  return child && isValidElement(child) && child.type === react.exports.Fragment;
}
function replaceElement(element, replacement, props) {
  if (!isValidElement(element)) {
    return replacement;
  }
  return /* @__PURE__ */ react.exports.cloneElement(element, typeof props === "function" ? props(element.props || {}) : props);
}
function cloneElement(element, props) {
  return replaceElement(element, element, props);
}
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
function compactItemBorder(token, borderedItemCls, popoverFocusedCls) {
  var childCombinator = borderedItemCls ? "> *" : "";
  return {
    "&-item:not(&-last-item)": {
      marginInlineEnd: -token.lineWidth
    },
    "&-item": _extends(_extends(_defineProperty({}, "&:hover ".concat(childCombinator, ", &:focus ").concat(childCombinator, ", &:active ").concat(childCombinator), {
      zIndex: 2
    }), popoverFocusedCls ? _defineProperty({}, "&".concat(popoverFocusedCls), {
      zIndex: 2
    }) : {}), _defineProperty({}, "&[disabled] ".concat(childCombinator), {
      zIndex: 0
    }))
  };
}
function compactItemBorderRadius(prefixCls, borderedElementCls) {
  var _ref2;
  var childCombinator = borderedElementCls ? "> ".concat(borderedElementCls) : "";
  return _ref2 = {}, _defineProperty(_ref2, "&-item:not(&-first-item):not(&-last-item) ".concat(childCombinator), {
    borderRadius: 0
  }), _defineProperty(_ref2, "&-item&-first-item", _defineProperty({}, "& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator), {
    borderStartEndRadius: 0,
    borderEndEndRadius: 0
  })), _defineProperty(_ref2, "&-item&-last-item", _defineProperty({}, "& ".concat(childCombinator, ", &").concat(prefixCls, "-sm ").concat(childCombinator, ", &").concat(prefixCls, "-lg ").concat(childCombinator), {
    borderStartStartRadius: 0,
    borderEndStartRadius: 0
  })), _ref2;
}
function genCompactItemStyle(token, prefixCls, borderedElementCls, popoverFocusedCls) {
  return {
    "&-compact": _extends(_extends({}, compactItemBorder(token, borderedElementCls, popoverFocusedCls)), compactItemBorderRadius(prefixCls, borderedElementCls))
  };
}
globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var SpaceCompactItemContext = /* @__PURE__ */ react.exports.createContext(null);
var useCompactItemContext = function useCompactItemContext2(prefixCls, direction) {
  var compactItemContext = react.exports.useContext(SpaceCompactItemContext);
  var compactItemClassnames = react.exports.useMemo(function() {
    var _classNames;
    if (!compactItemContext)
      return "";
    var compactDirection = compactItemContext.compactDirection, isFirstItem = compactItemContext.isFirstItem, isLastItem = compactItemContext.isLastItem;
    var separator = compactDirection === "vertical" ? "-vertical-" : "-";
    return classNames((_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-compact").concat(separator, "item"), true), _defineProperty(_classNames, "".concat(prefixCls, "-compact").concat(separator, "first-item"), isFirstItem), _defineProperty(_classNames, "".concat(prefixCls, "-compact").concat(separator, "last-item"), isLastItem), _defineProperty(_classNames, "".concat(prefixCls, "-compact").concat(separator, "item-rtl"), direction === "rtl"), _classNames));
  }, [prefixCls, direction, compactItemContext]);
  return {
    compactSize: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactSize,
    compactDirection: compactItemContext === null || compactItemContext === void 0 ? void 0 : compactItemContext.compactDirection,
    compactItemClassnames
  };
};
var id = 0;
var ids = {};
function wrapperRaf(callback) {
  var delayFrames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  var myId = id++;
  var restFrames = delayFrames;
  function internalCallback() {
    restFrames -= 1;
    if (restFrames <= 0) {
      callback();
      delete ids[myId];
    } else {
      ids[myId] = wrapperRaf$1(internalCallback);
    }
  }
  ids[myId] = wrapperRaf$1(internalCallback);
  return myId;
}
wrapperRaf.cancel = function cancel(pid) {
  if (pid === void 0)
    return;
  wrapperRaf$1.cancel(ids[pid]);
  delete ids[pid];
};
wrapperRaf.ids = ids;
var genWaveStyle = function genWaveStyle2(token) {
  var _ref;
  var waveEffect = new Keyframe("waveEffect", {
    "100%": {
      boxShadow: "0 0 0 6px var(--antd-wave-shadow-color)"
    }
  });
  var fadeEffect = new Keyframe("fadeEffect", {
    "100%": {
      opacity: 0
    }
  });
  return [(_ref = {}, _defineProperty(_ref, "".concat(token.clickAnimatingWithoutExtraNodeTrue, ",\n      ").concat(token.clickAnimatingTrue), {
    "--antd-wave-shadow-color": token.colorPrimary,
    "--scroll-bar": 0,
    position: "relative"
  }), _defineProperty(_ref, "".concat(token.clickAnimatingWithoutExtraNodeTrueAfter, ",\n      & ").concat(token.clickAnimatingNode), {
    position: "absolute",
    top: 0,
    insetInlineStart: 0,
    insetInlineEnd: 0,
    bottom: 0,
    display: "block",
    borderRadius: "inherit",
    boxShadow: "0 0 0 0 var(--antd-wave-shadow-color)",
    opacity: 0.2,
    animation: {
      _skip_check_: true,
      value: "".concat(fadeEffect.getName(token.hashId), " 2s ").concat(token.motionEaseOutCirc, ", ").concat(waveEffect.getName(token.hashId), " 0.4s ").concat(token.motionEaseOutCirc)
    },
    animationFillMode: "forwards",
    content: '""',
    pointerEvents: "none"
  }), _ref), {}, waveEffect, fadeEffect];
};
const useStyle$1 = function() {
  var _useToken = useToken(), _useToken2 = _slicedToArray(_useToken, 3), theme = _useToken2[0], token = _useToken2[1], hashId = _useToken2[2];
  var _useContext = react.exports.useContext(ConfigContext), getPrefixCls = _useContext.getPrefixCls;
  var rootPrefixCls = getPrefixCls();
  var clickAnimatingTrue = "[".concat(rootPrefixCls, "-click-animating='true']");
  var clickAnimatingWithoutExtraNodeTrue = "[".concat(rootPrefixCls, "-click-animating-without-extra-node='true']");
  var clickAnimatingNode = ".".concat(rootPrefixCls, "-click-animating-node");
  var waveToken = _extends(_extends({}, token), {
    hashId,
    clickAnimatingNode,
    clickAnimatingTrue,
    clickAnimatingWithoutExtraNodeTrue,
    clickAnimatingWithoutExtraNodeTrueAfter: "".concat(clickAnimatingWithoutExtraNodeTrue, "::after")
  });
  return [useStyleRegister({
    theme,
    token,
    hashId,
    path: ["wave"]
  }, function() {
    return [genWaveStyle(waveToken)];
  }), hashId];
};
var _jsxFileName$4 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\_util\\wave\\index.js";
var styleForPseudo;
function isHidden(element) {
  {
    return false;
  }
}
function getValidateContainer(nodeRoot) {
  if (nodeRoot instanceof Document) {
    return nodeRoot.body;
  }
  return Array.from(nodeRoot.childNodes).find(function(ele) {
    return (ele === null || ele === void 0 ? void 0 : ele.nodeType) === Node.ELEMENT_NODE;
  });
}
function isNotGrey(color) {
  var match = (color || "").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);
  if (match && match[1] && match[2] && match[3]) {
    return !(match[1] === match[2] && match[2] === match[3]);
  }
  return true;
}
function isValidWaveColor(color) {
  return color && color !== "#fff" && color !== "#ffffff" && color !== "rgb(255, 255, 255)" && color !== "rgba(255, 255, 255, 1)" && isNotGrey(color) && !/rgba\((?:\d*, ){3}0\)/.test(color) && color !== "transparent";
}
function getTargetWaveColor(node) {
  var computedStyle = getComputedStyle(node);
  var borderTopColor = computedStyle.getPropertyValue("border-top-color");
  var borderColor = computedStyle.getPropertyValue("border-color");
  var backgroundColor = computedStyle.getPropertyValue("background-color");
  if (isValidWaveColor(borderTopColor)) {
    return borderTopColor;
  }
  if (isValidWaveColor(borderColor)) {
    return borderColor;
  }
  return backgroundColor;
}
var InternalWave = /* @__PURE__ */ function(_React$Component) {
  _inherits(InternalWave2, _React$Component);
  var _super = _createSuper(InternalWave2);
  function InternalWave2() {
    var _this;
    _classCallCheck(this, InternalWave2);
    _this = _super.apply(this, arguments);
    _this.containerRef = /* @__PURE__ */ react.exports.createRef();
    _this.animationStart = false;
    _this.destroyed = false;
    _this.onClick = function(node, waveColor) {
      var _a, _b;
      var _this$props = _this.props, insertExtraNode = _this$props.insertExtraNode, disabled = _this$props.disabled;
      if (disabled || !node || isHidden() || node.className.includes("-leave")) {
        return;
      }
      _this.extraNode = document.createElement("div");
      var _assertThisInitialize = _assertThisInitialized(_this), extraNode = _assertThisInitialize.extraNode;
      var getPrefixCls = _this.context.getPrefixCls;
      extraNode.className = "".concat(getPrefixCls(""), "-click-animating-node");
      var attributeName = _this.getAttributeName();
      node.setAttribute(attributeName, "true");
      if (isValidWaveColor(waveColor)) {
        extraNode.style.borderColor = waveColor;
        var nodeRoot = ((_a = node.getRootNode) === null || _a === void 0 ? void 0 : _a.call(node)) || node.ownerDocument;
        var nodeBody = (_b = getValidateContainer(nodeRoot)) !== null && _b !== void 0 ? _b : nodeRoot;
        styleForPseudo = updateCSS("\n      [".concat(getPrefixCls(""), "-click-animating-without-extra-node='true']::after, .").concat(getPrefixCls(""), "-click-animating-node {\n        --antd-wave-shadow-color: ").concat(waveColor, ";\n      }"), "antd-wave", {
          csp: _this.csp,
          attachTo: nodeBody
        });
      }
      if (insertExtraNode) {
        node.appendChild(extraNode);
      }
      ["transition", "animation"].forEach(function(name) {
        node.addEventListener("".concat(name, "start"), _this.onTransitionStart);
        node.addEventListener("".concat(name, "end"), _this.onTransitionEnd);
      });
    };
    _this.onTransitionStart = function(e) {
      if (_this.destroyed) {
        return;
      }
      var node = _this.containerRef.current;
      if (!e || e.target !== node || _this.animationStart) {
        return;
      }
      _this.resetEffect(node);
    };
    _this.onTransitionEnd = function(e) {
      if (!e || e.animationName !== "fadeEffect") {
        return;
      }
      _this.resetEffect(e.target);
    };
    _this.bindAnimationEvent = function(node) {
      if (!node || !node.getAttribute || node.getAttribute("disabled") || node.className.includes("disabled")) {
        return;
      }
      var onClick = function onClick2(e) {
        if (e.target.tagName === "INPUT" || isHidden(e.target)) {
          return;
        }
        _this.resetEffect(node);
        var waveColor = getTargetWaveColor(node);
        _this.clickWaveTimeoutId = window.setTimeout(function() {
          return _this.onClick(node, waveColor);
        }, 0);
        wrapperRaf.cancel(_this.animationStartId);
        _this.animationStart = true;
        _this.animationStartId = wrapperRaf(function() {
          _this.animationStart = false;
        }, 10);
      };
      node.addEventListener("click", onClick, true);
      return {
        cancel: function cancel2() {
          node.removeEventListener("click", onClick, true);
        }
      };
    };
    _this.renderWave = function(_ref) {
      var csp = _ref.csp;
      var children = _this.props.children;
      _this.csp = csp;
      if (!/* @__PURE__ */ react.exports.isValidElement(children))
        return children;
      var ref = _this.containerRef;
      if (supportRef(children)) {
        ref = composeRef(children.ref, _this.containerRef);
      }
      return cloneElement(children, {
        ref
      });
    };
    return _this;
  }
  _createClass(InternalWave2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.destroyed = false;
      var node = this.containerRef.current;
      if (!node || node.nodeType !== 1) {
        return;
      }
      this.instance = this.bindAnimationEvent(node);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.instance) {
        this.instance.cancel();
      }
      if (this.clickWaveTimeoutId) {
        clearTimeout(this.clickWaveTimeoutId);
      }
      this.destroyed = true;
    }
  }, {
    key: "getAttributeName",
    value: function getAttributeName() {
      var getPrefixCls = this.context.getPrefixCls;
      var insertExtraNode = this.props.insertExtraNode;
      return insertExtraNode ? "".concat(getPrefixCls(""), "-click-animating") : "".concat(getPrefixCls(""), "-click-animating-without-extra-node");
    }
  }, {
    key: "resetEffect",
    value: function resetEffect(node) {
      var _this2 = this;
      if (!node || node === this.extraNode || !(node instanceof Element)) {
        return;
      }
      var insertExtraNode = this.props.insertExtraNode;
      var attributeName = this.getAttributeName();
      node.setAttribute(attributeName, "false");
      if (styleForPseudo) {
        styleForPseudo.innerHTML = "";
      }
      if (insertExtraNode && this.extraNode && node.contains(this.extraNode)) {
        node.removeChild(this.extraNode);
      }
      ["transition", "animation"].forEach(function(name) {
        node.removeEventListener("".concat(name, "start"), _this2.onTransitionStart);
        node.removeEventListener("".concat(name, "end"), _this2.onTransitionEnd);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /* @__PURE__ */ jsxDEV(ConfigConsumer, {
        children: this.renderWave
      }, void 0, false, {
        fileName: _jsxFileName$4,
        lineNumber: 212,
        columnNumber: 27
      }, this);
    }
  }]);
  return InternalWave2;
}(react.exports.Component);
InternalWave.contextType = ConfigContext;
var Wave = /* @__PURE__ */ react.exports.forwardRef(function(props, ref) {
  useStyle$1();
  return /* @__PURE__ */ jsxDEV(InternalWave, {
    ref,
    ...props
  }, void 0, false, {
    fileName: _jsxFileName$4,
    lineNumber: 220,
    columnNumber: 23
  }, this);
});
const Wave$1 = Wave;
var _jsxFileName$3 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\button\\button-group.js";
var __rest$1 = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var GroupSizeContext = /* @__PURE__ */ react.exports.createContext(void 0);
var ButtonGroup = function ButtonGroup2(props) {
  var _classNames;
  var _React$useContext = react.exports.useContext(ConfigContext), getPrefixCls = _React$useContext.getPrefixCls, direction = _React$useContext.direction;
  var customizePrefixCls = props.prefixCls, size = props.size, className = props.className, others = __rest$1(props, ["prefixCls", "size", "className"]);
  var prefixCls = getPrefixCls("btn-group", customizePrefixCls);
  var _useToken = useToken(), _useToken2 = _slicedToArray(_useToken, 3), hashId = _useToken2[2];
  var sizeCls = "";
  switch (size) {
    case "large":
      sizeCls = "lg";
      break;
    case "small":
      sizeCls = "sm";
      break;
    case "middle":
    case void 0:
      break;
    default:
      warning(!size, "Button.Group", "Invalid prop `size`.");
  }
  var classes = classNames(prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _classNames), className, hashId);
  return /* @__PURE__ */ jsxDEV(GroupSizeContext.Provider, {
    value: size,
    children: /* @__PURE__ */ jsxDEV("div", {
      ...others,
      className: classes
    }, void 0, false, {
      fileName: _jsxFileName$3,
      lineNumber: 53,
      columnNumber: 19
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName$3,
    lineNumber: 51,
    columnNumber: 23
  }, this);
};
const Group = ButtonGroup;
var _jsxFileName$2 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\button\\LoadingIcon.js";
var getCollapsedWidth = function getCollapsedWidth2() {
  return {
    width: 0,
    opacity: 0,
    transform: "scale(0)"
  };
};
var getRealWidth = function getRealWidth2(node) {
  return {
    width: node.scrollWidth,
    opacity: 1,
    transform: "scale(1)"
  };
};
var LoadingIcon = function LoadingIcon2(_ref) {
  var prefixCls = _ref.prefixCls, loading = _ref.loading, existIcon = _ref.existIcon;
  var visible = !!loading;
  if (existIcon) {
    return /* @__PURE__ */ jsxDEV("span", {
      className: "".concat(prefixCls, "-loading-icon"),
      children: /* @__PURE__ */ jsxDEV(LoadingOutlined, {}, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 26,
        columnNumber: 21
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName$2,
      lineNumber: 24,
      columnNumber: 25
    }, this);
  }
  return /* @__PURE__ */ jsxDEV(CSSMotion, {
    visible,
    motionName: "".concat(prefixCls, "-loading-icon-motion"),
    removeOnLeave: true,
    onAppearStart: getCollapsedWidth,
    onAppearActive: getRealWidth,
    onEnterStart: getCollapsedWidth,
    onEnterActive: getRealWidth,
    onLeaveStart: getRealWidth,
    onLeaveActive: getCollapsedWidth,
    children: function(_ref2, ref) {
      var className = _ref2.className, style = _ref2.style;
      return /* @__PURE__ */ jsxDEV("span", {
        className: "".concat(prefixCls, "-loading-icon"),
        style,
        ref,
        children: /* @__PURE__ */ jsxDEV(LoadingOutlined, {
          className
        }, void 0, false, {
          fileName: _jsxFileName$2,
          lineNumber: 46,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName$2,
        lineNumber: 42,
        columnNumber: 25
      }, this);
    }
  }, void 0, false, {
    fileName: _jsxFileName$2,
    lineNumber: 28,
    columnNumber: 23
  }, this);
};
const LoadingIcon$1 = LoadingIcon;
var genButtonBorderStyle = function genButtonBorderStyle2(buttonTypeCls, borderColor) {
  return _defineProperty({}, "> span, > ".concat(buttonTypeCls), {
    "&:not(:last-child)": _defineProperty({}, "&, & > ".concat(buttonTypeCls), {
      "&:not(:disabled)": {
        borderInlineEndColor: borderColor
      }
    }),
    "&:not(:first-child)": _defineProperty({}, "&, & > ".concat(buttonTypeCls), {
      "&:not(:disabled)": {
        borderInlineStartColor: borderColor
      }
    })
  });
};
var genGroupStyle = function genGroupStyle2(token) {
  var _componentCls, _ref2;
  var componentCls = token.componentCls, fontSize = token.fontSize, lineWidth = token.lineWidth, colorPrimaryHover = token.colorPrimaryHover, colorErrorHover = token.colorErrorHover;
  return _defineProperty({}, "".concat(componentCls, "-group"), [
    (_ref2 = {
      position: "relative",
      display: "inline-flex"
    }, _defineProperty(_ref2, "> span, > ".concat(componentCls), {
      "&:not(:last-child)": _defineProperty({}, "&, & > ".concat(componentCls), {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }),
      "&:not(:first-child)": _defineProperty({
        marginInlineStart: -lineWidth
      }, "&, & > ".concat(componentCls), {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      })
    }), _defineProperty(_ref2, componentCls, (_componentCls = {
      position: "relative",
      zIndex: 1
    }, _defineProperty(_componentCls, "&:hover,\n          &:focus,\n          &:active", {
      zIndex: 2
    }), _defineProperty(_componentCls, "&[disabled]", {
      zIndex: 0
    }), _componentCls)), _defineProperty(_ref2, "".concat(componentCls, "-icon-only"), {
      fontSize
    }), _ref2),
    genButtonBorderStyle("".concat(componentCls, "-primary"), colorPrimaryHover),
    genButtonBorderStyle("".concat(componentCls, "-danger"), colorErrorHover)
  ]);
};
const genGroupStyle$1 = genGroupStyle;
function compactItemVerticalBorder(token) {
  return {
    "&-item:not(&-last-item)": {
      marginBottom: -token.lineWidth
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 2
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function compactItemBorderVerticalRadius(prefixCls) {
  return {
    "&-item:not(&-first-item):not(&-last-item)": {
      borderRadius: 0
    },
    "&-item&-first-item": _defineProperty({}, "&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg"), {
      borderEndEndRadius: 0,
      borderEndStartRadius: 0
    }),
    "&-item&-last-item": _defineProperty({}, "&, &".concat(prefixCls, "-sm, &").concat(prefixCls, "-lg"), {
      borderStartStartRadius: 0,
      borderStartEndRadius: 0
    })
  };
}
function genCompactItemVerticalStyle(token, prefixCls) {
  return {
    "&-compact-vertical": _extends(_extends({}, compactItemVerticalBorder(token)), compactItemBorderVerticalRadius(prefixCls))
  };
}
var genSharedButtonStyle = function genSharedButtonStyle2(token) {
  var _extends2, _extends3;
  var componentCls = token.componentCls, iconCls = token.iconCls;
  return _defineProperty({}, componentCls, _extends(_extends(_extends((_extends2 = {
    outline: "none",
    position: "relative",
    display: "inline-block",
    fontWeight: 400,
    whiteSpace: "nowrap",
    textAlign: "center",
    backgroundImage: "none",
    backgroundColor: "transparent",
    border: "".concat(token.lineWidth, "px ").concat(token.lineType, " transparent"),
    cursor: "pointer",
    transition: "all ".concat(token.motionDurationFast, " ").concat(token.motionEaseInOut),
    userSelect: "none",
    touchAction: "manipulation",
    lineHeight: token.lineHeight,
    color: token.colorText,
    "> span": {
      display: "inline-block"
    }
  }, _defineProperty(_extends2, "> ".concat(iconCls, " + span, > span + ").concat(iconCls), {
    marginInlineStart: token.marginXS
  }), _defineProperty(_extends2, "&".concat(componentCls, "-block"), {
    width: "100%"
  }), _defineProperty(_extends2, "&:not(:disabled)", _extends({}, genFocusStyle(token))), _extends2), genCompactItemStyle(token, componentCls)), genCompactItemVerticalStyle(token, componentCls)), (_extends3 = {
    "&-icon-only&-compact-item": {
      flex: "none"
    }
  }, _defineProperty(_extends3, "&-compact-item".concat(componentCls, "-primary"), {
    "&:not([disabled]) + &:not([disabled])": {
      position: "relative",
      "&:after": {
        position: "absolute",
        top: -token.lineWidth,
        insetInlineStart: -token.lineWidth,
        display: "inline-block",
        width: token.lineWidth,
        height: "calc(100% + ".concat(token.lineWidth * 2, "px)"),
        backgroundColor: token.colorPrimaryBorder,
        content: '""'
      }
    }
  }), _defineProperty(_extends3, "&-compact-vertical-item", _defineProperty({}, "&".concat(componentCls, "-primary"), {
    "&:not([disabled]) + &:not([disabled])": {
      position: "relative",
      "&:after": {
        position: "absolute",
        top: -token.lineWidth,
        insetInlineStart: -token.lineWidth,
        display: "inline-block",
        width: "calc(100% + ".concat(token.lineWidth * 2, "px)"),
        height: token.lineWidth,
        backgroundColor: token.colorPrimaryBorder,
        content: '""'
      }
    }
  })), _extends3)));
};
var genHoverActiveButtonStyle = function genHoverActiveButtonStyle2(hoverStyle, activeStyle) {
  return {
    "&:not(:disabled)": {
      "&:hover": hoverStyle,
      "&:active": activeStyle
    }
  };
};
var genCircleButtonStyle = function genCircleButtonStyle2(token) {
  return {
    minWidth: token.controlHeight,
    paddingInlineStart: 0,
    paddingInlineEnd: 0,
    borderRadius: "50%"
  };
};
var genRoundButtonStyle = function genRoundButtonStyle2(token) {
  return {
    borderRadius: token.controlHeight,
    paddingInlineStart: token.controlHeight / 2,
    paddingInlineEnd: token.controlHeight / 2,
    width: "auto"
  };
};
var genGhostButtonStyle = function genGhostButtonStyle2(btnCls, textColor, borderColor, textColorDisabled, borderColorDisabled, hoverStyle, activeStyle) {
  return _defineProperty({}, "&".concat(btnCls, "-background-ghost"), _extends(_extends({
    color: textColor || void 0,
    backgroundColor: "transparent",
    borderColor: borderColor || void 0,
    boxShadow: "none"
  }, genHoverActiveButtonStyle(_extends({
    backgroundColor: "transparent"
  }, hoverStyle), _extends({
    backgroundColor: "transparent"
  }, activeStyle))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: textColorDisabled || void 0,
      borderColor: borderColorDisabled || void 0
    }
  }));
};
var genSolidDisabledButtonStyle = function genSolidDisabledButtonStyle2(token) {
  return {
    "&:disabled": {
      cursor: "not-allowed",
      borderColor: token.colorBorder,
      color: token.colorTextDisabled,
      backgroundColor: token.colorBgContainerDisabled,
      boxShadow: "none"
    }
  };
};
var genSolidButtonStyle = function genSolidButtonStyle2(token) {
  return _extends({}, genSolidDisabledButtonStyle(token));
};
var genPureDisabledButtonStyle = function genPureDisabledButtonStyle2(token) {
  return {
    "&:disabled": {
      cursor: "not-allowed",
      color: token.colorTextDisabled
    }
  };
};
var genDefaultButtonStyle = function genDefaultButtonStyle2(token) {
  return _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
    backgroundColor: token.colorBgContainer,
    borderColor: token.colorBorder,
    boxShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlTmpOutline)
  }), genHoverActiveButtonStyle({
    color: token.colorPrimaryHover,
    borderColor: token.colorPrimaryHover
  }, {
    color: token.colorPrimaryActive,
    borderColor: token.colorPrimaryActive
  })), genGhostButtonStyle(token.componentCls, token.colorBgContainer, token.colorBgContainer, token.colorTextDisabled, token.colorBorder)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), _extends(_extends(_extends({
    color: token.colorError,
    borderColor: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    borderColor: token.colorErrorBorder
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder)), genSolidDisabledButtonStyle(token))));
};
var genPrimaryButtonStyle = function genPrimaryButtonStyle2(token) {
  return _extends(_extends(_extends(_extends(_extends({}, genSolidButtonStyle(token)), {
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimary,
    boxShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.controlOutline)
  }), genHoverActiveButtonStyle({
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimaryHover
  }, {
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimaryActive
  })), genGhostButtonStyle(token.componentCls, token.colorPrimary, token.colorPrimary, token.colorTextDisabled, token.colorBorder, {
    color: token.colorPrimaryHover,
    borderColor: token.colorPrimaryHover
  }, {
    color: token.colorPrimaryActive,
    borderColor: token.colorPrimaryActive
  })), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), _extends(_extends(_extends({
    backgroundColor: token.colorError,
    boxShadow: "0 ".concat(token.controlOutlineWidth, "px 0 ").concat(token.colorErrorOutline)
  }, genHoverActiveButtonStyle({
    backgroundColor: token.colorErrorHover
  }, {
    backgroundColor: token.colorErrorActive
  })), genGhostButtonStyle(token.componentCls, token.colorError, token.colorError, token.colorTextDisabled, token.colorBorder, {
    color: token.colorErrorHover,
    borderColor: token.colorErrorHover
  }, {
    color: token.colorErrorActive,
    borderColor: token.colorErrorActive
  })), genSolidDisabledButtonStyle(token))));
};
var genDashedButtonStyle = function genDashedButtonStyle2(token) {
  return _extends(_extends({}, genDefaultButtonStyle(token)), {
    borderStyle: "dashed"
  });
};
var genLinkButtonStyle = function genLinkButtonStyle2(token) {
  return _extends(_extends(_extends({
    color: token.colorLink
  }, genHoverActiveButtonStyle({
    color: token.colorLinkHover
  }, {
    color: token.colorLinkActive
  })), genPureDisabledButtonStyle(token)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), _extends(_extends({
    color: token.colorError
  }, genHoverActiveButtonStyle({
    color: token.colorErrorHover
  }, {
    color: token.colorErrorActive
  })), genPureDisabledButtonStyle(token))));
};
var genTextButtonStyle = function genTextButtonStyle2(token) {
  return _extends(_extends(_extends({}, genHoverActiveButtonStyle({
    color: token.colorText,
    backgroundColor: token.colorBgTextHover
  }, {
    color: token.colorText,
    backgroundColor: token.colorBgTextActive
  })), genPureDisabledButtonStyle(token)), _defineProperty({}, "&".concat(token.componentCls, "-dangerous"), _extends(_extends({
    color: token.colorError
  }, genPureDisabledButtonStyle(token)), genHoverActiveButtonStyle({
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }, {
    color: token.colorErrorHover,
    backgroundColor: token.colorErrorBg
  }))));
};
var genTypeButtonStyle = function genTypeButtonStyle2(token) {
  var _ref3;
  var componentCls = token.componentCls;
  return _ref3 = {}, _defineProperty(_ref3, "".concat(componentCls, "-default"), genDefaultButtonStyle(token)), _defineProperty(_ref3, "".concat(componentCls, "-primary"), genPrimaryButtonStyle(token)), _defineProperty(_ref3, "".concat(componentCls, "-dashed"), genDashedButtonStyle(token)), _defineProperty(_ref3, "".concat(componentCls, "-link"), genLinkButtonStyle(token)), _defineProperty(_ref3, "".concat(componentCls, "-text"), genTextButtonStyle(token)), _ref3;
};
var genSizeButtonStyle = function genSizeButtonStyle2(token) {
  var _$concat$concat;
  var sizePrefixCls = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  var componentCls = token.componentCls, iconCls = token.iconCls;
  var paddingVertical = Math.max(0, (token.controlHeight - token.fontSize * token.lineHeight) / 2 - token.lineWidth);
  var paddingHorizontal = token.buttonPaddingHorizontal - token.lineWidth;
  var iconOnlyCls = "".concat(componentCls, "-icon-only");
  return [
    _defineProperty({}, "".concat(componentCls).concat(sizePrefixCls), (_$concat$concat = {
      fontSize: token.fontSize,
      height: token.controlHeight,
      padding: "".concat(paddingVertical, "px ").concat(paddingHorizontal, "px"),
      borderRadius: token.borderRadius
    }, _defineProperty(_$concat$concat, "&".concat(iconOnlyCls), {
      width: token.controlHeight,
      paddingInlineStart: 0,
      paddingInlineEnd: 0,
      "> span": {
        transform: "scale(1.143)"
      }
    }), _defineProperty(_$concat$concat, "&".concat(componentCls, "-loading"), {
      opacity: token.opacityLoading,
      cursor: "default"
    }), _defineProperty(_$concat$concat, "".concat(componentCls, "-loading-icon"), {
      transition: "width ".concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut, ", opacity ").concat(token.motionDurationSlow, " ").concat(token.motionEaseInOut)
    }), _defineProperty(_$concat$concat, "&:not(".concat(iconOnlyCls, ") ").concat(componentCls, "-loading-icon > ").concat(iconCls), {
      marginInlineEnd: token.marginXS
    }), _$concat$concat)),
    _defineProperty({}, "".concat(componentCls).concat(componentCls, "-circle").concat(sizePrefixCls), genCircleButtonStyle(token)),
    _defineProperty({}, "".concat(componentCls).concat(componentCls, "-round").concat(sizePrefixCls), genRoundButtonStyle(token))
  ];
};
var genSizeBaseButtonStyle = function genSizeBaseButtonStyle2(token) {
  return genSizeButtonStyle(token);
};
var genSizeSmallButtonStyle = function genSizeSmallButtonStyle2(token) {
  var smallToken = merge(token, {
    controlHeight: token.controlHeightSM,
    padding: token.paddingXS,
    buttonPaddingHorizontal: 8,
    borderRadius: token.borderRadiusSM
  });
  return genSizeButtonStyle(smallToken, "".concat(token.componentCls, "-sm"));
};
var genSizeLargeButtonStyle = function genSizeLargeButtonStyle2(token) {
  var largeToken = merge(token, {
    controlHeight: token.controlHeightLG,
    fontSize: token.fontSizeLG,
    borderRadius: token.borderRadiusLG
  });
  return genSizeButtonStyle(largeToken, "".concat(token.componentCls, "-lg"));
};
const useStyle = genComponentStyleHook("Button", function(token) {
  var controlTmpOutline = token.controlTmpOutline, paddingContentHorizontal = token.paddingContentHorizontal;
  var buttonToken = merge(token, {
    colorOutlineDefault: controlTmpOutline,
    buttonPaddingHorizontal: paddingContentHorizontal
  });
  return [
    genSharedButtonStyle(buttonToken),
    genSizeSmallButtonStyle(buttonToken),
    genSizeBaseButtonStyle(buttonToken),
    genSizeLargeButtonStyle(buttonToken),
    genTypeButtonStyle(buttonToken),
    genGroupStyle$1(buttonToken)
  ];
});
var _jsxFileName$1 = "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\registry.npmmirror.com+antd@5.0.0-beta.2_biqbaboplfbrettd7655fr4n2y\\node_modules\\antd\\es\\button\\button.js";
var __rest = globalThis && globalThis.__rest || function(s, e) {
  var t = {};
  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  }
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
  return typeof str === "string";
}
function isUnBorderedButtonType(type) {
  return type === "text" || type === "link";
}
function insertSpace(child, needInserted) {
  if (child === null || child === void 0) {
    return;
  }
  var SPACE = needInserted ? " " : "";
  if (typeof child !== "string" && typeof child !== "number" && isString(child.type) && isTwoCNChar(child.props.children)) {
    return cloneElement(child, {
      children: child.props.children.split("").join(SPACE)
    });
  }
  if (typeof child === "string") {
    return isTwoCNChar(child) ? /* @__PURE__ */ jsxDEV("span", {
      children: child.split("").join(SPACE)
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 53,
      columnNumber: 46
    }, this) : /* @__PURE__ */ jsxDEV("span", {
      children: child
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 53,
      columnNumber: 124
    }, this);
  }
  if (isFragment(child)) {
    return /* @__PURE__ */ jsxDEV("span", {
      children: child
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 56,
      columnNumber: 25
    }, this);
  }
  return child;
}
function spaceChildren(children, needInserted) {
  var isPrevChildPure = false;
  var childList = [];
  react.exports.Children.forEach(children, function(child) {
    var type = _typeof(child);
    var isCurrentChildPure = type === "string" || type === "number";
    if (isPrevChildPure && isCurrentChildPure) {
      var lastIndex = childList.length - 1;
      var lastChild = childList[lastIndex];
      childList[lastIndex] = "".concat(lastChild).concat(child);
    } else {
      childList.push(child);
    }
    isPrevChildPure = isCurrentChildPure;
  });
  return react.exports.Children.map(childList, function(child) {
    return insertSpace(child, needInserted);
  });
}
tuple("default", "primary", "ghost", "dashed", "link", "text");
tuple("default", "circle", "round");
tuple("submit", "button", "reset");
var InternalButton = function InternalButton2(props, ref) {
  var _classNames;
  var _props$loading = props.loading, loading = _props$loading === void 0 ? false : _props$loading, customizePrefixCls = props.prefixCls, _props$type = props.type, type = _props$type === void 0 ? "default" : _props$type, danger = props.danger, _props$shape = props.shape, shape = _props$shape === void 0 ? "default" : _props$shape, customizeSize = props.size, customDisabled = props.disabled, className = props.className, children = props.children, icon = props.icon, _props$ghost = props.ghost, ghost = _props$ghost === void 0 ? false : _props$ghost, _props$block = props.block, block = _props$block === void 0 ? false : _props$block, _props$htmlType = props.htmlType, htmlType = _props$htmlType === void 0 ? "button" : _props$htmlType, rest = __rest(props, ["loading", "prefixCls", "type", "danger", "shape", "size", "disabled", "className", "children", "icon", "ghost", "block", "htmlType"]);
  var _React$useContext = react.exports.useContext(ConfigContext), getPrefixCls = _React$useContext.getPrefixCls, autoInsertSpaceInButton = _React$useContext.autoInsertSpaceInButton, direction = _React$useContext.direction;
  var prefixCls = getPrefixCls("btn", customizePrefixCls);
  var _useStyle = useStyle(prefixCls), _useStyle2 = _slicedToArray(_useStyle, 2), wrapSSR = _useStyle2[0], hashId = _useStyle2[1];
  var size = react.exports.useContext(SizeContext);
  var disabled = react.exports.useContext(DisabledContext);
  var mergedDisabled = customDisabled !== null && customDisabled !== void 0 ? customDisabled : disabled;
  var groupSize = react.exports.useContext(GroupSizeContext);
  var _React$useState = react.exports.useState(!!loading), _React$useState2 = _slicedToArray(_React$useState, 2), innerLoading = _React$useState2[0], setLoading = _React$useState2[1];
  var _React$useState3 = react.exports.useState(false), _React$useState4 = _slicedToArray(_React$useState3, 2), hasTwoCNChar = _React$useState4[0], setHasTwoCNChar = _React$useState4[1];
  var buttonRef = ref || /* @__PURE__ */ react.exports.createRef();
  var isNeedInserted = function isNeedInserted2() {
    return react.exports.Children.count(children) === 1 && !icon && !isUnBorderedButtonType(type);
  };
  var fixTwoCNChar = function fixTwoCNChar2() {
    if (!buttonRef || !buttonRef.current || autoInsertSpaceInButton === false) {
      return;
    }
    var buttonText = buttonRef.current.textContent;
    if (isNeedInserted() && isTwoCNChar(buttonText)) {
      if (!hasTwoCNChar) {
        setHasTwoCNChar(true);
      }
    } else if (hasTwoCNChar) {
      setHasTwoCNChar(false);
    }
  };
  var loadingOrDelay = typeof loading === "boolean" ? loading : (loading === null || loading === void 0 ? void 0 : loading.delay) || true;
  react.exports.useEffect(function() {
    var delayTimer = null;
    if (typeof loadingOrDelay === "number") {
      delayTimer = window.setTimeout(function() {
        delayTimer = null;
        setLoading(loadingOrDelay);
      }, loadingOrDelay);
    } else {
      setLoading(loadingOrDelay);
    }
    return function() {
      if (delayTimer) {
        window.clearTimeout(delayTimer);
        delayTimer = null;
      }
    };
  }, [loadingOrDelay]);
  react.exports.useEffect(fixTwoCNChar, [buttonRef]);
  var handleClick = function handleClick2(e) {
    var onClick = props.onClick;
    if (innerLoading || mergedDisabled) {
      e.preventDefault();
      return;
    }
    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  };
  warning(!(typeof icon === "string" && icon.length > 2), "Button", "`icon` is using ReactNode instead of string naming in v4. Please check `".concat(icon, "` at https://ant.design/components/icon"));
  warning(!(ghost && isUnBorderedButtonType(type)), "Button", "`link` or `text` button can't be a `ghost` button.");
  var autoInsertSpace = autoInsertSpaceInButton !== false;
  var _useCompactItemContex = useCompactItemContext(prefixCls, direction), compactSize = _useCompactItemContex.compactSize, compactItemClassnames = _useCompactItemContex.compactItemClassnames;
  var sizeClassNameMap = {
    large: "lg",
    small: "sm",
    middle: void 0
  };
  var sizeFullname = compactSize || groupSize || customizeSize || size;
  var sizeCls = sizeFullname ? sizeClassNameMap[sizeFullname] || "" : "";
  var iconType = innerLoading ? "loading" : icon;
  var linkButtonRestProps = omit(rest, ["navigate"]);
  var classes = classNames(prefixCls, hashId, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(shape), shape !== "default" && shape), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(type), type), _defineProperty(_classNames, "".concat(prefixCls, "-").concat(sizeCls), sizeCls), _defineProperty(_classNames, "".concat(prefixCls, "-icon-only"), !children && children !== 0 && !!iconType), _defineProperty(_classNames, "".concat(prefixCls, "-background-ghost"), ghost && !isUnBorderedButtonType(type)), _defineProperty(_classNames, "".concat(prefixCls, "-loading"), innerLoading), _defineProperty(_classNames, "".concat(prefixCls, "-two-chinese-chars"), hasTwoCNChar && autoInsertSpace && !innerLoading), _defineProperty(_classNames, "".concat(prefixCls, "-block"), block), _defineProperty(_classNames, "".concat(prefixCls, "-dangerous"), !!danger), _defineProperty(_classNames, "".concat(prefixCls, "-rtl"), direction === "rtl"), _defineProperty(_classNames, "".concat(prefixCls, "-disabled"), linkButtonRestProps.href !== void 0 && mergedDisabled), _classNames), compactItemClassnames, className);
  var iconNode = icon && !innerLoading ? icon : /* @__PURE__ */ jsxDEV(LoadingIcon$1, {
    existIcon: !!icon,
    prefixCls,
    loading: !!innerLoading
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 203,
    columnNumber: 62
  }, this);
  var kids = children || children === 0 ? spaceChildren(children, isNeedInserted() && autoInsertSpace) : null;
  if (linkButtonRestProps.href !== void 0) {
    return wrapSSR(
      /* @__PURE__ */ jsxDEV("a", {
        ...linkButtonRestProps,
        className: classes,
        onClick: handleClick,
        ref: buttonRef,
        children: [iconNode, kids]
      }, void 0, true, {
        fileName: _jsxFileName$1,
        lineNumber: 210,
        columnNumber: 34
      }, this)
    );
  }
  var buttonNode = /* @__PURE__ */ jsxDEV("button", {
    ...rest,
    type: htmlType,
    className: classes,
    onClick: handleClick,
    disabled: mergedDisabled,
    ref: buttonRef,
    children: [iconNode, kids]
  }, void 0, true, {
    fileName: _jsxFileName$1,
    lineNumber: 216,
    columnNumber: 33
  }, this);
  if (!isUnBorderedButtonType(type)) {
    buttonNode = /* @__PURE__ */ jsxDEV(Wave$1, {
      disabled: !!innerLoading,
      children: buttonNode
    }, void 0, false, {
      fileName: _jsxFileName$1,
      lineNumber: 224,
      columnNumber: 31
    }, this);
  }
  return wrapSSR(buttonNode);
};
var Button = /* @__PURE__ */ react.exports.forwardRef(InternalButton);
{
  Button.displayName = "Button";
}
Button.Group = Group;
Button.__ANT_BUTTON = true;
const Button$1 = Button;
var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\src\\pages\\a\\index.page.tsx";
function Page() {
  return /* @__PURE__ */ jsxDEV(Fragment, {
    children: [/* @__PURE__ */ jsxDEV("div", {
      className: "tw-italic",
      children: "this is page A"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, this), /* @__PURE__ */ jsxDEV(Button$1, {
      type: "primary",
      children: "hello"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}
export {
  Page,
  __vite_legacy_guard
};

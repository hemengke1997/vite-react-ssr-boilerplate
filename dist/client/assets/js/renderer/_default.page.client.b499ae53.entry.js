function __vite_legacy_guard() {
  import("data:text/javascript,");
}
;
import { r as reactDom } from "../index.a1ea8fec.js";
import { _ as __vitePreload } from "../preload-helper.e1a242f9.js";
import { R as React, j as jsxDEV } from "../jsx-dev-runtime.62039f8c.js";
var hydrateRoot;
var m = reactDom.exports;
{
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  hydrateRoot = function(c, h, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.hydrateRoot(c, h, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var _jsxFileName$1 = "E:\\github\\vite-react-ssr-boilerplate\\renderer\\usePageContext.tsx";
const Context = React.createContext(void 0);
function PageContextProvider({
  pageContext,
  children
}) {
  return /* @__PURE__ */ jsxDEV(Context.Provider, {
    value: pageContext,
    children
  }, void 0, false, {
    fileName: _jsxFileName$1,
    lineNumber: 15,
    columnNumber: 10
  }, this);
}
const global = "";
var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\renderer\\createApp.tsx";
async function createApp(pageContext) {
  const {
    Page,
    pageProps
  } = pageContext;
  let Layout;
  if (pageProps == null ? void 0 : pageProps.isMobile) {
    Layout = (await __vitePreload(() => import("../index.94b9cf5c.js"), true ? ["assets/js/index.94b9cf5c.js","assets/js/jsx-dev-runtime.62039f8c.js","assets/css/index.655867c1.css"] : void 0)).MobileLayout;
  } else {
    Layout = (await __vitePreload(() => import("../index.bdcdd877.js"), true ? ["assets/js/index.bdcdd877.js","assets/js/jsx-dev-runtime.62039f8c.js","assets/js/LoadingOutlined.60004926.js","assets/js/index.a1ea8fec.js","assets/css/index.b7f775ab.css"] : void 0)).PCLayout;
  }
  const Tpl = Layout;
  return /* @__PURE__ */ jsxDEV(PageContextProvider, {
    pageContext,
    children: /* @__PURE__ */ jsxDEV(Tpl, {
      children: /* @__PURE__ */ jsxDEV(Page, {
        ...pageProps
      }, void 0, false, {
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
  }, this);
}
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
function hyphenateStyleName(name) {
  return name.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
}
function typeName(value) {
  const hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
  const type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
  return type;
}
function testStringCoercion(value) {
  return `${value}`;
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
    console.error(
      "The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.",
      propName,
      typeName(value)
    );
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
  const isEmpty = value == null || typeof value === "boolean" || value === "";
  if (isEmpty) {
    return "";
  }
  if (!isCustomProperty && typeof value === "number" && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) {
    return `${value}px`;
  }
  checkCSSPropertyStringCoercion(value, name);
  return `${value}`.trim();
}
function createDangerousStringForStyles(styles) {
  let serialized = "";
  let delimiter = "";
  for (const styleName in styles) {
    if (!styles.hasOwnProperty(styleName)) {
      continue;
    }
    const styleValue = styles[styleName];
    if (styleValue != null) {
      const isCustomProperty = styleName.indexOf("--") === 0;
      serialized += `${delimiter + (isCustomProperty ? styleName : hyphenateStyleName(styleName))}:`;
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
  const colors = {
    blue: "#3B82F6",
    red: "#EF4444",
    green: "#10B981",
    gray: "#6B7280"
  };
  function log(title, value) {
    const nameStyle = {
      background: "#FF9800",
      borderRadius: "4px",
      padding: "2px 4px",
      marginRight: "4px",
      fontWeight: "700"
    };
    const defaultTitleStyle = {
      color: "#fff",
      paddingLeft: "6px",
      borderRadius: "4px 0 0 4px",
      background: "#9CA3AF"
    };
    const defaultValueStyle = {
      color: "#fff",
      paddingRight: "6px",
      borderRadius: "0 4px 4px 0",
      background: "#3B82F6"
    };
    console.log(
      `%cvite-ssr%c${title.text} %c ${value.text}`,
      `${styleObjectToString(nameStyle)}`,
      `${styleObjectToString({
        ...defaultTitleStyle,
        ...title.style
      })}`,
      `${styleObjectToString({
        ...defaultValueStyle,
        ...value.style
      })}`
    );
  }
  log(
    {
      text: "Build Date"
    },
    { text: { "lastBuildTime": "2022-11-15 22:26:03" }.lastBuildTime }
  );
  const envStyle = () => {
    return {
      background: colors.blue
    };
  };
  log({ text: "Env" }, { text: "test", style: envStyle() });
}
function onClientInit() {
  logClientInfo();
}
async function render(pageContext) {
  hydrateRoot(document.getElementById("app"), await createApp(pageContext));
  onClientInit();
}
export {
  __vite_legacy_guard,
  render
};

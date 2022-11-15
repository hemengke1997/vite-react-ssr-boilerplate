import { message, ConfigProvider } from "antd";
import zh_CN from "antd/locale/zh_CN.js";
import { j as jsxDEV } from "./jsx-dev-runtime.4cb7c876.js";
import "react/jsx-dev-runtime";
const index = "";
var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\src\\components\\pc\\PCLayout\\index.tsx";
message.config({
  maxCount: 1,
  duration: 2
});
function PCLayout({
  children
}) {
  return /* @__PURE__ */ jsxDEV(ConfigProvider, {
    locale: zh_CN,
    autoInsertSpaceInButton: false,
    children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}
export {
  PCLayout
};

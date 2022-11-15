import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import normalize from "normalize-path";
import React from "react";
import { j as jsxDEV } from "./jsx-dev-runtime.4cb7c876.js";
import "react/jsx-dev-runtime";
var Env = /* @__PURE__ */ ((Env2) => {
  Env2["development"] = "development";
  Env2["test"] = "test";
  Env2["production"] = "production";
  return Env2;
})(Env || {});
function getBase() {
  var _a2;
  const base = `/base-url/`;
  let mode = "";
  let p;
  if ((_a2 = { "VITE_APIPREFIX": "/proxyPrefix", "VITE_APIURL": "http://localhost:9527", "VITE_HOST": "localhost", "VITE_PROXY": "/proxyPrefix", "VITE_USER_NODE_ENV": "test", "BASE_URL": "/base-url/", "MODE": "test", "DEV": true, "PROD": false }) == null ? void 0 : _a2.MODE) {
    mode = "test";
    p = { "VITE_APIPREFIX": "/proxyPrefix", "VITE_APIURL": "http://localhost:9527", "VITE_HOST": "localhost", "VITE_PROXY": "/proxyPrefix", "VITE_USER_NODE_ENV": "test", "BASE_URL": "/base-url/", "MODE": "test", "DEV": true, "PROD": false }.VITE_BASE_URL;
  } else if (typeof process !== "undefined") {
    mode = { "ACSvcPort": "17532", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\HeMengke\\AppData\\Roaming", "asl.log": "Destination=file", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_22408_UIUOORFMNQRCNSEM", "COLOR": "1", "COLORTERM": "truecolor", "CommonProgramFiles": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "DESKTOP-LS9DGQV", "ComSpec": "C:\\Windows\\system32\\cmd.exe", "CONDA_PROMPT_MODIFIER": "False", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EDITOR": "notepad.exe", "envContainerTelemetryApiCmdLine": '-st "C:\\Program Files\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', "envContainerTelemetryApiCmdLineX86": '-st "C:\\Program Files (x86)\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\HeMengke\\go", "HOME": "C:\\Users\\HeMengke", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\HeMengke", "INIT_CWD": "E:\\github\\vite-react-ssr-boilerplate", "LANG": "zh_CN.UTF-8", "LOCALAPPDATA": "C:\\Users\\HeMengke\\AppData\\Local", "LOGONSERVER": "\\\\DESKTOP-LS9DGQV", "NODE": "C:\\Program Files\\nodejs\\node.exe", "NODE_EXE": "C:\\Program Files\\nodejs\\\\node.exe", "NODE_PATH": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\node_modules", "NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", "npm_command": "run-script", "npm_config_auto_install_peers": "", "npm_config_cache": "C:\\Users\\HeMengke\\AppData\\Local\\npm-cache", "npm_config_globalconfig": "C:\\Program Files\\nodejs\\etc\\npmrc", "npm_config_global_prefix": "C:\\Program Files\\nodejs", "npm_config_init_module": "C:\\Users\\HeMengke\\.npm-init.js", "npm_config_local_prefix": "E:\\github\\vite-react-ssr-boilerplate", "npm_config_metrics_registry": "https://registry.npm.taobao.org/", "npm_config_node_gyp": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", "npm_config_noproxy": "", "npm_config_prefix": "C:\\Program Files\\nodejs", "npm_config_registry": "https://registry.npm.taobao.org/", "npm_config_strict_peer_dependencies": "", "npm_config_userconfig": "C:\\Users\\HeMengke\\.npmrc", "npm_config_user_agent": "npm/8.12.1 node/v18.5.0 win32 x64 workspaces/false", "npm_execpath": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\bin\\npm-cli.js", "npm_lifecycle_event": "build:test", "npm_lifecycle_script": "cross-env NODE_ENV=test vite build --mode test && vite build --ssr --mode test", "npm_node_execpath": "C:\\Program Files\\nodejs\\node.exe", "npm_package_engines_node": ">=16.14.2", "npm_package_json": "E:\\github\\vite-react-ssr-boilerplate\\package.json", "npm_package_name": "vite-react-ssr-boilerplate", "npm_package_version": "0.0.0", "NPM_PREFIX_NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", "NUMBER_OF_PROCESSORS": "20", "NVM_HOME": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm", "NVM_SYMLINK": "C:\\Program Files\\nodejs", "OneDrive": "C:\\Users\\HeMengke\\OneDrive", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "Path": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.bin;E:\\github\\node_modules\\.bin;E:\\node_modules\\.bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\WindowsApps\\Microsoft.PowerShell_7.2.5.0_x64__8wekyb3d8bbwe;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\Git\\cmd;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files (x86)\\NetSarang\\Xshell 7\\;C:\\Program Files\\Go\\bin;C:\\Program Files (x86)\\dotnet\\;C:\\Users\\HeMengke\\AppData\\Local\\pnpm;C:\\Users\\HeMengke\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Microsoft VS Code\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\npm;C:\\Users\\HeMengke\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\bin;C:\\Users\\HeMengke\\go\\bin", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL", "PNPM_HOME": "C:\\Users\\HeMengke\\AppData\\Local\\pnpm", "POSH_GIT_ENABLED": "False", "POSH_THEME": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes\\dracula.omp.json", "POSH_THEMES_PATH": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes", "POWERLINE_COMMAND": "oh-my-posh", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "ProgramFiles": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROMPT": "$P$G", "PSModulePath": "C:\\Users\\HeMengke\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\windowsapps\\microsoft.powershell_7.2.5.0_x64__8wekyb3d8bbwe\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "RlsSvcPort": "22112", "SESSIONNAME": "Console", "SystemDrive": "C:", "SystemRoot": "C:\\Windows", "TEMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.70.1", "TMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp", "USERDOMAIN": "DESKTOP-LS9DGQV", "USERDOMAIN_ROAMINGPROFILE": "DESKTOP-LS9DGQV", "USERNAME": "HeMengke", "USERPROFILE": "C:\\Users\\HeMengke", "VITE_APIPREFIX": "/proxyPrefix", "VITE_APIURL": "http://localhost:9527", "VITE_HOST": "localhost", "VITE_PROXY": "/proxyPrefix", "VITE_USER_NODE_ENV": "test", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "D:\\Microsoft VS Code\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-56a6092ff0-sock", "VSCODE_INJECTION": "1", "windir": "C:\\Windows" }.NODE_ENV;
    p = { "ACSvcPort": "17532", "ALLUSERSPROFILE": "C:\\ProgramData", "APPDATA": "C:\\Users\\HeMengke\\AppData\\Roaming", "asl.log": "Destination=file", "CHROME_CRASHPAD_PIPE_NAME": "\\\\.\\pipe\\crashpad_22408_UIUOORFMNQRCNSEM", "COLOR": "1", "COLORTERM": "truecolor", "CommonProgramFiles": "C:\\Program Files\\Common Files", "CommonProgramFiles(x86)": "C:\\Program Files (x86)\\Common Files", "CommonProgramW6432": "C:\\Program Files\\Common Files", "COMPUTERNAME": "DESKTOP-LS9DGQV", "ComSpec": "C:\\Windows\\system32\\cmd.exe", "CONDA_PROMPT_MODIFIER": "False", "DriverData": "C:\\Windows\\System32\\Drivers\\DriverData", "EDITOR": "notepad.exe", "envContainerTelemetryApiCmdLine": '-st "C:\\Program Files\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', "envContainerTelemetryApiCmdLineX86": '-st "C:\\Program Files (x86)\\NVIDIA Corporation\\NvContainer\\NvContainerTelemetryApi.dll"', "FPS_BROWSER_APP_PROFILE_STRING": "Internet Explorer", "FPS_BROWSER_USER_PROFILE_STRING": "Default", "GIT_ASKPASS": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh", "GOPATH": "C:\\Users\\HeMengke\\go", "HOME": "C:\\Users\\HeMengke", "HOMEDRIVE": "C:", "HOMEPATH": "\\Users\\HeMengke", "INIT_CWD": "E:\\github\\vite-react-ssr-boilerplate", "LANG": "zh_CN.UTF-8", "LOCALAPPDATA": "C:\\Users\\HeMengke\\AppData\\Local", "LOGONSERVER": "\\\\DESKTOP-LS9DGQV", "NODE": "C:\\Program Files\\nodejs\\node.exe", "NODE_EXE": "C:\\Program Files\\nodejs\\\\node.exe", "NODE_PATH": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.pnpm\\node_modules", "NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", "npm_command": "run-script", "npm_config_auto_install_peers": "", "npm_config_cache": "C:\\Users\\HeMengke\\AppData\\Local\\npm-cache", "npm_config_globalconfig": "C:\\Program Files\\nodejs\\etc\\npmrc", "npm_config_global_prefix": "C:\\Program Files\\nodejs", "npm_config_init_module": "C:\\Users\\HeMengke\\.npm-init.js", "npm_config_local_prefix": "E:\\github\\vite-react-ssr-boilerplate", "npm_config_metrics_registry": "https://registry.npm.taobao.org/", "npm_config_node_gyp": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\node-gyp\\bin\\node-gyp.js", "npm_config_noproxy": "", "npm_config_prefix": "C:\\Program Files\\nodejs", "npm_config_registry": "https://registry.npm.taobao.org/", "npm_config_strict_peer_dependencies": "", "npm_config_userconfig": "C:\\Users\\HeMengke\\.npmrc", "npm_config_user_agent": "npm/8.12.1 node/v18.5.0 win32 x64 workspaces/false", "npm_execpath": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\bin\\npm-cli.js", "npm_lifecycle_event": "build:test", "npm_lifecycle_script": "cross-env NODE_ENV=test vite build --mode test && vite build --ssr --mode test", "npm_node_execpath": "C:\\Program Files\\nodejs\\node.exe", "npm_package_engines_node": ">=16.14.2", "npm_package_json": "E:\\github\\vite-react-ssr-boilerplate\\package.json", "npm_package_name": "vite-react-ssr-boilerplate", "npm_package_version": "0.0.0", "NPM_PREFIX_NPM_CLI_JS": "C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js", "NUMBER_OF_PROCESSORS": "20", "NVM_HOME": "C:\\Users\\HeMengke\\AppData\\Roaming\\nvm", "NVM_SYMLINK": "C:\\Program Files\\nodejs", "OneDrive": "C:\\Users\\HeMengke\\OneDrive", "ORIGINAL_XDG_CURRENT_DESKTOP": "undefined", "OS": "Windows_NT", "Path": "E:\\github\\vite-react-ssr-boilerplate\\node_modules\\.bin;E:\\github\\node_modules\\.bin;E:\\node_modules\\.bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm\\v18.5.0\\node_modules\\npm\\node_modules\\@npmcli\\run-script\\lib\\node-gyp-bin;C:\\Program Files\\WindowsApps\\Microsoft.PowerShell_7.2.5.0_x64__8wekyb3d8bbwe;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\;C:\\Windows\\System32\\OpenSSH\\;C:\\Program Files (x86)\\NVIDIA Corporation\\PhysX\\Common;C:\\Program Files\\Git\\cmd;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\Docker\\Docker\\resources\\bin;C:\\ProgramData\\DockerDesktop\\version-bin;C:\\Program Files (x86)\\NetSarang\\Xshell 7\\;C:\\Program Files\\Go\\bin;C:\\Program Files (x86)\\dotnet\\;C:\\Users\\HeMengke\\AppData\\Local\\pnpm;C:\\Users\\HeMengke\\AppData\\Local\\Microsoft\\WindowsApps;D:\\Microsoft VS Code\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\npm;C:\\Users\\HeMengke\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\HeMengke\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\bin;C:\\Users\\HeMengke\\go\\bin", "PATHEXT": ".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.CPL", "PNPM_HOME": "C:\\Users\\HeMengke\\AppData\\Local\\pnpm", "POSH_GIT_ENABLED": "False", "POSH_THEME": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes\\dracula.omp.json", "POSH_THEMES_PATH": "C:\\Users\\HeMengke\\AppData\\Local\\Programs\\oh-my-posh\\themes", "POWERLINE_COMMAND": "oh-my-posh", "PROCESSOR_ARCHITECTURE": "AMD64", "PROCESSOR_IDENTIFIER": "Intel64 Family 6 Model 151 Stepping 2, GenuineIntel", "PROCESSOR_LEVEL": "6", "PROCESSOR_REVISION": "9702", "ProgramData": "C:\\ProgramData", "ProgramFiles": "C:\\Program Files", "ProgramFiles(x86)": "C:\\Program Files (x86)", "ProgramW6432": "C:\\Program Files", "PROMPT": "$P$G", "PSModulePath": "C:\\Users\\HeMengke\\Documents\\PowerShell\\Modules;C:\\Program Files\\PowerShell\\Modules;c:\\program files\\windowsapps\\microsoft.powershell_7.2.5.0_x64__8wekyb3d8bbwe\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules", "PUBLIC": "C:\\Users\\Public", "RlsSvcPort": "22112", "SESSIONNAME": "Console", "SystemDrive": "C:", "SystemRoot": "C:\\Windows", "TEMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp", "TERM_PROGRAM": "vscode", "TERM_PROGRAM_VERSION": "1.70.1", "TMP": "C:\\Users\\HeMengke\\AppData\\Local\\Temp", "USERDOMAIN": "DESKTOP-LS9DGQV", "USERDOMAIN_ROAMINGPROFILE": "DESKTOP-LS9DGQV", "USERNAME": "HeMengke", "USERPROFILE": "C:\\Users\\HeMengke", "VITE_APIPREFIX": "/proxyPrefix", "VITE_APIURL": "http://localhost:9527", "VITE_HOST": "localhost", "VITE_PROXY": "/proxyPrefix", "VITE_USER_NODE_ENV": "test", "VSCODE_GIT_ASKPASS_EXTRA_ARGS": "--ms-enable-electron-run-as-node", "VSCODE_GIT_ASKPASS_MAIN": "d:\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js", "VSCODE_GIT_ASKPASS_NODE": "D:\\Microsoft VS Code\\Code.exe", "VSCODE_GIT_IPC_HANDLE": "\\\\.\\pipe\\vscode-git-56a6092ff0-sock", "VSCODE_INJECTION": "1", "windir": "C:\\Windows" }.VITE_BASE_URL;
  }
  return mode === Env.test ? normalize(`${p != null ? p : ""}${base}`, false) : base;
}
function getLibAssets(url) {
  return normalize(`${getBase()}${url}`);
}
const flexible = "lib/flexible.c8cc0329.js";
const initGlobalVars = "lib/initGlobalVars.11a10747.js";
const manifestPublicTs = {
  flexible,
  initGlobalVars
};
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
    Layout = (await import("./index.7bc088cc.js")).MobileLayout;
  } else {
    Layout = (await import("./index.a44c84d9.js")).PCLayout;
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
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a, _b;
function setupVconsole(isMobile) {
  if (isMobile) {
    return escapeInject(_a || (_a = __template(['\n    <script src="https://cdn.jsdelivr.net/npm/vconsole@latest/dist/vconsole.min.js"><\/script>\n    <script>\n      var vConsole = new window.VConsole();\n    <\/script>'])));
  }
  return escapeInject``;
}
const passToClient = ["pageProps"];
async function render(pageContext) {
  const pageHtml = renderToString(await createApp(pageContext));
  const {
    pageProps
  } = pageContext;
  const {
    checkPlatform = true,
    isMobile = false
  } = pageProps;
  const title = (pageProps == null ? void 0 : pageProps.title) || "t";
  const desc = (pageProps == null ? void 0 : pageProps.description) || "d";
  const keywords = (pageProps == null ? void 0 : pageProps.keywords) || "k";
  const documentHtml = escapeInject(_b || (_b = __template(['<!DOCTYPE html>\n  <html lang="zh-CN" is-mobile="', `" check-platform='`, `'>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="Cache-Control" content="no-store">
      <meta name="renderer" content="webkit" />
      <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
      <link rel="icon" href="`, 'favicon.ico" />\n      <meta name="viewport" content="width=device-width, initial-scale=1.0', '" />\n      <meta name="description" content="', '" />\n      <meta property="description" content="', '" />\n      <meta name="og:description" content="', '" />\n      <meta property="og:description" content="', '" />\n      <meta name="keywords" content="', '" />\n      <meta name="page_title" content="', '" />\n      <meta property="page_title" content="', '" />\n      <meta name="og:title" content="', '" />\n      <meta property="og:title" content="', '" />\n      <script src="', '"><\/script>\n      <script src="', '"><\/script>\n      <title>', '</title>\n    </head>\n    <body>\n      <div id="app">', "</div>\n\n\n      ", "\n    </body>\n  </html>"])), String(isMobile), String(checkPlatform), getBase(), isMobile ? ", maximum-scale=1.0, user-scalable=no, viewport-fit=cover" : "", desc, desc, desc, desc, keywords, title, title, title, title, getLibAssets(manifestPublicTs.initGlobalVars), getLibAssets(manifestPublicTs.flexible), title, dangerouslySkipEscape(pageHtml), setupVconsole(isMobile));
  return {
    documentHtml,
    pageContext: {
      pageProps
    }
  };
}
export {
  passToClient,
  render
};

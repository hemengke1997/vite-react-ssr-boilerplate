;
(function () {
  System.register(['./jsx-dev-runtime.abb0654c-legacy.js'], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.innerHTML = "/* ------------------ mobile ------------------ */\r\n:root {\r\n  --mobile-primary-color: none;\r\n}\r\n#app {\r\n  padding-bottom: constant(safe-area-inset-bottom);\r\n  padding-bottom: env(safe-area-inset-bottom);\r\n}\r\n";
    document.head.appendChild(__vite_style__);
    var jsxDEV;
    return {
      setters: [function (module) {
        jsxDEV = module.j;
      }],
      execute: function execute() {
        exports('MobileLayout', MobileLayout);
        var index = '';
        var _jsxFileName = "E:\\github\\vite-react-ssr-boilerplate\\src\\components\\mobile\\MobileLayout\\index.tsx";
        function MobileLayout(_ref) {
          var children = _ref.children;
          return /* @__PURE__ */jsxDEV("div", {
            className: "layout",
            children: children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 4,
            columnNumber: 10
          }, this);
        }
      }
    };
  });
})();

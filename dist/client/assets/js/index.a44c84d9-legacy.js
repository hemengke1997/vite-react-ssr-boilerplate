;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    var __vite_style__ = document.createElement('style');
    __vite_style__.innerHTML = "/* -------------------- pc -------------------- */\n:root {\n  --pc-primary-color: #ff9800;\n}\n#app {\n}\r\n";
    document.head.appendChild(__vite_style__);
    return {
      execute: function execute() {
        exports('PCLayout', PCLayout);
        var index = '';
        function PCLayout(_ref) {
          var children = _ref.children;
          return children;
        }
      }
    };
  });
})();

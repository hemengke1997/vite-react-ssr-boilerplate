;
(function () {
  System.register([], function (exports, module) {
    'use strict';

    return {
      execute: function execute() {
        var scriptRel = 'modulepreload';
        var assetsURL = function assetsURL(dep) {
          return "/base-url/" + dep;
        };
        var seen = {};
        var __vitePreload = exports('_', function preload(baseModule, deps, importerUrl) {
          // @ts-ignore
          if (!false || !deps || deps.length === 0) {
            return baseModule();
          }
          var links = document.getElementsByTagName('link');
          return Promise.all(deps.map(function (dep) {
            // @ts-ignore
            dep = assetsURL(dep);
            // @ts-ignore
            if (dep in seen) return;
            // @ts-ignore
            seen[dep] = true;
            var isCss = dep.endsWith('.css');
            var cssSelector = isCss ? '[rel="stylesheet"]' : '';
            var isBaseRelative = !!importerUrl;
            // check if the file is already preloaded by SSR markup
            if (isBaseRelative) {
              // When isBaseRelative is true then we have `importerUrl` and `dep` is
              // already converted to an absolute URL by the `assetsURL` function
              for (var i = links.length - 1; i >= 0; i--) {
                var _link = links[i];
                // The `links[i].href` is an absolute URL thanks to browser doing the work
                // for us. See https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes:idl-domstring-5
                if (_link.href === dep && (!isCss || _link.rel === 'stylesheet')) {
                  return;
                }
              }
            } else if (document.querySelector("link[href=\"".concat(dep, "\"]").concat(cssSelector))) {
              return;
            }
            // @ts-ignore
            var link = document.createElement('link');
            // @ts-ignore
            link.rel = isCss ? 'stylesheet' : scriptRel;
            if (!isCss) {
              link.as = 'script';
              link.crossOrigin = '';
            }
            link.href = dep;
            // @ts-ignore
            document.head.appendChild(link);
            if (isCss) {
              return new Promise(function (res, rej) {
                link.addEventListener('load', res);
                link.addEventListener('error', function () {
                  return rej(new Error("Unable to preload CSS for ".concat(dep)));
                });
              });
            }
          })).then(function () {
            return baseModule();
          });
        });
      }
    };
  });
})();

var $2K9WE$reactjsxruntime = require("react/jsx-runtime");

function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $32eadc3ce11727ee$exports = {};

$parcel$export($32eadc3ce11727ee$exports, "Button", () => $32eadc3ce11727ee$export$353f5b6fc5456de1);

const $32eadc3ce11727ee$export$353f5b6fc5456de1 = ({ children: children , onClick: onClick  })=>{
    return /*#__PURE__*/ $2K9WE$reactjsxruntime.jsx("button", {
        onClick: onClick,
        children: children
    });
};


$parcel$exportWildcard(module.exports, $32eadc3ce11727ee$exports);


//# sourceMappingURL=index.js.map

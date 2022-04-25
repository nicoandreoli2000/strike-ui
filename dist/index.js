var $8zHUo$reactjsxruntime = require("react/jsx-runtime");
var $8zHUo$chakrauireact = require("@chakra-ui/react");

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
var $6ab71aa90505fd93$exports = {};

$parcel$export($6ab71aa90505fd93$exports, "Button", () => $6ab71aa90505fd93$export$353f5b6fc5456de1);


const $6ab71aa90505fd93$export$353f5b6fc5456de1 = ({ testProp: testProp , children: children , ...props })=>{
    return /*#__PURE__*/ $8zHUo$reactjsxruntime.jsxs($8zHUo$chakrauireact.Button, {
        ...props,
        children: [
            "Test prop: ",
            testProp,
            " - Children: ",
            children
        ]
    });
};


$parcel$exportWildcard(module.exports, $6ab71aa90505fd93$exports);


//# sourceMappingURL=index.js.map

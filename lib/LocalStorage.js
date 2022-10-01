"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// wrapper for native window.localStorage
var LocalStorage = function () {
    function LocalStorage() {
        _classCallCheck(this, LocalStorage);
    }

    _createClass(LocalStorage, [{
        key: "getItem",
        value: function getItem(key) {
            var parse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            if (!window.localStorage) return undefined;
            var oStr = window.localStorage.getItem(key);
            if (oStr != null && parse) {
                try {
                    return JSON.parse(oStr);
                } catch (e) {
                    return null;
                }
            }
            return oStr;
        }
    }, {
        key: "setItem",
        value: function setItem(key, value) {
            if (!window.localStorage) return undefined;
            window.localStorage.setItem(key, JSON.stringify(value));
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            if (!window.localStorage) return undefined;
            window.localStorage.removeItem(key);
        }
    }, {
        key: "getKey",
        value: function getKey(index) {
            if (!window.localStorage) return undefined;
            return window.localStorage.key(index);
        }
    }, {
        key: "size",
        value: function size() {
            if (!window.localStorage) return undefined;
            return window.localStorage.length;
        }
    }, {
        key: "clear",
        value: function clear() {
            if (!window.localStorage) return undefined;
            return window.localStorage.clear();
        }
    }]);

    return LocalStorage;
}();

exports.default = LocalStorage;
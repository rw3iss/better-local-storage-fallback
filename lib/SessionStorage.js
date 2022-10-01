"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// wrapper for native window.sessionStorage
var SessionStorage = function () {
    function SessionStorage() {
        _classCallCheck(this, SessionStorage);
    }

    _createClass(SessionStorage, [{
        key: "getItem",
        value: function getItem(key) {
            if (!window.sessionStorage) return undefined;
            return window.sessionStorage.getItem(key);
        }
    }, {
        key: "setItem",
        value: function setItem(key, value) {
            if (!window.sessionStorage) return undefined;
            window.sessionStorage.setItem(key, JSON.stringify(value));
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            if (!window.sessionStorage) return undefined;
            window.sessionStorage.removeItem(key);
        }
    }, {
        key: "getKey",
        value: function getKey(index) {
            if (!window.sessionStorage) return undefined;
            return window.sessionStorage.key(index);
        }
    }, {
        key: "size",
        value: function size() {
            if (!window.sessionStorage) return undefined;
            return window.sessionStorage.length;
        }
    }, {
        key: "clear",
        value: function clear() {
            if (!window.sessionStorage) return undefined;
            return window.sessionStorage.clear();
        }
    }]);

    return SessionStorage;
}();

exports.default = SessionStorage;
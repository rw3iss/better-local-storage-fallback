'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MemoryStorage = exports.CookieStorage = exports.SessionStorage = exports.LocalStorage = exports.isSupported = exports.storage = undefined;

var _CookieStorage = require('./CookieStorage');

var _CookieStorage2 = _interopRequireDefault(_CookieStorage);

var _isSupported = require('./isSupported');

var _isSupported2 = _interopRequireDefault(_isSupported);

var _LocalStorage = require('./LocalStorage');

var _LocalStorage2 = _interopRequireDefault(_LocalStorage);

var _MemoryStorage = require('./MemoryStorage');

var _MemoryStorage2 = _interopRequireDefault(_MemoryStorage);

var _SessionStorage = require('./SessionStorage');

var _SessionStorage2 = _interopRequireDefault(_SessionStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = null;

if ((0, _isSupported2.default)('localStorage')) {
    // use localStorage
    exports.storage = storage = new _LocalStorage2.default();
} else if ((0, _isSupported2.default)('sessionStorage')) {
    // use sessionStorage
    exports.storage = storage = new _SessionStorage2.default();
} else if ((0, _isSupported2.default)('cookieStorage')) {
    // use cookies
    exports.storage = storage = new _CookieStorage2.default();
} else {
    // use memory
    exports.storage = storage = new _MemoryStorage2.default();
}

exports.default = storage;
exports.storage = storage;
exports.isSupported = _isSupported2.default;
exports.LocalStorage = _LocalStorage2.default;
exports.SessionStorage = _SessionStorage2.default;
exports.CookieStorage = _CookieStorage2.default;
exports.MemoryStorage = _MemoryStorage2.default;
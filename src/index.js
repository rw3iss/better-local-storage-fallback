import CookieStorage from './CookieStorage';
import isSupported from './isSupported';
import LocalStorage from './LocalStorage';
import MemoryStorage from './MemoryStorage';
import SessionStorage from './SessionStorage';

let storage = null

if (isSupported('localStorage')) {
    // use localStorage
    storage = new LocalStorage();
} else if (isSupported('sessionStorage')) {
    // use sessionStorage
    storage = new SessionStorage();
} else if (isSupported('cookieStorage')) {
    // use cookies
    storage = new CookieStorage();
} else {
    // use memory
    storage = new MemoryStorage();
}

export default storage;

export { storage, isSupported, LocalStorage, SessionStorage, CookieStorage, MemoryStorage };

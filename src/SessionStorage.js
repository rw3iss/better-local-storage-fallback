// wrapper for native window.sessionStorage
export default class SessionStorage {

    getItem(key) {
        if (!window.sessionStorage) return undefined;
        return window.sessionStorage.getItem(key);
    }

    setItem(key, value) {
        if (!window.sessionStorage) return undefined;
        window.sessionStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key) {
        if (!window.sessionStorage) return undefined;
        window.sessionStorage.removeItem(key);
    }

    getKey(index) {
        if (!window.sessionStorage) return undefined;
        return window.sessionStorage.key(index);
    }

    size() {
        if (!window.sessionStorage) return undefined;
        return window.sessionStorage.length;
    }

    clear() {
        if (!window.sessionStorage) return undefined;
        return window.sessionStorage.clear();
    }

}

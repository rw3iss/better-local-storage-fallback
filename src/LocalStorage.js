// wrapper for native window.localStorage
export default class LocalStorage {

    getItem(key, parse = true) {
        if (!window.localStorage) return undefined;
        let oStr = window.localStorage.getItem(key);
        if (oStr != null && parse) {
            try {
                return JSON.parse(oStr);
            } catch (e) {
                return null;
            }
        }
        return oStr;
    }

    setItem(key, value) {
        if (!window.localStorage) return undefined;
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    removeItem(key) {
        if (!window.localStorage) return undefined;
        window.localStorage.removeItem(key);
    }

    getKey(index) {
        if (!window.localStorage) return undefined;
        return window.localStorage.key(index);
    }

    size() {
        if (!window.localStorage) return undefined;
        return window.localStorage.length;
    }

    clear() {
        if (!window.localStorage) return undefined;
        return window.localStorage.clear();
    }

}

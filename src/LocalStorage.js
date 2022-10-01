// wrapper for native window.localStorage
export default class LocalStorage {

    getItem(id) {
        if (!window.localStorage) return undefined;
        // Look in local storage for object
        let key = this._getClassTypeName(id);
        let str = window.localStorage.getItem(key);
        if (str != null) {
            try {
                let object = JSON.parse(str);
                return object;
            } catch (e) {
                return null;
            }
        }

        return str;
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

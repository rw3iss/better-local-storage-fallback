export default class MemoryStorage {

    constructor() {
        this._data = {}
    }

    getItem(key) {
        return this._data.hasOwnProperty(key) ? this._data[key] : null
    }

    setItem(key, value) {
        return this._data[key] = String(value)
    }

    removeItem(key) {
        return delete this._data[key]
    }

    getKey(index) {
        let keys = Object.keys(this._data);
        return keys[index];
    }

    size() {
        return Object.keys(this._data).length;
    }

    clear() {
        return this._data = {}
    }

}

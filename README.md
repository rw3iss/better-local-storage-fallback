# better-local-storage-fallback

Forked/originally from @ripeworks/local-storage-fallback.

[![npm version](https://badge.fury.io/js/better-local-storage-fallback.svg)](https://badge.fury.io/js/better-local-storage-fallback)

## Installation

```
$ npm install rw3iss/better-local-storage-fallback
```

## Usage

```js
import storage from 'better-local-storage-fallback' // if you use es6 or typescript
// use object destructuring when using require()
// const {storage} = require('better-local-storage-fallback')

// Use storage directly
storage.setItem('foo', 'bar');
storage.getItem('foo'); // bar

// Or shim window.localStorage
if (!('localStorage' in window)) {
  window.localStorage = storage;
}
```

## Browser Bundle
(TODO)
```html
<script src="https://unpkg.com/better-local-storage-fallback/lib/dist.min.js"></script>
<script>
  window.localStorageFallback.setItem('foo', 'bar')
</script>
```

## Purpose

With browser settings like "Private Browsing" it has become a problem to rely on a working `window.localStorage`, even in newer browsers. Even though it may exist, it will throw exceptions when trying to use `setItem` or `getItem`. This module will run appropriate checks to see what browser storage mechanism might be available, and then expose it. It uses the same API as `localStorage` so it should work as a drop-in replacement in most cases.

## Gotchas

* `CookieStorage` __has__ storage limits. Be careful here.
* `MemoryStorage` will __not__ persist between page loads. This is more or less a stop-gap to prevent page crashes, but may be sufficient for websites that don't do full page loads.

type StorageFallback = Pick<Storage, 'clear' | 'getItem' | 'setItem' | 'removeItem' | 'getKey' | 'size'>;

declare module 'better-local-storage-fallback' {

    const storage: Storage | StorageFallback;
    export default storage;

    export const LocalStorage: {
        prototype: StorageFallback;
        new(): StorageFallback;
    };

    export const SessionStorage: {
        prototype: StorageFallback;
        new(): StorageFallback;
    };

    export const CookieStorage: {
        prototype: StorageFallback;
        new(options?: object): StorageFallback;
    };

    export const MemoryStorage: {
        prototype: StorageFallback;
        new(): StorageFallback;
    };

    export function isSupported(name?: string): boolean;

}

export default class EventEmitter {
    listeners: { [key: string]: Function } = {};  // key-value pair

    addListener(eventName: string, fn: Function): void {
        this.listeners[eventName] = fn;
    }

    removeListener(eventName: string): void {
        delete this.listeners[eventName];
    }

    once(eventName: string, fn: Function): void {
        this.listeners[eventName] = () => {
            fn();
            this.removeListener(eventName);
        }
    }

    emit(eventName: string, ...args: any[]): void {
        const listener = this.listeners[eventName];
        if (listener) listener(...args);
    }

    listenerCount(): number {
        return Object.keys(this.listeners).length;
    }

    rawListeners(eventName: string): Function {
        return this.listeners[eventName]
    }
}
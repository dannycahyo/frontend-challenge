class EventTarget {
  constructor() {
    this.events = new Map();
  }

  addEventListener(name, callback) {
    if (this.events.has(name)) {
      this.events.set(name, [...this.events.get(name), callback]);
    } else {
      this.events.set(name, [callback]);
    }
  }

  removeEventListener(name, callback) {
    if (!this.events.has(name)) {
      return;
    }

    const callbacks = this.events.get(name);
    const index = callbacks.indexOf(callback);
    if (index > -1) {
      callbacks.splice(index, 1);
      this.events.set(name, callbacks);
    }
  }

  dispatchEvent(name) {
    if (!this.events.has(name)) {
      return;
    }

    const callbacks = this.events.get(name);
    callbacks.forEach((callback) => callback());
  }
}

function debounce(callback, delay, immediate = false) {
  let timeoutID;

  return function (...args) {
    clearTimeout(timeoutID);

    const shouldCallImmediately = timeoutID == null && immediate;
    if (shouldCallImmediately) {
      callback.apply(this, args);
    }

    timeoutID = setTimeout(() => {
      if (!immediate) {
        callback.apply(this, args);
      }
      timeoutID = null;
    }, delay);
  };
}

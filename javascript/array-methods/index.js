Array.prototype.myMap = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    newArray.push(callback(value, i, this));
  }

  return newArray;
};

Array.prototype.myFilter = function (callback) {
  const newArray = [];

  for (let i = 0; i < this.length; i++) {
    const value = this[i];
    if (callback(value, i, this) === true) {
      newArray.push(value);
    }
  }

  return newArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let result = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (result === undefined) {
      result = this[0];
    } else {
      const value = this[i];
      result = callback(result, value, i, this);
    }
  }

  return result;
};

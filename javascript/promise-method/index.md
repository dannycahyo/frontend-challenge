# Promise Methods

Without calling `Promise.race()`, `Promise.any()`, `Promise.all()`, `Promise.allSettled()`, implement the following four similar functions on the native Promise object:

- `myRace(promises)`: Takes in an array of Promises and returns a new Promise. This new Promise should resolve or reject as soon as any Promise in the array resolves or rejects, with the value from that settled Promise.

- `myAny(promises)`: Takes in an array of Promises and returns a new Promise. This new Promise should resolve as soon as any Promise in the array resolves, with the value from that resolved Promise. If every Promise in the array rejects, the new Promise should reject with the string "all promises rejected".

- `myAll(promises)`: Takes in an array of Promises and returns a new Promise. This new Promise should resolve as soon as every Promise in the array resolves, with an array of the values from those resolved Promises. This array should be in the same order as they were passed to myAll (not in the order they resolved). If any Promise in the array rejects, the new Promise should immediately be rejected with that value.

- `myAllSettled(promises)`: Takes in an array of Promises and returns a new Promise. This new Promise should resolve as soon as every Promise in the array settles, with an array of objects detailing the results of each Promise. Each of these objects should have a "status" key set to either "fulfilled" or "rejected", based on the state of the Promise. If the Promise was fulfilled, there should also be a "value" key set to the value from that resolved Promise. If the Promise was rejected, there should be an "error" key set to the error the Promise was rejected with. This array should be in the same order as they were passed to myAllSettled (not in the order they resolved).

For simplicity, you can assume the arrays of Promises passed to these functions will never be empty.

**Sample Usage**
```javascript
Promise.myRace([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myRace([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAny([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAny([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAll([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAll([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));

Promise.myAllSettled([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.resolve(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log);

Promise.myAllSettled([
  new Promise(res => setTimeout(() => res(0), 500)),
  Promise.reject(5),
  new Promise(res => setTimeout(() => res(10), 1000)),
]).then(console.log).catch((error) => console.log('error: ' + error));
```

**Expected Output**
```
// Console logs:
5 // From myRace.
error: 5 // From myRace.
5 // From myAny.
0 // From myAny.
[0, 5, 10] // From myAll after 1 second.
error: 5 // From myAll.
[
  {status: 'fulfilled', value: 0},
  {status: 'fulfilled', value: 5},
  {status: 'fulfilled', value: 10},
] // From myAllSettled after 1 second.
[
  {status: 'fulfilled', value: 0},
  {status: 'rejected', error: 5}, 
  {status: 'fulfilled', value: 10},
] // From myAllSettled after 1 second.
```
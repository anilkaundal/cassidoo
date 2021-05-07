/*
Design a hashmap without using any built-in libraries. You should include the 
following functions:

=> put(key, value): Insert a (key, value) pair into the hashmap. 
If the value already exists, update the value.
=> get(key): Returns the value to which key is mapped, or -1 
if this map contains nothing for key.
=> remove(key): Remove the mapping for the value in key if it exists.
*/

function Hashmap() {
  const BUCKET_SIZE = 20;
  const map = [];
  const hash = (key) => {
    let hash = String(key)
      .split("")
      .reduce((acc, curr) => acc + curr.charCodeAt(0), 0);
    return hash % BUCKET_SIZE;
  };
  return {
    map,
    put: function (key, value) {
      const keyStr = String(key);
      const hashNum = hash(keyStr);
      if (!this.map[hashNum]) {
        this.map[hashNum] = [];
      }
      this.map[hashNum].push([keyStr, value]);
    },
    get: function (key) {
      const keyStr = String(key);
      const hashNum = hash(keyStr);
      const bucket = this.map[hashNum];
      const result = bucket
        ? bucket.find((item) => item[0] === keyStr)
        : undefined;
      return result && result.length === 2 ? result[1] : undefined;
    },
    remove: function (key) {
      const keyStr = String(key);
      const hashNum = hash(key);
      if (this.map[hashNum]) {
        this.map[hashNum] = this.map[hashNum].filter(
          (item) => item[0] !== keyStr
        );
      }
    },
  };
}

let hmap = new Hashmap();
hmap.put(() => null, 1234);
console.log(hmap.get(() => null));
hmap.remove(() => null);
console.log(hmap.get(() => null));

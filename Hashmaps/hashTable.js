class HashTable {
  constructor(arrLen = 53) {
    this.keyMap = new Array(arrLen);
  }

  _hash(key) {
    const CONST_PRIME = 31;
    let total = 0;
    for (let chars = 0; chars < Math.min(key.length, 100); chars++) {
      let charValue = key[chars].charCodeAt(0) - 96;
      total = (total * CONST_PRIME + charValue) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    const keyIndex = this._hash(key);
    this.keyMap[keyIndex] = this.keyMap[keyIndex] ? this.keyMap[keyIndex] : [];
    this.keyMap[keyIndex].push([key, value]);
  }

  get(key) {
    const keyIndex = this._hash(key);
    const arrKeyIndex = this.keyMap[keyIndex] ? this.keyMap[keyIndex] : [];
    for (let ele of arrKeyIndex) {
      if (ele[0] === key) {
        return ele[1];
      }
    }
    return undefined;
  }

  keys() {
    if (this.keyMap.length === 0) {
      return undefined;
    }
    let keyArray = [];
    for (let item of this.keyMap) {
      if (item && item.length !== 0) {
        let k = item.map((m) => m[0]);
        keyArray = [...keyArray, ...k];
      }
    }
    return keyArray;
  }

  values() {
    if (this.keyMap.length === 0) {
      return undefined;
    }
    let valueArray = [];
    for (let item of this.keyMap) {
      if (item && item.length !== 0) {
        let v = item.map((m) => m[1]);
        valueArray = [...valueArray, ...v];
      }
    }
    return valueArray;
  }

  print() {
    console.log(this.keyMap);
    console.table(this.keyMap);
    console.dir(this.keyMap);
  }
}

const hash = new HashTable();
hash.set("pink", "pinkValue");
hash.set("pink", "pinkValue1");
hash.set("pink2", "pinkValue2");
hash.set("blue", "blueValue");
// console.log(hash.get("pink"));
// console.log(hash.get("pnk"));
// console.log(hash.get("blue"));
// hash.print();
console.log(hash.keys());
console.log(hash.values());

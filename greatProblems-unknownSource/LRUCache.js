// Implement LRU cache 



class LRUCache {
  constructor(limit) {
    this.cache = new Map();
    this.capacity = limit;
  }

  set(key, value) {
    // If the key-value is in the Map
    // then we want to delete it and 
    // append to the list - as most 
    // recently used!
    if (this.cache.get(key)) {
      this.cache.delete(key);
      // this.cache.set(key, value);
    } else if (this.capacity === this.cache.size) {
      // We want to delete the least recently 
      // used, which would be the first in the list
      // as those recently used are at the end
      for (let k of this.cache.keys()) {
        this.cache.delete(k);
        break;
      }
    }
    this.cache.set(key, value);
  }

  get(key) {
    if (this.cache.get(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }
}

var lruc = new LRUCache(4);
// lruc.set('Google', 'www.google.com');
// lruc.set('Bing', 'www.bing.com');
// lruc.set('AOL', 'www.aol.com');
// lruc.set('Yahoo', 'www.yahoo.com');
// lruc.set('Ask', 'www.ask.com');
lruc.set(2, 1);
lruc.set(3, 2);
lruc.set(2, 1);
console.log(lruc.get());
console.log(lruc.cache.size);


/*
// Answer for Leetcode
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
};

LRUCache.prototype.get = function(key) {
    if (this.cache.get(key)) {
      let value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
};

LRUCache.prototype.set = function(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    } else if (this.capacity === this.cache.size) {
      for (let k of this.cache.keys()) {
        this.cache.delete(k);
        break;
      }
    }
    this.cache.set(key, value);
};
 */


// If a doubly linked list is available
let dll = require('../data-structures/doubly-linked-list.js');

// class LRUCache {
//   constructor(limit) {
//     this.tempCache = {};
//     this.limit = limit || 5;
//     this.DLL = new DoublyLinkedList();
//   }
  
//   set(key, value) {
//     if (key in this.tempCache) {
//       this.tempCache[key].remove();
//     }
//     if (this.DLL.size() === this.limit) {
//       let temp = this.DLL.head();
//       delete this.tempCache[temp.data[0]];
//       this.DLL.head().remove();
//     }
    
//     this.tempCache[key] = this.DLL.append([key, value]);
//   }
  
//   get(key) {
//     if (key in this.tempCache) {
//       let temp = this.tempCache[key];
//       temp.remove();
//       this.set(key, temp);
//       return this.tempCache[key].data[1];
//     }
//     return null;
//   }
// }
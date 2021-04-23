/*
You’re given two integer arrays (n and m), and an integer k. Using the digits from n and m,
return the largest number you can of length k.

Example:
n = [3,4,6,5]
m = [9,0,2,5,8,3]
k = 5
$ maxNum(n, m, k)
$ 98655
*/

function MaxHeap() {
  this.heap = [];
  function getChildrenIndex(curr) {
    return [2 * curr + 1, 2 * curr + 2];
  }
  function getParentIndex(curr) {
    return curr % 2 === 0 ? (curr - 2) / 2 : (curr - 1) / 2;
  }

  return {
    heap: this.heap,
    insert: function (value) {
      let { heap } = this;
      heap.push(value);
      let currIndex = heap.length - 1;
      let parentIndex = getParentIndex(currIndex);
      while (heap[currIndex] > heap[parentIndex]) {
        const tmp = heap[parentIndex];
        heap[parentIndex] = heap[currIndex];
        heap[currIndex] = tmp;
        currIndex = parentIndex;
        parentIndex = getParentIndex(currIndex);
      }
    },
    remove: function () {
      let { heap } = this;
      const lastItem = heap.pop();
      let currIndex = 0;
      let [l, r] = getChildrenIndex(currIndex);
      const returnVal = heap[0];
      heap[0] = lastItem;
      while (heap[currIndex] < heap[l] || heap[currIndex] < heap[r]) {
        const tmp = heap[currIndex];
        if (heap[r] > heap[l]) {
          heap[currIndex] = heap[r];
          heap[r] = tmp;
          currIndex = r;
        } else {
          heap[currIndex] = heap[l];
          heap[l] = tmp;
          currIndex = l;
        }
        [l, r] = getChildrenIndex(currIndex);
      }
      return returnVal;
    },
  };
}

const maxNum = (n, m, k) => {
  let h = new MaxHeap();
  n.forEach((item) => h.insert(item));
  m.forEach((item) => h.insert(item));
  return Array(k)
    .fill(0)
    .map((_) => h.remove())
    .join("");
};

const maxNum0 = (n, m, k) =>
  [...n, ...m]
    .sort((a, b) => b - a)
    .filter((_, i) => i < k)
    .join("");

const linearMaxNum = (n, m, k) => {
  const count = {};
  let res = "";
  let all = [...n, ...m];
  all.forEach((item) => {
    if (!count[item]) {
      count[item] = 0;
    }
    count[item]++;
  });
  for (let i = 9; i >= 0; i--) {
    res += new Array(count[i]).fill(i).join("");
  }
  return res.substr(0, k);
};

n = [3, 4, 6, 5];
m = [9, 0, 2, 5, 8, 3];
k = 5;
console.log(maxNum(n, m, k));
console.log(maxNum0(n, m, k));
console.log(linearMaxNum(n, m, k));

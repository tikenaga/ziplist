function zipList(x, y) {
  if (x.length === y.length) {
    const arr = [];
    const list1 = x;
    const list2 = y;
    for (let i = 0; i < x.length; i++) {
      arr.push(list1[i]);
      arr.push(list2[i]);
    }
    return arr;
  }
  return null;
}
function zipListTheSimpleWay(x, y) {
  const list = _.zip(x, y);
  return _.reduce(list, function(a, b) { return a.concat(b); }, []);
}

const list1 = [1, 'b', 'c'];
const list2 = ['a', 2, 3];
console.log(zipList(list1, list2));
console.log(zipListTheSimpleWay(list1, list2));

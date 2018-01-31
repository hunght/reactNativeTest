import { slice, append, splitEvery, is } from 'ramda';

export const getTrunksArrayFromArrayNumbers = ({ childs, numberOnRow }) => {
  if (is(Array, numberOnRow)) {
    let trunksArray = [];
    const total = numberOnRow.reduce((total, curr) => {
      const tempArr = slice(total, total + curr, childs);
      if (tempArr.length > 0) {
        trunksArray = append(tempArr, trunksArray);
      }
      return (total += curr);
    }, 0);
    const tempArr = slice(total, Infinity, childs);
    if (tempArr.length > 0) {
      trunksArray = append(tempArr, trunksArray);
    }
    return trunksArray;
  } else {
    const length = numberOnRow ? numberOnRow : childs.length;
    return splitEvery(length, childs);
  }
};

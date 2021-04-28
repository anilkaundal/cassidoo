const room = { length: 12, width: 10, height: 9 };
const canCoverage = 200;

const calcCanCoverage = (length, width, height, canCoverage) =>
  Math.ceil((length * height * 2 + width * height * 2) / canCoverage);

const numberOfCans = (room, canCoverage) => {
  const { length, width, height } = room;
  if (
    !room ||
    Object.keys(room).length === 0 ||
    !Object.values(room).every((val) => Number(val) > 0)
  ) {
    return -1;
  }
  return calcCanCoverage(length, width, height, canCoverage);
};

console.log(numberOfCans(room, canCoverage));

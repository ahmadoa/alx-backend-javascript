export default function getStudentIdsSum(stdList) {
  const initialVal = 0;
  const sumAll = stdList.reduce(
    (acc, std) => acc + std.id,
    initialVal,
  );
  return sumAll;
}

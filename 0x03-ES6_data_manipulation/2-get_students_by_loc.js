export default function getStudentsByLocation(stdList, city) {
  const filtered = stdList.filter((std) => std.location === city);
  return filtered;
}

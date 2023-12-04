export default function getListStudentIds(stdList) {
  if (Array.isArray(stdList)) {
    return stdList.map((std) => std.id);
  }
  return [];
}

export default function getListStudentIds(stdList) {
  if (Array.isArray(stdList)) {
    const ids = stdList.map(std => {
      return std.id;
    });
    return ids;
  } else {
    return [];
  }
}

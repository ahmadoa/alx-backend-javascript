export default function updateStudentGradeByCity(stdList, city, newGrades) {
  if (!Array.isArray(stdList) || !Array.isArray(newGrades)) {
    return [];
  }
  const cityFiltered = stdList.filter((std) => std.location === city).map((std) => {
    const grade = newGrades.find((grade) => grade.studentId === std.id);
    return { ...std, grade: grade ? grade.grade : 'N/A' };
  });

  return cityFiltered;
}

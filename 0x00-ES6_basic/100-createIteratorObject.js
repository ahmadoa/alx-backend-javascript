export default function createIteratorObject(report) {
  const res = [];
  for (const department of Object.values(report.allEmployees)) {
    res.push(...department);
  };
  return res;
}

export default function updateUniqueItems(mapList) {
  for (const [key, val] of mapList) {
    if (val === 1) {
       mapList.set(key, 100);
    }
  }
  return mapList;
}

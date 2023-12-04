export default function updateUniqueItems(mapList) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, val] of mapList) {
    if (val === 1) {
       mapList.set(key, 100);
    }
  }
  return mapList;
}

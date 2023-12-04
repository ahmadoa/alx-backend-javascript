export default function updateUniqueItems(mapList) {
  if (!(mapList instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, val] of mapList) {
    if (val === 1) {
       mapList.set(key, 100);
    }
  }
  return mapList;
}

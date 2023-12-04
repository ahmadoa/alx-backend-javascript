export default function cleanSet(set, startString) {
  const newlist = [];
  if (startString && typeof startString === 'string') {
    for (const value of set) {
      if (value && value.startsWith(startString)) {
        newlist.push(value.slice(startString.length));
      }
    }
  }
  return newlist.join('-');
}

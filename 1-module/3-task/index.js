function ucFirst(str) {
  let name = str;
  let firstChar = str.slice(0,1);
  let upperCase = firstChar.toUpperCase();
  let restOfName = name.slice(1, name.length)
  return upperCase + restOfName;

}

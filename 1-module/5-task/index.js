function truncate(str, maxlength) {
  let string = str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  return string;
}

function pluralize(strings) {
  var plurals = [];
  for (var i = 0; i < strings.length; i++) {
    plurals[i] = strings[i] + 's';
  }
  return plurals;
}

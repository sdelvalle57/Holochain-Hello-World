function genesis() {
  return true;
}

function validateCommit() {
  return true;
}

function validatePut() {
  return true;
}

function holoTextWrite(text) {
  var hash = commit('holoText', text);
  return hash;
}

function holoTextRead(hash) {
  var holoText = get(hash);
  return holoText;
}
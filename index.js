const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  kittens[3] = name;
  return kittens;
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift();
}

function appendKitten(name) {
  let a2 = kittens.slice(0, name);
  return a2;
}

const app = "I don't do much."
var kittens = [];
function destructivelyAppendKitten(name) {
  kittens.shift(name);
  return kittens;
}

const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield", "Ralph"];
function destructivelyAppendKitten(name) {
  kittens.unshift(name);
  return kittens;
}

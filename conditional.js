let mpg = `500`;
if (mpg <= 10) {
  console.log(`it's palpable`);
} else if (mpg >= 11 && mpg <= 16) {
  console.log(`planet frowns upon this, so does wallet.`);
} else if (mpg >= 17 && mpg <= 20) {
  console.log(`It's palpable.`);
} else if (mpg >= 21 && mpg <= 29) {
  console.log(`atmosphere smiles at your decision.`);
} else if (mpg >= 30 && mpg <= 35) {
  console.log(`Not many gas stops will be taken.`);
} else if (mpg >= 35 && mpg <= 119) {
  console.log(`the fish of the sea smile at your conservation.`);
} else if (mpg == 120) {
  console.log(`if youre using the Tom Ogle fuel system, props`);
} else {
  console.log(`Too high`);
}

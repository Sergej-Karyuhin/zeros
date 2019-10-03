module.exports = function zeros(expression) {
  let arr = expression.split("*");
  let countTwo = 0;
  let countFive = 0;
  let base = 0;

  arr.forEach(elem => {
    base = elem.match(/!/g);
    base = base.length;
    elem = elem.match(/\d+/);
    for (elem; elem > 0; elem -= base) {
      let temp = elem;
      while (temp % 5 == 0) {
        temp = temp / 5;
        countFive++;
      }
      while (temp % 2 == 0) {
        temp = temp / 2;
        countTwo++;
      }
    }
  });

  if (countFive > countTwo) {
    return countTwo;
  }
  else {
    return countFive;
  }
}

function prime_number(number) {
  factors = 0;
  for (let i = 2; i * i <= number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

let a = 45;

if (prime_numbers(a)) {
  console.log(a, "is prime");
} else {
  console.log(a, "is not prime");
}

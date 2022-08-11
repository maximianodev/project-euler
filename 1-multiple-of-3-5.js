const multiples = [3, 5];
const max = 1000;

for (let i = 0; i < max; i++) {
  for (const multiple of multiples) {
    if (i % multiple === 0) {
      console.log(i);
    }
  }
}

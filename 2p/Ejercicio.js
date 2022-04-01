// create 6 arrays
// generate 1000 random numbers [1-6]
// add each number to its corresponding queue
// at the end print the size of each array
// https://ideone.com/esubbq

// Hugo Levick Alvarez Luna 2B

let arrays = {
    a1: [],
    a2: [],
    a3: [],
    a4: [],
    a5: [],
    a6: [],
  },
  aleatorio,
  suma = 0;

for (let i = 0; i < 1000; i++) {
  aleatorio = Math.floor(Math.random() * 6 + 1);
  arrays["a" + aleatorio].push(aleatorio);
}

for (let i = 1; i <= 6; i++) {
  console.log(`Array ${i}: ${arrays["a" + i].length}`);
  suma += arrays["a" + i].length;
}

console.log("Suma de los arrays: " + suma);

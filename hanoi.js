/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Using a array-based stack implementation
 * solve the hanoi towers problem
 * for 3 pegs
 *
 *
 * Integrantes:
 * Hugo Levick Alvarez Luna
 * Juan Diego Salazar Gutierrez
 *
 * 2B
 */

class Tower {
  //Clase Torre, parametros: array de elementos (opcional)
  constructor(items = []) {
    this.items = items;
  }
  push(element) {
    //Agrega el elemento si es menor al ultimo
    if (element < (this.peek() ?? element + 1)) this.items.push(element);
    else console.log("No se puedo agregar el elemento", element);
  }
  pop() {
    //Elimina el ultimo elemento y regresa su valor
    return this.items.pop();
  }
  peek() {
    //Muestra el ultimo elemento sin eliminarlo
    return this.items[this.items.length - 1];
  }
  toString() {
    //Convierte los elementos a una cadena y los regresa
    return this.items.toString();
  }
}

class Base {
  //Clase Base, parametros: primera torre
  constructor(tower1 = new Tower([3, 2, 1])) {
    this.towers = [tower1, new Tower(), new Tower()];
    this.height = tower1.items.length;
  }

  move(startTower, endTower) {
    //Mueve los anillos de una torre a otra si es posible
    //Si la ultima posicion de la primera torre es menor a la ultima de la torre destino
    if (this.towers[startTower - 1].peek() < (this.towers[endTower - 1].peek() ?? this.towers[startTower - 1].peek() + 1)) {
      this.towers[endTower - 1].push(this.towers[startTower - 1].pop());
      return true;
    }
    return false;
  }
  toString(mensaje = "TORRES") {
    //Convierte los valores de las torres en string
    let cadena = `------${mensaje}------\n\n`;
    for (let i = this.height - 1; i >= 0; i--) {
      for (let j = 0; j < this.towers.length; j++)
        cadena += (this.towers[j].items[i] ?? "|") + "\t";
      cadena += "\n";
    }
    cadena += "-\t-\t-\nT1\tT2\tT3\n";
    return cadena;
  }
  towerHeight() {
    return this.height;
  }
}

const base = new Base(new Tower([3, 2, 1]));
const n = base.towerHeight();
const movimientos = Math.pow(2, n) - 1;

console.log(base.toString());

// ALGORITMO //

hanoi(n, 1, 3, 2);

function hanoi(n, ori, des, aux) {
  if (n == 1) {
    base.move(ori, des);
    console.log(base.toString(`Se movio de T${ori} a T${des}`));
  } else {
    hanoi(n - 1, ori, aux, des);
    base.move(ori, des);
    console.log(base.toString(`Se movio de T${ori} a T${des}`));
    hanoi(n - 1, aux, des, ori);
  }
}
console.log("Total de movimientos: " + movimientos);

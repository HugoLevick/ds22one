/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * isSquare(g)
 *
 * indicates whether g is a squared matrix
 * @arg {matrix} g - graph
 * @returns {bool} - true or false, whether g is a squared matrix
 *
 * @calling example
 * isSquare(g)
 *
 * PROBLEM 2
 * isSymmetrical(g)
 *
 * indicates whether g is a symmetrical matrix
 * @arg {matrix} g - graph
 * @returns {bool} - true or false, whether g is a symmetrical matrix
 *
 * @calling example
 * isSymmetrical(g)
 *
 * PROBLEM 3
 * isTree(t)
 *
 * indicates whether t is a tree
 * @arg {matrix} t - a tree
 * @returns {bool} - true or false, whether t is a tree
 *
 * @calling example
 * isTree(t)
 *
 * PROBLEM 4
 * isGraph(q)
 *
 * indicates whether q is a graph
 * @arg {matrix} q - graph, tree, matrix
 * @returns {bool} - true or false, whether q is a graph
 * may use all previous functions/methods
 *
 * @calling example
 * isGraph(q)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
let tree = [
  [0, 1, 0, 0], //1
  [1, 0, 1, 1], //2
  [0, 1, 0, 0], //3
  [0, 1, 0, 0], //4
];

class Matriz {
  constructor(matriz) {
    this.matriz = matriz;
  }

  isSquare(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      let evaluar;
      evaluar = matriz[i].length;

      if (evaluar != matriz.length) {
        return false;
      }
    }
    return true;
  }

  isSymmetrical(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] != matriz[j][i]) {
          return false;
        }
      }
    }
    return true;
  }

  isTree(matriz) {
    let sum = 0;
    let contador = 0;
    let columnas = 0;

    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        contador++;
        columnas = contador / matriz.length;
      }
    }

    for (let i = 1; i < matriz.length; i++) {
      sum = 0;
      for (let j = 0; j < columnas; j++) {
        if (j < i) {
          sum += matriz[i][j];
          if (sum > 1) {
            return false;
          }
        }
      }
    }
    return true;
  }

  isGraph(matriz) {
    if (matriz.isTree(matriz) == false) {
      return true;
    } else {
      return false;
    }
  }
}

let matriz = new Matriz(tree);

console.log(matriz.isSquare(matriz));
console.log(matriz.isSymmetrical(matriz));
console.log(matriz.isTree(matriz));
console.log(matriz.isGraph(matriz));

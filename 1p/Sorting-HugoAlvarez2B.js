//Constructor de clase
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;

    for (let i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }

    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
}

//Metodos de clase CArray

function setData() {
    for (let i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}
function clear() {
    for (let i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}
function insert(element) {
    this.dataStore[this.pos++] = element;
}
function toString() {
    let retstr = "";
    for (let i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

//-----------------------------------Algoritmos de ordenamiento-------------------------------------------------------------

//BUBBLE
function bubbleSort() {
    let numElements = this.dataStore.length, start, end, time, steps = 0;

    start = new Date().getTime();

    for (let outer = numElements; outer >= 2; --outer) {
        for (let inner = 0; inner <= outer - 1; ++inner) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                swap(this.dataStore, inner, inner + 1);
                steps++;
            }
        }
        steps++;
    }

    end = new Date().getTime();
    return [end - start, steps];

}

//SELECTION
function selectionSort() {
    let min, start, end, steps = 0;

    start = new Date().getTime();

    for (let outer = 0; outer <= this.dataStore.length - 2; ++outer) {
        min = outer;
        for (let inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
            if (this.dataStore[inner] < this.dataStore[min]) {
                min = inner;
                steps++;
            }
        }
        swap(this.dataStore, outer, min);
        steps++;
    }

    end = new Date().getTime();
    return [end - start, steps];
}

//---------------------------------------------------------PRUEBAS DE ALGORITMOS-------------------------------------------------

let time, steps,
timeSum = 0,
stepSum = 0,
prueba = new CArray(10000);

//10 corridas de BubbleSort
for (let i = 1; i <= 10; i++) {
    prueba.setData();
    [time, steps] = prueba.bubbleSort();
    timeSum += time;
    stepSum += steps;
    console.log(`BS: Corrida ${i} completada.
    Tiempo: ${time}
    Pasos: ${steps}\n`);
}

//Imprimir resultados
console.log(`\nSe han terminado las 10 corridas de BUBBLE SORT, estos son sus promedios:
Tiempo: ${timeSum / 10} milisegundos
Pasos: ${stepSum / 10}\n\n`);

//Resetear sumas
timeSum = 0;
stepSum = 0;


//10 corridas de SelectionSort
for (let i = 1; i <= 10; i++) {
    prueba.setData();
    [time, steps] = prueba.selectionSort();
    timeSum += time;
    stepSum += steps;
    console.log(`SS: Corrida ${i} completada.
    Tiempo: ${time}
    Pasos: ${steps}\n`);
}

//Imprimir resultados
console.log(`Se han terminado las 10 corridas de SELECTION SORT, estos son sus promedios:
Tiempo: ${timeSum / 10} milisegundos
Pasos: ${stepSum / 10}`);

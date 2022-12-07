class Grafo {
    constructor(capacidad) {
        this.orden = 0;
        this.capacidad = capacidad;
        this.nodos = new Array(capacidad);
        this.enlaces = new Array(capacidad);
     }
    insertar(nodo) {
        if (this.orden < this.capacidad) {
            this.nodos[this.orden] = nodo;
            this.orden++;
            return true;
        } else
            return false;
    }
    toString() {
        var cad = "";
        for (var i = 0; i < this.orden; i++) {
            cad += this.nodos[i] + " ";
        }
        return cad;
    }
    llenar() { // REVISAR URGENTEEE!!!
        var cad = "";
        for (var i = 0; i < 10; i++) {
            for (var i = 0; i < 10; i++) {
                this.enlaces[i][j] = 0;
                cad += this.enlaces[i][j] + " ";
            }
            cad += "\n";
        }
        return cad;
    }
}

let g = new Grafo(6);
g.insertar("a");
g.insertar("b");
g.insertar("c");
g.insertar("d");
g.insertar("e");
g.insertar("f");

console.log(g.toString());

//console.log(g.llenar());

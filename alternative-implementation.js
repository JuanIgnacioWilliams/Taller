// �stas son las clases en sintaxis ES6, m�s parecidas a Java/C++/C#/etc.:

class NullNode {
    // ...pensar en c�mo implementar esto...
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
        // Estos tres miembros a continuaci�n van a depender de tu implementaci�n de AVL:
        // this.leftHeight = 0; // Esto puede ser this.left.height
        // this.rightHeight = 0; // Esto puede ser this.right.height
        // this.height = 0; // Esto puede ser calculado como this.leftHeight + this.rightHeight + 1
    }

    /**
     * @param {number} val Value to search for.
     * @returns {boolean} <tt>true</tt> if found, <tt>false</tt> otherwise.
     */
    search(val) {
        let result = false;
        //busco que el valor no exista
        if (this.value === val) {
            result = true;
        } else if (val < this.value && this.left !== null) {
            result = this.left.search(val);
        } else if (val > this.value && this.right !== null) {
            result = this.right.search(val);
        }
        return result;
    }

    /**
     * Implementaci�n can�nica del m�todo "accept" del objeto visitado en el patr�n Visitor.
     * @param {NodeVisitor} visitor Node visitor.
     */
    accept(visitor) {
        visitor.visit(this);
    }

    //aca valido si es menor o mayor a dond est� parado
    add(value) {
        if (value < this.value) {
            if (this.left) {
                this.left.add(value);
            } else {
                this.left = new Node(value);
            }
        } else if (value > this.value) {
            if (this.right) {
                this.right.add(value);
            } else {
                this.right = new Node(value);
            }
        }
    }
}


class Tree {
    constructor() {
        this.root = null;
    }

    traverse() {
        const visitor = new NodeVisitor();
        this.root.accept(visitor);
        console.log(visitor.traversal());
    }

    /**
     * @param {number} val Value to search for.
     * @returns {boolean} <tt>true</tt> if found, <tt>false</tt> otherwise.
     */
    search(val) {
        return this.root.search(val);
    }

    addValue(val) {
        if (!this.root) {
            this.root = new Node(val);
        } else {
            this.root.add(val);
        }
    }
}


class NodeVisitor {
    constructor() {
        this.str = '';
    }

    /**
     * �ste es el m�todo principal del visitor. Necesita un poco m�s, para tener los corchetes que ped� en clase.
     * Acordate de que la salida tiene que ser as�: "[LEFT, VALUE, RIGHT]",
     * donde "LEFT" y "RIGHT" se resuelven recursivamente y "VALUE" es el valor del nodo actual.
     *
     * @param {Node} node Node instance.
     */
    visit(node) {
        if (this.left !== null) {
            this.left.accept(this);
        }
        this.str += this.value;
        if (this.right !== null) {
            this.right.accept(this);
        }
    }

    traversal() {
        return this.str;
    }

    reset() {
        this.str = '';
    }
}


function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    // Estos tres miembros a continuación van a depender de tu implementación de AVL:
    // this.leftHeight = 0; // Esto puede ser this.left.height
    // this.rightHeight = 0; // Esto puede ser this.right.height
    // this.height = 0; // Esto puede ser calculado como this.leftHeight + this.rightHeight + 1
}


/**
 * @param {number} val Value to search for.
 * @returns {boolean} <tt>true</tt> if found, <tt>false</tt> otherwise.
 */
Node.prototype.search = function (val) {
    //busco que el valor no exista
    if (this.value == val) {
        return true;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val);
    } else if (val > this.value && this.right != null) {
        return this.right.search(val);
    }
    return false;
}


/**
 * Implementación canónica del método "accept" del objeto visitado en el patrón Visitor.
 * @param {NodeVisitor} visitor Node visitor.
 */
Node.prototype.accept = function (visitor) {
    visitor.visit(this);
}


//aca valido si es menor o mayor a dond está parado
Node.prototype.add = function (value) {
    if (value < this.value) {
        if (this.left == null) {
            this.left = new Node(value);
        } else {
            this.left.add(value);
        }
    } else if (value > this.value) {
        if (this.right == null) {
            this.right = new Node(value);
        } else {
            this.right.add(value);
        }
    }
}


function Tree() {
    this.root = null;
}


Tree.prototype.traverse = function () {
    const visitor = new NodeVisitor();
    this.root.accept(visitor);
    console.log(visitor.traversal());
}


/**
 * @param {number} val Value to search for.
 * @returns {boolean} <tt>true</tt> if found, <tt>false</tt> otherwise.
 */
Tree.prototype.search = function (val) {
    return this.root.search(val);
}


Tree.prototype.addValue = function (val) {
    if (this.root == null) {
        this.root = new Node(val);
    } else {
        this.root.add(val);
    }
}


function NodeVisitor() {
    this.str = '';
}


/**
 * Éste es el método principal del visitor. Necesita un poco más, para tener los corchetes que pedí en clase.
 * Acordate de que la salida tiene que ser así: "[LEFT, VALUE, RIGHT]",
 * donde "LEFT" y "RIGHT" se resuelven recursivamente y "VALUE" es el valor del nodo actual.
 *
 * @param {Node} node Node instance.
 */
NodeVisitor.prototype.visit = function (node) {
    if (this.left != null) {
        this.left.accept(this);
    }
    this.str += this.value;
    if (this.right != null) {
        this.right.accept(this);
    }
}


NodeVisitor.prototype.traversal = function () {
    return this.str;
}


NodeVisitor.prototype.reset = function () {
    this.str = '';
}






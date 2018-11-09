function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


//busco que el valor no exista
Node.prototype.search = function (val) {
    if (this.value == val) {
        return this;
    } else if (val < this.value && this.left != null) {
        return this.left.search(val);
    } else if (val > this.value && this.right != null) {
        return this.right.search(val);
    }
    return null;
}


//el valor menor a la izquierda, si no a la derecha
Node.prototype.visit = function () {
    if (this.left != null) {
        this.left.visit();
    }
    console.log(this.value);
    if (this.right != null) {
        this.right.visit();
    }
}


//aca valido si es menor o mayor a dond está parado
Node.prototype.addNode = function (n) {
    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
        } else {
            this.left.addNode(n)
        }
    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
        } else {
            this.right.addNode(n);
        }
    }
}


function Tree() {
    this.root = null;
}

Tree.prototype.traverse = function () {
    this.root.visit();
}

Tree.prototype.search = function (val) {
    var found = this.root.search(val);
    return found;
}

Tree.prototype.addValue = function (val) {
    var n = new Node(val);
    if (this.root == null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}








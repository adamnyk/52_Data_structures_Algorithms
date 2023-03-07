/** Node: node for a singly linked list. */

class Node {
	constructor(val, next = null) {
		this.val = val;
		this.next = next;
	}
}

/** LinkedList: chained together nodes. */
class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** _get(idx): retrieve node at inxex */

	_get(idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}
		let currentNode = this.head;
		let count = 0;

		while (currentNode != null && count < idx) {
			count += 1;
			currentNode = currentNode.next;
		}

		return currentNode;
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
		}
		if (this.tail) this.tail.next = newNode;
		this.tail = newNode;
		this.length += 1;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		let newNode = new Node(val);
		if (!this.tail) this.tail = newNode;
		if (this.head) newNode.next = this.head;
		this.head = newNode;
		this.length += 1;
	}

	/** pop(): return & remove last item. */

	pop() {
		if (!this.head) return null;
		if (this.head === this.tail) {
			let pop = this.head;
			this.head = null;
			this.tail = null;
			this.length -= 1;
			return pop;
		}

		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.next === this.tail) {
				let pop = this.tail;
				currentNode.next = null;
				this.tail = currentNode;
				this.length -= 1;
				return pop;
			}
			currentNode = currentNode.next;
		}
	}

	/** shift(): return & remove first item. */

	shift() {
		if (!this.head) return null;

		let removed = this.head;
		if (removed.next) {
			this.head = removed.next;
		} else {
			this.head = null;
			this.tail = null;
		}

		return removed;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}
		let currentNode = this.head;
		for (let i = 0; i <= idx; i++) {
			if (i === idx) return currentNode.val;
			currentNode = currentNode.next;
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let node = this._get(idx);
		node.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		if (idx === 0) return this.unshift(val);
		if (idx === this.length) return this.push(val);

		let prevNode = this._get(idx - 1);
		let newNode = new Node(val);
		newNode.next = prevNode.next;
		prevNode.next = newNode;

		this.length += 1;
	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		if (idx === 0) return this.shift(val);
		if (idx === this.length - 1) return this.pop(val);
		let prevNode = this._get(idx - 1);
		let deleteNode = prevNode.next;
		prevNode.next = deleteNode.next;
		deleteNode.next = null;
		return deleteNode;
	}

	/** average(): return an average of all values in the list */

	average() {
    if (!this.length) return null
		let currentNode = this.head;
		let total = 0;

    while (currentNode) {
			if (typeof(currentNode.val) != "number") {
				throw new Error("Node value is not a nubmer.");
			}
      total += currentNode.val;
			currentNode = currentNode.next;
		}

		return total / this.length;
	}
}

module.exports = LinkedList;

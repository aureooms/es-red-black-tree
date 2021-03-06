/**
 * Traverses the tree rooted at <code>node</code> in order.
 *
 * @param {Node} node - The root of the tree.
 * @returns {Iterator}
 */
export function* inordertraversal ( node ) {

	if ( !node.left.isleaf() ) {
		// Yield the nodes on the left recursively. Those nodes are all smaller
		// than (or equal to) the current node by the binary search tree
		// properties.
		yield *inordertraversal( node.left );
	}

	// Yield the current node.
	yield node.key ;

	if ( !node.right.isleaf() ) {
		// Yield the nodes on the right recursively. Those nodes are all larger
		// than (or equal to) the current node by the binary search tree
		// properties.
		yield* inordertraversal( node.right );
	}

}
